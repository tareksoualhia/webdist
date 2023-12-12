import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MaisonhoteService } from 'src/app/Services/MaisonHote/maisonhote.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Maisonhote } from 'src/app/model/maisonhote';

@Component({
  selector: 'app-editmaisonhote',
  templateUrl: './editmaisonhote.component.html',
  styleUrls: ['./editmaisonhote.component.css']
})
export class EditmaisonhoteComponent implements OnInit {
  formValue!: FormGroup;

  imgURL: any;

  imagePath: any;
  file:File;
  userFile:any;

  message:any;
  id:any;
  maisonhote : Maisonhote=new Maisonhote();  
  constructor(private formBuilder:FormBuilder , private maisonhoteservice:MaisonhoteService,private router:Router, private ac:ActivatedRoute) { }

  ngOnInit(): void {

    console.log("test")
    this.ac.paramMap.subscribe(res=>this.maisonhoteservice.getMaisonHoteById(Number(res.get('id'))).subscribe(res1=>{this.maisonhote=res1}));

     console.log(this.maisonhote)

      this.formValue = this.formBuilder.group({
        nom:[''],
        adresse:[''],
        description:[''],
        chambre:[''],
        prix:[''],
       

      })
  }



  update(){
    const formData =new FormData();
    const maisonhote1 =new Maisonhote();
    maisonhote1.id=this.maisonhote.id;
    maisonhote1.nom=this.maisonhote.nom;
    maisonhote1.adresse=this.maisonhote.adresse;
    maisonhote1.description=this.maisonhote.description;
    maisonhote1.chambre=this.maisonhote.chambre;
    maisonhote1.prix=this.maisonhote.prix;

    formData.append('maisonhote',JSON.stringify(maisonhote1));
    formData.append('file',this.userFile);

    this.maisonhoteservice.UpdateMaisonHote(formData).subscribe (res=>{console.log('image est creé!');


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
