import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSendService {
  public formObject: BehaviorSubject<any> = new BehaviorSubject<any>({})
  public nextLeadObject: BehaviorSubject<any> = new BehaviorSubject<any>({})
  constructor() { }
}
