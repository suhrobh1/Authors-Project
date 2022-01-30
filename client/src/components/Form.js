import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';

const Form = (props) => {

    const {author, setAuthor, submitHandler, errors, buttonText, setExistingAuthors, existingAuthors, alreadyExists, setAlreadyExists} = props;

    

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/`) //this call will populate the fields for editing reference
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setExistingAuthors(res.data)
            })
            .catch((err)=>{
                console.log(err);
            });
    }, [])



    const onChangeHandler = (e)=>{

        const newStateObject = {...author};
        newStateObject[e.target.name]  = e.target.value;

        console.log("e.target.name = ", e.target.name)
        console.log("e.target.value = ", e.target.value)

        


        setAuthor(newStateObject);
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    {
                        alreadyExists? 
                        <h3>This author is already in database!</h3>
                        :null
                    }
                </div>
                <div>
                    <label style = {{marginLeft: "5px", marginRight: "5px"}}>First Name:</label>
                    <input value={author.firstName} name="firstName"  onChange={(e) => onChangeHandler(e)} type="text" />

                    {   author.firstName.length < 3 && author.firstName.length > 0 ?
                            <span> Please make sure that the first name is at least 3 characters! </span> 
                            :null
                    }

                    {
                        errors.firstName ?
                            <span>{errors.firstName.message}</span>
                            : null
                    }
                </div>
                <div>
                    <label style = {{marginLeft: "5px", marginRight: "5px"}}>Last Name:</label>
                    <input value={author.lastName} name="lastName"  onChange={(e) => onChangeHandler(e)} type="text" />

                    {   author.lastName.length > 0 && author.lastName.length < 3 ?
                            <span> Please make sure that the last name is at least 3 characters! </span> 
                            :null
                    }
                    {
                        errors.lastName ?
                            <span>{errors.lastName.message}</span>
                            : null
                    }
                </div>

                <div style = {{margin: "5px"}}>
                    <label style = {{marginLeft: "5px", marginRight: "5px"}}>Famous Works:</label>
                    <input value={author.works} name="works"  onChange={(e) => onChangeHandler(e)} type="text" />

                    {
                        errors.works ?
                            <span>{errors.works.message}</span>
                            : null
                    }
                </div>
                <Button variant="primary" type='submit' style = {{marginLeft: "5px", marginRight: "5px"}}>{buttonText}</Button>
                <Link to ={'/'}><Button variant="primary" style = {{marginLeft: "5px", marginRight: "5px"}}>Cancel</Button></Link>
            </form>

        </div>
    )
}
export default Form;