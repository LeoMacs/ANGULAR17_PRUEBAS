import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  private myAppUrl="http://localhost:59394/";
  private myApiUrl="api/tarjeta/";

  constructor(private http:HttpClient) { }

  getLisTarjetas():Observable<any>{
    return this.http.get(this.myAppUrl+this.myApiUrl);
  }

  deleteTarjeta(indice:number):Observable<any>{
    return this.http.delete(this.myAppUrl+this.myApiUrl+indice);
  }

  saveTarjeta(tarjeta:any):Observable<any>{
    return this.http.post(this.myAppUrl+this.myApiUrl,tarjeta);
  }

  updateTarjeta(id:number,tarjeta:any):Observable<any>{
    return this.http.put(this.myAppUrl+this.myApiUrl+id,tarjeta);
  }
}
