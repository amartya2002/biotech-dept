// Controller
import Users from "../models/user";
// get : http://localhost:3000/api/users //
export async function getUsers(req, res) {
  try {
    const users = await Users.find({});
    if (!users) return res.status(404).json({ error: "No data found" });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching." });
  }
}

// post : http://localhost:3000/api/users //
export async function postUser(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form data not provided" });
      const createdUser = await Users.create(formData);
      return res.status(200).json(createdUser);
  } catch (error) {
    return res.status(404).json({ error });
  }
}
