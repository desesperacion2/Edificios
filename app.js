const express = require("express");
const { collection, Department, Visit} = require("./mongo");
const cors = require("cors");
const bcrypt = require("bcrypt"); 
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await collection.findOne({ username: username });

        if (user) {
            // Comparar la contraseña proporcionada con la contraseña hasheada en la base de datos
            const passwordIsValid = await bcrypt.compare(password, user.password);

            if (passwordIsValid) {
                res.json("exist");
            } else {
                res.json("notexist");
            }
        } else {
            res.json("notexist");
        }
    } catch (e) {
        console.error(e);
        res.status(500).json("fail"); // Es mejor enviar un código de estado HTTP apropiado
    }
});

app.get('/api/departments', async (req, res) => {

    try {
      const departments = await Department.find(); // Este debería ser tu modelo de Mongoose
      res.json(departments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al recuperar los departamentos' });
    }
});
  



  
  // Ruta para manejar el envío de una nueva visita
  app.post('/api/visitas', async (req, res) => {
    try {
      const newVisit = new Visit({
        departamento: req.body.departamento,
        nombre: req.body.nombre,
        fecha: req.body.fecha,
        hora: req.body.hora
      });
  
      const savedVisit = await newVisit.save();
      res.status(201).json(savedVisit);
    } catch (error) {
      console.error('Error al guardar la visita:', error);
      res.status(500).json({ message: 'Error al registrar la visita' });
    }
  });









app.listen(8000, () => {
    console.log("Server running on port 8000");
});
