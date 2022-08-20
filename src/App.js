import React, { Component } from "react";
import ButtonList from "./ButtonList";
import Character from "./Character";

class App extends Component {
    
    state = {
        characters : [
            {
                name: 'Darth Vader',
                image: 'https://w7.pngwing.com/pngs/557/316/png-transparent-anakin-skywalker-palpatine-lego-minifigure-death-star-lego-star-wars-star-wars-anakin-skywalker-starwar-star-wars.png',
                selected: false
            },
            {
                name: 'Kylo Ren',
                image: 'https://www.pngitem.com/pimgs/m/93-931978_lego-star-wars-kylo-ren-star-war-lego.png',
                selected: false
            },
            
            {
                name: 'Yoda',
                image: 'https://www.pngitem.com/pimgs/m/93-931978_lego-star-wars-kylo-ren-star-war-lego.png',
                selected: false
            },
            {
                name: 'Rey',
                image: 'https://www.nicepng.com/png/full/151-1513286_rey-rey-lego.png',
                selected: false
            }
            
        ]
    }
    
    render(){
        return(
            <div>
                <ButtonList characters={this.state.characters} />
                <Character/>
            </div>
        );
    };
}

export default App;