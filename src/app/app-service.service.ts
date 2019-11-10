import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) {
  }

  login(req: LoginRequest): Observable<string> {
    return this.http.post<string>('https://s1.gps-server.net/func/fn_connect.php', req, {
      headers: {
        Origin: 'https://s1.gps-server.net',
        'Postman-Token': '073317d5-83d1-bf42-0102-ff827299afe2'
      }
    });
  }
}

export interface LoginRequest {
  cmd: string;
  mobile: boolean;
  password: string;
  remember_me: boolean;
  username: string;
}
