import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PetCard from '../components/PetCard';
import '../App.css';

const Main = props => {
    const [pets, setPets] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => setPets(res.data))
    }, [])
    return(
        <>
            <div className="pet-box">
                <h5>Name</h5>
                <h5>Type</h5>
                <h5>Actions</h5>
            </div>
            {
                pets !== null ?
                Object.entries(pets.Pets).map((item, k) => {
                    return <PetCard pet={item[1]}/>
                }):""
            }
        </>
    );
}

export default Main;