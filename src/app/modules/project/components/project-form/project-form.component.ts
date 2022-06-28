import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from '@app/models/Project';

@Component({
  selector: 'ngtsk-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  @Output() submittedProject = new EventEmitter<Project>();

  constructor() { }

  ngOnInit(): void {
  }

  submit(form: NgForm) {
    this.submittedProject.emit({
        ...form.value
    });
  }


}
