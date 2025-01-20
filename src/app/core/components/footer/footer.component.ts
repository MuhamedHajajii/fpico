import { Component } from '@angular/core';
import { SocialMediaLinksComponent } from '../../../shared/components/social-media-links/social-media-links.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialMediaLinksComponent, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
