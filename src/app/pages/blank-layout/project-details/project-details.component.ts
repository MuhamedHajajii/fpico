import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { IProject } from '../../../core/interfaces/IPorjects';
import { ProjectsService } from '../../../core/services/projects.service';
import { HDownloadPdfSectionComponent } from '../home/h-download-pdf-section/h-download-pdf-section.component';
import { PagesHeaderComponent } from '../../../shared/components/pages-header/pages-header.component';
import { SafeHtmlPipe } from '../../../core/pipes/safe-html.pipe';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
    TranslateModule,
    HDownloadPdfSectionComponent,
    PagesHeaderComponent,
    TranslateModule,
    SafeHtmlPipe,
  ],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
})
export class ProjectDetailsComponent implements OnInit {
  currentProject!: IProject;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProjectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    this.getCurrentProjectId();
  }

  getCurrentProjectId(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (response) => {
        const ID = parseInt(response?.get('id') || '') as number;
        this.getCurrentProject(ID);
      },
    });
  }

  getCurrentProject(id: number): void {
    this.currentProject = this._ProjectsService.allProjects.find(
      (element) => element.project_id === id
    ) as IProject;
  }
}
