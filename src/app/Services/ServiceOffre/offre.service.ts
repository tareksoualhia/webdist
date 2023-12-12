import { Injectable } from '@angular/core';
import { Offre } from 'src/app/model/offre';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  httpOptions = {
    headers: new HttpHeaders({
     'content-type':'application/json',
     'Access-Control-Allow-Origin': '*'
    })
    }

  listOffre : Offre[];


  constructor(private http:HttpClient) { }


  getOffre():Observable<Offre[]>{
    return this.http.get<Offre[]>("http://localhost:8089/offre/getalloffre");
   }
  deleteOffre(Offre: Offre | number): Observable<Offre> {
    const id = typeof  Offre === 'number' ? Offre : Offre.idOffre;
    const url="http://localhost:8089/offre/deleteoffre/"+id+"";
    return this.http.delete<Offre>(url);
  }
  addOffre(formData :FormData){
    return this.http.post<Offre>('http://localhost:8089/offre/add',formData);
}
  getOffreById(Offre: Offre | number): Observable<Offre>{
  const id = typeof  Offre === 'number' ? Offre : Offre.idOffre;
  const url="http://localhost:8089/offre/get/"+id+"";
  return this.http.get<Offre>(url);
  }
  UpdateOffre(formData :FormData) {
    return this.http.post<Offre>('http://localhost:8089/offre/edit/',formData);
  }
}
