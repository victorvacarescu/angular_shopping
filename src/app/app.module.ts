import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// import module
import { ElModule } from 'element-angular'
import 'element-angular/theme/index.css'
// import {MatCardModule} from '@angular/material/card';

import { ProduseComponent } from './produse/produse.component';
import { CosCumparaturiComponent } from './cos-cumparaturi/cos-cumparaturi.component';
import { PlataCardComponent } from './plata-card/plata-card.component';
import { BasePageComponent } from './base-page/base-page.component';
 

@NgModule({  
  declarations: [ 
    AppComponent,
    ProduseComponent,
    CosCumparaturiComponent,
    PlataCardComponent,
    BasePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
    // MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
