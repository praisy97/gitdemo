import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrainService {
  private baseUrl = 'http://localhost:9001';

  constructor(private http: HttpClient) { }

  create(train: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/insert`, train);
  }

  update(train: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/update`, train);
  }

  delete(train: any): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/delete`, train);
  }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/view`);
  }
  insertdata1(data:any)
 {
    return this.http.post(`${this.baseUrl}/insert`,data);
}

}
