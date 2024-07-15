import { Component } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent {
  promotionMessage = "$20 off $49+ FOR NEW CUSTOMERS";
  code = "NEWPETCO20"

}
