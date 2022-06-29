import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";
const { json } = bodyParser;

const app = express();

app.use(cors());
app.use(json());

const BASE_URL = `https://jsonplaceholder.typicode.com`;

app.get("/albums", async (req, res) => {
  const { start, limit } = req.query;
  const response = await axios.get(
    BASE_URL + `/albums?_start=${start}&_limit=${limit}`
  );
  return res.send(response.data);
});

app.get("/photos", async (req, res) => {
  const { albumId, start, limit } = req.query;
  const response = await axios.get(
    BASE_URL + `/photos?albumId=${albumId}&_start=${start}&_limit=${limit}`
  );
  return res.send(response.data);
});

app.get("/users", async (req, res) => {
  const response = await axios.get(BASE_URL + `/users`);
  return res.send(response.data);
});

const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
