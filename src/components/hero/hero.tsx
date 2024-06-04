import Movies from "../../Movies.tsx";
import Carousel from "react-material-ui-carousel";
import { Paper } from '@mui/material';
import './hero.css';


function Hero({movies} : { movies: Movies[]}) {
    return (
        <div className='movie-carsousel-container'>
            <Carousel>
                {
                    movies.map((movie)=> {
                      return (
                          <Paper>
                              <div className='movie-card-container'>
                                  <div className='movie-card' style={{"--img": `url(${movie.backdrops[Math.floor(Math.random() * movie.backdrops.length)]})`}}>
                                      <div className='movie-detail'>
                                            <div className={'movie-poster'}>
                                                <img src={movie.poster} alt="${movie.title}-banner"/>
                                            </div>
                                         <div className={"movie-data"}>
                                              <div className='movie-title'>
                                                  <h3>{movie.title}</h3>
                                              </div>
                                              <div className='movie-info'>
                                                  <p>genres: {movie.genres.join(', ')}</p>
                                                  <p>Release Date: {movie.releaseDate}</p>
                                              </div>
                                         </div>
                                      </div>
                                  </div>
                              </div>
                          </Paper>
                      )
                  })
              }
          </Carousel>
      </div>
    );
}

export default Hero;