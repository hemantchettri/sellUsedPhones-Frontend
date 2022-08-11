import axios from "axios";
import React, { useState } from "react";

export default function Cart() {

    const [cart, setCart] = useState([]);

    React.useEffect(() => {
        axios.get(`/api/get-cart/${localStorage.getItem("userId")}`)
            .then(res => {
                console.log(res.data.data.productId);
                setCart(res.data.data);
            }
            ).catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <>
            {cart.map((phone, index) => (
                <div className="card" key={index}>
                    <div className="card-body">
                        <h5 className="card-title">{phone.brand}</h5>
                        <img src={"http://localhost:8000/" + phone.image} alt="phone" width="200" height="200" />
                        <p className="card-text">{phone.memory}</p>
                        <p className="card-text">{phone.price}</p>
                        <p className="card-text">{phone.condition}</p>
                    </div>
                </div>
            ))}
        </>
    )
}