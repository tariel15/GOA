import React, { useState } from "react";

function DisplayComponent() {
    const [data, setData] = useState(null);

    const getDataFromLocalStorage = () => {
        const storedData = localStorage.getItem("userData");

        if (storedData) {
            setData(JSON.parse(storedData));
        }
    };

    return (
        <div>
            <h2>Display Data</h2>
            <button onClick={getDataFromLocalStorage}>
                Load Data
            </button>

            {data && (
                <div>
                    {data.firstName && <p>First Name: {data.firstName}</p>}
                    {data.lastName && <p>Last Name: {data.lastName}</p>}
                    {data.email && <p>Email: {data.email}</p>}
                </div>
            )}
        </div>
    );
}

export default DisplayComponent;
