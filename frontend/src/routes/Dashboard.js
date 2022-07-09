/*import '../App.css';
import  Linearbar from '../components/Linearbar.js'
import Piechart from '../components/Piechart';
import Paper from "@mui/material/Paper";
import Viewtitle from '../components/Viewtitle';
import Navbar from '../components/Navbar';
import { Grid } from '@mui/material';



function Dashboard() {
  return (
    <div className="App">
      
      <Navbar>
      <Grid container >
            <Grid items xs={7}>
            <Paper className="ViewContainer">
              <Viewtitle>
                Dashboard
              </Viewtitle>
              <Linearbar/>
            </Paper>
            </Grid>
            <Grid items xs={1}>

            </Grid>
            <Grid items xs={3}>
              <Paper className="ViewContainer">
                <Viewtitle>
                  Metric
                </Viewtitle>
                <Piechart></Piechart>
              </Paper>
            </Grid>
        </Grid>

      </Navbar>
    </div>
  );
}

export default Dashboard;*/

import '../App.css';
import Paper from "@mui/material/Paper";

import Viewtitle from '../components/Viewtitle';
import Navbar from '../components/Navbar';
import React, { Component } from 'react';
import { Grid } from '@mui/material';

import  Linearbar from '../components/Linearbar.js'
import Piechart from '../components/Piechart';

import axios from 'axios';
import Comment from '../components/Comment';
import { withRouter } from './withRouter';

class Dashboard extends Component {
  constructor(props){
    super(props);
    

    this.state = {
      projectID: this.props.params.projectID,
      totalResults : {
          "disgust": 0.099267,
          "fear": 0.011915,
          "joy": 0.950295,
          "ovr_sentiment": 0.14515329999999999,
          "sadness": 0.026832
        },
        twitterComments: [
          {
            "author_id": "130898296",
            "id": "1545677048001224707",
            "text": "RT @UTEC_global: So pleased to share that UTEC has co-led a Series A funding round of @OxfordQCircuits, a University of Oxford spin-out, wh…"
        },
        {
            "author_id": "1003000333650538506",
            "id": "1545605543674273793",
            "text": "Hoy se dió un nuevo hito en UTEC. Las primeras estudiantes de Ingeniería agroambiental defendieron su tesina. Están a nada de ser Tecnólogas. Mis felicitaciones a Agustina y Marikena. Tenacidad y constancia es lo q sobra."
        }
        ],
        youtubeComment: [
            {
              "authorChannelUrl": "http://www.youtube.com/channel/UCBxZFf5lgQFFxWuKEacUawg",
              "authorName": "Latino Black Neck",
              "comment": "Si una plantita puede matar a cientos de Zombies; por qué no que den luz también. Felicidades.",
              "likeCount": 1
          },
          {
              "authorChannelUrl": "http://www.youtube.com/channel/UCB7oVpmhBN2meb_BHugP7fQ",
              "authorName": "Juan Rivera",
              "comment": "Quisiera comprar uno. ¿Cómo hago?",
              "likeCount": 0
          },
        ]
    };
  }
  
   

  componentDidMount(){
    axios.get("http://18.204.17.108:5000/project/"+this.state.projectID)
    .then(response =>{
      console.log(response.data);
      console.log(response.data.twitter_results.data);
      this.setState({ totalResults: response.data.total_results,
        twitterComments: response.data.twitter_results.data,
        youtubeComment: response.data.youtube_results.video_1
      });
    })
  }

  render(){
  
    const totalResult = this.state.totalResults;
    const twitterComments = this.state.twitterComments;
    const youtubeComment = this.state.youtubeComment;
    
    return (
      
      <div className="App">
        <Navbar>
        <Grid container >
            <Grid items xs={7}>
            <Paper className="ViewContainer">
              <Viewtitle>
                Dashboard
              </Viewtitle>
              { 
              twitterComments?
                twitterComments.map((comment,index)=>
                <Comment user={comment.author_id}  text={comment.text} url={"https://th.bing.com/th/id/R.9a3a06f78cc0a8d79fce59e2de6da146?rik=nLAu3Z%2f0QUb%2fVw&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fiynque%2fios7-style%2f1024%2fTwitter-icon.png&ehk=eD3Hc5yQAyP3AKPJoYHB8yeWKwKdaVAswR5kxmodex4%3d&risl=&pid=ImgRaw&r=0"} />
                )
                :
                null
            } 
            { 
              youtubeComment?
              youtubeComment.map((comment,index)=>
                <Comment user={comment.authorName}  text={comment.comment} url={"https://th.bing.com/th/id/OIP.m6mrJgilLDZA6TMihlG5rAHaHa?pid=ImgDet&rs=1"} />
                )
                :
                null
            } 
             
            </Paper>
            </Grid>
            <Grid items xs={1}>

            </Grid>
            <Grid items xs={3}>
              <Paper className="ViewContainer">
                <Viewtitle>
                  Metric
                </Viewtitle>
                <Piechart disgust={totalResult.disgust} fear={totalResult.fear} joy={totalResult.joy} sadness={totalResult.sadness} ></Piechart>
              </Paper>
            </Grid>
        </Grid>
        </Navbar>
      </div>
      
    );
  }
}


export default withRouter(Dashboard);

