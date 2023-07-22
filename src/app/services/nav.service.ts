import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() { }

  private _selectedComponent = new BehaviorSubject<string>('');

  componentSelected(component: string){
    this._selectedComponent.next(component);
  }

  getSelectedComponent(){
    return this._selectedComponent.asObservable();
  }
}
