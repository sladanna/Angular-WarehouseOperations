import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';
import { DocumentsComponent } from './documents/documents.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "documents", component: DocumentsComponent },
  { path: "documents/:id", component: DocumentDetailsComponent },
  { path: "about", component: AboutComponent },
  { path: "", redirectTo: "/home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
