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
        'Вероятно, вы пытаетесь получить данные без VPN. Пожалуйста, проверьте ваше интернет-соединение';
    } else if (err) {
      errorMessage = 'Неизвестная ошибка';
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
