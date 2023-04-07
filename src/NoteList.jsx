import React from 'react'

const NoteList = (props) => {
    const deleteItem = ()=>{
        props.deleteNote(props.id);
    }
  return (
    <div className=' col-3 notelist m-4'>
        <h1>{props.title}</h1><br/>
        <p>{props.content}</p>
        <button className='btn btn-primary' onClick={deleteItem}>Remove</button>
    </div>
  )
}

export default NoteList