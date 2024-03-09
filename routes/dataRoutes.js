import express from "express";
import dataController from "../controllers/dataController.js";
const router = express.Router();

router.post('/data',dataController.handleAddData)
router.patch('/data',dataController.handleEditData)
router.get('/count', (req, res) => {
    res.json({ count: dataController.getCount() });
  });

export default router