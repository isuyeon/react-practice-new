import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.scss';

class Movie extends Component {
    static defaultProps = {
        title: '제목',
        poster: '',
        genres: '',
        synopsis: ''
    }
    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        genres: PropTypes.array,
        synopsis: PropTypes.string
    }

    render(){
        return(
            <div>
                <Header title={this.props.title} poster={this.props.poster} />
                <Moviegenres genres={this.props.genres} />
                <Synopsis synopsis={this.props.synopsis} />
            </div>
        );
    }
}

function Header({title,poster}) {
    return(
        <header className="header">
            <img src={poster} alt={title} />
            <h1 className="title">{title}</h1>
        </header>
    )
}

function Moviegenres({genres}) {
    const genre = genres.map((genre,index) => {
        return(
            <li key={index}>{genre}</li>
            // <li key={index}>{genre}{genres.length -1 !== index && ', '}</li>
        )
    })
    return (
        <ul className="list-t1">{genre}</ul>
    )
}

function Synopsis({synopsis}) {
    return(
        <LinesEllipsis text = {synopsis}
        maxLine = '5'
        ellipsis = '...'
        trimRight basedOn = 'letters'
        component = 'p'
        />
    )
}


export default Movie;
