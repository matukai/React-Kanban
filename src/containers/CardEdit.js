import React from 'react';


export const CardEdit = () => {


  return (
    <div>
      <form>
        <br/>
        <input type="text" placeholder="title" value=""/>
        <br/>
        <input type="text" placeholder="priority" value=""/>
        <br/>
        <input type="text" placeholder="status" value=""/>
        <br/>
        <input type="text" placeholder="created by" value=""/>
        <br/>
        <input type="text" placeholder="assigned to" value=""/>
        <br/>
        <input type="submit"/>
      </form>
    </div>
  )
}


export default CardEdit;