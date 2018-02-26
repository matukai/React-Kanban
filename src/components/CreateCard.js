import React from 'react';

export const createCard = ({userInput}) => {

  return (
    <div>

      <form>

        New Task: <br/>
        <input 
          type="text"
          placeholder="title"
          onChange={userInput} />
          <br/>
        <input 
          type="text"
          placeholder="priority level"
          onChange={userInput} />
          <br/>
        <input 
          type="text"
          placeholder="status"
          onChange={userInput} />
          <br/>
        <input 
          type="text"
          placeholder="created by"
          onChange={userInput} />
          <br/>
        <input 
          type="text"
          placeholder="assigned by"
          onChange={userInput} />
          <br/>

      </form>

    </div>
  )
}


export default createCard;