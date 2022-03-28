import http from './httpService';
import { apiURL } from '../config.json';

const apiEndpoint = apiURL + "/movies";
const auth_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQwM2IxYzFiMmUxNjU4YTljZDZlMDEiLCJpYXQiOjE2NDgzNzY2MDV9.MTEkPRdq39lOfAwfjaJ_Gu81fnDPZhzvi1WUMAEF2QM";

function movieURL(id) {
    return `${apiEndpoint}/${id}`
}

export function getMovies(){
    return http.get(apiEndpoint);
}

export function getMovie(movieId){
    return http.get(movieURL(movieId));
}

export function saveMovie(movie){
    if(movie._id){
        const body = {...movie};
        delete body._id
        return http.put(movieURL(movie._id), body);
    }

    return http.post(apiEndpoint, movie);
}

export function deleteMovie(movieId){
    return http.delete(movieURL(movieId));
}