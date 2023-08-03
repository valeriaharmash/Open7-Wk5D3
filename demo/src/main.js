const { db } = require('../db/connection.js')
const Pokemon = require('./model')

async function main() {
	await db.sync({ force: true })

	const Pikachu = await Pokemon.create({
		name: 'Pikachu',
		type: 'Electric',
		weight: 6
	})
	//console.log(JSON.stringify(Pikachu, null, 2))

	await Pokemon.bulkCreate([
		{
			name: 'Balbasaur',
			type: 'Water',
			weight: 3
		},
		{
			name: 'Charmender',
			type: 'Grass',
			weight: 5
		},
		{
			name: 'Squirtle',
			type: 'Fire',
			weight: 2
		}
	])

	const currentPokemon = await Pokemon.findOne({
		where: {
			name: 'Charmender'
		}
	})

	const updateResult = await Pokemon.update(
		{
			name: 'IvySour',
			weigth: 10
		},
		{
			where: {
				name: 'Balbasaur'
			}
		}
	)

	let updated = await currentPokemon.update({
		name: 'BlahBlah'
	})

	let deleted = await Pokemon.destroy({
		where: {
			name: 'BlahBlah'
		}
	})
	const allPokemon = await Pokemon.findAll()
	//console.log(JSON.stringify(deleted, null, 2))
	//console.log(JSON.stringify(updated, null, 2))
	//console.log(JSON.stringify(updateResult, null, 2))
	//console.log(JSON.stringify(currentPokemon, null, 2))
	//console.log(JSON.stringify(allPokemon, null, 2))
}

main()
