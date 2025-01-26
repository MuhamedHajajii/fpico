import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { OurServicesContentService } from '../../../../core/services/our-services-content.service';
import {
  LangChangeEvent,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { SafeHtmlPipe } from '../../../../core/pipes/safe-html.pipe';

@Component({
  selector: 'app-d-our-services',
  standalone: true,
  imports: [CarouselModule, TranslateModule, SafeHtmlPipe],
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

  constructor(
    public _OurServicesContentService: OurServicesContentService,
    private _TranslateService: TranslateService
  ) {}

  ngOnInit(): void {
    this._TranslateService.onLangChange.subscribe((params: LangChangeEvent) => {
      console.log(params);
      if (params.lang === 'ar') {
        this.customOptions = {
          ...this.customOptions,
          rtl: true,
        };
      } else {
        this.customOptions = {
          ...this.customOptions,
          rtl: false,
        };
      }
    });
  }

  imageLoaded(img: HTMLImageElement): void {
    img.nextElementSibling?.remove();
  }
}
