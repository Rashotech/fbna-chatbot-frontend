import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatModalService {
  private showModalSource = new Subject<void>();
  showModal$ = this.showModalSource.asObservable();

  constructor() { }

  showModal() {
    this.showModalSource.next();
  }
}
