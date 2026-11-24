const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const hotels = [
  {
    name: "Hotel Caribe Cartagena",
    city: "Cartagena",
    priceCOP: 450000,
    category: "Hotel"
  },
  {
    name: "Hotel Boutique Medellin",
    city: "Medellin",
    priceCOP: 320000,
    category: "Hotel"
  },
  {
    name: "Eco Lodge Amazonas",
    city: "Amazonas",
    priceCOP: 380000,
    category: "Eco Hotel"
  },
  {
    name: "Hotel Playa Santa Marta",
    city: "Santa Marta",
    priceCOP: 290000,
    category: "Hotel"
  }
];

app.get("/", (req, res) => {
  res.send("COLOMBIA EXPERIENCE A-Z server is running!");
});

app.get("/api/hotels", (req, res) => {
  const search = (req.query.search || "").toLowerCase();

  const results = hotels.filter(hotel =>
    hotel.name.toLowerCase().includes(search) ||
    hotel.city.toLowerCase().includes(search)
  );

  res.json({
    currency: "COP",
    results
  });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
