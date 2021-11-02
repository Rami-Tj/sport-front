import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {map, tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  setItem(key: string, item: any): void {
    localStorage.setItem(key, JSON.stringify(item));
}

getItem(key: string) {
    // return fromPromise(localStorage.getItem(key)).pipe(
    //     map(res => {
    //         return JSON.parse(res);
    //     })
    // );
    JSON.parse(localStorage.getItem(key));
}

removeItem(key: string): void {
    localStorage.remove(key);
}

clear(): void {
   localStorage.clear();
}
}
