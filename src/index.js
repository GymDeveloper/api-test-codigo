import express from "express";
// const cors = require("cors")
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const movies = [
  {
    id: 1,
    title: "Avengers",
    image: "https://f.rpp-noticias.io/2020/09/04/marvel_991870.jpg",
    description:
      "S.H.I.E.L.D. Stark Industries Asgard World Security Council United States federal government United Nations Wakanda Masters of the Mystic Arts Guardians of the Galaxy Ravagers",
  },
];

// listado de peliculas
app.get("/", (request, response) => {
  return response.json({
    ok: true,
    data: movies,
  });
});

// creacion de peliculas
app.post("/crear", (request, response) => {
  const { body } = request;
  body.id = movies.length + 1;

  movies.push(body);

  return response.status(201).json({
    ok: true,
    data: "Pelicula creada",
  });
});

const PORT = 6003;

app.listen(PORT, () =>
  console.log(`El servidor inicio. http://localhost:${PORT}`)
);
