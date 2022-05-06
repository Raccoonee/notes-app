import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";
import Search from "./components/Search";
import Header from "./components/Header";
import BottomHeader from "./components/BottomHeader";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Hello, Welcome to Notes!",
      date: "",
    },
    {
      id: nanoid(),
      text: "Delete Notes by Clicking The Trash Icon.",
      date: "",
    },
    {
      id: nanoid(),
      text: "Notes Save Locally.",
      date: "",
    },
  ]);
  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-note-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-note-app-data", JSON.stringify(notes));
  }, [notes]);

  const editNote = (id, text) => {
    const existingNote = notes.filter((note) => note.id !== id)
    setNotes(existingNote);
    

  };

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);

  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleEditNote={editNote}
        />
      </div>
      <BottomHeader darkMode={darkMode} />
    </div>
  );
};

export default App;
