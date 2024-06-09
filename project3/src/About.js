/*import "./App.css"
import "./About.css"

function About(){
    return (
        <div className="About">
            <div className="text">
            <h1>About us</h1>
            <p className="Abt-paragraf">Welcome to our flower shop! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a ex libero. 
            Duis mollis nunc sit amet maximus pharetra. Pellentesque ac nisl nec lacus ornare ornare vel sed tortor. 
            Vivamus sed diam nec orci suscipit volutpat. Vestibulum ornare nunc vitae est tincidunt, ut commodo tellus auctor. 
            Aenean bibendum elementum posuere. Nulla quis commodo velit. Mauris augue ex, pretium ut mauris quis, ornare ullamcorper 
            velit. 
            Nullam interdum nisl non scelerisque ultrices. Aenean ultricies viverra venenatis.</p>
            </div>
            <div className="Pic">
            <img src="https://i.pinimg.com/564x/e2/1b/69/e21b692238cb904a07a6d61e3529c4b2.jpg"></img>
            </div>
            
        </div>
        
    );
};

export default About;*/

import "./App.css";
import "./About.css";
import * as React from 'react';
import Grid from '@mui/material/Grid';

function About() {
    return (
        <div className="About">
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item xs={9} md={6}>
                    <div className="text">
                        <h1>About us</h1>
                        <p className="Abt-paragraf">
                            Welcome to our flower shop! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a ex libero.
                            Duis mollis nunc sit amet maximus pharetra. Pellentesque ac nisl nec lacus ornare ornare vel sed tortor.
                            Vivamus sed diam nec orci suscipit volutpat. Vestibulum ornare nunc vitae est tincidunt, ut commodo tellus auctor.
                            Aenean bibendum elementum posuere. Nulla quis commodo velit. Mauris augue ex, pretium ut mauris quis, ornare ullamcorper velit.
                            Nullam interdum nisl non scelerisque ultrices. Aenean ultricies viverra venenatis.
                        </p>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className="Pic">
                        <img src="https://i.pinimg.com/564x/e2/1b/69/e21b692238cb904a07a6d61e3529c4b2.jpg" alt="About us" />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default About;
