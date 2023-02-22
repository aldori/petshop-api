import express from "express";
import OwnerController from "../controllers/owner.controller.js";

const router = express.Router();

router.post("/", OwnerController.createOwner);
router.get("/", OwnerController.getOwners);
router.get("/:id", OwnerController.getOwner);
router.delete("/:id", OwnerController.deleteOwner);
router.put("/", OwnerController.updateOwner);

router.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);    
    res.status(400).send({ error: err.message });    
});

export default router;