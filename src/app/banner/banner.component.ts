import { Component, EventEmitter, Output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  constructor(private appComponent: AppComponent) { }
  bannerImage = './images/banner-image.jpeg';
  bannerTitle = 'Dogs & Puppies For Sale';
  bannerSubTitle = 'Find your best friend here';
  buttonTitle = 'Get Started';


}

