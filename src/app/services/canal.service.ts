import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Canal } from '../class/canal';

@Injectable({
  providedIn: 'root'
})
export class CanalService {

  url='https://localhost:44341/api/canal';

  constructor(private http: HttpClient) { 
  }

  getAllCanales():Observable<Canal[]>{
    return this.http.get<Canal[]>(this.url);
  }

  getCanalbyID(id:number):Observable<Canal>{
    return this.http.get<Canal>(this.url+'/'+id);
  }

  createCanal(canal: Canal):Observable<Canal>{
    const httpOptions={ headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post<Canal>(this.url+'/', canal, httpOptions);
  }

  updateCanal(canal: Canal):Observable<Canal>{
    const httpOptions={ headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.put<Canal>(this.url+'/', canal, httpOptions);
  }

  deleteCanalbyID(id:number):Observable<number>{
    const httpOptions={ headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.delete<number>(this.url+'/'+id,httpOptions);
    
  }
}
