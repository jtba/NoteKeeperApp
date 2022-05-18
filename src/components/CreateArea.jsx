import React, { useState } from "react";

function CreateArea(props) {
  const [data, setData] = useState({});

  function inputChange(e) {
    const { value, name } = e.target;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={inputChange}
          value={data.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={inputChange}
          value={data.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.onAdd(data);
            setData({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
