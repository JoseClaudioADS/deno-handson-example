import { Router, Request, Response } from "https://deno.land/x/attain/mod.ts";
import Client from "../models/client.ts";

const clientsRouter = new Router();

clientsRouter.get("/", async (req: Request, res: Response) => {
  res.status(200).send({ clients: await Client.all() });
});

clientsRouter.post("/", async (req: Request, res: Response) => {
  const { value } = await req.body();
  await Client.create([value]);
  res.status(201);
});

export default clientsRouter;
