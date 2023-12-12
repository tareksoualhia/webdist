import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Offre } from 'src/app/model/offre';
import { OffreService } from 'src/app/Services/ServiceOffre/offre.service';
@Component({
  selector: 'app-addoffre',
  templateUrl: './addoffre.component.html',
  styleUrls: ['./addoffre.component.css']
})
export class AddoffreComponent implements OnInit {

  types: string[] = ['Group Travel', 'Short Trip', 'Cruise', 'Honey Moon'];

  imgURL: any;

  imagePath: any;
  file:File;
  userFile:any;
  Offre : Offre=new Offre();

  message:any;

  constructor(private of:OffreService,private router:Router) { }

  ngOnInit(): void {
  }

  save(){
    const formData =new FormData();
    const Offre1 =new Offre();
    Offre1.nom=this.Offre.nom;
    Offre1.type=this.Offre.type;
    Offre1.description=this.Offre.description;
    Offre1.prix=this.Offre.prix;
    Offre1.datedebut=this.Offre.datedebut;
    Offre1.datefin=this.Offre.datefin;

    formData.append('offre',JSON.stringify(Offre1));
    formData.append('file',this.userFile);

    this.of.addOffre(formData).subscribe (res=>{console.log('image est creé!');

    //this.router.navigateByUrl('/apof/livraison/detail-liv');
   //this.router.navigate(['apof/livraison/detail']);

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
