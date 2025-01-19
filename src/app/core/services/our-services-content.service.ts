import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OurServicesContentService {
  constructor() {}

  services = [
    {
      image_url: './assets/images/services/1.png',
      title: 'green houses',
    },
    {
      image_url: './assets/images/services/2.png',
      title: 'landscape works',
    },
    {
      image_url: './assets/images/services/3.png',
      title: 'irrigation',
    },
    {
      image_url: './assets/images/services/4.png',
      title: 'concrete construction',
    },
    {
      image_url: './assets/images/services/5.png',
      title: 'najdi works',
    },
    {
      image_url: './assets/images/services/6.png',
      title: 'design and managment',
    },
    {
      image_url: './assets/images/services/7.png',
      title: 'steel structure',
    },
    {
      image_url: './assets/images/services/8.png',
      title: 'electrical & mechanical work',
    },
  ];
}
