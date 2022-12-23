import {React, useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ReviewDetails() {

    const [state, setState] = useState({
        'rating': '',
        'img': '',
        'description': ''
      });
    
      const updateState = e => setState({
        ...state,
        [e.target.name]: e.target.value
      });


        const { reviewId } = useParams();
        console.log(reviewId);
        // const [review, setReview] = useState(null);

        const deleteReviewDetails = (reviewId) => {
            axios.delete(`http://localhost:3001/user/reviews/${reviewId}`, {
                header: {
                    authorization: `Bearer ${localStorage.getItem('authToken')}`
                }
            })
            .then(axiosResponse => {
                console.log(axiosResponse);
            })
            .catch(err => console.log(err));
        }  
      
        const getReviewDetails = () => {
          axios.get(`http://localhost:3001/user/reviews/${reviewId}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('authToken')}`
          }
        })
          
            .then(axiosResponse => {
              console.log(axiosResponse.data);
              setState({...state, 
                rating: axiosResponse.data.rating, 
                img: axiosResponse.data.img, 
                description: axiosResponse.data.description})
            //   setReview(axiosResponse.data);
            })
            .catch(err => console.log(err))
        }
      
        useEffect(() => {
          getReviewDetails();
        }, [])

        const onFormSubmit = e => {
            e.preventDefault();
            axios.post(`http://localhost:3001/user/reviews/${reviewId}`, state,  
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem('authToken')}`
          }})
            
            .then(axiosResponse => {
                setState({...state, rating:
                     axiosResponse.data.rating, 
                    img: axiosResponse.data.img, 
                    description: axiosResponse.data.description})
            })
            .catch(err => console.log(err));
          }
 
  

  return (    
    <div>
        <form onSubmit={onFormSubmit}>
            <label>Rating</label>
            <select placeholder='Rate Us 1 to 5!' name='rating' value={state.rating} onChange={updateState}>
                <option value='N/A'>N/A</option>
                <option value='1- Very Disatisifed'>1- Very Disatisifed</option>
                <option value='2- Disatisfied'>2- Disatisfied</option>
                <option value='3- Neautral'>3- Neutral</option>
                <option value='4- Satisfied'>4- Satisfied</option>
                <option value='5- Very Satisfied'>5- Very Satisfied</option>
            </select>
            <input type="file" value={state.img} name='img' onChange={updateState}/>
            <textarea placeholder='Tell us how you feel!' value={state.description} name='description' onChange={updateState}>
            </textarea>
            <button>Update!</button>
        </form>
        <button onSubmit={deleteReviewDetails}>Delete!</button>
    </div>
  )
}


export default ReviewDetails;