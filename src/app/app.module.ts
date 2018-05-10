import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgxBangModule } from './ngx-bang/ngx-bang.module';
import { FormsModule } from '@angular/forms';
import { AdListService } from './ad-list.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxBangModule
  ],
  providers: [AdListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
