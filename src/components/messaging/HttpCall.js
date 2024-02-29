//HttpCall.jsx

import React, { useState, useEffect } from 'react';

function HttpCall() {
    const [data, setData] = useState("");

    useEffect(() => {
        fetch("/http-call", {
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((responseData) => {
                setData(responseData.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <h3>{data}</h3>
    );
}

export default HttpCall;
