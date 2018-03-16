import { environment } from '../../../../environments/environment';
import {
    initializeApp,
    app,
    storage,
    database,

} from 'firebase';

export abstract class FirebaseService {

    protected fbConfig: any;
    protected fbApp: app.App;
    protected fbStorage: storage.Storage;
    protected fbDatabase: database.Database;

    // Initialize Firebase
    constructor() {
        this.fbConfig = Object.assign({}, environment.fbConfig);
        this.fbApp = initializeApp(this.fbConfig);
        this.fbStorage = this.fbApp.storage();
        this.fbDatabase = this.fbApp.database();
    }

}
