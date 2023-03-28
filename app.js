import express from "express"
import mongoose from "mongoose";
import userRouter from "./routes/users.js"

const app = express();
 



// using middleware
app.use(express.json())
app.use( "/users",userRouter)

mongoose
    .connect('mongodb://127.0.0.1:27017', {
        dbName: "backendAPI",
    }).then(() => console.log("Database connected "))
    .catch((err) => console.log(err))



app.get('/', (req, res) => {
    res.send(" Nice Working")
});

 




app.listen(4444, () => {
    console.log('server is working');
})