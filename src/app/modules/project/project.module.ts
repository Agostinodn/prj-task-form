import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProjectRoutingModule } from './project.routing.module';
import { ProjectComponent } from './pages/project.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { ProjectDashboardComponent } from './pages/project-dashboard/project-dashboard.component';
import { SharedModule } from '@app/shared/shared.module';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjectFormRfComponent } from './components/project-form-rf/project-form-rf.component';



@NgModule({
  declarations: [
    ProjectComponent,
    ProjectListComponent,
    ProjectFormComponent,
    ProjectFormRfComponent,
    ProjectDetailComponent,
    ProjectDashboardComponent,
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: []
})
export class ProjectModule { }
