import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { OurServicesContentService } from '../../../../core/services/our-services-content.service';

@Component({
  selector: 'app-d-our-services',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './d-our-services.component.html',
  styleUrl: './d-our-services.component.scss',
})
export class DOurServicesComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    dotsData: true,
    dotsSpeed: 700,
    navSpeed: 700,
    navText: ['', ''],
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
  };

  constructor(public _OurServicesContentService: OurServicesContentService) {}

  imageLoaded(img: HTMLImageElement): void {
    img.nextElementSibling?.remove();
  }
}
