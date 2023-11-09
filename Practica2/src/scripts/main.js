import { fetchPokemon } from './pokemon-api.js' // importar la funcion para traer los pokemons
import { displayPokemon } from './pokemon-display.js' // importar la funcion para mostrar los pokemons
import { applyFilter } from './pokemon-filter.js' // importar la funcion para filtrar los pokemons

const listPokemon = document.querySelector('#listPokemon') // lugar del html donde se mostraran los pokemons
const searchInput = document.getElementById('search') // input para buscar por nombre
const typeSelect = document.getElementById('type') // select para buscar por tipo
const progressBar = document.getElementById('progressBar') // barra de progreso
const max = 750
progressBar.max = max // maximo de la barra de progreso

async function fetchAndDisplayPokemons () {
  const dinamicText = document.getElementById('dinamicText')
  let i = 1
  const pokemons = []

  while (i <= max) {
    try {
      const data = await fetchPokemon(i)
      pokemons.push(data)
      displayPokemon(data, listPokemon)
    } catch (err) {
      console.error(err)
    }
    progressBar.value = i
    dinamicText.textContent = `Fetching pokemons... ${i}/${max}`
    i++
  }
  progressBar.style.display = 'none'
  dinamicText.textContent = ''

  function handleFilters () {
    const searchText = searchInput.value.trim()
    const selectedType = typeSelect.value
    applyFilter(pokemons, listPokemon, displayPokemon, searchText, selectedType, dinamicText)
  }

  searchInput.addEventListener('input', handleFilters) // evento para filtrar, nombre

  typeSelect.addEventListener('change', handleFilters) // evento para filtrar, tipo
}

fetchAndDisplayPokemons()

/*
  - async y await es para que solo se descargue un pokemon a la vez
  - la funcion fetchAndDisplayPokemons se encarga de todo
  - el array [] es para guardar los pokemons, y no tener que volver a descargarlos
  - el while es para descargar los 750 pokemons
  - esto: dinamicText.textContent = `Fetching pokemons... ${i}/${max}`
    es para mostrar el progreso de la descarga
  - el try catch es para que si hay un error, no se detenga la descarga
  - el handleFilters es para filtrar los pokemons
*/
