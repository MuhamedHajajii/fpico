import { Component } from '@angular/core';
import { SocialMediaLinksComponent } from '../../../shared/components/social-media-links/social-media-links.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialMediaLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
