import mongoose from "mongoose";
import Competition from "../models/competition.js";
import {status, ongoing, win, lose, terminated, pending} from "../constants/constants.js";
import { updateUserTickets } from "./user.js";

export const getCompetitions = async (req, res) => {
    const { page } = req.query;
    
    try {
        
        const LIMIT = 8; //num of competitions to retrieve
        const startIndex = (Number(page) - 1) * LIMIT; //the index to start the find()
        const total = await Competition.countDocuments({}); //number of total documents in the db

        const competitions = await Competition.find({status:ongoing}).limit(LIMIT).skip(startIndex); //query, limit to LIMIT and skip the first LIMIT * page documents

        res.status(200).json({data: competitions, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    } catch (err) {
        res.status(404).json({message: err.message, error: err})
    }
}

export const getCompetitionsBySearch = async (req, res) => {
    const {searchQuery, page} = req.query

    try {
        const query = new RegExp(searchQuery, 'i'); 

        const LIMIT = 8;
        const startIndex = (Number(page) - 1) * LIMIT;
        const total = await Competition.countDocuments({ $or: [{productName: query}, {productBrand: query}]});

        const competitions = await Competition.find({status:ongoing}).find({ $or: [{productName: query}, {productBrand: query}]}).limit(LIMIT).skip(startIndex);
        
        res.status(200).json({data: competitions, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    } catch (err) {
        res.status(404).json({message: err.message, error: err})
    }
}

export const createCompetition = async (req, res) => {
    const competition = req.body;
    const newCompetition = new Competition(competition)
    try{
        await newCompetition.save();
        res.status(201).json(newCompetition);
    } catch (err) {
        res.status(409).json({message: err.message, error: err})
    }
}

export const getCompetition = async (req, res) => {
    const { id } = req.params;

    try {
        const competition = await Competition.findById(id);
        res.status(200).json(competition);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateCompetition = async (req, res) => {
    const { id } = req.params;
    const competition = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No competitions with that id');

    const updatedCompetition = await Competition.findByIdAndUpdate(id, competition, {new: true})

    res.json(updatedCompetition);
}

export const deleteCompetition = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No competitions with that id');

    await Competition.findByIdAndRemove(id);

    res.json({message: 'Competition deleted'})
}

export const buyTicket = async (req, res) => {
    const { id } = req.params;
    const tickets = req.body;

    try{
        const competition = await Competition.findById(id);
        
        tickets.map(ticket => {
            if(competition.tickets.find(tp => tp.number === ticket.number)) throw (`Ticket ${ticket.number} already purchased`);

            competition.tickets.push(ticket);
        })

        const updatedCompetition = await Competition.findByIdAndUpdate(id, competition, { new: true });

        await updateUserTickets(competition, tickets)

        res.status(200).json();
    } catch (err) {
        res.status(409).json({message: err.message, error: err})
        console.log(err)
    }
};