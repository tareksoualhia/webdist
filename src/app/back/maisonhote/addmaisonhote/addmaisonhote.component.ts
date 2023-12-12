import { Component, OnInit } from '@angular/core';
import { Maisonhote } from 'src/app/model/maisonhote';
import { MaisonhoteService } from 'src/app/Services/MaisonHote/maisonhote.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-addmaisonhote',
  templateUrl: './addmaisonhote.component.html',
  styleUrls: ['./addmaisonhote.component.css']
})
export class AddmaisonhoteComponent implements OnInit {
  
  imgURL: any;
  imagePath: any;
  file:File;
  userFile:any;
  maisonhote : Maisonhote=new Maisonhote();  

  message:any;


  constructor(private maisonhoteservice:MaisonhoteService , private ac:ActivatedRoute, private route:Router ) { }

  ngOnInit(): void {
  }
  save(){ 
    const formData =new FormData();
    const maison1 =new Maisonhote();
    maison1.nom=this.maisonhote.nom;
    maison1.adresse=this.maisonhote.adresse;
    maison1.description=this.maisonhote.description;
    maison1.chambre=this.maisonhote.chambre;
    maison1.prix=this.maisonhote.prix;

   
   
    formData.append('MaisonHote',JSON.stringify(maison1));
    formData.append('file',this.userFile);  
    
    this.maisonhoteservice.addMaisonHote(formData).subscribe (res=>{console.log('image est creé!'); 
   
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
