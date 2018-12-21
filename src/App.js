import React, { Component } from 'react';
import Movie from './Movie';
import './App.scss';

//배열
// const movie_title = ["a", "b", "c", "d"]
// const movie_images = ["image-a", "image-b", "image-c", "image-d"]
// const movies = [
//   {
//     title: "a",
//     image: "image-a"
//   }, {
//     title: "b",
//     image: "image-b"
//   }, {
//     title: "c",
//     image: "image-c"
//   }, {
//     title: "d",
//     image: "image-d"
//   }
// ]

class App extends Component {
  // Render:
  // componentWillMount
  // render
  // componentDidMout

  // Update
  // componentWillReciveProps
  // shouldComponentUpdate
  // componentWillUpdate
  // render
  // componentDidUpdate

  state = {
    greeting: 'hello',
    movies: ''
    // movies: [{
    //   title: "a",
    //   image: "image-a"
    // }, {
    //   title: "b",
    //   image: "image-b"
    // }, {
    //   title: "c",
    //   image: "image-c"
    // }, {
    //   title: "d",
    //   image: "image-d"
    // }]
  }

  callApi = () => {
    // setTimeout(() => {
    //    this.setState({
    //      greeting: 'hello again!',
    //      movies: [
    //        ...this.state.movies, //전개연산자: ...뒤에 위치한 배열 값을 그대로 꺼내서 현재 배열에 복사하는 것
    //        {
    //          title: "e",
    //          image: "image-e"
    //        }
    //      ]
    //    })
    // }, 3000)
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  getMovie = async() => {
    const getMovies = await this.callApi()
    this.setState({
      movies: getMovies
    })
  }

  renderMovies = () =>  {
    /* <Movie title={movie_title[0]} poster={movie_images[0]}/>
    <Movie title={movie_title[1]} poster={movie_images[1]}/>
    <Movie title={movie_title[2]} poster={movie_images[2]}/>
    <Movie title={movie_title[3]} poster={movie_images[3]}/> */
    /*const일 경우 movies.map()*/
    const movies = this.state.movies.map((movie) => {
      return <Movie
        title={movie.title}
        poster={movie.large_cover_image}
        genres={movie.genres}
        synopsis={movie.synopsis}
        key={movie.id}
      />
    })
    return movies;
  }

  loading = () => {
    return(
      <div className="loading">LOADING</div>
    )
  }

  componentWillMount() {
    console.log('will mount')
  }

  componentDidMount() {
    this.getMovie()
    
  }

  render() {
    console.log(this.state.greeting)
    return (
      <div className="App layout-t1">
        {this.state.movies ? this.renderMovies() : this.loading()}
      </div>
    );
  }
}

export default App;
