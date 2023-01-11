import Competition from "../models/competition.js";
import User from "../models/user.js";
import {status, ongoing, win, lose, terminated, pending} from "../constants/constants.js";

export const rescheduleDraw = async () => {

    const competitions = await Competition.find({status:ongoing})
    
    competitions.forEach(element => {
        var now = new Date();
        var deadline = element.deadline
    
        var millisToDeadline = deadline - now
        
        setTimeout(() => {
            drawCompetition(element._id)
        }, millisToDeadline);
    });
}


export const drawCompetition = async (id) => {
    
    try{
        var competitionToUpdate = await Competition.findById(id);
        competitionToUpdate.status = terminated; 

        if(competitionToUpdate.tickets.length > 0){
            var tickets = competitionToUpdate.tickets;
            var randomIndex = Math.floor(Math.random() * tickets.length);
            var winnerTicket = tickets[randomIndex];
            winnerTicket.status = win;

            var winnerUser = await User.findById(winnerTicket.owner)
            const newUserTickets = winnerUser.tickets.map(ticket => {
                if((ticket.competition.equals(competitionToUpdate._id)) && (ticket.number === winnerTicket.number)){
                    return {...ticket, status: win};
                } 
                 else {
                    return ticket;
               }
            })

            winnerUser.tickets = newUserTickets;
            await User.findByIdAndUpdate(winnerUser._id, winnerUser, { new: true });

            var loserTickets = tickets.filter(ticket => ticket !== winnerTicket);

            //TODO: CONTROLLARE QUESTO IF: Nel caso si acquisti un unico ticket per una competizione, senza controllo prova a fare il foreach e crasha
            if(loserTickets.length > 0){
                loserTickets.forEach(async (ticket) => {
                    ticket.status = lose
                    var loserUser = await User.findById(ticket.owner)
                    const newUserLoseTickets = loserUser.tickets.map(ticketUtente => {
                        if((ticketUtente.competition.equals(competitionToUpdate._id)) && (ticketUtente.number === ticket.number)){
                            return {...ticketUtente, status: lose};
                        } 
                        else return ticketUtente;
                    })

                    loserUser.tickets = newUserLoseTickets;
                    await User.findByIdAndUpdate(loserUser._id, loserUser, { new: true });
                });
            
        
            var updatedTickets = [winnerTicket, ...loserTickets];
            competitionToUpdate.ticket = updatedTickets;
            await Competition.findByIdAndUpdate(competitionToUpdate._id, competitionToUpdate, { new: true });
            } 

            competitionToUpdate.ticket = winnerTicket;
            await Competition.findByIdAndUpdate(competitionToUpdate._id, competitionToUpdate, { new: true });

        }
        
        await Competition.findByIdAndUpdate(id, competitionToUpdate, { new: true });

    } catch (err) {
        console.log(err)
    }
}