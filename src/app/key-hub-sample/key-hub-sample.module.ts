import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarComponent} from './Components/fragment/toolbar/toolbar.component';
import {MainContentComponent} from './Components/fragment/main-content/main-content.component';
import {SidenavComponent} from './Components/fragment/sidenav/sidenav.component';
import {FooterComponent} from './Components/fragment/footer/footer.component';
import {AngMaterialModule} from '../shared/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule, Routes} from '@angular/router';
import {KeyHubSampleComponent} from './components/key-hub-sample/key-hub-sample.component';
import {EmployeeComponent} from './components/employee/employee.component';
import {EducationLevelComponent} from './components/education-level/education-level.component';
import {EducationLevelFormComponent} from './components/education-level-form/education-level-form.component';

const routes: Routes = [
  {
    path: '', component: KeyHubSampleComponent,
    children: [
      {path: ':id', component: MainContentComponent},
      {path: '', component: MainContentComponent}
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    AngMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    FooterComponent,
    KeyHubSampleComponent,
    EmployeeComponent,
    EducationLevelComponent,
    EducationLevelFormComponent
  ],
  exports: [
    RouterModule,
    EmployeeComponent,
    EducationLevelComponent,
    EducationLevelFormComponent],
  entryComponents: [
    EducationLevelFormComponent
  ]
})
export class KeyHubSampleModule {
}
