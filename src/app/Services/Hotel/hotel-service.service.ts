import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';
import { Hotel } from 'src/app/model/hotel';


@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {


  httpOptions = {
    headers: new HttpHeaders({
     'content-type':'application/json',
     'Access-Control-Allow-Origin': '*'
    })
    }

    hotelUrl:string='http://localhost:8089/hotels';
    snapshot: any;

    constructor(private http:HttpClient) { }
    getHotelList():Observable<Hotel[]>{
    return this.http.get<Hotel[]>('http://localhost:8089/api/hotels/listhotel');
    }

    deleteHotel(hotel: Hotel | number): Observable<Hotel> {
      const id = typeof  hotel === 'number' ? hotel : hotel.idHotel;
      const url="http://localhost:8089/api/hotels/deletehotel/"+id;
      return this.http.delete<Hotel>(url);
    }


    addHotel(formData :FormData){
      return this.http.post<Hotel>('http://localhost:8089/api/hotels/add',formData);
  }


    UpdateHotel(formData :FormData) {
      return this.http.post<Hotel>('http://localhost:8089/api/hotels/edit/',formData);
    }

   getHotelById(id: number): Observable<Hotel> {
     const url="http://localhost:8089/api/hotels/get"+'/'+id;

     return this.http.get<Hotel>(url);
   }

}
