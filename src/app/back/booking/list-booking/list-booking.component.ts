import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Booking } from 'src/app/model/booking';
import { BookingService } from 'src/app/Services/Booking/booking.service';


@Component({
  selector: 'app-list-booking',
  templateUrl: './list-booking.component.html',
  styleUrls: ['./list-booking.component.css']
})
export class ListBookingComponent implements OnInit {
  list: Booking[];
  listInitiale: Booking[];
  show:Boolean = false;
  myFact: Booking;
  dateFacture: Date;
 
  constructor(private us:BookingService, private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.us.getAllBooking().subscribe(res => {
      this.list = res;
      

    })
  }
  showEdit(i:Booking){
    // this.show=!this.show;
    this.show=true;
     this.myFact=i;
     console.log(this.show);
   }
   update(i:Booking){
    for (let k in this.list){
      if (this.list[k].id == i.id){
        this.list[k]=i;
      }
    }
  }
   delete(id: number,i:number) {
    this.list.splice(i, 1);
    this.us.deleteBooking(id).subscribe();
  }
}
