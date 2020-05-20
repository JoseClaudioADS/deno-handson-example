import { Database } from "https://deno.land/x/denodb/mod.ts";
import Client from "../models/client.ts";

const db = new Database("postgres", {
  host: "localhost",
  username: "postgres",
  password: "docker",
  database: "deno-crud",
});

db.link([Client]);

await db.sync({ drop: true });

export default db;
