import { Component } from '@angular/core';
import {
  LangChangeEvent,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { PagesHeaderComponent } from '../../../shared/components/pages-header/pages-header.component';
import { BManagerMessageComponent } from '../home/b-manager-message/b-manager-message.component';
import { HDownloadPdfSectionComponent } from '../home/h-download-pdf-section/h-download-pdf-section.component';
import { KOurPartnersComponent } from '../home/k-our-partners/k-our-partners.component';
import { AboutBannerSectionComponent } from '../projects/about-banner-section/about-banner-section.component';
import { AboutUsLastBannerComponent } from './about-us-last-banner/about-us-last-banner.component';
import { AboutUsContactFormComponent } from './about-us-contact-form/about-us-contact-form.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    TranslateModule,
    HDownloadPdfSectionComponent,
    AboutBannerSectionComponent,
    PagesHeaderComponent,
    KOurPartnersComponent,
    BManagerMessageComponent,
    AboutUsLastBannerComponent,
    AboutUsContactFormComponent,
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  isRTL: boolean = false;

  constructor(private _TranslateService: TranslateService) {}

  ngOnInit(): void {
    this._TranslateService.onLangChange.subscribe((params: LangChangeEvent) => {
      if (params.lang === 'ar') {
        this.isRTL = true;
      } else {
        this.isRTL = false;
      }
    });
    if (this._TranslateService.currentLang === 'ar') {
      this.isRTL = true;
    } else {
      this.isRTL = false;
    }
  }
}
