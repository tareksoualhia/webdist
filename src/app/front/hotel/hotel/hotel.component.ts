import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';
import { HotelServiceService } from 'src/app/Services/Hotel/hotel-service.service';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  listhotel : Hotel[];

  constructor(private hotelservice:HotelServiceService) { }

  ngOnInit(): void {
    this.hotelservice.getHotelList().subscribe(res=>{
      this.listhotel=res;
    })

  }

}
