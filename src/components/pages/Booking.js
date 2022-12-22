import { React, useState }from 'react';
import '../../App.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Calendar from 'react-calendar';


function Booking() {

    const [value, setValue ] = useState();
    const [value1, onChange] = useState(new Date());



    return (
        <div>
        <form>
        <label>
        First Name:
        <input type="text" name="first-name" />
        </label>


        <label>
        Last Name:
        <input type="text" name="last-name" />
        </label>


        <label>
        Email:
        <input type="text" name='email' />
        </label>

        <label>Location of the event?
        <select>
        <option selected value="dade">Miami-Dade</option>
        <option value="broward">Broward</option>
        </select>
        </label>

        <label>Phone Number
        <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}/>
        </label>
        
        <label>Style of Event?
        <select>
        <option selected value="bday">Birthday</option>
        <option value="gender">Gender Reveal</option>
        <option value="wedding">Wedding</option>
        <option value="baby">Baby Shower</option>
        <option value='bridal'>Bridal Shower</option>
        <option value="company">Company Event</option>
        <option value="religon">Religious Events</option>
        <option value="other">Other</option>
        </select>
        </label>
        
        <label>What is the theme/or color scheme?
        <input type="text" name="theme"/>
        </label>
        
        <label>Date of the event?
        <div>
        <Calendar onChange={onChange} value={value1} />
        </div>
        </label>
        
        <label>Indoor or Outdoor?
        <select>
        <option selected value="outdoor">Outdoor</option>
        <option value="indoor">Indoor</option>
        </select>
        </label>
        
        <label>Where is the event being held?
        <select>
        <option selected value="house">House</option>
        <option value="apartment">Apartment</option>
        <option selected="venue">Venue</option>
        <option value="restaurant">Restaurant</option>
        </select>
        </label>

        <label>If you chose house in the option above, is the house a rental, airbnb or vacation home? If not applicable please select 'N/A'.
        <select>
        <option selected value="NA">N/A</option>
        <option value="rental">Rental</option>
        <option selected ="airbnb">Airbnb</option>
        <option value="vacation">vacation</option>
        </select>
        </label>

        <label>Do you require chairs and tables?
        <select>
        <option selected value="no">No</option>
        <option value="yes">Yes</option>
        </select>
        </label>
        
        <label>Do you need centerpieces?
        <select>
        <option selected value="no">No</option>
        <option value="yes">Yes</option>
        </select>
        </label>

        <label>Do you need a backdrop
        <select>
        <option selected value="no">No</option>
        <option value="yes">Yes</option>
        </select>
        </label>
        
        <label>Do you need ballons?
        <select>
        <option selected value="no">No</option>
        <option value="yes">Yes</option>
        </select>
        </label>

        <label>What is your budget?
        <input type='text' name='budget'/>
        </label>
        
        <label>Interested in more services than listed above? Tell us what you want!
        <input type='text' name='services'/>
        </label>
        
        
        <label>Share inspiration photos so we can get a better grasp of your vision!
        <input type="file" />
        </label>

        <label>How did you hear about us?
        <input type='text' name='recommended'/>
        </label>
              
        </form>
        </div>
    )
}

export default Booking;