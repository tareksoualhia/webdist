import { Component, OnInit } from '@angular/core';
import { Maisonhote } from 'src/app/model/maisonhote';
import { MaisonhoteService } from 'src/app/Services/MaisonHote/maisonhote.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-listmaisonhote',
  templateUrl: './listmaisonhote.component.html',
  styleUrls: ['./listmaisonhote.component.css']
})


export class ListmaisonhoteComponent implements OnInit {

  listmaisonhote : Maisonhote[];

  maisonhote : Maisonhote[];
 
    img:any;
  constructor(private maisonhoteservice:MaisonhoteService , private ac:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.img=""
    this.maisonhoteservice.getMaisonHote().subscribe(res=>{
      this.listmaisonhote=res;
    })
    
  }

  delete(id: number,i:number) {
    this.listmaisonhote.splice(i, 1);
    this.maisonhoteservice.deleteMaisonHote(id).subscribe();
  }


  update(i:Maisonhote){
    for (let k in this.listmaisonhote){
      if (this.listmaisonhote[k].id == i.id){
        this.listmaisonhote[k]=i;
      }
    }
  }

  

  



    


}
