import { EventEmitter, Injectable } from "@angular/core";
import { LogService } from "./log.service";

@Injectable()

export class UserService {

    constructor(private logservice: LogService) { }

    users = [
        { name: 'Asiri', status: 'Active' },
        { name: 'Senith', status: 'Active' },
        { name: 'Manjitha', status: 'Active' }
    ];

    statusUpdated = new EventEmitter<string>();

    addUser(name: string, status: string) {
        this.users.push({ name, status });
        this.logservice.logStatus(status);
    }

    updateStatus(id: number, status: string) {
        this.users[id].status = status;
        this.statusUpdated.emit(status);
        this.logservice.logStatus(status);
    }
}