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
   
    return this.http.post<any>(`${this.apiUrl}/User/login`, datos);
  }
}