import { useState } from "react";
import "./App.css";
import { generateCharacter } from "./utils/generate-character";

function App() {
  const [data, setData] = useState();

  const onClick = async () => {
    const _data = await generateCharacter();
    setData(_data);
  };

  const { character, pdfUrl } = data || {};

  return (
    <div className="App">
      <div className="container">
        <button className="generate-button" onClick={onClick}>
          Generate Instant Character
        </button>

        {!!data && (
          <>
            <div className="details">
              <p>Your character is:</p>
              <h2>{character.name},</h2>
              <h3>
                {`the ${
                  character.ancestry
                } ${character.vocation.name.toLowerCase()} from ${
                  character.origins.provincialOrigins.region
                }`}
              </h3>
            </div>
            <a
              className="download-link"
              href={pdfUrl}
              download={`${character.name}.pdf`}
            >
              Download PDF
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
