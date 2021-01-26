import React from 'react';
import '../App.css';
import {Link} from '@reach/router';

const PetCard = props => {
    return(
        <>
            <div className="pet-box">
                <p>{props.pet.name}</p>
                <p>{props.pet.type}</p>
                <p>
                    <Link to={`/pets/${props.pet._id}`}>Details</Link>&nbsp;
                    <Link to={`/pets/update/${props.pet._id}`}>Edit</Link>
                </p>
            </div>
            
        </>
    );
}

export default PetCard;