import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpVerifySubjectService {
  emailNotyFire = new BehaviorSubject<String>('');
  constructor() { }
}
