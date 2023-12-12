import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Transport } from 'src/app/model/transport';
import { TransportService } from 'src/app/Services/transport/transport.service';
@Component({
  selector: 'app-addtransport',
  templateUrl: './addtransport.component.html',
  styleUrls: ['./addtransport.component.css']
})
export class AddtransportComponent implements OnInit {

  selectedType = new FormControl();
  categories: string[] = ['Economy', 'Sport Car', 'Premuim', 'Luxury'];

  formValue!: FormGroup;

  imgURL: any;

  imagePath: any;
  file:File;
  userFile:any;
  transport : Transport=new Transport();

  message:any;
  alltransport: any;

  constructor(private formBuilder:FormBuilder , private ts:TransportService,private router:Router) { }

  ngOnInit(): void {

      this.formValue = this.formBuilder.group({
        modele:[''],
        image:[''],
        prix:[''],
        categorie:[''],
        description:[''],

      })

  }

  save(){
    const formData =new FormData();
    const transport1 =new Transport();
    transport1.modele=this.transport.modele;
    transport1.categorie=this.transport.categorie;
    transport1.prix=this.transport.prix;
    transport1.description=this.transport.description;

    formData.append('transport',JSON.stringify(transport1));
    formData.append('file',this.userFile);

    this.ts.addTransport(formData).subscribe ({
      next: (v) => {console.log(v)},
    error: (e) => {
      alert("Error")
      console.log(e)},

    complete: () => {
      console.log('completé')
      alert("Transport ajouté avec succès")
      this.AllTransport();
      this.formValue.reset();
window.location.reload();

    }
  }
  ) ;
}
    AllTransport(){
      this.ts.getTransportList().subscribe(res => {
        this.alltransport = res;
      })
    }
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
