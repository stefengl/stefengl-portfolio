import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import {
    initializeApp,
    app,
    storage,
    database,

} from "firebase";

@Injectable()
export class FirebaseService {

    private fbConfig: any;
    private fbApp: app.App;
    private fbStorage: storage.Storage;
    private fbDatabase: database.Database;

    // Initialize Firebase
    constructor() {
        this.fbConfig = Object.assign({}, environment.fbConfig);
        this.fbApp = initializeApp(this.fbConfig);
        this.fbStorage = this.fbApp.storage();
        this.fbDatabase = this.fbApp.database();
    }

    // Reads list asynchronously from db according to reference
    async getListFromDb(ref?: string): Promise<string[]> {
        let list: string[] = [];

        const snapshot = await this.fbDatabase
            .ref('portfolio/personal/images')
            .once('value');

        snapshot.forEach(function (childSnapshot) {
            list.push(childSnapshot.val());
        });


        return list;
    }

    // Reads list asynchronously from storage according to reference
    async getDownloadUrlsFromStorage(ref?: string): Promise<string[]> {
        let imageNames = [];
        let urls: string[] = [];

        imageNames = await this.getListFromDb();

        imageNames.forEach(async (imgName: string) => {
            let refUrl: string = 'portfolio/personal/images/' + imgName;
            const url = await this.fbStorage
                .ref(refUrl)
                .getDownloadURL();

            urls.push(url)
        })


        return urls;
    }

}