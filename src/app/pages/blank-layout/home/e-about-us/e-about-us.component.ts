import { Component } from '@angular/core';
import {
  LangChangeEvent,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { SafeHtmlPipe } from '../../../../core/pipes/safe-html.pipe';

@Component({
  selector: 'app-e-about-us',
  standalone: true,
  imports: [CarouselModule, TranslateModule, SafeHtmlPipe],
  templateUrl: './e-about-us.component.html',
  styleUrl: './e-about-us.component.scss',
})
export class EAboutUsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    margin: 20,
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
  constructor(private _TranslateService: TranslateService) {}
  ngOnInit(): void {
    this._TranslateService.onLangChange.subscribe((params: LangChangeEvent) => {
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
    if (this._TranslateService.currentLang === 'ar') {
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
  }
}
