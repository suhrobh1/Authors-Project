import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import Header from './Header';
import DeleteButton from './DeleteButton';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import LikeButton from './LikeButton';

const AllAuthors = (props) => {

    const {authors, setAuthors}= props;

    const sortedAuthors = authors.sort((a, b)=>a.firstName.localeCompare(b.firstName));

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then((res) => {
                console.log(res.data);
                setAuthors(res.data);
            })
            .catch((err) => console.log(err))
    }, [])
    return (
        <div>
            <Header link ={"/new"} linkText={"Add an Author"} titleText={"Favorite Authors"}/>
            <Table striped bordered hover style={{width: "40em"}}>
                <thead>
                    <tr>
                        <th style={{width: "20em"}}>Author</th>
                        <th style={{width: "10em"}}>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                            {
                                sortedAuthors.map((author, index) => {
                                    return(
                                        <tr>
                                            <td style={{display: "flex", flexFlow: "row", justifyContent: "space-between"}}>
                                                <Link to={`/authors/${author._id}`}><p>{author.firstName} {author.lastName}</p></Link>
                                                <LikeButton id = {author._id}/>
                                            </td>
                                            <td >
                                                    <Link to = {`/authors/edit/${author._id}`}><Button variant="primary" style = {{marginLeft: "5px", marginRight: "5px"}}> Edit Author</Button></Link>
                                                    <DeleteButton id = {author._id} authors = {authors} setAuthors = {setAuthors} />
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                </tbody>
            </Table>
        </div>
    )
}
export default AllAuthors;