import { React, useState }from 'react';
import axios from 'axios';
import '../../App.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useNavigate } from 'react-router';
// import Calendar from 'react-calendar';




function Booking() {

    const naviagte = useNavigate();

    const [value, setValue] = useState()

    const [state, setState] = useState({
        'firstname': '',
        'lastname': '',
        'email': '',
        'location': '',
        'phone': '',
        'event': '',
        'theme': '',
        'inorout': '',
        'held': '',
        'vicinity': '',
        'chairs': '',
        'centerpiece': '',
        'backdrop': '',
        'ballons': '',
        'budget': '',
        'services': '',
        'recommended': '',
      });

      const updateState = e => setState({
        ...state,
        [e.target.name]: e.target.value
      });

      const onFormSubmit = e => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/event/bookings`, state,  
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('authToken')}`
      }})
        
        .then(axiosResponse => {
          naviagte('/thankyou');
        })
        .catch(err => console.log(err));
      }



    return (
        <div>
        <form onSubmit={onFormSubmit}>
        <label>
        First Name:
        <input type="text" name="firstname" value={state.firstname} onChange={updateState}/>
        </label>


        <label>
        Last Name:
        <input type="text" name="lastname" value={state.lastname} onChange={updateState}/>
        </label>


        <label>
        Email:
        <input type="text" name='email' value={state.email} onChange={updateState}/>
        </label>

        <label>Location of the event?
        <select name='location' value={state.location} onChange={updateState}>
        <option value="Miami-Dade">Miami-Dade</option>
        <option value="Broward">Broward</option>
        </select>
        </label>

        <label>
        Phone Number:
        <input type="text" name='phone' value={state.phone} onChange={updateState}/>
        </label>
        
        <label>Style of Event?
        <select name="event" value={state.event} onChange={updateState}>
        <option value="Birthday">Birthday</option>
        <option value="Gender Reveal">Gender Reveal</option>
        <option value="Wedding">Wedding</option>
        <option value="Baby Shower">Baby Shower</option>
        <option value='Bridal Shower'>Bridal Shower</option>
        <option value="Company">Company Event</option>
        <option value="Religon">Religious Events</option>
        <option value="Other">Other</option>
        </select>
        </label>
        
        <label>What is the theme/or color scheme?
        <input type="text" name="theme" value={state.theme} onChange={updateState}/>
        </label>
        
        {/* <label>Date of the event?
        <div>
        <Calendar onChange={onChange} value={value1} />
        </div>
        </label> */}
        
        <label>Indoor or Outdoor?
        <select name='inorout' value={state.inorout} onChange={updateState}>
        <option value="Outdoor">Outdoor</option>
        <option value="Indoor">Indoor</option>
        </select>
        </label>
        
        <label>Where is the event being held?
        <select name='held' value={state.held} onChange={updateState}>
        <option value="House">House</option>
        <option value="Apartment">Apartment</option>
        <option value="Venue">Venue</option>
        <option value="Restaurant">Restaurant</option>
        </select>
        </label>

        <label>If you chose house in the option above, is the house a rental, airbnb or vacation home? If not applicable please select 'N/A'.
        <select name='vicinity' value={state.vicinity} onChange={updateState}>
        <option value="NA">N/A</option>
        <option value='Owner'>Owner</option>
        <option value="Rental">Rental</option>
        <option value="Airbnb">Airbnb</option>
        <option value="Vacation">vacation</option>
        </select>
        </label>

        <label>Do you require chairs and tables?
        <select name='chairs' value={state.chairs} onChange={updateState}>
        <option value="No">No</option>
        <option value="Yes">Yes</option>
        </select>
        </label>
        
        <label>Do you need centerpieces?
        <select name='centerpiece' value={state.centerpiece} onChange={updateState}>
        <option value="No">No</option>
        <option value="Yes">Yes</option>
        </select>
        </label>

        <label>Do you need a backdrop
        <select name='backdrop' value={state.backdrop} onChange={updateState}>
        <option value="No">No</option>
        <option value="Yes">Yes</option>
        </select>
        </label>
        
        <label>Do you need ballons?
        <select name='ballons' value={state.ballons} onChange={updateState}>
        <option value="No">No</option>
        <option value="Yes">Yes</option>
        </select>
        </label>

        <label>What is your budget?
        <input type='text' name='budget' value={state.budget} onChange={updateState}/>
        </label>
        
        <label>Interested in more services than listed above? Tell us what you want!
        <input type='text' name='services' value={state.services} onChange={updateState}/>
        </label>
        
        
        {/* <label>Share inspiration photos so we can get a better grasp of your vision!
        <input type="file" />
        </label> */}

        <label>How did you hear about us?
        <input type='text' name='recommended' value={state.recommended} onChange={updateState}/>
        </label>
        <button>Submit</button>
              
        </form>
        </div>
    )
}

export default Booking;