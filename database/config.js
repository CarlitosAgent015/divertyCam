import { connect } from "mongoose";

export async function dbConnect() {
    try {
        //Connect to database
        await connect('mongodb+srv://yuli:yuli123@cluster0.u4es3tg.mongodb.net/parking_lot?retryWrites=true&w=majority&appName=Cluster0');
        console.log("Connect to database");
    } catch (error) {
        console.log(error);
    }
}

export default dbConnect; 
