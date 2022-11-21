import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.css']
})
export class DescriptionsComponent {
  param : any
  constructor(@Inject(DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.param = this.data.val
    console.log('parameter value')
    console.log(this.param)
  }
}
