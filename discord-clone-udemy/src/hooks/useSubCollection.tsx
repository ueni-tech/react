import React, { useEffect, useState } from 'react'
import { collection, query, onSnapshot, DocumentData, CollectionReference, Query, orderBy, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useAppSelector } from '../app/hooks';

interface Messages {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  }
}

const useSubCollection = (collectionName: string, subCollectionName: string) => {
  const channelId = useAppSelector((state) => state.channel.channelId);
  const [subDocuments, setSubDocuments] = useState<Messages[]>([]);

  useEffect(() => {
    let collectionRef = collection(db, collectionName, String(channelId), subCollectionName);

    const collectionRefOrderBy = query(collectionRef, orderBy("timestamp", "asc"));

    onSnapshot(collectionRefOrderBy, (snapshot) => {
      let results: Messages[] = [];
      snapshot.docs.forEach((dos) => {
        results.push({
          timestamp: dos.data().timestamp,
          message: dos.data().message,
          user: dos.data().user
        });
      });
      setSubDocuments(results);
    });
  }, [channelId]);
  return { subDocuments };
}

export default useSubCollection