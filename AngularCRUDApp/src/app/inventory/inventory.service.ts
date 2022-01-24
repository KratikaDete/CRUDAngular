import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inventory } from './inventory';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
private apiURL = "https://localhost:5001/Api";
 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient:HttpClient) { }

  getAllInventories(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/Inventory/')
    .pipe(
      catchError(this.errorHandler)
    )    
  }

  create(inventory:Inventory): Observable<any> {
    return this.httpClient.post(this.apiURL + '/Inventory/', JSON.stringify(inventory), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  
  getinventorybyid(id:number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/Inventory/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  update(id:number, inventory:Inventory): Observable<any> {
    return this.httpClient.put(this.apiURL + '/Inventory/' + id, JSON.stringify(inventory), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/Inventory/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
