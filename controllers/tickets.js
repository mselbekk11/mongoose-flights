const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

module.exports = {
  new: newTicket,
  create,
}

async function newTicket(req, res) {
  res.render('tickets/new', { title: 'Add Performer' })
}

async function create(req, res) {
  try {
    await Ticket.create(req.body)
  } catch (err) {
    console.log(err)
  }
  res.redirect('/tickets/new')
  // res.render('tickets/new', { errorMsg: err.message })
}

// async function create(req, res) {
//   try {
//     await Flight.create(req.body)
//     res.redirect('/flights/new')
//   } catch (err) {
//     console.log(err)
//     res.render('flights/new', { errorMsg: err.message })
//   }
// }
