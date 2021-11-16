import { Schema } from 'mongoose';

export default interface User {
  username: string;
  playtests?: Playtest[];
}
