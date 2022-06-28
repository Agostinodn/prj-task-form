import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '@app/models/Project';

@Component({
  selector: 'ngtsk-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @Input() projects: Project[] = [];
  @Output() selectedProject = new EventEmitter<Project>();

  constructor() { }

  ngOnInit() {
  }

  select(project: Project) {
    this.selectedProject.emit(project);
  }
}
