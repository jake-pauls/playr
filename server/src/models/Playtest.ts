import { model, Schema } from 'mongoose';
import Playtest from '../types/Playtest';

const playtestSchema = new Schema<Playtest>(
  {
    username: { type: String, required: true },
    gameName: { type: String, required: true },
    instructions: { type: String, required: true },
    startDate: {
      type: Date,
      default: new Date(Date.now.toString()),
      required: true,
    },
    endDate: { type: Date, required: true },
    status: String,
    aesthetics: [{ type: String }],
    buildLink: String,
    buildUpload: Object,
  },
  {
    timestamps: true,
  }
);

export default model('Playtest', playtestSchema);
