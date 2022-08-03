import axios from "axios";
import React, { useState } from "react";

export default function Phones() {

    const [phones, setPhones] = useState([]);

    axios.get("/api/get-phones")
        .then(res => {
            console.log(res.data);
            setPhones(res.data);
        }
        )

    return (
        <>
            {phones.map(phone => (
                <p>{phone.name}</p>
            ))}
        </>
    )
}