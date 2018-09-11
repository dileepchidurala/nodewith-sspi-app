import { Component, OnInit } from '@angular/core';
import { KeralafundsserviceService } from '../keralafundsservice.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user: any;
  name: any;
  email: string;
  check: boolean;
  loding: String = 'Loading ...';
  constructor(public service: KeralafundsserviceService) {}

  ngOnInit() {
    this.getuser();
  }
  validate() {
    this.service.validate().subscribe(result => {
      this.loding = '';
      console.log(this.check);
      if (result === 405) {
        this.check = false;
      } else {
        this.check = true;
      }
    });
  }
  getuser() {
    this.service.getuser().subscribe(result => {
      this.user = result.name.substring(3);
      this.email = this.user + '@teradata.com';
      this.validate();
      this.getfullname();
    });
  }
  getfullname() {
    this.service.getfullname().subscribe(result => {
      this.name = result[0].Full_Name;
    });
  }
}
