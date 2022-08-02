import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
    const [ID, setID] = useState("rb6178");

    const handleClick = () => {
        let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let numbers = "0123456789";
        let id = "";
        for (let i = 0; i < 6; i++) {
            let chars = i < 2 ? letters.toLowerCase() : numbers;
            id = id + chars.charAt(Math.random() * chars.length);
        }
        setID(id);
    };
    return (
        <div className="App">
            <div className="card flex flex-col gap-10">
                <h1>Lightshot random image</h1>
                <div className="flex flex-col gap-7">
                    <a
                        className="text-3xl mx-auto px-4 py-1"
                        href={`https://prnt.sc/${ID}`}
                        target="_blank"
                    >{`https://prnt.sc/${ID}`}</a>
                    <button
                        className="bg-cyan-500 mx-auto"
                        onClick={() => handleClick()}
                    >
                        Randomize
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
