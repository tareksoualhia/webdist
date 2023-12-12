import { Component, OnInit } from '@angular/core';
import { Offre } from 'src/app/model/offre';
import { OffreService} from 'src/app/Services/ServiceOffre/offre.service'  
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  img:any;
  listOffre : Offre[];
  constructor(private Offreservice:OffreService) { }

  ngOnInit(): void {
    console.log('AccueilComponent ngOnInit');  
    this.Offreservice.getOffre().subscribe(res=>{
      this.listOffre=res;
    })
  }

}
