import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TuiAlertService } from '@taiga-ui/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorAlertService {
  showNotification(err: HttpErrorResponse): void {
    let errorMessage = '';
    if (err.status === 0) {
      errorMessage =
        'It looks like your VPN is turned off. Please check your internet connection and try again.';
    } else if (err) {
      errorMessage = 'Unknown error';
    }
    this.alerts
      .open(`${errorMessage}`, {
        label: `Oops! Status ${err.status}`,
        icon: 'tuiIconAlertOctagonLarge',
        status: 'error',
        autoClose: false,
      })
      .subscribe();
  }

  constructor(private readonly alerts: TuiAlertService) {}
}
