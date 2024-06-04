import {useEffect, useState} from "react";
import api from "./api/axiosConfig.tsx"

// create a type for Movies
interface Movies {
    id: {
        timestamp: number;
        date: string;
    };
    title: string;
    poster: string;
    description: string;
    releaseDate: string;
    genres: string[];
    backdrops: string[];
    reviewIds: string[];
    trailerLink: string;
}

const Movies = () => {
    const [movies, setMovies] = useState<Movies[]>([]);

    const getMovies = async () => {
        try {
            const response = await api.get("/api/v1/movies");
            console.log(response.data);
            setMovies(response.data);
        } catch (err) {
            console.error(err);
        }

    }

    useEffect(() => {
        getMovies();
    }, []);

    return movies;
};

export default Movies;