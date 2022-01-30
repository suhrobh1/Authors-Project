import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import thumbs from './assets/thumbs.png';

const LikeButton = (props) => {

    const {id} = props;

 
    const [clicked, setClicked] = useState(false);
    
    
    const [authorLikes, setAuthorLikes] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res)=> {
                setAuthorLikes(res.data.likes);
                console.log(res);
                console.log(res.data);
                console.log("Yo here", res.data.likes);
                
            })
    }, [])
 

    const likeHandler = () =>{

        const likes = (authorLikes + 1);
        setAuthorLikes(likes);
        console.log("likes", likes, "authorLikes", authorLikes)
        setClicked(true);
        
        
        axios.put(`http://localhost:8000/api/authors/${id}`, {likes})
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            })
    }


    return (


        <div>
            <Button variant="primary"  onClick={likeHandler} style={{display: "inline-flex", justifyContent: "space-around", width: "8em"}} disabled={clicked}>
                <img src={thumbs} alt="my image" style={{width:"1.1em"}}/>
                <div>Like</div>
                <div>{authorLikes}</div>
            </Button>
        </div>
    )
}
export default LikeButton;