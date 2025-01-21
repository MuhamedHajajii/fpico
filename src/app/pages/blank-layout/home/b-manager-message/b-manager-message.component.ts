import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-b-manager-message',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './b-manager-message.component.html',
  styleUrl: './b-manager-message.component.scss',
})
export class BManagerMessageComponent {
  @Input() isRTL: boolean = false;
}
