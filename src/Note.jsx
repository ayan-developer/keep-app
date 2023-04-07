import React, { useState } from 'react';

const Note = (props) => {
    const [expand, setExpand] = useState(false);
    const[note, setNote] = useState({
        title:"",
        content:""
    });
    const inputEvent = (e) =>{
        const {name,value} = e.target;
        // const value = e.target.value;
        // const name = e.target.name;
        // const value = e.target.value;
        // console.log(name);
        // console.log(value);

    
        setNote((oldValue)=>{
            return{
                ...oldValue,
                [name]: value,
            }
        });

        console.log(note);
    }

    const addEvent = (e)=>{
        props.passnote(note);
        e.preventDefault();
        setNote({
            title:"",
            content:""
        });
    }

    const addExpand = ()=>{
        setExpand(true);
    }

    return (
        <div className='w-5 d-flex justify-content-center form_container' >
            <form>
                {expand ? <div className="row mt-4">
                    <div className="col-12">
                        <div className="form-outline">
                            <input placeholder='Your Title here' name='title' value={note.title} onChange={inputEvent} type="text" id="form6Example1" className="form-control" />
                        </div>
                    </div>
                </div> : 
                null }
                
                <div>
                    <div className="col-12">
                    <div className="form-outline mt-4 ">
                        <textarea placeholder='your notes here..' onClick={addExpand} name='content' value={note.content} onChange={inputEvent} className="form-control w-5" id="form6Example7" rows="4"></textarea>
                    </div>
                    </div>
                   
                </div>
                <button className="btn btn-primary " onClick={addEvent}>
                    +
                </button>
            </form>
        </div>
    )
}

export default Note