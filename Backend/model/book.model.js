import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    title: String,
    category: String,
    subcategory:String,
    image: String,
    link:String
});
const Book = mongoose.model("Book", bookSchema);

export default Book;