import { Injectable } from '@angular/core';
import { ITransaction } from '@ng-test/shared/models';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: Firestore) { }

  addTransaction(transaction: ITransaction) {
    const colRef = collection(this.firestore, 'transactions');
    return addDoc(colRef, transaction);
  }

  getTransaction(): Observable<ITransaction[]> {
    const colRef = collection(this.firestore, 'transactions');
    return collectionData(colRef, { idField: 'id' }) as Observable<ITransaction[]>;
  }

  delbook(transaction: ITransaction) {
    const colDocRef = doc(this.firestore, `transactions/${transaction.id}`);
    return deleteDoc(colDocRef);
  }

  getTransactionByID(id: string) {
    const colRef = doc(this.firestore, `transactions/${id}`);
    return docData(colRef, { idField: 'id' }) as Observable<ITransaction>;
  }

  updateTransaction(transaction: ITransaction) {
    const colDocRef = doc(this.firestore, `transactions/${transaction.id}`);
    return setDoc(colDocRef, transaction);
  }

  modifySpending(transaction: ITransaction, spending: number) {
    const colDocRef = doc(this.firestore, `transactions/${transaction.id}`);
    return updateDoc(colDocRef, { price: spending });
  }

}
