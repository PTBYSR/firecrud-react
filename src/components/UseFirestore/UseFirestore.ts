import { useState } from 'react'
import {
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  addDoc,
  updateDoc,
  CollectionReference,
  WithFieldValue,
  DocumentReference,
  UpdateData,
  Firestore
} from "firebase/firestore"

export const useFirestore = (db:Firestore) => {
    const fireStore = {
        get: (path1: string, ...path2: string[] ) => fireStoreApi.get(doc(db, path1, ...path2)),
        post: ( data: any , path1: string, ...path2: string[] ) => fireStoreApi.post(doc(db, path1, ...path2), data),
        put: (data: any, path1: string, ...path2: string[] ) => fireStoreApi.put(doc(db, path1, ...path2), data),
        update: (data: any , path1: string, ...path2: string[]) => fireStoreApi.update(doc(db, path1, ...path2), data),
        delete: (path1: string, ...path2: string[]) => fireStoreApi.delete(doc(db, path1, ...path2)),
    }
    
    const fireStoreApi = {
        get: <T>(reference: DocumentReference) => getDoc(reference),
        post: <T>(reference: any, data: any) => setDoc(reference, data, { merge: true }),
        put: <T>(reference: DocumentReference, data: any) => setDoc(reference, data),
        update: <T>(reference: DocumentReference, data: any) => updateDoc(reference, data),
        delete: <T>(reference: DocumentReference) => deleteDoc(reference),
    }
  return {
    fireStore,
  };
};
