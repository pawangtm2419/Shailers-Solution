import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendenceNotifyService {
  attendenceSubject = new BehaviorSubject('attendenceNotMarked');
  constructor() { }
}
