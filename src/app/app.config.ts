import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withInMemoryScrolling,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { provideTranslation } from './core/config/i18n/translate-loader.config';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideSpinnerConfig } from 'ngx-spinner';
import { IMAGE_CONFIG } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideSpinnerConfig({ type: 'ball-scale-multiple' }),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
      withViewTransitions()
    ),
    provideClientHydration(),
    importProvidersFrom(TranslateModule.forRoot(provideTranslation())),
    provideHttpClient(withFetch()),
    provideAnimations(),
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
        disableImageLazyLoadWarning: true,
      },
    },
  ],
};
