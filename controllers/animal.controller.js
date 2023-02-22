import AnimalService from "../services/animal.service.js";

async function createAnimal(req, res, next) {
  try {
    let animal = req.body;
    if (!animal.nome || !animal.tipo || !animal.proprietario_id) {
      throw new Error("Name, Tipo e ID do Proprietário são obrigatórios.");
    }
    animal = await AnimalService.createAnimal(animal);
    res.send(animal);
    logger.info(`POST /animal - ${JSON.stringify(animal)}`);
  } catch (err) {
    next(err);
  }
}

async function getAnimals(req, res, next) {
  try {
    res.send(await AnimalService.getAnimals());
    logger.info("GET /animal");
  } catch (err) {
    next(err);
  }
}

async function getAnimal(req, res, next) {
  try {
    res.send(await AnimalService.getAnimal(req.params.id));
    logger.info("GET /animal/:id");
  } catch (err) {
    next(err);
  }
}

async function deleteAnimal(req, res, next) {
  try {
    await AnimalService.deleteAnimal(req.params.id);
    res.end();
    logger.info(`DELETE /animal/:id - ${req.params.id}`);
  } catch (err) {
    next(err);
  }
}

async function updateAnimal(req, res, next) {
  try {
    const animal = req.body;
    if (!animal.animal_id || !animal.nome || !animal.tipo || !animal.proprietario_id) {
      throw new Error("Id, Nome, Tipo e ID do Proprietário são obrigatórios.");
    }
    res.send(await AnimalService.updateAnimal(animal));
    logger.info(`PUT /animal - ${JSON.stringify(animal)}`);
  } catch (err) {
    next(err);
  }
}

async function getAnimalsOwner(req, res, next) {
  try {
    res.send(await AnimalService.getAnimalsOwner(req.params.id));
    logger.info("GET /animal/owner/:id");
  } catch (err) {
    next(err);
  }
}

export default {
  createAnimal,
  getAnimals,
  getAnimal,
  deleteAnimal,
  updateAnimal,
  getAnimalsOwner,
};
