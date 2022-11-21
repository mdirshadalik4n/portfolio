import { Component } from '@angular/core';
import { DescriptionsComponent } from './descriptions/descriptions.component';
import {Dialog, DIALOG_DATA} from '@angular/cdk/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog : Dialog, ){}
  title = 'portfolio';
  openDialog(val: any) {
    this.dialog.open(DescriptionsComponent, {
      minWidth: '300px',
      data: { val }


    }, );
 
  }
}
