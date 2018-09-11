import { Component, OnInit, Input } from '@angular/core';
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
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  details: FormGroup;
  msg: string;
  form = true;
  @Input('userId')
  userId;
  @Input('fullname')
  fullname: string;

  constructor(
    private keralaservice: KeralafundsserviceService,
    private fb: FormBuilder,
    private _dialogService: TdDialogService,
    private _viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    console.log(this.userId, this.fullname);
    this.details = this.fb.group({
      amount: [
        ,
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(1),
          Validators.min(1)
        ])
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
            id: this.userId,
            name: this.fullname,
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
