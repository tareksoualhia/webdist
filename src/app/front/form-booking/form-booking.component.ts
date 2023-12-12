import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Booking } from 'src/app/model/booking';
import { BookingService } from 'src/app/Services/Booking/booking.service';


@Component({
  selector: 'app-form-booking',
  templateUrl: './form-booking.component.html',
  styleUrls: ['./form-booking.component.css']
})
export class FormBookingComponent implements OnInit {
  selectedType = new FormControl();
  types: string[] = ['Dar selma', 'Dar khereddine', 'Dar Misk '];
  types1: string[] = ['Movenpick', 'Sousse palace', 'Emir'];
  types2: string[] = ['Car', 'Avion', 'Voiture'];
  formValue!: FormGroup;
  listbooking: Booking[];
  booking : Booking;
  constructor(private bookingService : BookingService , private router:Router) { }

  ngOnInit(): void {
    this.booking= new Booking();
  }

  save(){
    this.bookingService.addBooking(this.booking).subscribe(res=>{
      console.log('booking cree');
      window.location.reload();
    });
    
  }

}
