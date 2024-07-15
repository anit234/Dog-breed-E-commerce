import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  searchText: string = ''
  onHandleChange(e: string) {
    this.searchText = e;
  }

}
