import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/app/model/hotel';
import { HotelServiceService } from 'src/app/Services/Hotel/hotel-service.service';

@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.css']
})
export class EditHotelComponent implements OnInit {

  selectedType = new FormControl();

 id:any;
 hotel: Hotel = new Hotel();
  formValue!: FormGroup;

  imgURL: any;

  imagePath: any;
  file:File;
  userFile:any;


  message:any;
  constructor(private formBuilder:FormBuilder,private ps:HotelServiceService, private ac:ActivatedRoute,private router: Router) { }


ngOnInit(): void {
  this.ac.paramMap.subscribe(res=>this.ps.getHotelById(Number(res.get(
    'id'))
    ).subscribe(res1=>{this.hotel=res1}));

   console.log(this.hotel)

    this.formValue = this.formBuilder.group({
      nom:[''],
      description:[''],
      prix:[''],
      image:[''],

    })
}
update(){
  const formData =new FormData();
  const hotel1 =new Hotel();
  hotel1.idHotel=this.hotel.idHotel;
  hotel1.nom=this.hotel.nom;
  hotel1.description=this.hotel.description;
  hotel1.prix=this.hotel.prix;

  formData.append('hotel',JSON.stringify(hotel1));
  formData.append('file',this.userFile);

  this.ps.UpdateHotel(formData).subscribe (res=>{console.log('image est creé!');


  window.location.reload();
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
