import { UserConfirmationComponent } from "../guards/user-confirmation/user-confirmation.component";
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

@Injectable({
    providedIn: 'root'
})

export class DialogService {

    constructor(private dialog: MatDialog) { }

    openConfirmDialog(msg, msg2) {
        return this.dialog.open(UserConfirmationComponent, {
            data: {
                message: msg,
                message2: msg2
            }
        });
    }
}
