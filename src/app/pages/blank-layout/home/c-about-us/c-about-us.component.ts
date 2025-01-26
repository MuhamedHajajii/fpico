import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SafeHtmlPipe } from '../../../../core/pipes/safe-html.pipe';

@Component({
  selector: 'app-c-about-us',
  standalone: true,
  imports: [TranslateModule, SafeHtmlPipe],
  templateUrl: './c-about-us.component.html',
  styleUrl: './c-about-us.component.scss',
})
export class CAboutUsComponent {
  @Input() isRTL: boolean = false;
}
