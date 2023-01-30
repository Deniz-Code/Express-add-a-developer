import mongoose from "mongoose";

//making it a shortcut
const Schema = mongoose.Schema;
//creating the schema
const developSchema = new Schema({
  text: String,
  skill: Boolean,
});

//compiling the schema
const Develop = mongoose.model("Develop", developSchema);

export { Develop };
