import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { DocumentsComponent } from './documents/documents.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DocumentDetailsComponent } from './document-details/document-details.component';
import { ItemFormComponent } from './document-details/item-form/item-form.component';
import { FormsModule } from '@angular/forms';
import { ItemListComponent } from './document-details/item-list/item-list.component';
import { PanelComponent } from './document-details/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavBarComponent,
    DocumentsComponent,
    DocumentDetailsComponent,
    ItemFormComponent,
    ItemListComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
