import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatCardModule,
  MatTableModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterModule  } from '@angular/router';

import { AppComponent } from './app.component';
import { SupermarketComponent } from './supermarket/supermarket.component';

@NgModule({
  declarations: [
    AppComponent,
    SupermarketComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'supermarket', component: SupermarketComponent}
    ]),
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
