import logo from '../logo.png';
import '../App.css';
import { Button, Card, CardContent, Grid, TextField } from '@mui/material';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';

const LoginForm = () =>{
  return <Card sx={{minWidth: 275}}  className="LoginCard">
  <CardContent className="LoginContent">
    <div className='LoginTitle'>
     Bienvenido
    </div>
    <div className="TextInputContainer">
     <TextField id="outlined-basic" label="Email" variant="outlined" className="TextFieldStyle"/>
    </div>
    <div className="TextInputContainer ExtraPadding">
      <TextField id="outlined-basic" label="Contraseña" variant="outlined" className="TextFieldStyle"/>
    </div>
    <div className="ButtonContainer">
      <Button variant="contained" className="PrimaryButtonStyle" component={Link} to={"/users"}>Sign In</Button>
    </div>
    <div className="ButtonContainer">
      <Button variant="outlined" className="SecondaryButtonStyle">Sign Up</Button>
    </div>
    
  </CardContent>
</Card>
}

const LoginLogo = () =>{
  return <div className="LogoContainer">
    <div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    Social Find
  </div>
}


function Login() {
    return (
        <Grid container spacing={0} align="center" justify="center" alignItems="center" height="70vh">
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Container className="LoginContainer" maxWidth="sm">
              <LoginLogo></LoginLogo>
              <LoginForm></LoginForm>
            </Container>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
        
      );
}

export default Login;
