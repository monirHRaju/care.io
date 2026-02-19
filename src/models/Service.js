// models/Service.js
import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g., "Baby Care"
  description: { type: String, required: true },
  hourlyRate: { type: Number, required: true },
  icon: { type: String }, // e.g., emoji or URL
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Service || mongoose.model('Service', serviceSchema);