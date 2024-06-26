

const currentTciketLbl = document.querySelector('#lbl-new-ticket')
const createTicketBtn = document.querySelector("button")


async function getLastTicket() {
    const lastTicket = await fetch('/api/ticket/last').then( resp => resp.json() );
    currentTciketLbl.innerText = lastTicket;
}

async function createTicket() {
    const newTicket = await fetch('/api/ticket', {
        method: "POST",
    }).then( resp => resp.json() )

    currentTciketLbl.innerText = newTicket.number;
}


createTicketBtn.addEventListener("click", createTicket )
getLastTicket();