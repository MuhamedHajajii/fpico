import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SafeHtmlPipe } from '../../../../core/pipes/safe-html.pipe';

@Component({
  selector: 'app-g-our-projects',
  standalone: true,
  imports: [TranslateModule, SafeHtmlPipe],
  templateUrl: './g-our-projects.component.html',
  styleUrl: './g-our-projects.component.scss',
})
export class GOurProjectsComponent {}
