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
  form = true;

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
          const postdetails: Detail = {
            id: this.keralaservice.user.name,
            name: this.keralaservice.user.name,
            amount: amount
          };
          this.keralaservice.postamount(postdetails).subscribe(
            result => {
              if (result === 201) {
                this.msg =
                  'Your submission has be updated thanks for submission. A mail will be sent to you';
              }
              if (result === 501) {
                this.msg =
                  'Some error has been occured please try again or contact us';
              }
              this.form = false;
            },
            error => {
              console.log('got it');
              if (error.status === 501) {
                this.msg =
                  'Some error has been occured please try again or contact us';
              }
              this.form = false;
            }
          );
        } else {
          // DO SOMETHING ELSE
          console.log('DO nothing');
        }
      });
  }
}
