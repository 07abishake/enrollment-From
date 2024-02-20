import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneno, setPhoneno] = useState(""); // Fixed typo here
    const [age, setAge] = useState("");
    const [list, setList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, phoneno, age);
        const data = { name, email, phoneno, age };
        if (name && email && phoneno && age) {
            setList((prevList) => [...prevList, data]);
            setName("");
            setEmail("");
            setPhoneno("");
            setAge("");
        }
    };

    return (
       <form onSubmit={handleSubmit}>
        <h1 className='h1'>Enrolled data</h1>
            <input className='name' type="text" name="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} /><br />
            <input className='email' type="text" name="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
            <input className="phoneno" type="number" name="phoneno" placeholder='Phone Number' value={phoneno} onChange={(e) => setPhoneno(e.target.value)} /><br />
            <input className="age" type="text" name="age" placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} /><br /><br />
            <button className="btn" type="submit">Register</button><br /><br />
            {
                list.map((a, index) => (
                    <div key={index}>
                        <ul> <li>{a.name}</li>
                        <li className='li'>{a.email}</li>
                        <li className='li'>{a.phoneno}</li>
                        <li className='li'>{a.age}</li></ul>
                        
                    </div>
                ))
            }
        </form>
    );
};

export default Form;
