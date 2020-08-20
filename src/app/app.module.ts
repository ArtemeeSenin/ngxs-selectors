import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ZooState } from './animals-store/store';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';

@NgModule({
  imports:      [ 
    BrowserModule, FormsModule, 
    NgxsModule.forRoot([
      ZooState
    ],
    { developmentMode: true }) 
  ],
  declarations: [ AppComponent, HelloComponent, AnimalListComponent, ControlPanelComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
