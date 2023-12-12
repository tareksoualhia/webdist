import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Transport } from 'src/app/model/transport';
import { TransportService } from 'src/app/Services/transport/transport.service';
@Component({
  selector: 'app-transportdetail',
  templateUrl: './transportdetail.component.html',
  styleUrls: ['./transportdetail.component.css']
})
export class TransportdetailComponent implements OnInit {
  transport: Transport = new Transport();

  constructor(private formBuilder:FormBuilder , private ts:TransportService,private router:Router, private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.ac.paramMap.subscribe(res=>this.ts.getTransportById(Number(res.get(
      'id'))
      ).subscribe(res1=>{this.transport=res1}));

     console.log(this.transport)
  }

}
