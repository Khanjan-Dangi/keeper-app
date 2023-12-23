import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [isClicked,setClick] = useState(false);

  function handleSubmit(event){
    event.preventDefault();
    setClick(false);
    let note = {
      title: event.target.title.value,
      content: event.target.content.value
    };

    event.target.title.value = "";
    event.target.content.value = "";
    props.newNote(note);
  }

  function handleClick(){
    setClick(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="create-note">
        {isClicked && <input name="title" placeholder="Title" />}
        <textarea name="content" placeholder="Take a note..." rows={isClicked? "3" : "1"} onClick={handleClick}/>
        {isClicked && <Zoom in={true}>
        <Fab color="yellow" aria-label="add" type="submit">
          <AddIcon />
        </Fab>
        </Zoom>
        }
      </form>
    </div>
  );
}

export default CreateArea;
