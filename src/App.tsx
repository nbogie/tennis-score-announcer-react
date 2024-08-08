import { shuffle } from "lodash";
import { useState } from "react";
import { examples, prepareExamples } from "./scoreExamples.ts";

const preparedExamples = prepareExamples(examples);

function App() {
    // const [selectedScoreExample, setSelectedScoreExample] = useState(0);
    const [scoreExamples, setScoreExamples] = useState(preparedExamples);

    function reshuffle() {
        setScoreExamples((prev) => shuffle(prev));
    }
    function handleToggle(exId: number) {
        setScoreExamples((prevExs) =>
            prevExs.map((e) =>
                e.id === exId ? { ...e, isRevealed: !e.isRevealed } : e
            )
        );
    }
    function hideAll() {
        setScoreExamples((prev) =>
            prev.map((p) => ({ ...p, isRevealed: false }))
        );
    }
    return (
        <main className="app">
            <h1>Score examples:</h1>
            <div className="buttonRow">
                <button onClick={reshuffle}>reshuffle</button>
                <button onClick={hideAll}>hide all</button>
            </div>
            <div className="scoreExamples">
                <div className="headerExample" key={"demo"}>
                    p1score - p2score: announced score
                </div>
                {scoreExamples.map((se, ix) => (
                    <div
                        className="scoreExample"
                        key={ix}
                        onClick={() => handleToggle(se.id)}
                    >
                        <span
                            title={"number of points scored by player 1"}
                            className="playerScore"
                        >
                            {se.p1}
                        </span>{" "}
                        -{" "}
                        <span
                            title={"number of points scored by player 2"}
                            className="playerScore"
                        >
                            {se.p2}
                        </span>
                        :{" "}
                        <span title={"Score as announced in words"}>
                            {se.isRevealed ? se.result : "???"}
                        </span>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default App;
