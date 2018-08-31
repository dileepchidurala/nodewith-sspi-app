import { Component, OnInit } from '@angular/core';
import { KeralafundsserviceService } from '../keralafundsservice.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user: any;
  constructor(public service: KeralafundsserviceService) {}

  ngOnInit() {
    this.getuser();
  }
  getuser() {
    console.log('testing');
    this.service.getuser().subscribe(result => (this.user = result.name));
  }
}
