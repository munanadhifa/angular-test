import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userApi = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}
  get Users(): Observable<any> {
    return this.http.get(this.userApi);
  }

getUserDetails(id: number): Observable<any> {
  return this.http.get(`${this.userApi}/${id}`);
}
