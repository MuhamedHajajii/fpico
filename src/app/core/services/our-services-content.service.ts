import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OurServicesContentService {
  constructor() {}

  services = [
    {
      image_url: './assets/images/services/1.png',
      title: 'home.Slider1-text',
    },
    {
      image_url: './assets/images/services/2.png',
      title: 'home.Slider2-text',
    },
    {
      image_url: './assets/images/services/3.png',
      title: 'home.Slider3-text',
    },
    {
      image_url: './assets/images/services/4.png',
      title: 'home.Slider4-text',
    },
    {
      image_url: './assets/images/services/5.png',
      title: 'home.Slider5-text',
    },
    {
      image_url: './assets/images/services/6.png',
      title: 'home.Slider6-text',
    },
    {
      image_url: './assets/images/services/7.png',
      title: 'home.Slider7-text',
    },
    {
      image_url: './assets/images/services/8.png',
      title: 'home.Slider8-text',
    },
  ];
}
