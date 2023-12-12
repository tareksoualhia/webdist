import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router';
import { Offre } from 'src/app/model/offre';
import { OffreService} from 'src/app/Services/ServiceOffre/offre.service'

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-editoffre',
  templateUrl: './editoffre.component.html',
  styleUrls: ['./editoffre.component.css']
})
export class EditoffreComponent implements OnInit {
  types: string[] = ['Group Travel', 'Short Trip', 'Cruise', 'Honey Moon'];
  selectedType = new FormControl();

  imgURL: any;
formValue!: FormGroup;
  imagePath: any;
  file:File;
  userFile:any;
  offre : Offre=new Offre();

  message:any;

  constructor(private formBuilder:FormBuilder , private of:OffreService,private router:Router , private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.ac.paramMap.subscribe(res=>this.of.getOffreById(Number(res.get(
      'idOffre'))
      ).subscribe(res1=>{this.offre=res1}));

     console.log(this.offre)
     this.formValue = this.formBuilder.group({
      nom:[''],
      type:[''],
      description:[''],
      prix:[''],
      datedebut:[''],
      datefin:[''],
      image:[''],

    })


  }

  update(){
    const formData =new FormData();
    const Offre1 =new Offre();
    Offre1.idOffre=this.offre.idOffre;
    Offre1.nom=this.offre.nom;
    Offre1.type=this.offre.type;
    Offre1.description=this.offre.description;
    Offre1.prix=this.offre.prix;
    Offre1.datedebut=this.offre.datedebut;
    Offre1.datefin=this.offre.datefin;

    formData.append('offre',JSON.stringify(Offre1));
    formData.append('file',this.userFile);

    this.of.UpdateOffre(formData).subscribe (res=>{console.log('image est creé!');

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
