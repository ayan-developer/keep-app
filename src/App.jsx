import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import NoteList from "./NoteList";
import Footer from "./Footer";
import './note.css';

const App = ()=>{
    const[item, addItem] = useState([]);
    const addNote = (note)=>{
        // console.log(note);
        // alert('button clicked');
        addItem((oldValue)=>{
            return[...oldValue,note]
        });
        
        console.log(note);
    }

    const removeNote = (id) => {
        addItem((oldData)=> 
            oldData.filter((currData,index)=>{
                return index !== id;
            })
        )
        console.log(id);
    };



    return <>
        <Header/>
        <Note
            passnote={addNote}
        />
        <div className="container pb-5">
            <div className="row">
            {
                item.map((val,index)=>{
                    return(
                        <NoteList
                        id={index}
                        key={index}
                        title={val.title}
                        content={val.content}
                        deleteNote={removeNote}
                        />
                    )
                    
                })
            }
            </div>
        </div>
        <Footer/>
    </>
}

export default App;