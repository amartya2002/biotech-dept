import dbConnect from "../../../database/dbConnect";
import { getUsers, postUser } from "../../../database/controller";

export default async function handler(req, res) {
  dbConnect().catch(() =>
    res.status(405).json({ error: "Error while connecting the database" })
  );

  //type of request
  const { method } = req;

  switch (method) {
    case "GET":
      getUsers(req, res);

    
      break;

    case "POST":
      postUser(req, res)
      break;

    case "PUT":
      res.status(200).json({ method, name: "Put request" });
      break;

    case "DELETE":
      res.status(200).json({ method, name: "Delete request" });
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} is not allowed`);
      break;
  }
}
