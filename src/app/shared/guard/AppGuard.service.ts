import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";


@Injectable({
    providedIn: 'root'
})
export class AppGuard implements CanActivate {
    isAllowed = false

    canActivate() {
        if (!this.isAllowed) {
            alert('No Authorized')

        } else {
            this.isAllowed = true
        }
        return this.isAllowed
    }
}