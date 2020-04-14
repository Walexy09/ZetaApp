import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class NewsService {

 

  API_KEY = '8548a1d4321b47ff924207d5006ff504';
  
  //https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8548a1d4321b47ff924207d5006ff504;
  //${this.API_KEY}
  
  //https://newsapi.org/v2/top-headlines?country=nigeria&apiKey=8548a1d4321b47ff924207d5006ff504;
  //${this.API_KEY}
  
  
 
  
  constructor(private httpClient: HttpClient ) { }
  
   public getNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=ng&apiKey=${this.API_KEY}` );
  } 
  
  
  
  
  
}
