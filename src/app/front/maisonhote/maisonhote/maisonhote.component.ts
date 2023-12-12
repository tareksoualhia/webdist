import { Component, OnInit } from '@angular/core';
import { Maisonhote } from 'src/app/model/maisonhote';
import { MaisonhoteService } from 'src/app/Services/MaisonHote/maisonhote.service';

@Component({
  selector: 'app-maisonhote',
  templateUrl: './maisonhote.component.html',
  styleUrls: ['./maisonhote.component.css']
})
export class MaisonhoteComponent implements OnInit {
  listmaisonhote : Maisonhote[];

  constructor(private maisonhoteservice:MaisonhoteService) { }

  ngOnInit(): void {
    this.maisonhoteservice.getMaisonHote().subscribe(res=>{
      this.listmaisonhote=res;
    })
    
  }

}
