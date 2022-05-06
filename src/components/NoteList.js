/* eslint-disable no-unused-vars */
import Note from "./Note";
import AddNote from "./AddNote";
import EditNote from "./EditNote";

const NoteList = ({ notes, handleAddNote, handleDeleteNote, handleEditNote }) => {

  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
          handleEditNote={handleEditNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
      {/* <EditNote handleAddNote={handleAddNote} text={notes.text}  /> */}
    </div>
  );
};

export default NoteList;
