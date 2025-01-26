import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SafeHtmlPipe } from '../../../../core/pipes/safe-html.pipe';

@Component({
  selector: 'app-m-contact-us',
  standalone: true,
  imports: [TranslateModule, SafeHtmlPipe],
  templateUrl: './m-contact-us.component.html',
  styleUrl: './m-contact-us.component.scss',
})
export class MContactUsComponent {}
