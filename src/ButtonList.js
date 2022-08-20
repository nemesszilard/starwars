import React, { Component } from "react";

class ButtonList extends Component {
    
renderButton = (character, index) => {
    return <button type="button">{character.name}</button>
}

    render() {
        return(
            <div>
                {this.props.characters.map(this.renderButton)}
            </div>
        );
    }
}

export default ButtonList;