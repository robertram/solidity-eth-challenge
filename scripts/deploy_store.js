const hre = require('hardhat')

async function main() {
  await hre.run('compile')


  const SimpleStorage = await hre.ethers.getContractFactory("PokemonFactory")

  const simpleStorage = await SimpleStorage.deploy()

  await simpleStorage.deployed()


  const transactionResponse = await simpleStorage.createPokemon("Pikachu2", 2)

  const transactionReceipt = await transactionResponse.wait()

  //console.log('transactionReceipt', transactionReceipt)
  console.log(transactionReceipt.events[0].args)
}

main().catch((error) => {
  console.log('error', error)
  process.exitCode = 1;
})