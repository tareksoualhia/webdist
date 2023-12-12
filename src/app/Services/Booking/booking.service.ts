import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Booking } from 'src/app/model/booking';
// import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  list: Booking[];



  constructor(private _http: HttpClient) { }


  getAllBooking(): Observable<Booking[]>{

    return this._http.get<Booking[]>("http://localhost:8089/api/reservation/list");

  }
  deleteBooking(booking: Booking | number): Observable<Booking> {
    const id = typeof  booking === 'number' ? booking : booking.id;
    const url="http://localhost:8089/api/reservation/delete/"+id;
    return this._http.delete<Booking>(url);
  }


  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
  addBooking(Booking: Booking): Observable<Booking> {

    return this._http.post<Booking>('http://localhost:8089/api/reservation/add',Booking, this.httpOptions);
  }

  UpdateBooking(Booking: Booking): Observable<Booking> {
   return this._http.put<Booking>('http://localhost:8089/api/reservation/edit',Booking, this.httpOptions);
  }
  getBookingById(id: number): Observable<Booking> {
    const url="http://localhost:8089/api/reservation/get"+'/'+id;

    return this._http.get<Booking>(url);
  }


}
