import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  /*
  postGame(data: any){
    return this.http.post<any>("http://localhost:3000/posts", data)
    .pipe(map((res:any)=>
    {
      return res;
    }));
  }
  */

  
}
