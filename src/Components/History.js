import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const History = ({ setFind }) => {
    let value = useSelector((state) => state);

    const navigate = useNavigate();

    console.log(value);

    function newPage(item) {
        axios
            .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${item}`)
            .then((response) => {
                console.log(response.data);
                setFind(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
        navigate("/view");
    }

    return (
        <div>
            {/* <h1>{value}</h1> */}
            <h1 style={{ textAlign: "center", fontSize: "48px" }}>History</h1>
            {value.length !== 0 ? (
                <div>
                    {value.map((item, index) => {
                        return (
                            <div onClick={() => newPage(item)}>
                                <h1
                                    style={{
                                        paddingLeft: "20px",
                                        fontSize: "24px",
                                        color: "blue",
                                        cursor: "pointer",
                                        marginTop: "10px",
                                        marginBottom: "10px",
                                    }}>
                                    {index + 1} {item}
                                </h1>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <h2 style={{ textAlign: "center", marginTop: "50px" }}>
                    No History Found...
                </h2>
            )}
        </div>
    );
};

export default History;
