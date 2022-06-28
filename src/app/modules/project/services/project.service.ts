import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

import { Project } from '@app/models/Project';
import { LogService } from '@app/shared/services/log.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [];

  private projectsSubject = new BehaviorSubject<Project[]>(this.projects);
  public projects$ = this.projectsSubject.asObservable();

  constructor(private logService: LogService, private http: HttpClient) { }

  getAll() {
    return this.http.get<Project[]>(`http://localhost:3000/projects`).pipe(
      retry(3),
      tap(() => this.logService.log('HttpClient GetAll')),
      catchError(this.handleError)
    );
  }

  add(project: Project) {
    return this.http.post<Project>(`http://localhost:3000/projects`, project).pipe(
      retry(3),
      tap(() => this.logService.log('HttpClient Add')),
      catchError(this.handleError)
    );
  }

  get(id: number) {
    return this.http.get<Project>(`http://localhost:3000/projects/${id}`).pipe(
      retry(3),
      tap(() => this.logService.log('HttpClient Get')),
      catchError(this.handleError)
    );
  }


 private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  return throwError(
    'Something bad happened; please try again later.');
};
}
