import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


const routes: Routes = [
  {path: 'keyHub', loadChildren: './key-hub-sample/key-hub-sample.module#KeyHubSampleModule'},
  {path: '**', redirectTo: 'keyHub'}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
