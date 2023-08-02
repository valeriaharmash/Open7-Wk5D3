// 14. import db from connection.js and Pokemon from model.js
const { db } = require("../db/connection.js");
const Pokemon = require("./model");

async function main() {
  // 15. remove contents of main function and call db.sync()
  await db.sync({ force: true });

  // 16. demonstrate Model.create and Model.bulkCreate, remembering to use JSON.stringify to console log return values from sequelize
  const Pikachu = await Pokemon.create({
    name: "Pikachu",
    type: "Electric",
    weight: 6,
  });
  console.log(JSON.stringify(Pikachu, null, 2));
  await Pokemon.bulkCreate([
    {
      name: "Bulbasaur",
      type: "Grass/Poison",
      weight: 6.9,
    },
    {
      name: "Charmander",
      type: "Fire",
      weight: 8.5,
    },
    {
      name: "Squirtle",
      type: "Water",
      weight: 9,
    },
  ]);

  // 17. demonstrate Model.findOne and Model.findAll, showing the return values
  const currentPokemon = await Pokemon.findOne({ where: { name: "Pikachu" } });
  console.log(JSON.stringify(currentPokemon, null, 2));
  const allPokemon = await Pokemon.findAll();
  console.log(JSON.stringify(allPokemon, null, 2));

  // 18. demonstrate Model.update, showing the return value
  const updateResult = await Pokemon.update(
    { name: "Ivysaur", weight: 13 },
    { where: { name: "Bulbasaur" } }
  );
  console.log(updateResult);

  // 19. demonstrate Model.destroy, showing the return value
  const deleteResult = await Pokemon.destroy({ where: { name: "Squirtle" } });
  console.log(deleteResult);
}

main();