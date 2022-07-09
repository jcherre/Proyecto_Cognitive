import React, { useState } from 'react';
import { TextField, Paper, Button } from '@mui/material';
import Viewtitle from '../components/Viewtitle';
import Navbar from '../components/Navbar';
import '../App.css';
import axios from 'axios';
import {Navigate, useNavigate} from 'react-router-dom';



function CreateProject() {
    const navigate = useNavigate();

const baseUrl="http://18.204.17.108:5000/scraping";

const Form = () => {
    let [mainWord, setMainWord] = useState("");
    let [tags, setTags] = useState("");

    const sendForm =(ev)=>{
        ev.preventDefault()
        
        axios.post(baseUrl,{
            mainWord: mainWord,
            tags: tags,
        }).then((response)=>{
            console.log(response.data);
            navigate('/projects');
           
        })
    }

    return(
        <form onSubmit={(ev)=> sendForm(ev)}>
            <div>
                <div className="TextInputContainer SettingsInputContainer">
                    <TextField 
                        id="mainWord" 
                        label="mainWord" 
                        variant="outlined" 
                        className="TextFieldStyle SettingsInput"
                        onChange={ (ev)=> setMainWord(ev.target.value)}
                    />
                </div>
                <div className="TextInputContainer SettingsInputContainer">
                    <TextField 
                        id="tags" 
                        label="tags" 
                        variant="outlined" 
                        className="TextFieldStyle SettingsInput"
                        onChange={ (ev)=> setTags(ev.target.value)}
                    />
                </div>
                
                <div className="ButtonContainer">
                        <Button variant="contained" className="PrimaryButtonStyle" type="submit" value="Enviar">Crear Proyecto</Button>
                    </div>
            </div>
        </form>
    );
}



    return (
        <div className="App">
        <Navbar>
          <Paper className="ViewContainer">
            <Viewtitle use>
              Crear Proyecto
            </Viewtitle>
            <Form/>
          </Paper>
        </Navbar>
      </div>
    ) 

}
export default CreateProject;