import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SafeHtmlPipe } from '../../../../core/pipes/safe-html.pipe';

@Component({
  selector: 'app-l-our-work',
  standalone: true,
  imports: [TranslateModule, SafeHtmlPipe],
  templateUrl: './l-our-work.component.html',
  styleUrl: './l-our-work.component.scss',
})
export class LOurWorkComponent {}
