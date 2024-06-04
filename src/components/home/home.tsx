import Movies from "../../Movies.tsx";
import Hero from "../hero/hero.tsx";


function Home({movies}: {movies: Movies[]}) {
    return (
        <div>
            <Hero movies={movies}></Hero>
        </div>
        
    );
}

export default Home;