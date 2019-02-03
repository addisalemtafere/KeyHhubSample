import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EducationLevelFormComponent} from './key-hub-sample/Components/education-level-form/education-level-form.component';
import {HttpClientModule} from '@angular/common/http';


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
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {
}
