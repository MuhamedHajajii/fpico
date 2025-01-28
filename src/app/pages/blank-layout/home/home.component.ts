import { Component, Input } from '@angular/core';
import { AHeroSectionComponent } from './a-hero-section/a-hero-section.component';
import { BManagerMessageComponent } from './b-manager-message/b-manager-message.component';
import { CAboutUsComponent } from './c-about-us/c-about-us.component';
import { DOurServicesComponent } from './d-our-services/d-our-services.component';
import { EAboutUsComponent } from './e-about-us/e-about-us.component';
import { FOurClientsComponent } from './f-our-clients/f-our-clients.component';
import { GOurProjectsComponent } from './g-our-projects/g-our-projects.component';
import { KOurPartnersComponent } from './k-our-partners/k-our-partners.component';
import { LOurWorkComponent } from './l-our-work/l-our-work.component';
import { MContactUsComponent } from './m-contact-us/m-contact-us.component';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { HDownloadPdfSectionComponent } from './h-download-pdf-section/h-download-pdf-section.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AHeroSectionComponent,
    BManagerMessageComponent,
    CAboutUsComponent,
    DOurServicesComponent,
    EAboutUsComponent,
    FOurClientsComponent,
    GOurProjectsComponent,
    LOurWorkComponent,
    MContactUsComponent,
    KOurPartnersComponent,
    HDownloadPdfSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isRTL: boolean = false;
  Subscription!: Subscription;
  constructor(private _TranslateService: TranslateService) {}

  ngOnInit(): void {
    this.Subscription = this._TranslateService.onLangChange.subscribe(
      (params: LangChangeEvent) => {
        if (
          params.lang === 'ar' ||
          this._TranslateService.currentLang === 'ar'
        ) {
          this.isRTL = true;
        } else {
          this.isRTL = false;
        }
      }
    );
    if (this._TranslateService.currentLang === 'ar') {
      this.isRTL = true;
    } else {
      this.isRTL = false;
    }
  }
}
