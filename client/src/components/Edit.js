import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import Form from './Form';
import Header from './Header';

const Edit = (props)=>{

    const {id} = props;

    const [editedAuthor, setEditedAuthor] = useState({ 
        firstName: "",
        lastName: ""
    })

    const [errors, setError] = useState({})


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`) //this call will populate the fields for editing reference
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setEditedAuthor(res.data)
            })
            .catch((err)=>{
                console.log(err);
            });
    }, [])

const editSubmitHandler = (e)=>{ // the function is passed down to Form component
    e.preventDefault();
    axios.put(`http://localhost:8000/api/authors/${id}`,
    
editedAuthor) //editedAuthor is sent to database for change
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate("/");
        })
        .catch((err)=>{
            console.log(err);
            console.log("err.response:", err.response);
            console.log("err.response.data:", err.response.data);
            console.log("err.response.data.errors:", err.response.data.errors);
            setError(err.response.data.errors)
        })
}
    return(
        <div>

            <Header link={"/"} linkText={"Return Home"} titleText={"Edit Author!"}/>
            <Form 
                author={editedAuthor}
                setAuthor={setEditedAuthor}
                submitHandler={editSubmitHandler}
                errors={errors}
                buttonText={"Submit"}
            />
            
        </div>
    )
}
export default Edit;