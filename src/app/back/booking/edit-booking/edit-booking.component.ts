import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/model/booking';
import { BookingService } from 'src/app/Services/Booking/booking.service';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css']
})
export class EditBookingComponent implements OnInit {
  id:string;
  booking : Booking = new Booking();
  selectedType = new FormControl();
  types: string[] = ['Dar selma', 'Dar khereddine', 'Dar Misk '];
  types1: string[] = ['Movenpick', 'Sousse palace', 'Emir'];
  types2: string[] = ['Car', 'Avion', 'Voiture'];
  constructor(private sf:BookingService , private ac:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.ac.paramMap.subscribe(res=>this.sf.getBookingById(Number(res.get(
      'id'))
      ).subscribe(res1=>{this.booking=res1}));
     
     console.log(this.booking)
  }
  update(){
    this.sf.UpdateBooking(this.booking).subscribe(res=>{window.location.reload()});
   
 }
}
