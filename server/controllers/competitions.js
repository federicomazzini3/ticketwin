import mongoose from "mongoose";
import Competition from "../models/competition.js";

export const getCompetitions = async (req, res) => {
    try {
        const competitions = await Competition.find()
        res.status(200).json(competitions);
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
        console.log(err.message)
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