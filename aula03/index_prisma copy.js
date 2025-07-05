// import express from "express";
// import pg from "pg";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient({log:["query", "error"]});

// const app = express();
// app.use(express.json());

// const { Pool } = pg;

// const pool = new Pool({
//   user: "**********",
//   password: "********",
//   host: "******",
//   port:*******,
//   database: "**********",
// });

// app.get("/usuarios", async (request, response) => {
//   //const usuarios = await pool.query("SELECT * FROM usuarios");
//   //const usuarios = await prisma.usuarios.findMany();
//   const usuarios = await prisma.user.findMany();
//   //return response.json(usuarios.rows).status(200);
//   return response.json(usuarios).status(200);
// });

// app.post("/usuarios", async (request, response) => {
//   const { name, email, phone } = request.body;

//   // const usuario = await pool.query(
//   //   "INSERT INTO usuarios (nome, email, telefone) VALUES ($1, $2, $3) RETURING",
//   //   [name, email, phone]
//   // );

//   const usuario = await prisma.user.create({
//     data: {
//       //nome:name, email, phone
//       name, email, phone
//     }
//   })
//   return response.status(201).json(usuario);
// });

// app.put("/usuario/:id", async (request, response) => {
//   const { name, email, phone } = request.body;
//   const usuario = await prisma.user.update({
//     data: {
//       name, email, phone
//     }
//   })
//   const { id } = request.params;

//   //const user = await pool.query("SELECT * FROM usuarios WHERE id = $1", [id]);

//   if (user.rowCount < 1) {
//     //return response.status(404).json("Usuário não encontrado");
//     return response.status(404).json(usuario);
//   }
//   // const usuario = await pool.query(
//   //   "UPDATE usuarios SET nome = $1, email = $2, telefone = $3 WHERE id = $4",
//   //   [nome, email, telefone, id]
//   // );

//   //return response.json(usuario).status(200);
//   return response.json(user).status(200);
// });

// app.delete("/usuario/:id", async (request, response) => {
//   const { id } = request.params;


//   // const user = await pool.query("SELECT * FROM usuarios WHERE id = $1", [id]);
//   // if (user.rowCount < 1) {
//   //   return response.status(404).json("Usuário não encontrado");
//   // }

//   const usuario = await prisma.user.delete({
//     where: {id}
//   })
//   return response.status(204).send();
//   //await pool.query("DELETE FROM usuarios WHERE ID = $1", [id]);
//   return response.status(204).send();
// }
// // return response.status(404).json({ error: "Usuário não encontrado" });
// // // );

// // app.listen(8082, () => {
// //   console.log("Runing on port 8082");
// // });
