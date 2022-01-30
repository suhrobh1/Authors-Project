import React from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import Button from 'react-bootstrap/esm/Button';

const DeleteButton = (props) => {

    const {id, authors, setAuthors} = props;
   
    const deleteHandler = () =>{
        axios.delete(`http://localhost:8000/api/authors/${id}`)
          .then((res) => {
            console.log(res.data)
            if(authors){
                 setAuthors(authors.filter((author) => author._id !== id))
            } else{
                navigate("/");
            }
          })
          .catch((err) => console.log(err));
        }

    return (
      <Button variant="primary" onClick={deleteHandler} className='ml-3' > Delete </Button>
    )
}
export default DeleteButton;