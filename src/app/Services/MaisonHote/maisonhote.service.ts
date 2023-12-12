import { Injectable } from '@angular/core';
import { Maisonhote } from 'src/app/model/maisonhote';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaisonhoteService {

  httpOptions = {
    headers: new HttpHeaders({
     'content-type':'application/json'
    })
    }
  listmaisonhote : Maisonhote[];


  constructor(private http:HttpClient) { }


  getMaisonHote():Observable<Maisonhote[]>{
    return this.http.get<Maisonhote[]>("http://localhost:8089/maisonHote/getallmaisonHote");
   }

   deleteMaisonHote (id:number): Observable<Maisonhote> {


    return this.http.delete<Maisonhote>("http://localhost:8089/maisonHote/deletemaisonHote/"+id);

   }

   addMaisonHote(formData :FormData){
    return this.http.post<Maisonhote>('http://localhost:8089/maisonHote/addmaisonHote',formData);
}

getMaisonHoteById(id:number): Observable<Maisonhote>{

  const url="http://localhost:8089/maisonHote/get"+'/'+id;
  return this.http.get<Maisonhote>(url);

}


UpdateMaisonHote(formData :FormData) {
  return this.http.post<Maisonhote>('http://localhost:8089/maisonHote/updatemaisonHote/',formData);
}



}


