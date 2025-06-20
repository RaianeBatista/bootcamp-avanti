import express from "express";
import pg from "pg";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query", "error"] });

const app = express();
app.use(express.json());

app.get("/usuarios", async (request, response) => {
  //const usuarios = await pool.query("SELECT * FROM usuarios");
  //const usuarios = await prisma.usuarios.findMany();
  const usuarios = await prisma.user.findMany();
  //return response.json(usuarios.rows).status(200);
  return response.json(usuarios).status(200);
});

app.post("/usuarios", async (request, response) => {
  const { name, email, phone } = request.body;
  const usuario = await prisma.user.create({
    data: {
      //nome:name, email, phone
      name,
      email,
      phone,
    },
  });
  return response.status(201).json(usuario);
});

app.put("/usuario/:id", async (request, response) => {
  const { name, email, phone } = request.body;
  const { id } = request.params;

  const user = await prisma.user.findUnique({
    where: { id: id },
  });

  if (!user) {
    return response.status(404).json("Usuário não encontrado");
  }

  const usuario = await prisma.user.update({
    where: { id },
    data: {
      name,
      email,
      phone,
    },
  });

  return response.status(200).json(usuario);
});

app.delete("/usuario/:id", async (request, response) => {
  const { id } = request.params;

  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    return response.status(404).json("Usuário não encontrado");
  }

  await prisma.user.delete({ where: { id: id } });
  return response.status(204).send();
});

app.listen(8082, () => {
  console.log("Runing on port 8082");
});
