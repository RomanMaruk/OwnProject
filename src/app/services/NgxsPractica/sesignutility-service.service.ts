import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService{

  constructor(private http: HttpClient) { }

  fetchUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  addUsers(userData: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/users', userData)
  }

  deleteUsers(id: number) {
    return this.http.delete('https://jsonplaceholder.typicode.com/users'+id);
  }

  upDateUsers(payload: any, id: number) {
    return this.http.put('https://jsonplaceholder.typicode.com/users'+id, payload)
  }
}
