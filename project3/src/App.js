/*import "./App.css";


function Home() {
  return (
    <div className="App-header">
      <div id="HomePic"></div>
      <div id="HomeDescription">
          <h1 className="Headers">Flower shop</h1>
          <p>Welcome to our flower shop! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a ex libero. 
            Duis mollis nunc sit amet maximus pharetra. Pellentesque ac nisl nec lacus ornare ornare vel sed tortor. 
            Vivamus sed diam nec orci suscipit volutpat. Vestibulum ornare nunc vitae est tincidunt, ut commodo tellus auctor. 
            Aenean bibendum elementum posuere. Nulla quis commodo velit. Mauris augue ex, pretium ut mauris quis, ornare ullamcorper 
            velit. 
            Nullam interdum nisl non scelerisque ultrices. Aenean ultricies viverra venenatis.</p>
            </div> 
        
      
    </div>
    
  );
}

export default Home;*/

import "./App.css";
import React from 'react';
import Grid from '@mui/material/Grid';

function Home() {
  return (
    <div className="App-header">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div id="HomePic"></div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div id="HomeDescription">
            <h1 className="Headers">Flower shop</h1>
            <p>
              Welcome to our flower shop! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a ex libero.
              Duis mollis nunc sit amet maximus pharetra. Pellentesque ac nisl nec lacus ornare ornare vel sed tortor.
              Vivamus sed diam nec orci suscipit volutpat. Vestibulum ornare nunc vitae est tincidunt, ut commodo tellus auctor.
              Aenean bibendum elementum posuere. Nulla quis commodo velit. Mauris augue ex, pretium ut mauris quis, ornare ullamcorper
              velit.
              Nullam interdum nisl non scelerisque ultrices. Aenean ultricies viverra venenatis.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;

