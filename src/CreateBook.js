import './App.css';

import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from "react-router";

const CreateBook = () => {
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState('')
  const navigate = useNavigate()

  const onSubmit = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', file);
    const { data: newBook } = await axios.post('http://localhost:7788/books', formData)
    navigate(`/books/${newBook.id}`)
  }

  return (
    <div className="App">
      <input name="title" onChange={(e) => setTitle(e.target.value)} value={title} />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit" onClick={onSubmit}>Create</button>
    </div>
  );
}

export default CreateBook;
