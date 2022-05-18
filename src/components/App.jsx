import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNote] = useState([]);

  function addNote(note) {
    setNote((prevNotes) => {
      return [...prevNotes, note];
    });
    console.log(notes);
  }

  function removeNote(id) {
    setNote((prevNotes) => {
      let filtered = notes.filter((note, index) => index !== id);
      return filtered;
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={removeNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
