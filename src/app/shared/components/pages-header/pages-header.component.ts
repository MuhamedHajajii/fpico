import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {
  LangChangeEvent,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  selector: 'app-pages-header',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './pages-header.component.html',
  styleUrl: './pages-header.component.scss',
})
export class PagesHeaderComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) title02: string = '';
  @Input({ required: true }) desc01: string = '';
  @Input({ required: true }) desc02: string = '';
  @Input() order: boolean = false;
  isProjects: boolean = false;
  isRtl: boolean = false;
  constructor(
    private _TranslateService: TranslateService,
    private _Router: Router
  ) {}
  ngOnInit(): void {
    this._TranslateService.onLangChange.subscribe((params: LangChangeEvent) => {
      if (params.lang === 'ar' || this._TranslateService.currentLang === 'ar') {
        this.isRtl = true;
      } else {
        this.isRtl = false;
      }
      console.log(this._TranslateService.currentLang);
    });
    if (this._TranslateService.currentLang === 'ar') {
      this.isRtl = true;
    } else {
      this.isRtl = false;
    }
    console.log(this._TranslateService.currentLang);
  }

  handleCurrentPage(): void {
    if (this._Router.url.includes('/projects')) {
      this.isProjects = true;
    } else {
      this.isProjects = false;
    }
  }
}
