import { MdDeleteForever, MdModeEditOutline } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
  // const editMode = () => {
  //   handleEditNote(id, text)
    
  // }
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <div>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
        {/* <MdModeEditOutline
          onClick={() => editMode()}
          className="edit-icon"
          size="1.3em"
        /> */}
        </div>
      </div>
    </div>
  );
};

export default Note;
