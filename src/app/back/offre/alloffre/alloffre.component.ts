import { Component, OnInit } from '@angular/core';
import { Offre } from 'src/app/model/offre';
import { OffreService} from 'src/app/Services/ServiceOffre/offre.service'  
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alloffre',
  templateUrl: './alloffre.component.html',
  styleUrls: ['./alloffre.component.css']
})
export class AlloffreComponent implements OnInit {

  img:any;
  listOffre : Offre[];
  offres:Offre[];
  constructor(private Offreservice:OffreService, private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.img=""

    this.Offreservice.getOffre().subscribe(res=>{
      this.listOffre=res;
    })

  }
  delete(id: number,i:number) {
    this.listOffre.splice(i, 1);
    this.Offreservice.deleteOffre(id).subscribe();
  }
  update(i:Offre){
    for (let k in this.listOffre){
      if (this.listOffre[k].idOffre == i.idOffre){
        this.listOffre[k]=i;
      }
    }
  }
}
