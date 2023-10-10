import React from "react";

const View = ({ find }) => {
    return (
        <div className="home">
            {find != null && (
                <div className="result">
                    {find.map((finder) => {
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

export default View;
