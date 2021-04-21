import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageNotifyService {
  imageNotyFire = new BehaviorSubject<String>('');
  constructor() { }
}
