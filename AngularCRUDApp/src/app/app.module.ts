import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryModule } from './inventory/inventory.module';
import { InventoryRoutingModule } from './inventory/inventory-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InventoryModule,
    InventoryRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
