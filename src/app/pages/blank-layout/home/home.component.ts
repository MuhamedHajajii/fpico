import { Component } from '@angular/core';
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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
