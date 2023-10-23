import React, { useState } from "react";

export default function TextBox({ id }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    return (
        <div
            className={`dndnode ${id} w-60`}
            onDragStart={(event) => onDragStart(event, "output")}
            draggable
        >
            <input type="text" placeholder="Title" className="w-60 p-2 mb-2 bg-transparent" onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Description" className="w-60 p-2 bg-transparent" onChange={(e) => setDesc(e.target.value)} />
        </div>
    );
}
