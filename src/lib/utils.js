const { default: mongoose } = require("mongoose");

const connection = {};

export const connectToDb = async () => {
    try {
        if (connection.isConnected) {
            console.log("Using existing database connection");
            return;
        }
        const db = await mongoose.connect(process.env.Mongo);
        connection.isConnected = db.connections[0].readyState;
        console.log("Database connected:", db.connection.host);
    } catch (error) {
        console.error("Database connection error:", error);
        throw new Error("Failed to connect to the database");
    }
};
