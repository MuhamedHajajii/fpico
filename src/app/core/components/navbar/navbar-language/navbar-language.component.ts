import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-navbar-language',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar-language.component.html',
  styleUrl: './navbar-language.component.scss',
})
export class NavbarLanguageComponent {
  selectedLanguage = 'en';

  constructor(
    private translateService: TranslateService,
    @Inject(PLATFORM_ID) private _PLATFORM_ID: object,
    private renderer: Renderer2,
    private _NgxSpinnerService: NgxSpinnerService
  ) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.translateService.use(this.translateService.getBrowserLang() || 'en');
      this.selectedLanguage = this.translateService.getBrowserLang() || 'en';
    }, 0);
  }
  onLanguageChange() {
    this._NgxSpinnerService.show();
    this.translateService.use(this.selectedLanguage).subscribe({
      next: (response) => {
        setTimeout(() => {
          this._NgxSpinnerService.hide();
        }, 1500);
      },
    });

    // Update the "dir" attribute
    const direction = this.selectedLanguage === 'ar' ? 'rtl' : 'ltr';
    this.renderer.setAttribute(document.documentElement, 'dir', direction);

    // Update the "lang" attribute
    this.renderer.setAttribute(
      document.documentElement,
      'lang',
      this.selectedLanguage
    );
  }
}
