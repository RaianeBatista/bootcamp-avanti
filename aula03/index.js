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

// app.get("/usuarios", async (request, response) => {
//   const usuarios = await pool.query("SELECT * FROM usuarios");
//   return response.json(usuarios.rows).status(200);
// });

// app.post("/usuarios", async (request, response) => {
//   const { nome, email, telefone } = request.body;
//   const usuario = await pool.query(
//     "INSERT INTO usuarios (nome, email, telefone) VALUES ($1, $2, $3)",
//     [nome, email, telefone]
//   );
//   return response.json(usuario).status(201);
// });

// app.put("/usuario/:id", async (request, response) => {
//   const { nome, email, telefone } = request.body;
//   const { id } = request.params;
//   const user = await pool.query("SELECT * FROM usuarios WHERE id = $1", [id]);
//   if (user.rowCount < 1) {
//     return response.status(404).json("Usuário não encontrado");
//   }
//   const usuario = await pool.query(
//     "UPDATE usuarios SET nome = $1, email = $2, telefone = $3 WHERE id = $4",
//     [nome, email, telefone, id]
//   );

//   //return response.json(usuario).status(200);
//   return response.json(user).status(200);
// });

// app.delete("/usuario/:id", async (request, response) => {
//   const { id } = request.params;

//   const user = await pool.query("SELECT * FROM usuarios WHERE id = $1", [id]);
//   if (user.rowCount < 1) {
//     return response.status(404).json("Usuário não encontrado");
//   }

//   await pool.query("DELETE FROM usuarios WHERE ID = $1", [id]);
//   return response.status(204).send();
// });

// app.listen(8082, () => {
//   console.log("Runing on port 8082");
// });
