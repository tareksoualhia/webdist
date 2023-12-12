import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Transport } from 'src/app/model/transport';


import { TransportService } from 'src/app/Services/transport/transport.service';

@Component({
  selector: 'app-listtransport',
  templateUrl: './listtransport.component.html',
  styleUrls: ['./listtransport.component.css']
})
export class ListtransportComponent implements OnInit {
  transports:Transport[];
  list: Transport[];
img:any;



  constructor(private ts:TransportService, private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.img=""
    this.ts.getTransportList().subscribe(res => {
      this.list = res;
    })

  }
  delete(id: number,i:number) {
    this.list.splice(i, 1);
    this.ts.deleteTransport(id).subscribe();
  }
  update(i:Transport){
    for (let k in this.list){
      if (this.list[k].id == i.id){
        this.list[k]=i;
      }
    }
  }


}
