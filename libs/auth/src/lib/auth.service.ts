/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable, Inject } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap, map, catchError } from "rxjs/operators";
import { User} from '@ngrx-transactions-app/core-models'

@Injectable({
    providedIn: "root",
})
export class AuthService {
    public readonly INITIAL_PATH = "/app/dashboard";
    public readonly LOGIN_PATH = "/login";

    private readonly USER_TOKEN = "USER_TOKEN";

    constructor() { }

    getCurrentUser$(): Observable<User> {
        return this.getCurrentUser();
    }

    getCurrentUser(): Observable<User> {
        const token = this.getToken();
        if (token) {
            const encodedPayload = token.split(".")[1];
            const payload = window.atob(encodedPayload);
            return of(JSON.parse(payload));
        } else {
            return of();
        }
    }

    getToken() {
        return localStorage.getItem(this.USER_TOKEN);
    }
}