import { Schema } from 'mongoose';

export default interface Playtest {
  username: string;
  gameName: string;
  instructions: string;
  startDate: Date;
  endDate: Date;
  status: string;
  aesthetics?: string[];
  buildLink?: string;
  buildUpload?: Object;
}
