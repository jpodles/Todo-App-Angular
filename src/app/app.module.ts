import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MydatePipe } from './mydate.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    MydatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
0. zapisywać dane w local storage (todo itemki)
1. każdy todo item ma mieć datę dodania zadania
2. każdy todo item ma być na osobnej "karteczce"
3.
*/