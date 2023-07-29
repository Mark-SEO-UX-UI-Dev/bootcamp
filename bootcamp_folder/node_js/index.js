const ex = require("express");
const pt = require("./pet_store");
const app = ex();

app.use(ex.json());

const pet_store = pt.pet_store;

app.get("/api/pet_store", (req, res) => {
  res.send(pet_store);
});

app.get("/api/pet_store/:species", (req, res) => {
  let pet = pet_store.filter(function (pet) {
    if (pet.species == req.params.species) {
      return true;
    }
  });
  if (pet.length != 0) {
    res.send(pet);
  } else {
    res.status(404);
    res.send("Pet not found!");
  }
});

app.put("/api/pet_store/:id", (req, res) => {
  let pets = false;
  for (let i = 0; i < pet_store.length; i++) {
    if (pet_store[i].id == Number(req.params.id)) {
      pets = pet_store[i];
      break;
    }
  }

  if (pets) {
    console.log(req.body);
    pets.species = req.body.species;
    pets.breed = req.body.breed;
    pets.name = req.body.name;
    res.send(pets);
  } else {
    res.status(404);
    res.send("Pet not found!");
  }
});

app.listen(8000);
