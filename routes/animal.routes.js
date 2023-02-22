import express from "express";
import AnimalController from "../controllers/animal.controller.js";

const router = express.Router();

router.post("/", AnimalController.createAnimal);
router.get("/", AnimalController.getAnimals);
router.get("/owner/:id", AnimalController.getAnimalsOwner);
router.get("/:id", AnimalController.getAnimal);
router.delete("/:id", AnimalController.deleteAnimal);
router.put("/", AnimalController.updateAnimal);

router.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);    
    res.status(400).send({ error: err.message });    
});

export default router;