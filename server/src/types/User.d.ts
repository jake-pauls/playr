import { Schema } from 'mongoose';

export default interface User {
  userName: string;
  playtests?: Playtest[];
}
