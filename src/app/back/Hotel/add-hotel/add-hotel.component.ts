import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/model/hotel';
import { HotelServiceService } from 'src/app/Services/Hotel/hotel-service.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {
  imgURL: any;

  imagePath: any;
  file:File;
  userFile:any;
  hotel : Hotel=new Hotel();

  message:any;

  constructor(private ps:HotelServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  save(){
    const formData =new FormData();
    const hotel1 =new Hotel();
    hotel1.nom=this.hotel.nom;
    hotel1.description=this.hotel.description;
    hotel1.prix=this.hotel.prix;

    formData.append('Hotel',JSON.stringify(hotel1));
    formData.append('file',this.userFile);

    this.ps.addHotel(formData).subscribe (res=>{console.log('image est creé!');

    //this.router.navigateByUrl('/apps/livraison/detail-liv');
   //this.router.navigate(['apps/livraison/detail']);

    }) ;
    ; }
    uploadImage(event: any) {
      if (event.target.files && event.target.files[0]) {
        let reader = new FileReader();

        reader.onload = (event: any) => {
          this.imagePath = event.target.result;
        };

        reader.readAsDataURL(event.target.files[0]);
      }
    }
    onSelectFile(event:any) {
      if (event.target.files.length > 0)
      {
        const file = event.target.files[0];
        this.userFile = file;
       // this.f['profile'].setValue(file);

      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }

      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }
    }
    }



}
