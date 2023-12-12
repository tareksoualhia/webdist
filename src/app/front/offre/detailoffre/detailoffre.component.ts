import { Component, OnInit } from '@angular/core';
import { OffreService} from 'src/app/Services/ServiceOffre/offre.service'
import { Offre } from 'src/app/model/offre';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-detailoffre',
  templateUrl: './detailoffre.component.html',
  styleUrls: ['./detailoffre.component.css']
})
export class DetailoffreComponent implements OnInit {
  offre : Offre=new Offre();  

  constructor( private of:OffreService,private router:Router , private ac:ActivatedRoute) { }

  ngOnInit(): void {

    this.ac.paramMap.subscribe(res=>this.of.getOffreById(Number(res.get(
      'idOffre'))
      ).subscribe(res1=>{this.offre=res1}));
  }


}
