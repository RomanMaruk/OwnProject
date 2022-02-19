import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IpUser } from 'src/app/model/ipUser.modal';

@Injectable({
  providedIn: 'root'
})
export class WhetherService {

  constructor(private http: HttpClient) {}

  getWhether(
    lat: string,
    lon: string,
    // languages: string,

  ): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=ua&units=metric&exclude=hourly,daily&appid=23cec7ed82fff23d17e073d641e5eb07`)
  }

  getIpAddress(): Observable<any> {
    return this.http.get('https://api.ipify.org/?format=json');
  }

  getGEOLocation(ip: string): Observable<any> {
    let url = `https://api.ipgeolocation.io/ipgeo?apiKey=a4503669913f4ef28711027d136d2d68&ip=${ip}`;
    return this.http.get(url);
  }
}
