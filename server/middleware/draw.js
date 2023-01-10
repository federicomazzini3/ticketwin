import Competition from "../models/competition.js";
import {status, ongoing, win, lose, terminated, pending} from "../constants/constants.js";
import User from "../models/user.js";

export const rescheduleDraw = async () => {

    console.log("Siamo dentro a reschedule");

    const competitions = await Competition.find({status:ongoing})
    
    competitions.forEach(element => {
        console.log("Reschedule #element: ", element._id);
        var now = new Date();
        var deadline = element.deadline
        //deadline.setHours(deadline.getHours() - 1);
    
        var millisToDeadline = deadline - now
        
        console.log("now: " + now.toString())
        console.log("deadline: " + deadline.toString())
        console.log(millisToDeadline)
        
        setTimeout(() => {
            drawCompetition(element._id)
        }, millisToDeadline);
    });
}


export const drawCompetition = async (id) => {
    console.log("Sorteggio la competition: " + id)
    
    try{
        var competition = await Competition.findById(id);
        competition.status = terminated; 

        if(competition.tickets.length > 0){
            var tickets = competition.tickets;
            var randomIndex = Math.floor(Math.random() * tickets.length);
            var winnerTicket = tickets[randomIndex];
            winnerTicket.status = win;

            /*var winnerUser = await User.findById(winnerTicket.owner)
            const newUserTickets= winnerUser.tickets.map(ticket => {
                if((ticket.competition === competition._id) && (ticket.number === winnerTicket.number)){
                 ticket.status = win;
                } 
                 else ticket;
            })

            winnerUser.tickets = newUserTickets;
        
            var loserTickets = tickets.filter(ticket => ticket !== winnerTicket);
            loserTickets.forEach(ticket => {
                 ticket.status = lose
                 var winnerUser = await User.findById(winnerTicket.owner)
                 const newUserTickets= winnerUser.tickets.map(ticket => {
                     if((ticket.competition === competition._id) && (ticket.number === winnerTicket.number)){
                      ticket.status = win;
                     } 
                      else ticket;
                 })
            });*/
        
            var updatedTickets = [winnerTicket, ...loserTickets];

            competition.ticket = updatedTickets;

        }

        await Competition.findByIdAndUpdate(id, competition, { new: true });

        //await updateUserTickets(competition, tickets)

    } catch (err) {
        console.log(err)
    }
}