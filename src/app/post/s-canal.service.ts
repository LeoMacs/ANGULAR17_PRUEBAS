import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Canal } from '../class/canal';

@Injectable({
  providedIn: 'root'
})
export class SCanalService {

  url='/api/canal/';

  /*--------------------------------------------
  Http Header Options
  --------------------------------------------*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
//---------------------------------------------//
  constructor(private httpClient: HttpClient) { }
//---------------------------------------------//
  getAllCanales():Observable<any>{
    return this.httpClient.get(this.url, {responseType: 'json'});
  }
//---------------------------------------------//
  getCanalbyID(id:number):Observable<any>{
    return this.httpClient.get(this.url+id);
  }
//---------------------------------------------//
  createCanal(canal: Canal):Observable<any>{
    return this.httpClient.post(this.url,  JSON.stringify(canal), this.httpOptions);
  }
//---------------------------------------------//
  updateCanal(canal: Canal):Observable<any>{
    return this.httpClient.put(this.url,JSON.stringify(canal) , this.httpOptions);
  }
//---------------------------------------------//
  deleteCanalbyID(id:number):Observable<number>{
    return this.httpClient.delete<number>(this.url+id,this.httpOptions);
    
  }

}
