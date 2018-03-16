import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import {
    initializeApp,
    app,
    storage,
    database,

} from 'firebase';
import { FirebaseService } from '../firebase-service/firebase.service';

@Injectable()
export class FirebaseImageService extends FirebaseService {


    // Initialize Firebase
    constructor() {
        super();
    }

    // Reads list asynchronously from db according to reference
    async getImageNamesFromDb(ref?: string): Promise<string[]> {
        const list: string[] = [];

        const snapshot: database.DataSnapshot = await this.fbDatabase
            .ref(ref)
            .once('value');


        if (snapshot.hasChildren()) {
            (<any>snapshot).forEach((childSnap: any) => {
                list.push(childSnap.val());
            });
        } else {
            list.push(snapshot.val());
        }


        return list;
    }

    // Reads list asynchronously from storage according to reference
    async getImageUrlsFromStorage(ref?: string): Promise<string[]> {
        let imageNames = [];
        const urls: string[] = [];

        imageNames = await this.getImageNamesFromDb(ref);

        for (const i of imageNames) {
            const refUrl: string = ref + i;
            const url = await this.fbStorage
                .ref(refUrl)
                .getDownloadURL();

            urls.push(url);
        }


        return urls;
    }

}
