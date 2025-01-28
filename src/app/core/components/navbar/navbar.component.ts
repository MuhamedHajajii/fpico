import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavbarRoutingComponent } from './navbar-routing/navbar-routing.component';
import { NavbarLanguageComponent } from './navbar-language/navbar-language.component';
import { SocialMediaLinksComponent } from '../../../shared/components/social-media-links/social-media-links.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    TranslateModule,
    NavbarRoutingComponent,
    NavbarLanguageComponent,
    SocialMediaLinksComponent,
    RouterLink,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
