import { Component, OnInit } from '@angular/core';
import { KeralafundsserviceService } from '../keralafundsservice.service';
import { ViewContainerRef } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { Detail } from '../postdetails';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  details: FormGroup;
  user: string;
  msg: string;

  constructor(
    private keralaservice: KeralafundsserviceService,
    private fb: FormBuilder,
    private _dialogService: TdDialogService,
    private _viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    this.details = this.fb.group({
      amount: [
        ,
        Validators.compose([Validators.required, Validators.pattern('[0-9]*')])
      ]
    });
  }

  Submit(values: any) {
    const cash: number = +values.amount;
    this.openConfirm(cash);
  }

  openConfirm(amount: number): void {
    this._dialogService
      .openConfirm({
        message: `The amount you want to contribute is ${amount}. Is this okay?`,
        disableClose: false,
        viewContainerRef: this._viewContainerRef,
        title: 'Confirm',
        cancelButton: 'No, I want to cancel',
        acceptButton: 'Yes',
        width: '500px'
      })
      .afterClosed()
      .subscribe((accept: boolean) => {
        if (accept) {
          // DO SOMETHING
          console.log(
            `Make serveice here and store in table${amount} by ${
              this.keralaservice.user.name
            }`
          );
          const postdetails: Detail = {
            id: this.keralaservice.user.name,
            name: this.keralaservice.user.name,
            amount: amount
          };
          console.log(postdetails);
          this.keralaservice
            .postamount(postdetails)
            .subscribe(result => console.log(result));
        } else {
          // DO SOMETHING ELSE
          console.log('DO nothing');
        }
      });
  }
}
