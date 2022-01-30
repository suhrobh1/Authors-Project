import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import Header from './Header';
import DeleteButton from './DeleteButton';
import Button from 'react-bootstrap/esm/Button';
const OneAuthor = (props) => {

    const {deleteHandler, id} = props;
    const [author, setAuthor] = useState({});
    const [findErrors, setFindErrors] = useState({})
    
    useEffect(()=> {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res)=> {
                console.log("Hiya", res.data.message);
                setAuthor(res.data);
                setFindErrors(res.data.message)
            })
            .catch((err) => {
                console.log(err)
                
               
            });
          
    }, []) 
    
    return (
        <div>
            
            <div>
            <Header link ={"/"} linkText={"Home"} titleText={author.name}/>
            </div>
         <div>
             
            {
                findErrors? 
                <div>
                    <h2>We are sorry, but we could not find the author you are looking for. Would you like to add an author to our database?</h2>
                    <div style = {{display: "flex", flexFlow: "row", justifyContent: "center"}}>
                        <Link to ={'/new'}><Button variant="primary">Add Author</Button></Link>
                    </div>
                </div>
                :null
            }

            <div>
                <h3>{author.firstName} {author.lastName}</h3>
                <p>Famous works: {author.works}</p>
                <p>Liked by {author.likes} readers</p>
            </div>
            <Link to ={'/'}><Button variant="primary" style = {{marginLeft: "5px", marginRight: "5px"}}>Back to Main</Button></Link>
            <DeleteButton id = {author._id}/>
        </div>   
        </div>
    )
}
export default OneAuthor;