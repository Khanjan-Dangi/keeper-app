import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes,addNote] = useState([]);

    function createNote(note){
        addNote([...notes,note]);

        console.log(notes);
    }

    function deleteNote(id){
        addNote(()=>{
            return notes.filter((item,index)=>{
                return index !== id;
            })
        })
    }

  return (
    <div>
      <Header />
      <CreateArea newNote = {createNote}/>

        {notes.map((note,index)=>{
            return <Note key = {index} id = {index} title = {note.title} content = {note.content} handleDelete={deleteNote}/>
        })}
      <Footer />
    </div>
  );
}

export default App;
