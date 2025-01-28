import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-banner-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-banner-section.component.html',
  styleUrl: './about-banner-section.component.scss',
})
export class AboutBannerSectionComponent {
  ourProjectsBannerData = [
    {
      icon: './assets/images/projects/page/1.png',
      title: 'Pages.projects.slides.about_title_01',
      text: 'Pages.projects.slides.about01',
    },
    {
      icon: './assets/images/projects/page/2.png',
      title: 'Pages.projects.slides.about_title_02',
      text: 'Pages.projects.slides.about02',
    },
    {
      icon: './assets/images/projects/page/3.png',
      title: 'Pages.projects.slides.about_title_03',
      text: 'Pages.projects.slides.about03',
    },
    {
      icon: './assets/images/projects/page/4.png',
      title: 'Pages.projects.slides.about_title_04',
      text: 'Pages.projects.slides.about04',
    },
  ];
}
