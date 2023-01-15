import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Competition from '../models/competition.js';
import mongoose from "mongoose";

import User from '../models/user.js';

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if(!existingUser) return res.status(404).json({ message: "User doesn't exist. "});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials."})

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h"});

        res.status(200).json({ result: existingUser, token })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.'});
    }    
}

export const signup = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName, country, city, address, cap } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if(existingUser) return res.status(400).json({ message: "User already exists. "});

        if(password !== confirmPassword) return res.status(400).json({ message: "Password don't match. "});

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`, address: `${country} ${city} ${address} ${cap}`});

        const token = jwt.sign({ email: result, id: result._id }, 'test', { expiresIn: "1h"});

        res.status(200).json({ result, token })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.'});
    }
}

export const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const existingUser = await User.findById(id);
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h"});

        res.status(200).json({ result: existingUser, token })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateUserTickets = async (competition, tickets) => {
    try{
        const user = await User.findById(tickets[0].owner)
        
        tickets.map(ticket => {
            user.tickets.push({
                number: ticket.number, 
                productName: competition.productName, 
                productBrand: competition.productBrand, 
                price: competition.price, 
                competition: competition._id})
        })

        await User.findByIdAndUpdate(tickets[0].owner, user, {new: true});
    } catch(err) {
        console.log(err);
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    try{
        const user = req.body;
        const hashedPassword = await bcrypt.hash(user.password, 12);
        user.password = hashedPassword;

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No user with that id');
            
        const updatedUser = await User.findByIdAndUpdate(id, user, {new: true});

        res.json({updatedUser})         
    }catch(err){
        console.log(err);
    }
}
