const mongoose = require("mongoose");
require("dotenv").config();

const URL = process.env.URL;

const ConnectDB = async () => {
  try {
    console.log("Intentando conectar a MongoDB en:", URL); // Log de la URL usada
    
    mongoose.set('debug', true); // Habilitar logs detallados de Mongoose
    
    const conn = await mongoose.connect(URL, {
      serverSelectionTimeoutMS: 5000, // Tiempo de espera de 5 segundos
    });
    
    console.log("Database connected successfully");
    console.log("Host:", conn.connection.host);
    console.log("Port:", conn.connection.port);
    console.log("Database:", conn.connection.name);
  } catch(error) {
    console.error("Error al conectar a MongoDB:");
    console.error("- Código de error:", error.code);
    console.error("- Nombre de error:", error.name);
    console.error("- Mensaje:", error.message);
    console.error("- Stack completo:", error.stack);
    process.exit(1); // Salir con código de error
  }  
}

module.exports = {ConnectDB};
