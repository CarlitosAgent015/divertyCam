import dotenv from "dotenv";
import Server from "./server/Server";

// Cargar variables de entorno
dotenv.config();

const server = new Server();
