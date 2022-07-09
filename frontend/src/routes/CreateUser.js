import React, { useState } from 'react';
import { TextField, Paper, Button } from '@mui/material';
import Viewtitle from '../components/Viewtitle';
import Navbar from '../components/Navbar';
import '../App.css';
import axios from 'axios';
import {Navigate, useNavigate} from 'react-router-dom';



function CreateUser() {
    const navigate = useNavigate();

const baseUrl="http://18.204.17.108:5000/users";

const Form = () => {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [searchNumber, setSearchNumber] = useState("");
    let [type, setType] = useState("");

    const sendForm =(ev)=>{
        ev.preventDefault()
        
        axios.post(baseUrl,{
            name: name,
            email: email,
            password: password,
            intentos: searchNumber,
            tipo: type
        }).then((response)=>{
            console.log(response.data);
            navigate('/users');
           
        })
    }

    return(
        <form onSubmit={(ev)=> sendForm(ev)}>
            <div>
                <div className="TextInputContainer SettingsInputContainer">
                    <TextField 
                        id="name" 
                        label="Nombre" 
                        variant="outlined" 
                        className="TextFieldStyle SettingsInput"
                        onChange={ (ev)=> setName(ev.target.value)}
                    />
                </div>
                <div className="TextInputContainer SettingsInputContainer">
                    <TextField 
                        id="email" 
                        label="Correo" 
                        variant="outlined" 
                        className="TextFieldStyle SettingsInput"
                        onChange={ (ev)=> setEmail(ev.target.value)}
                    />
                </div>
                <div className="TextInputContainer SettingsInputContainer">
                    <TextField 
                        id="password" 
                        label="Contraseña" 
                        variant="outlined" 
                        className="TextFieldStyle SettingsInput"
                        onChange={ (ev)=> setPassword(ev.target.value)}
                    />
                </div>
                <div className="TextInputContainer SettingsInputContainer">
                    <TextField 
                        id="searchNumber" 
                        label="Cantidad de busquedas" 
                        variant="outlined" 
                        className="TextFieldStyle SettingsInput"
                        onChange={ (ev)=> setSearchNumber(ev.target.value)}
                    />
                </div>
                <div className="TextInputContainer SettingsInputContainer">
                    <TextField 
                        id="type" 
                        label="Tipo de usuario" 
                        variant="outlined" 
                        className="TextFieldStyle SettingsInput"
                        onChange={ (ev)=> setType(ev.target.value)}
                    />
                </div>
                <div className="ButtonContainer">
                        <Button variant="contained" className="PrimaryButtonStyle" type="submit" value="Enviar">Crear Usuario</Button>
                    </div>
            </div>
        </form>
    );
}



    return (
        <div className="App">
        <Navbar>
          <Paper className="ViewContainer">
            <Viewtitle>
              Crear Usuario
            </Viewtitle>
            <Form/>
          </Paper>
        </Navbar>
      </div>
    ) 

}
export default CreateUser;