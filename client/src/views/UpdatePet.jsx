import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateForm from "../components/UpdateForm";
import {navigate} from '@reach/router'

const UpdatePet = props => {
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
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => setForm(res.data.Pets))
    },[])
    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        // axios.get("http://localhost:8000/api/pets/")
        //     .then(res => {
        //         for(let i=0; i<res.data.Pets.length; i++){
        //             if(res.data.Pets[i].name == form.name){
        //                 setDupeError("Pet name already registered!")
        //             }
        //         }
        //     })
        axios.put(`http://localhost:8000/api/pets/update/${props._id}`, form)
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
            <UpdateForm form={form} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} error={error} dupeError={dupeError}/>
        </>
    );
}

export default UpdatePet;