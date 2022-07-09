import Grid from "@mui/material/Grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import Avatar from '@mui/material/Avatar';
import axios from "axios";
import { Button } from "@mui/material";


function User(props){

    const baseUrl="http://18.204.17.108:5000/users/";
    const removeData = () => {
        axios
          .delete(baseUrl+ props.id)
          .then(() => {
            props.setRequestData(new Date());
          })
          .catch(err => console.log(err));
      };

    return (
            <Paper elevation={0}  className="UserPaper">
                <Grid container spacing={0}>
                    <Grid item xs={2}>
                        <Avatar src={props.url}></Avatar>
                    </Grid>
                    <Grid item xs={3}>
                        <div>{props.name}</div>
                        <div>{props.email}</div>
                    </Grid>
                    <Grid item xs={5}>
                        <div>Busquedas Habilitadas: {props.activeSearchs}</div>
                        <div>Busquedas Realizadas: {props.doneSearchs}</div>
                    </Grid>
                    <Grid item xs={2}>
                     <EditIcon/>
                        <Button onClick={removeData}>
                        
                         <DeleteIcon/>
                        </Button>
                        
                    </Grid>
                </Grid>
            </Paper>
    );
}

export default User;