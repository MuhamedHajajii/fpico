import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-f-our-clients',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './f-our-clients.component.html',
  styleUrl: './f-our-clients.component.scss',
})
export class FOurClientsComponent {
  @Input() isRTL: boolean = false;
}
