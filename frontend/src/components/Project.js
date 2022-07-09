import Grid from "@mui/material/Grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import axios from "axios";


function Project(props){

    const baseUrl="http://18.204.17.108:5000/project/";
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
                        <Box
                            component="img"
                            sx={{
                                height: 60,
                                width: 60,
                                maxHeight: { xs: 60, md:60},
                                maxWidth: { xs: 60, md: 60},
                                borderRadius: '16px',
                            }}
                            src={props.url}
                            />
                    </Grid>
                    <Grid item xs={3}>
                        <div>{props.name}</div>
                    </Grid>
                    <Grid item xs={3}>
                        <div> </div>
                    </Grid>
                    <Grid item xs={4}>
                        <Button component={Link} to={"/dashboard/"+props.id}>
                            <VisibilityIcon/>
                        </Button>
                        <Button>
                            <EditIcon/>
                        </Button>
                        <Button  onClick={removeData}>
                            <DeleteIcon/>
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
    );
}

export default Project;