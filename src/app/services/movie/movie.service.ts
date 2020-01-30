import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Http, Response }           from '@angular/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Movie } from 'src/app/model/Movie';



@Injectable({
    providedIn: 'root'
})
export class MovieService {
    constructor(private $http: HttpClient) {

    }
    // constructor (private http: Http) {
    //     if (localStorage.getItem('lang') == 'pl') this.language = 'pl';
    //     else this.language = 'en';
    //   }
    private url = 'https://api.themoviedb.org/3/movie/';
    private searchUrl = 'https://api.themoviedb.org/3/search/movie';
    private apiKey = '68b4fe2a513155a58dd0af4adacb281b';
    private language= 'en';
    GetData(): Observable<Movie[]> {
        let headers = new HttpHeaders();
        
        let moviesUrl = `${this.url}popular?api_key=${this.apiKey}&language=${this.language}`;
        return this.$http.get<Movie[]>(moviesUrl);
        // return this.$http.get<any[]>('https://api.themoviedb.org/3/movie/top_rated?api_key=3dd554ba753cbd7822246b44c857a2b8&language=en-US&page=1', { headers });
        // headers = headers.append('x-rapidapi-host', 'restcountries-v1.p.rapidapi.com');
        // headers = headers.append('api_key', '3dd554ba753cbd7822246b44c857a2b8');
        // return this.$http.get<any[]>('https://api.themoviedb.org/3/movie/top_rated?api_key=3dd554ba753cbd7822246b44c857a2b8&language=en-US&page=1');
        
    }
    
}
