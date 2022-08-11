import axios from "axios";
import React, { useState } from "react";

export default function Phones() {

    const [phones, setPhones] = useState([]);

    React.useEffect(() => {
        axios.get("/api/get-phones")
            .then(res => {
                console.log(res.data.data);
                setPhones(res.data.data);
            }
            ).catch(err => {
                console.log(err);
            }
            );
    }, []);

    function handleClick(_id) {
        axios.post("/api/add-to-cart", {
            productId: _id,
            userId: localStorage.getItem("userId")
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <>
            {phones.map((phone, index) => (
                <>
                    <div className="card" key={index}>
                        <div className="card-body">
                            <h5 className="card-title">{phone.brand}</h5>
                            <img src={"http://localhost:8000/" + phone.image} alt="phone" width="200" height="200" />
                            <p className="card-text">{phone.memory}</p>
                            <p className="card-text">{phone.price}</p>
                            <p className="card-text">{phone.condition}</p>
                            <button onClick={() => handleClick(phone._id)} className="btn btn-primary">Add to cart</button>
                        </div>
                    </div>
                </>
            ))}
        </>
    )
}