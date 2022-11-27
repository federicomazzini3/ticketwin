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