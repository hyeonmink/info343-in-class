import React from "react";

var BASE_URL = "http://image.tmdb.org/t/p/w154";

export default class extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <img src = {BASE_URL + this.props.movie.poster_path} alt=""/>
                <h2>{this.props.movie.title}</h2>
                <p>{this.props.movie.overview}</p>
            </div>
        );
    }
}