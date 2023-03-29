const { expect } = require("chai");

describe("Pokemon contract", function () {
    it("Pokemon Factory should have 1 pokemon", async function () {

        // const [owner] = await ethers.getSigners(); // Esto lo ocuparán para crear un pokemon

        const PokemonFactory = await ethers.getContractFactory("PokemonFactory");

        const hardhatPokemon = await PokemonFactory.deploy();

        await hardhatPokemon.createPokemon("Pikachu", 1);

        const pokemons = await hardhatPokemon.getAllPokemons();

        expect(pokemons.length).to.equal(1);

    });

    it("Pokemon Factory event create Pokemon", async function () {

        // const [owner] = await ethers.getSigners(); // Esto lo ocuparán para crear un pokemon

        const PokemonFactory = await ethers.getContractFactory("PokemonFactory");

        const hardhatPokemon = await PokemonFactory.deploy();

        const event= await hardhatPokemon.createPokemon("Pikachu", 1);
        const transactionReceipt = await event.wait()

        expect(transactionReceipt.events[0].args.name).to.equal('Pikachu')
    });
});