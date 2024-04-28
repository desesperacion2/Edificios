const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const bcrypt = require("bcrypt"); // Asegúrate de tener bcrypt instalado

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

app.listen(8000, () => {
    console.log("Server running on port 8000");
});
