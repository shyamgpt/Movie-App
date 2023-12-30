import {Component} from "react";
import MovieCard from "./Moviecard";


class MovieList extends Component{
    

    render(){
        // const {title,plot,price,rating,stars,fav,isIncart} = this.state.movies;
        const {movies, addStars, decStar, ToggleFav, ToggleCart} = this.props;

      //   addStars ={this.handleIncStar}
      //   decStar = {this.handleDecStar}
      //   ToggleFav={this.handleToggleFav}
      //  ToggleCart= {this.handleToggleCart}

        
        return(
            <>

             {/* <Moviecard title={title}
                        plot= {plot}
                        price= {price}
                        rating= {rating}
                        stars= {stars}
                        fav= {fav}
                        cart={cart}
                        /> */}
           
          {/* <MovieCard movies =(this.state)> */}
            {movies.map((movie)=> <MovieCard movies ={movie}
                                             addStars={addStars}
                                             decStar={decStar}
                                             ToggleCart={ToggleCart}
                                             ToggleFav={ToggleFav} 
                                             
                                            key = {movie.id}
                                             />)}
            </>
        )
    }
}

export default MovieList;