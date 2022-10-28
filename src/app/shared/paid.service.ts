import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaidService {

  constructor( private http : HttpClient) { }

  postPaid(data:any){
    return this.http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getPaid(){
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updatePaid(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/posts/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
}
}