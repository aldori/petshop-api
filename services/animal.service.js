import AnimalRepository from "../repositories/animal.repository.js";

async function createAnimal(animal) {
  return await AnimalRepository.insertAnimal(animal);
}

async function getAnimals() {
  return await AnimalRepository.getAnimals();
}

async function getAnimal(id) {
  return await AnimalRepository.getAnimal(id);
}

async function deleteAnimal(id) {
  return await AnimalRepository.deleteAnimal(id);
}

async function updateAnimal(animal) {
  return await AnimalRepository.updateAnimal(animal);
}

async function getAnimalsOwner(idOwner) {
  return await AnimalRepository.getAnimalsOwner(idOwner);
}

export default {
  createAnimal,
  getAnimals,
  getAnimal,
  deleteAnimal,
  updateAnimal,
  getAnimalsOwner,
};
