import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { Transport } from 'src/app/model/transport';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class TransportService {
  httpOptions = {
    headers: new HttpHeaders({
     'content-type':'application/json',
     'Access-Control-Allow-Origin': '*'
    })
    }

    snapshot: any;
  list: Transport[];

  constructor(private _http:HttpClient) { }

     getTransportList():Observable<Transport[]>{
       return this._http.get<Transport[]>("http://localhost:8089/api/transport/list");

     }

      deleteTransport (id:number): Observable<Transport> {


        return this._http.delete<Transport>("http://localhost:8089/api/transport/delete/"+id);

       }


    addTransport(formData :FormData){
      return this._http.post<Transport>('http://localhost:8089/api/transport/add',formData);
  }
  getTransportById(id:number): Observable<Transport>{
    const url="http://localhost:8089/api/transport/get"+'/'+id;
    return this._http.get<Transport>(url);
  }
  UpdateTransport(formData :FormData) {
    return this._http.post<Transport>('http://localhost:8089/api/transport/edit/',formData);
  }

}
