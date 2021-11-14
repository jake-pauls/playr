import { Schema } from 'mongoose';

export default interface Playtest {
  userName: string;
  gameName: string;
  instructions: string;
  startDate: Date;
  endDate: Date;
  aesthetics?: string[];
  buildLink?: string;
  buildUpload?: Buffer;
}
