import React from "react";
import MovieList from "./MovieList"
import Navbar from "./Navbar";
import {movies} from "./moviesData"

class App extends React.Component{

  constructor(){
    super();
    this.state = {
        // movies(this is the movies from state): movies(this is the movies we are getting from import i.e moviesData.js)
       
        movies: movies,
        cartCount: 0,
    }
}


handleIncStar = (movie) =>{
    // handleIncStar = (movie1) =>{

    const {movies} = this.state;

    const mid = movies.indexOf(movie);
    // const mid = movies.indexOf(movie1);

    if(movies[mid].stars >= 5){
        return;
    }
    movies[mid].stars += 0.5;

    

    this.setState({
        movies: movies
     //aliter--> movies (bcoz key-value pair has the same name)


    })

}

handleDecStar = (movie) =>{
  // handleIncStar = (movie1) =>{

  const {movies} = this.state;

  const mid = movies.indexOf(movie);
  // const mid = movies.indexOf(movie1);

  if(movies[mid].stars <= 0){
      return;
  }
  movies[mid].stars -= 0.5;

  

  this.setState({
      movies: movies
   //aliter--> movies (bcoz key-value pair has the same name)


  })

}

handleToggleFav = (movie) =>{
const {movies} = this.state;
const mid = movies.indexOf(movie);
movies[mid].fav = !movies[mid].fav;

this.setState({
  movies
})
}

handleToggleCart =(movie) =>{
let {movies,cartCount} =this.state;
const mid = movies.indexOf(movie);
movies[mid].isInCart = !movies[mid].isInCart;
console.log(movies[mid].isInCart)

if(movies[mid].isInCart){
  cartCount = cartCount+1
}else{
  cartCount -= 1;
}



this.setState({
  // movies:movies
  movies,
  // cartCount: cartCount
  cartCount
})

console.log(cartCount);
}

  render() {

    const {movies,cartCount} = this.state;
    return ( 
      <>
      
      <Navbar cartCount = {cartCount}/>
      <MovieList movies ={movies}
                 addStars ={this.handleIncStar}
                 decStar = {this.handleDecStar}
                 ToggleFav={this.handleToggleFav}
                ToggleCart= {this.handleToggleCart}
      
      />
     
      </>
   
     )
  }
 
}

export default App;