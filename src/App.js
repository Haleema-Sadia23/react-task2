import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState("# Hello 👋\nStart typing Markdown here...");

  return (
    <div className="app">
      <h1 className="title">📝 React Markdown Previewer</h1>
      <div className="container">
        {/* Input Section */}
        <textarea
          className="editor"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />

        {/* Preview Section */}
        <div className="preview">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
