import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../constantes.api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = API_BASE_URL+''; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Método para realizar una solicitud POST
  enviarDatos(datos: any): Observable<any> {
    let tokentemporal="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImNhZGMiLCJyb2xlIjoiQWRtaW4iLCJuYmYiOjE2OTk4Mzg0MzUsImV4cCI6MTY5OTg3NDQzNSwiaWF0IjoxNjk5ODM4NDM1fQ.SuLEfAOOFjak5cgpF4LJyHEOcaSbLsb7Ht515nrPtaE"
    const headers = new HttpHeaders({'Authorization': `Bearer ${tokentemporal}` });
    return this.http.post<any>(`${this.apiUrl}/Menu/list`, datos, { headers });
  }
}