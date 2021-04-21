import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {
  confirmationNotyfier = new BehaviorSubject("")
  constructor() { }
}
