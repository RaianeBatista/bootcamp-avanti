// import express from "express";
// import pg from "pg";

// const app = express();
// app.use(express.json());

// const { Pool } = pg;

// const pool = new Pool({
//   user: "postgres",
//   password: "pgadmin",
//   host: "localhost",
//   port: 5432,
//   database: "bootcamp_avanti",
// });

// const usuarios = [
//   { id: 1, nome: "Jhon Doe", idade: 25 },
//   { id: 2, nome: "Jane Frank", idade: 30 },
//   { id: 3, nome: "Luke Heinz", idade: 15 },
//   { id: 4, nome: "José Silva", idade: 15 },
// ];

// app.get("/usuarios", async (request, response) => {
//   const usuarios = await pool.query("SELECT * FROM usuarios");
//   return response.json(usuarios.rows).status(200);
// });

// app.post("/usuarios", async (request, response) => {
//   //   const { nome, idade } = request.body;
//   const { nome, email, telefone } = request.body;
//   //   usuarios.push({ nome, idade });
//   const usuario = await pool.query(
//     "INSERT INTO usuarios (nome, email, telefone) VALUES ($1, $2, $3)",
//     [nome, email, telefone]
//   );
//   return response.json(usuarios).status(201);
// });

// app.put("/usuario/:id", (request, response) => {
//   const { nome, idade } = request.body;
//   const { id } = request.params;

//   const index = usuarios.findIndex((u) => u.id == id);

//   if (index == -1) {
//     return response.status(404).json({ message: "Usuário não encontrado" });
//   }
//   usuarios[index] = { id, nome, idade };
//   return response.json({ id, nome, idade }).status(200);
// });

// app.delete("/usuario/:id", (request, response) => {
//   const { id } = request.params;

//   const index = usuarios.findIndex((u) => u.id == id);
//   if (index == -1) {
//     return response.status(404).json({ message: "Usuario não encontrado" });
//   }

//   usuarios.splice(index, 1);

//   return response.status(204).send();
// });

// app.listen(8082, () => {
//   console.log("Runing on port 8082");
// });
