import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent {
  // menuItems: string[] = ['Home', 'Dogs', 'About', 'Contact']

  menuItems = [{ label: 'Home', link: '#' },
  { label: 'Dogs', link: '#' },
  { label: 'About', link: '#' },
  { label: 'Contact', link: '#' }]

  title = 'Paw Shop'

}
