import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transport } from 'src/app/model/transport';
import { TransportService } from 'src/app/Services/transport/transport.service';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {
 list:Transport[];
 id:any;
  constructor(private ts:TransportService, private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.ts.getTransportList().subscribe(res => {
      this.list = res;
    })
  }

}
