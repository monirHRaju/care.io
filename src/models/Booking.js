// models/Booking.js
import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Assuming you have a User model
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  duration: { 
    type: { type: String, enum: ['hours', 'days'], required: true },
    value: { type: Number, required: true },
    startDate: { type: Date },
    endDate: { type: Date },
  },
  location: {
    division: { type: String, required: true },
    district: { type: String, required: true },
    area: { type: String },
    address: { type: String, required: true },
  },
  totalCost: { type: Number, required: true },
  status: { type: String, enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'], default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Booking || mongoose.model('Booking', bookingSchema);