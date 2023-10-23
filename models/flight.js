const mongoose = require('mongoose')
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const destinationSchema = new Schema(
  {
    airport: {
      type: String,
      enum: ['AUS’', 'DFW', 'DEN', 'LAX', 'SAN'],
      default: 'LAX',
    },
    arrival: {
      type: Date,
      default: function () {
        return new Date().getFullYear()
      },
    },
  },
  {
    timestamps: true,
  }
)

const flightSchema = new mongoose.Schema(
  {
    airline: {
      type: String,
      enum: ['American', 'Southwest', 'United'],
    },
    airport: {
      type: String,
      enum: ['AUS’', 'DFW', 'DEN', 'LAX', 'SAN'],
      default: 'LAX',
    },
    flightNo: {
      type: Number,
      validate: {
        validator: function (value) {
          return value >= 10 && value <= 9999
        },
        message: 'Value must be an integer between 10 and 9999.',
      },
    },
    departs: {
      type: Date,
      default: function () {
        return new Date().getFullYear()
      },
    },
    // tickets: [{ type: Schema.Types.ObjectId, ref: 'Ticket' }],
    destination: [destinationSchema],
  },
  {
    timestamps: true,
  }
)

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema)
