import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HDownloadPdfSectionComponent } from '../home/h-download-pdf-section/h-download-pdf-section.component';
import { SafeHtmlPipe } from '../../../core/pipes/safe-html.pipe';
import { ContactUsMapComponent } from '../contact-us/contact-us-map/contact-us-map.component';
import { PagesHeaderComponent } from '../../../shared/components/pages-header/pages-header.component';
import { AboutBannerSectionComponent } from './about-banner-section/about-banner-section.component';
import { ProjectsService } from '../../../core/services/projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink,
    HDownloadPdfSectionComponent,
    SafeHtmlPipe,
    ContactUsMapComponent,
    PagesHeaderComponent,
    AboutBannerSectionComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  allProjects: ProjectsService = inject(ProjectsService);
}
