import express from "express";
import bookController from "../controller/book.controller.js";
const {getBook,searchBook,addbook} = bookController;
const router = express.Router();

router.get("/", getBook);
router.get("/find", searchBook);
router.post("/submit", addbook);

export default router;