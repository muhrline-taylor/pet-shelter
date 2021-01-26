import React, {useState, useEffect} from 'react';
import axios from 'axios';
import FullPet from "../components/FullPet";
import { navigate } from '@reach/router';

const ViewPet = props => {
    const [thisPet, setThisPet] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => setThisPet(res.data.Pets))
    }, [])
    const removePet = _id => {
        console.log(_id)
        axios.delete(`http://localhost:8000/api/pets/delete/${_id}`)
            .then(navigate("/"))
    }
    return(
        <>
            {
                thisPet !== null ?
                <FullPet pet={thisPet} removePet={removePet}/>:""
            }
            
        </>
    );
}

export default ViewPet;