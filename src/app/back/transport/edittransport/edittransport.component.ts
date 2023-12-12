import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Transport } from 'src/app/model/transport';
import { TransportService } from 'src/app/Services/transport/transport.service';
@Component({
  selector: 'app-edittransport',
  templateUrl: './edittransport.component.html',
  styleUrls: ['./edittransport.component.css']
})
export class EdittransportComponent implements OnInit {
  selectedType = new FormControl();
  categories: string[] = ['Economy', 'Sport Car', 'Premuim', 'Luxury'];
 id:any;
 transport: Transport = new Transport();
  formValue!: FormGroup;

  imgURL: any;

  imagePath: any;
  file:File;
  userFile:any;


  message:any;

  constructor(private formBuilder:FormBuilder , private ts:TransportService,private router:Router, private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.ac.paramMap.subscribe(res=>this.ts.getTransportById(Number(res.get(
      'id'))
      ).subscribe(res1=>{this.transport=res1}));

     console.log(this.transport)

      this.formValue = this.formBuilder.group({
        modele:[''],
        image:[''],
        prix:[''],
        categorie:[''],
        description:[''],

      })


  }


  update(){
    const formData =new FormData();
    const transport1 =new Transport();
    transport1.id=this.transport.id;
    transport1.modele=this.transport.modele;
    transport1.categorie=this.transport.categorie;
    transport1.prix=this.transport.prix;
    transport1.description=this.transport.description;

    formData.append('transport',JSON.stringify(transport1));
    formData.append('file',this.userFile);

    this.ts.UpdateTransport(formData).subscribe (res=>{console.log('image est creé!');


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
