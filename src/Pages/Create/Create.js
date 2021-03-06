import { CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './Ceate.css';


const Create = () => {
    const { register, handleSubmit, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const onSubmit = data => {
        setLoading(true);
        fetch("http://localhost:5000/data", {
            method:"POST",
            headers:{
                "Content-type" : "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            setLoading(false);
            reset();
        })
        
    };
    return (
        <div className="form-data">
            <h1>Create Data</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("id")} placeholder="book id*"  required/>
                <br />
                <input type="text" {...register("author")} placeholder="author name*"  required/>
                <br />
                <input type="text" {...register("book")} placeholder="book name*" required/>
                <br />
                <input type="text" {...register("date")} placeholder='published date' required/>
                <br />
                {loading && <CircularProgress color="secondary" />}
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Create;