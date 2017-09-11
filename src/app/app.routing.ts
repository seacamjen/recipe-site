import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'recipe/:id',
    component: RecipeDetailComponent
  },
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
