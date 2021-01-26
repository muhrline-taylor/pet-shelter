import React from 'react';
import '../App.css';

const FullPet = props => {
    return(
        <>
            <div className="full_pet_header">
                <h1>Details about {props.pet.name}:</h1>
                <button onClick={() => props.removePet(props.pet._id)} className="btn btn-danger">Adopt {props.pet.name}</button>
            </div>
            <div className="full_pet">
                <h4>Type: {props.pet.type}</h4>
                <h4>Description: {props.pet.description}</h4>
                <h5>Skills: </h5>
                <ul>
                    {
                        props.pet.skillOne !== "" ?
                        <li>{props.pet.skillOne}</li>:""
                    }
                    {
                        props.pet.skillOne !== "" ?
                        <li>{props.pet.skillTwo}</li>:""
                    }
                    {
                        props.pet.skillOne !== "" ?
                        <li>{props.pet.skillThree}</li>:""
                    }
                    
                    
                    
                </ul>
            </div>
        </>
    );
}

export default FullPet;