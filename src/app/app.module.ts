import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FileSizePipe } from './pipes/file-size.pipe';
import { InitNumberPipe } from './pipes/init-number.pipe';
import { ProductListComponent } from './components/product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    FileSizePipe,
    InitNumberPipe,
    ProductListComponent,
    UsersComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
