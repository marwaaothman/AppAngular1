import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeComponent } from './liste/liste.component';
import { AjoutComponent } from './ajout/ajout.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './service.service';
import { HttpClientModule  } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ListeComponent,
    AjoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
