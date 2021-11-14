import { model, Schema } from 'mongoose';

interface Playtest {
  user: string;
  gameName: string;
  instructions?: string;
}

const playtestSchema = new Schema<Playtest>(
  {
    user: { type: String, required: true },
    gameName: { type: String, required: true },
    instructions: String,
  },
  {
    timestamps: true,
  }
);

export default model('Playtest', playtestSchema);
