import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';
import { HotelServiceService } from 'src/app/Services/Hotel/hotel-service.service';

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.css']
})
export class ListHotelComponent implements OnInit {
  hotel:Array<Hotel>=[];
  public data: any;
  constructor(private ps:HotelServiceService) { }
  //ImagePath: string;
img:any;
  ngOnInit(): void {
    this.img=""
    this.ps.getHotelList().subscribe(res=>{

      this.hotel=res;
    })
  }

  delete(id: number,i:number) {
    this.hotel.splice(i, 1);
    this.ps.deleteHotel(id).subscribe();

}

update(i:Hotel){
  for (let k in this.hotel){
    if (this.hotel[k].idHotel == i.idHotel){
      this.hotel[k]=i;
    }
  }
}












}
