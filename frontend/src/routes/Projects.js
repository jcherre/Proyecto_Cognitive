import Navbar from '../components/Navbar.js'
import Paper from '@mui/material/Paper';
import Viewtitle from '../components/Viewtitle.js'
import Project from '../components/Project.js';

import React, { Component } from 'react';

import axios from 'axios';

class Projects extends Component {
  constructor(props){
    super(props);

    this.state = {
      projects: [
        {
          "_id": "62c8f23c719f12924e5fd163",
          "mainWord": "Bembos",
          "tags": [
              "hamburguesa"
          ],
          "twitter_results": {
              "data": [
                  {
                      "author_id": "1451217710663282691",
                      "id": "1545354727386406912",
                      "text": "díganme quién creó la hamburguesa parrillera de Bembos, para hacerle un altar en este maldito instante"
                  },
                  {
                      "author_id": "1327120690361851904",
                      "id": "1545215520357683202",
                      "text": "no hermano como que bembos sacó una hamburguesa hawaiana 💀 que vuelvan los valores tradicionales etc etc"
                  },
                  {
                      "author_id": "763927833664114688",
                      "id": "1544543838827528192",
                      "text": "Odio bembos me dieron una miseria de hamburguesa por 9 soles quede así 🤡 mejor me hubiera comprado un kfc que por lo menos te dan dos pollitos"
                  },
                  {
                      "author_id": "28301319",
                      "id": "1544071106453131265",
                      "text": "@rufone @crodmich Claro pero una hamburguesa no hace el verano, Bembos se cayó y nunca volvió a levantar."
                  }
              ],
              "meta": {
                  "newest_id": "1545354727386406912",
                  "oldest_id": "1544071106453131265",
                  "result_count": 4
              }
          },
          "usuario": "xxxxxxxxxxx",
          "youtube_results": {
              "video_0": [
                  {
                      "authorChannelUrl": "http://www.youtube.com/channel/UCNvx7mIOmFQZu9CVePgJ8_g",
                      "authorName": "Enésima B",
                      "comment": "BEMBOS 101%",
                      "likeCount": 1
                  },
                  {
                      "authorChannelUrl": "http://www.youtube.com/channel/UCkLAAdh-UkbAPNe8iGRZfdg",
                      "authorName": "Jorge F Casado",
                      "comment": "Bembos is my favorite hamburger in the world 🌍 (thanks Peru)",
                      "likeCount": 5
                  },
                  {
                      "authorChannelUrl": "http://www.youtube.com/channel/UCCFng6C3lopW3AqgQUDzkww",
                      "authorName": "Angelopithecus",
                      "comment": "Almost anything is better than McDonalds",
                      "likeCount": 0
                  },
                  {
                      "authorChannelUrl": "http://www.youtube.com/channel/UCSJ9aEe_Z9cIxldc7CInSXQ",
                      "authorName": "undergnd",
                      "comment": "Hi, most of Peruvian burger joints use to cook the bacon that way, so for the crunch feeling, they use to add shoestring potatoes. Decades ago, Bembos was maybe the first and best 100% Peruvian fast food for burgers and fries, but after its acquisition by a local bank, it started to open tons of locals around the city and the country, added tons of options to their menu... and now, it's just an average place, not like before for sure. For the Peruvian tastes (accostumed to lots of condiments and flavors), Bembos is bigger and tastier than McDonalds or Burger King options.\nAnyway, in Lima or any city in Peru, there are a lot of non-fast food places for a better burger.\nI found your channel a few hours ago, and loved the way how you explained the history of Chan Chan. Keep going and hope to see you around here again... there's a lot to discover!",
                      "likeCount": 2
                  },
                  {
                      "authorChannelUrl": "http://www.youtube.com/channel/UCNWVsd1xyjuXU4hk7OaI38w",
                      "authorName": "Jorge Andujar",
                      "comment": "Go to Papachos for a good burger in Peru. Definitely worth the try. I also noticed you went to Rocky’s for Peruvian chicken. You need to try primos for some of the best rotisserie chicken in Lima. If you want amazing and affordable cebiche, go to Canta Rana 🙌🏻",
                      "likeCount": 1
                  }
              ]
          }
      }
      ]
    };
  }
  
  componentDidMount(){
    axios.get("http://18.204.17.108:5000/projects")
    .then(response =>{
      this.setState({ projects: response.data});
    })
  }

  render(){
    const { projects } = this.state;
    const imgUrl = [
      "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/0017/6271/brand.gif?itok=E07WlTZl",
      "https://negocio.pe/sites/negocio.logicaldesign.pe/files/styles/maxima_imagen/public/logo_con_aire_-_copia.png?itok=5yf7iv9q",
      "https://th.bing.com/th/id/R.bddb092bd4308d7ae43f26869c83958d?rik=HeJ2pa%2bV%2bVtLkg&riu=http%3a%2f%2fwww.bhwt.org.uk%2fwp-content%2fuploads%2f2015%2f03%2fMcdonalds_Logo.jpg&ehk=0D7r2idvlHbCmzO78w9RU8t5x%2bMiD4KqIug9A%2bSKH6s%3d&risl=&pid=ImgRaw&r=0"
      
    ]
    
    return (
      <div className="App">
        <Navbar>
          <Paper className="ViewContainer">
            <Viewtitle buttonText="Crear Proyecto" buttonUrl="/create-project" showButton="True"> 
                Projects
            </Viewtitle>
            { 
              projects?
                projects.map((project,index)=>
                <Project  id={project._id} name={project.mainWord} url={imgUrl[index]} />
                )
                :
                null
            }
          </Paper>
        </Navbar>
      </div>
      
    );
  }
}

/*function Projects() {


  const projects = ["MC Donalds", "UTEC"];
  const imgUrl = [
    "https://th.bing.com/th/id/R.bddb092bd4308d7ae43f26869c83958d?rik=HeJ2pa%2bV%2bVtLkg&riu=http%3a%2f%2fwww.bhwt.org.uk%2fwp-content%2fuploads%2f2015%2f03%2fMcdonalds_Logo.jpg&ehk=0D7r2idvlHbCmzO78w9RU8t5x%2bMiD4KqIug9A%2bSKH6s%3d&risl=&pid=ImgRaw&r=0",
    "https://negocio.pe/sites/negocio.logicaldesign.pe/files/styles/maxima_imagen/public/logo_con_aire_-_copia.png?itok=5yf7iv9q"
  ]
  const items = [];

  projects.map((project,index) => {
    items.push(<Project name={project} url={imgUrl[index]}/>);
  })
  
    return (
      <div className="App">
        <Navbar>
          <Paper className="ViewContainer">
            <Viewtitle> 
                Projects
            </Viewtitle>
            {items}
          </Paper>
        </Navbar>
      </div>
      
    );
  }*/
  
  export default Projects;
