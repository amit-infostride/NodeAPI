import mongoose from "mongoose"

const SCHEMA = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
}) 
export const User = mongoose.model("User", SCHEMA)