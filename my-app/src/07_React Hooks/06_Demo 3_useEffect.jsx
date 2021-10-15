import React, { useState, useEffect } from 'react';
function RHUED3Sample() {
    const [name, setName] = useState("Jack")
    const [age, setAge] = useState(20)
    useEffect(() => {
        console.log("use Effect called")
    }, [age])
    return (
        <div>
            <h1>Your Name is: {name}</h1><br />
            <h1>Your Age is: {age} </h1><br />
            <button onClick={() => setName("Jill")}>Change Name</button>
            <button onClick={() => setAge(age + 1)}>Change Age</button>
        </div>
    );
}
export default RHUED3Sample;