import { Routes } from '@angular/router';
import { BlankLayoutComponent } from './pages/blank-layout/blank-layout.component';
import { HomeComponent } from './pages/blank-layout/home/home.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/blank-layout/blank-layout.component').then(
        (m) => m.BlankLayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/blank-layout/home/home.component').then(
            (m) => m.HomeComponent
          ),
        data: {
          title: 'FPICO',
          description: 'Welcome to our homepage!',
        },
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./pages/blank-layout/projects/projects.component').then(
            (m) => m.ProjectsComponent
          ),
        data: {
          title: 'FPICO - PROJECTS',
          description: 'Explore our various projects and initiatives.',
        },
      },
      {
        path: 'projects-details/:id',
        loadComponent: () =>
          import(
            './pages/blank-layout/project-details/project-details.component'
          ).then((m) => m.ProjectDetailsComponent),
        data: {
          title: 'FPICO - PROJECTS',
          description: 'Details of the selected project.',
        },
      },
      {
        path: 'services',
        loadComponent: () =>
          import('./pages/blank-layout/services/services.component').then(
            (m) => m.ServicesComponent
          ),
        data: {
          title: 'FPICO - SERVICES',
          description: 'Learn more about the services we offer.',
        },
      },
      {
        path: 'services-details/:id',
        loadComponent: () =>
          import(
            './pages/blank-layout/services-details/services-details.component'
          ).then((m) => m.ServicesDetailsComponent),
        data: {
          title: 'FPICO - SERVICES',
          description: 'Learn more about the services we offer.',
        },
      },
      {
        path: 'about-us',
        loadComponent: () =>
          import('./pages/blank-layout/about-us/about-us.component').then(
            (m) => m.AboutUsComponent
          ),
        data: {
          title: 'FPICO - ABOUT US',
          description: 'Get to know more about our company and mission.',
        },
      },
      {
        path: 'contact-us',
        loadComponent: () =>
          import('./pages/blank-layout/contact-us/contact-us.component').then(
            (m) => m.ContactUsComponent
          ),
        data: {
          title: 'FPICO - CONTACT US',
          description: 'Reach out to us for any queries or support.',
        },
      },
      {
        path: '**',
        loadComponent: () =>
          import('./core/components/not-found/not-found.component').then(
            (m) => m.NotFoundComponent
          ),
        data: {
          title: 'FPICO - Page Not Found',
          description: 'Sorry, the page you are looking for does not exist.',
        },
      },
    ],
  },
];
