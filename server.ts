import { App } from "https://deno.land/x/attain/mod.ts";
import "./config/db.ts";

import clientsRouter from "./routes/clients.router.ts";

const app = new App();

app.use("/clients", clientsRouter);

app.use((req, res) => {
  res.status(404).send("page not found");
});

app.listen({ port: 3500 });
console.log("http://localhost:3500");
