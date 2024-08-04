import express from "express";
import userRouter from "./routes/users";

const app = express();
const port = 3000;

app.use("/api/users", userRouter)


app.listen(port, ()=> {
    console.log(`le serveur a demarré sur le port ${port} en localhost`);
    
})