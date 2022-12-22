import React from 'react'

function Reviews() {
  return (
    <div>
        <h1>Leave us a Review!</h1>
            <form>
            <label>Rating</label>
            <select placeholder='Rate Us 1 to 5!'>
                <option value='0'>N/A</option>
                <option value="1">1- Very Disatisifed</option>
                <option value="2">2- Disatisfied</option>
                <option value="3">3- Neutral</option>
                <option value="4">4- Satisfied</option>
                <option value="5">5- Very Satisfied</option>
            </select>
            <input type="file" />
            <textarea placeholder='Tell us how you feel!'>
            </textarea>
            <button>Submit!</button>
            </form>
    </div>
  )
}

export default Reviews