const mongoose = require("mongoose");

// INFO Log: para registrar la intención de conectar a MongoDB
console.info("Attempting to connect to MongoDB...");

mongoose.connect("mongodb://0.0.0.0:27017/Proyect")
    .then(() => {
        // INFO Log: para registrar la conexión exitosa
        console.info("Successfully connected to MongoDB.");
    })
    .catch((error) => {
        // ERROR Log: para capturar y registrar errores en la conexión
        console.error("Failed to connect to MongoDB:", error);
    });

const newSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = mongoose.model("users", newSchema);

const departmentSchema = new mongoose.Schema({
    Number: {
        type: String,
        required: true
    }
});

const Department = mongoose.model('departments', departmentSchema);

const visitSchema = new mongoose.Schema({
    departamento: String,
    nombre: String,
    fecha: Date,
    hora: String
});

const Visit = mongoose.model('Visit', visitSchema);

module.exports = { collection, Department, Visit };
