import * as mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  image: string;
  location: string;
  joinedGroups: [];
  bio: string;
}
