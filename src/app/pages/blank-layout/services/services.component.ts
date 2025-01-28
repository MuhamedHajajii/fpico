import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LangChangeEvent,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { SafeHtmlPipe } from '../../../core/pipes/safe-html.pipe';
import { OurServicesContentService } from '../../../core/services/our-services-content.service';
import { PagesHeaderComponent } from '../../../shared/components/pages-header/pages-header.component';
import { HDownloadPdfSectionComponent } from '../home/h-download-pdf-section/h-download-pdf-section.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    HDownloadPdfSectionComponent,
    TranslateModule,
    RouterLink,
    SafeHtmlPipe,
    PagesHeaderComponent,
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  servicesContent: OurServicesContentService = inject(
    OurServicesContentService
  );

  _TranslateService: TranslateService = inject(TranslateService);

  isRTL: boolean = false;

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

  imageLoaded(img: HTMLDivElement): void {
    img.nextElementSibling?.remove();
  }
}
