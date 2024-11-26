import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesFirebaseService {
  constructor(private firestore: Firestore) {}

  //Metodo para obtener los mensajes
  getMessages(): Observable<any[]> {
    const messagesCollection = collection(this.firestore, 'Mensajes');
    return collectionData(messagesCollection, { idField: 'id' });
  }
}
