import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      { budget: 10000, homepage: 'www.zetacomsinc.com', id: 11,  original_title:'Termonator-x',overview:'A long very very very long test sory is here, just testing to see its workings',backdrop_path: '/test.png', logo_path: '/.asset.png'  },
  
  { budget: 300000, homepage: 'www.zetacomsinc.com', id: 12,  original_title:'Term1nator-xy',overview:'A second long very very very long test sory is here, just testing to see its workings',backdrop_path: '/test.png', logo_path: '/.asset.png'  },
  
  
  { budget: 5800000, homepage: 'www.zetacomsinc.com', id: 13,  original_title:'Robocop-x',overview:'A long very very very long test sory is here, just testing to see its workings',backdrop_path: '/test.png', logo_path: '/.asset.png'  },
  
  
  { budget: 6700000, homepage: 'www.zetacomsinc.com', id: 14,  original_title:'Rambo',overview:'A long very very very long test sory is here, just testing to see its workings',backdrop_path: '/test.png', logo_path: '/.asset.png'  },
  
  
  { budget: 1007800, homepage: 'www.zetacomsinc.com', id: 15,  original_title:'Vandamm',overview:'A long very very very long test sory is here, just testing to see its workings',backdrop_path: '/test.png', logo_path: '/.asset.png'  },
  
  
  { budget: 34080000, homepage: 'www.zetacomsinc.com', id: 16,  original_title:'Termonator-x',overview:'A long very very very long test sory is here, just testing to see its workings',backdrop_path: '/test.png', logo_path: '/.asset.png'  }
    ];
	
	
    return {movies};
  }

  // Overrides the genId method to ensure that a movie always has an id.
  // If the movies array is empty,
  // the method below returns the initial number (11).
  // if the movies array is not empty, the method below returns the highest
  // movie id + 1.
  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 11;
  }
}