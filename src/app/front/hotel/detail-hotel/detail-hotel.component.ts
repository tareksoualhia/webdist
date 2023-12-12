import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/app/model/hotel';
import { HotelServiceService } from 'src/app/Services/Hotel/hotel-service.service';

@Component({
  selector: 'app-detail-hotel',
  templateUrl: './detail-hotel.component.html',
  styleUrls: ['./detail-hotel.component.css']
})
export class DetailHotelComponent implements OnInit {
  hotel : Hotel=new Hotel();
  constructor( private hotelservice:HotelServiceService,private router:Router, private ac:ActivatedRoute) { }

  ngOnInit(): void {

    console.log("test")
    this.ac.paramMap.subscribe(res=>this.hotelservice.getHotelById(Number(res.get('id'))).subscribe(res1=>{this.hotel=res1}));

     console.log(this.hotel)
  }

}
