import axios from "axios";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { add } from "../redux/actions/historyActions";

const Home = () => {
    const dispatch = useDispatch();

    let [find, setFind] = useState("");
    let [found, setFound] = useState(null);

    console.log("home page");

    function findWord() {
        axios
            .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${find}`)
            .then((response) => {
                console.log(response.data);
                setFound(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
        dispatch(add(find));
    }

    return (
        <div className="home">
            <div className="search">
                <input
                    type="search"
                    placeholder="Search for a word..."
                    className="input_tag"
                    value={find}
                    onChange={(e) => {
                        setFind(e.target.value);
                    }}
                />
                <button className="search_button" onClick={findWord}>
                    Search
                </button>
            </div>
            {found != null && (
                <div className="result">
                    {found.map((finder) => {
                        return (
                            <div className="per_word">
                                <h1>{finder.word}</h1>
                                <p>{finder.phonetic}</p>
                                {finder.phonetics.map((audio) => {
                                    return (
                                        <div>
                                            {audio.audio && (
                                                <div>
                                                    <audio controls>
                                                        <source
                                                            src={audio.audio}
                                                            type="audio/mpeg"
                                                        />
                                                    </audio>
                                                    {/* <audio
                                                        src={audio.audio}
                                                        controls
                                                    /> */}
                                                    <p className="audio_para">
                                                        {audio.text}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                                {finder.meanings.map(
                                    (meaning) =>
                                        meaning.partOfSpeech && (
                                            <div>
                                                <h1>{meaning.partOfSpeech}</h1>
                                                {meaning.definitions.map(
                                                    (def) =>
                                                        def && (
                                                            <p>
                                                                {def.definition}
                                                            </p>
                                                        )
                                                )}
                                            </div>
                                        )
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Home;
