import axios from "axios";
import React from "react";

export default function EditProfile() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [city, setCity] = React.useState("");
    const [state, setState] = React.useState("");
    const [zip, setZip] = React.useState("");
    const [country, setCountry] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password, confirmPassword, phone, address, city, state, zip, country);
    }

    axios.post("/api/update-profile", {
        name,
        email,
        password,
        confirmPassword,
        phone,
        address,
        city,
        state,
        zip,
        country
    }).then(res => {
        console.log(res);
    }
    ).catch(err => {
        console.log(err);
    }
    );


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" className="form-control" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input type="text" className="form-control" id="state" value={state} onChange={(e) => setState(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="zip">Zip</label>
                    <input type="text" className="form-control" id="zip" value={zip} onChange={(e) => setZip(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" className="form-control" id="country" value={country} onChange={(e) => setCountry(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}