import { Component } from '@angular/core';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent {
  title: string;
  description: string;
  onSubmit():void {
    console.log(this.title,this.description);
  }
}
