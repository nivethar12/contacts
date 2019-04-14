import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { AddEditComponent } from './add-edit/add-edit.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details/:id', component: ContactDetailComponent },
  { path: 'add', component: AddEditComponent },
  { path: 'edit/:id', component: AddEditComponent },
];

export const routing = RouterModule.forRoot(appRoutes);
