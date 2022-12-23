import {React, useState, useEffect } from 'react';
import axios from 'axios';
import './Reviews.css';
import { Link, useNavigate } from 'react-router-dom';

function Reviews() {

  const naviagte = useNavigate();

  const [state, setState] = useState({
    'rating': '',
    'img': '',
    'description': ''
  });

  const updateState = e => setState({
    ...state,
    [e.target.name]: e.target.value
  });

  const [reviewsArray, setReviewsArray] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/reviews`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    })
      .then(axiosResponse => {
        console.log(axiosResponse.data)
        setReviewsArray(axiosResponse.data);
      })
      .catch(err => console.log(err))
  }, []);

  const onFormSubmit = e => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/reviews`, state,  
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem('authToken')}`
  }})
    
    .then(axiosResponse => {
      naviagte('/bookings');
    })
    .catch(err => console.log(err));
  }

  console.log(state);

  return (
    <div>
    <div>
      
    {
    <main className="ReviewsListPage">
    {reviewsArray.map(singleReview => {
      return (
      <div className="card" key={singleReview._id}>
      <div className="card__body">
        <img src={singleReview.img} class="card__image" />
        <h2 className="card__title">{singleReview.rating}</h2>
        <p className="card__description">{singleReview.description}</p>
      </div>
      <Link to={`/reviews/${singleReview._id}`}>
      <button className="card__btn">View Review</button>
      </Link>
    </div> 
            );
      })}
    </main>
    
    }
          {/* <main className="ReviewsListPage">
      <h1>Reviews</h1>
      {reviewsArray.map(singleReview => {
        return (
          <div className="ReviewsCard card" key={singleReview._id}>
              <Link to={`/reviews/${singleReview._id}`}>
              <p>{singleReview.rating} {singleReview.img} {singleReview.description}</p>
            </Link>
          </div>
        );
      })}
    </main> */}
    </div>
    <div>
        <h1>Leave us a Review!</h1>
            <form onSubmit={onFormSubmit}>
            <label>Rating</label>
            <select placeholder='Rate Us 1 to 5!' name='rating' value={state.rating} onChange={updateState}>
                <option value='N/A'>N/A</option>
                <option value='1- Very Disatisifed'>1- Very Disatisifed</option>
                <option value='2- Disatisfied'>2- Disatisfied</option>
                <option value='3- Neutral'>3- Neutral</option>
                <option value='4- Satisfied'>4- Satisfied</option>
                <option value='5- Very Satisfied'>5- Very Satisfied</option>
            </select>
            <input type="file" value={state.img} name='img' onChange={updateState}/>
            <textarea placeholder='Tell us how you feel!' value={state.description} name='description' onChange={updateState}>
            </textarea>
            <button>Submit!</button>
            </form>
    </div>
    </div>
  )
}

export default Reviews