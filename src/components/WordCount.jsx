import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

export default function DataChange() {
  const [text, setText] = useState("");

  const handleEvent = (e) => {
    setText(e.target.value);
  };

  //const wordCount = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;
  const wordCount = text.match(/\b\w+\b/g);

  return (
    <div className="border border-dark border-4 w-50 ">
      <div class="row  justify-content-center align-items-center">
        <div className="col-9">
          <h1>Responsive Paragraph &nbsp;&nbsp;&nbsp; Word Counter</h1>
          <textarea
            placeholder="Enter Text"
            cols={70}
            rows={5}
            value={text}
            onChange={handleEvent}
          />
          <p>Word Count is : {wordCount ? wordCount.length : 0}</p>
        </div>
      </div>
    </div>
  );
}
