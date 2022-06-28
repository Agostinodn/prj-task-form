import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '@app/models/Project';
import { Observable, Subscription } from 'rxjs';

import { ProjectService } from '../../services/project.service';
@Component({
  selector: 'ngtsk-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styles: [`
    .form-control.ng-invalid.ng-touched {
        border: 1px solid red;
    }
  `]
})
export class ProjectDashboardComponent implements OnInit {
  projects$!: Observable<Project[]>;

  selectedProject!: Project;

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
      this.projects$ = this.projectService.getAll();
  }

  selectProject(project: Project) {
    this.router.navigate(['/projects', 'detail', project.id]);
  }

  addNewProject(project: Project) {
    this.projectService.add(project).subscribe(() => this.projects$ = this.projectService.getAll());
  }
}
