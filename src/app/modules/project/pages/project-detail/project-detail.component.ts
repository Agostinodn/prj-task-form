import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Project } from '@app/models/Project';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'ngtsk-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project$!: Observable<Project>;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit() {
    this.project$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.projectService.get(Number(params.get('id')!)))
    );
  }

  submit(project: Project) {
    console.log(project);
    // this.projectService.update(project)
  }
}
