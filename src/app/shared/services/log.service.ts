import { Injectable } from '@angular/core';
import { Project } from '@app/models/Project';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  log(message: string) {
    console.log('Log Service:', message)
  }
}
