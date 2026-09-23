import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USER_DASHBOARD_MOCK } from '../mocks/dashboard.mock';
import { UserDashboard } from '../models/dashboard.models';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  loadDashboard(): Observable<UserDashboard> {
    return of(USER_DASHBOARD_MOCK);
  }
}
