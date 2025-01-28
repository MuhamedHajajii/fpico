import { Component, OnInit } from '@angular/core';
import { IService } from '../../../core/interfaces/IServices';
import { ActivatedRoute } from '@angular/router';
import { OurServicesContentService } from '../../../core/services/our-services-content.service';
import { TranslateModule } from '@ngx-translate/core';
import { HDownloadPdfSectionComponent } from '../home/h-download-pdf-section/h-download-pdf-section.component';
import { PagesHeaderComponent } from '../../../shared/components/pages-header/pages-header.component';
import { SafeHtmlPipe } from '../../../core/pipes/safe-html.pipe';

@Component({
  selector: 'app-services-details',
  standalone: true,
  imports: [
    TranslateModule,
    HDownloadPdfSectionComponent,
    PagesHeaderComponent,
    SafeHtmlPipe,
  ],
  templateUrl: './services-details.component.html',
  styleUrl: './services-details.component.scss',
})
export class ServicesDetailsComponent implements OnInit {
  ngOnInit(): void {
    this.getCurrentProjectId();
  }
  currentProject!: IService;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _OurServicesContentService: OurServicesContentService
  ) {}

  getCurrentProjectId(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (response) => {
        const ID = parseInt(response?.get('id') || '') as number;
        this.getCurrentProject(ID);
      },
    });
  }

  getCurrentProject(id: number): void {
    this.currentProject = this._OurServicesContentService.services.find(
      (element) => element.id === id
    ) as IService;
  }
}
