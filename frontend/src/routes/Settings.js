import '../App.css';
import Paper from "@mui/material/Paper";
import Viewtitle from '../components/Viewtitle';
import Navbar from '../components/Navbar';
import { Button, TextField, Grid } from '@mui/material';



function Settings() {


  return (
    <div className="App">
      <Navbar>
        <Grid container >
            <Grid items xs={6}>
                <Paper className="ViewContainer">
                    <Viewtitle>
                        Configuración de Perfil
                    </Viewtitle>
                    <div className="TextInputContainer SettingsInputContainer">
                        <TextField id="outlined-basic" label="Usuario" variant="outlined" className="TextFieldStyle SettingsInput"/>
                    </div>
                    <div className="TextInputContainer SettingsInputContainer">
                        <TextField id="outlined-basic" label="Empresa" variant="outlined" className="TextFieldStyle SettingsInput"/>
                    </div>
                    <div className="TextInputContainer SettingsInputContainer">
                        <TextField id="outlined-basic" label="Contraseña" variant="outlined" className="TextFieldStyle"/>
                    </div>
                    <div className="ButtonContainer">
                        <Button variant="contained" className="PrimaryButtonStyle">Actualizar</Button>
                    </div>
                </Paper>
            </Grid>
            <Grid items xs={4}>
                
            </Grid>
        </Grid>
        
      </Navbar>
    </div>
    
  );
}

export default Settings;
