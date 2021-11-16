import { model, Schema } from 'mongoose';
import User from '../types/User';

const userSchema = new Schema<User>(
  {
    username: { type: String, required: true, index: true },
    playtests: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Playtest',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model('User', userSchema);
