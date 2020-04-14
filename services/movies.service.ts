import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { Movie } from '../movies';
import { catchError, retry, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  //private moviesUrl = 'api/movies';  // URL to web api
  
  API_KEY = '5f9e0554726728e3beb050d28d8fd56b';
  moviesUrl = 'https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&query=${term}';
  
  //https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&query=${title}&page=1;
  
  //http://www.omdbapi.com/?i=tt3896198&apikey=f5f29466&t=${movie}&r=json
  
  
  
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  
  
  
  
  /* GET movies whose query contains search term*/ 
  searchMovies(term: string): Observable<Movie[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
	  
      return of([]);
    }
    return this.http.get<Movie[]>(`http://www.omdbapi.com/?i=tt3896198&apikey=f5f29466&t=${term}&r=json&plot=full`);
	
	//.pipe(
	  //retry(3),
     // tap(x => x ?
        // this.log(`found movies matching "${term}"`) :
        // this.log(`no movies matching "${term}"`)),
     // catchError(this.handleError<Movie[]>('searchMovies', []))
	 
   // );
  }
  
  
  
  
  /** GET movies from the mock server */
 //getMovies (): Observable<Movie[]> {
   // return this.http.get<Movie[]>(this.moviesUrl)
     // .pipe(
       // tap(_ => console.log('fetched movies')),
        //catchError(this.handleError<Movie[]>('getMovies', []))
      //);
  //}
  
  
  
  
  
  /** GET movie by id. Return `undefined` when id not found 
  //getMovieNo404<Data>(id: number): Observable<Movie> {
    //const url = `${this.moviesUrl}/?id=${id}`;
    //return this.http.get(url)
      //.pipe(
       // map(movies => movies[0]), // returns a {0|1} element array
        //tap(h => {
         // const outcome = h ? `fetched` : `did not find`;
          //this.log(`${outcome} movie id=${id}`);
        //}),
        //catchError(this.handleError<Movie>(`getMovie id=${id}`))
      //);
 // }
  
  //*/
  
  
  /** GET movie by id. Will return 404 if id not found 
  getMovie(id: number): Observable<Movie> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Movie>(url).pipe(
      tap(_ => this.log(`fetched movie id=${id}`)),
      catchError(this.handleError<Movie>(`getMovie id=${id}`))
    );
  }
  
 */ 
  
  
  /* GET movies whose original_title contains search term 
  searchMovies(term: string): Observable<Movie[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Movie[]>(`${this.moviesUrl}/?original_title=${term}`).pipe(
      tap(x => x ?
         this.log(`found movies matching "${term}"`) :
         this.log(`no movies matching "${term}"`)),
      catchError(this.handleError<Movie[]>('searchMovies', []))
    );
  }
  
  */
  
  //////// Save methods //////////

  /** POST: add a new movie to the server 
  addMovie (movie: Movie): Observable<Movie> {
    return this.http.post(this.moviesUrl, movie, this.httpOptions).pipe(
      tap((newMovie: Movie) => console.log(`added movie w/ id=${newMovie.id}`)),
      catchError(this.handleError<Movie>('addMovie'))
    );
  }
  
  */
  
   /** DELETE: delete the movie from the server 
  deleteMovie (movie: Movie | number): Observable<Movie> {
    const id = typeof movie === 'number' ? movie : movie.id;
    const url = `${this.moviesUrl}/${id}`;

    return this.http.delete<Movie>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted movie id=${id}`)),
      catchError(this.handleError<Movie>('deleteMovie'))
    );
  }
  
  */
  
  
  /** PUT: update the movie on the server 
  updateMovie (movie: Movie): Observable<any> {
    return this.http.put(this.moviesUrl, movie, this.httpOptions).pipe(
      tap(_ => this.log(`updated movie id=${movie.id}`)),
      catchError(this.handleError<any>('updateMovie'))
    );
  }
  
  */
  
  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  
  
  private log(message: string) {
    console.log(message);
  
  }



  
  
 
  
   //Mthod for searching movies
  //searchmovies(term:string) {
     
	// this.moviesub.next(term);
	 
	 //this.movieout$ = this.moviesub
  // }
  
  
  
}
