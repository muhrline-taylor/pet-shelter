import React, { useState } from 'react';
import AddForm from '../components/AddForm';
import axios from 'axios';
import { navigate } from '@reach/router';

const AddPet = props => {
    const [form, setForm] = useState({
        name: "",
        type: "",
        description: "",
        skillOne: "",
        skillTwo: "",
        skillThree: ""
    })
    const [error, setError] = useState({})
    const [dupeError, setDupeError] = useState("")

    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.get("http://localhost:8000/api/pets/")
            .then(res => {
                for(let i=0; i<res.data.Pets.length; i++){
                    if(res.data.Pets[i].name == form.name){
                        setDupeError("Pet name already registered!")
                    }
                }
            })
        axios.post("http://localhost:8000/api/pets/new", form)
            .then(res => {
                if(res.data.error){
                    setError(res.data.error.errors)
                }
                else {
                    navigate("/")
                }
            })
            
    }

    return(
        <>
            <AddForm form={form} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} error={error} dupeError={dupeError}/>
        </>
    );
}

export default AddPet;