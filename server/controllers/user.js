import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Competition from '../models/competition.js';

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
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if(existingUser) return res.status(400).json({ message: "User already exists. "});

        if(password !== confirmPassword) return res.status(400).json({ message: "Password don't match. "});

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`});

        const token = jwt.sign({ email: result, id: result._id }, 'test', { expiresIn: "1h"});

        res.status(200).json({ result, token })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.'});
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