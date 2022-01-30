import React, {useState} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Form from './Form';
import Header from './Header';


const CreateAuthor = (props) =>{

    const [errors, setErrors] = useState({})
    const[existingAuthors, setExistingAuthors] = useState({});
    const [alreadyExists, setAlreadyExists] = useState(false);

    //We've refactored all of those useState hooks from W6D2 into this single state object!
const [newAuthor, setNewAuthor] = useState({//we spell these out as to not get uncontrolled inputs errors
   firstName: "",
   lastName: "",
   works: []
})

const newSubmitHandler = (e)=>{
    e.preventDefault();
        

        for (let i =0; i < existingAuthors.length; i++) {
            console.log("DIAG----------------------------------------------------------------");
            console.log("EXISTING:", existingAuthors[i].firstName);
            console.log("NEW", newAuthor.firstName);
            if(existingAuthors[i].firstName==newAuthor.firstName){
                return setAlreadyExists(true);
                console.log("Weeeeeeeeeeeee have a match");
                console.log(alreadyExists);
                break
            }
            
            
        }
            if(!alreadyExists){
            console.log("Noooooooooooooo match")
            axios.post("http://localhost:8000/api/authors", newAuthor)
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
                setErrors(err.response.data.errors)
            })
        }   
   
    }


    return (
        <div>
            <Header link ={"/"} linkText={"Home"} titleText={"Favorite Authors"}/>
           <Form  
           author ={newAuthor}
           setAuthor={setNewAuthor} 
           submitHandler = {newSubmitHandler} 
           errors={errors} buttonText = {"Submit"}
           existingAuthors = {existingAuthors}
           setExistingAuthors = {setExistingAuthors}
           alreadyExists = {alreadyExists}
           setAlreadyExists = {setAlreadyExists}
           />
           
        </div>
    )
}
export default CreateAuthor;