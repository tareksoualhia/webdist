import { Component, OnInit } from '@angular/core';
import { MaisonhoteService } from 'src/app/Services/MaisonHote/maisonhote.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Maisonhote } from 'src/app/model/maisonhote';

@Component({
  selector: 'app-detailmaisonhote',
  templateUrl: './detailmaisonhote.component.html',
  styleUrls: ['./detailmaisonhote.component.css']
})
export class DetailmaisonhoteComponent implements OnInit {
  maisonhote : Maisonhote=new Maisonhote();  
  constructor( private maisonhoteservice:MaisonhoteService,private router:Router, private ac:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("test")
    this.ac.paramMap.subscribe(res=>this.maisonhoteservice.getMaisonHoteById(Number(res.get('id'))).subscribe(res1=>{this.maisonhote=res1}));

     console.log(this.maisonhote)

  }

}
