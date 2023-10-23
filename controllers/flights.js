const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
  index,
  show,
  new: newFlight,
  create,
}

async function index(req, res) {
  const flights = await Flight.find({})
  res.render('flights/index', { flights })
}

async function show(req, res) {
  const flight = await Flight.findById(req.params.id)

  res.render('flights/show', { title: 'Flight Detail', flight })
}

// async function show(req, res) {
//   const flight = await Flight.findById(req.params.id, function (err, flight) {
//     Ticket.find({ flight: flight._id }, function (err, tickets) {})
//   })
//   res.render('flights/show', { title: 'Flight Detail', flight })
// }

// async function show(req, res) {
//   await Flight.findById(req.params.id, function (err, flight) {
//     Ticket.find({ flight: flight._id }, function (err, tickets) {
//       // Now you can pass both the flight and tickets in the res.render call
//       res.render('flights/show', { title: 'Flight Detail', flight, tickets })
//     })
//   })
// }

function newFlight(req, res) {
  res.render('flights/new', { errorMsg: '' })
}

async function create(req, res) {
  try {
    await Flight.create(req.body)
    res.redirect('/flights/new')
  } catch (err) {
    console.log(err)
    res.render('flights/new', { errorMsg: err.message })
  }
}
