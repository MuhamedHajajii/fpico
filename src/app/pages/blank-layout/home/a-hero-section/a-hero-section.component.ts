import { Component, Input } from '@angular/core';
import {
  LangChangeEvent,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  selector: 'app-a-hero-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './a-hero-section.component.html',
  styleUrl: './a-hero-section.component.scss',
})
export class AHeroSectionComponent {
  @Input() isRTL: boolean = false;
}
