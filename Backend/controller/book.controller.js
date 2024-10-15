import Book from "../model/book.model.js";
import axios from "axios";
const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

const searchBook = async(req,res)=>{
  const { name } = req.query;

  try {
    let books = await Book.find();
    if (name) {
      books = books.filter(book =>
        book.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    res.json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ message: 'Error fetching books' });
  }
};

const isValidUrl=async (url)=>{
  try{
    const response= await axios.get(url);
    if(response.status===200) return true;
    else return false;
  }
  catch(error){
    return false;
  }
};

const addbook = async(req,res)=>{
  const{name,title,category,subcategory,image,link}=req.body;

  const book =await Book.findOne({name:name,title:title});
  // console.log(book);
  if(book) return res.status(400).json({message:'Book already existed.'});
  const imageValid= await isValidUrl(image);
  if(!imageValid) return res.status(400).json({message:"Image link is not working."});
  const linkValid= await isValidUrl(link);
  if(!linkValid) return res.status(400).json({message:"Download link is not working."});
  const bookdata= new Book({
    name:name,
    title:title,
    category:category,
    subcategory:subcategory,
    image:image,
    link:link
  });
  try{
    await bookdata.save();
    return res.status(200).json({message:'Book saved successfully.'});
  }
  catch(error){
    console.log(error);
    return res.status(500).json({message:'Something wrong occured.'});
  }
};

export default {getBook,searchBook,addbook};

