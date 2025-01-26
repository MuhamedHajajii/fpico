import { Component } from '@angular/core';
import { SocialMediaLinksComponent } from '../../../shared/components/social-media-links/social-media-links.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    SocialMediaLinksComponent,
    TranslateModule,
    RouterLink,
    SafeHtmlPipe,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
