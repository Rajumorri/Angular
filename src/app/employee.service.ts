import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empployee } from './empployee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl="http://localhost:8080/employee/employeeList";
  private getUrl="http://localhost:8080/employee/getById/";
  private deleteUrl="http://localhost:8080/employee/deleteById/";

  constructor(private http:HttpClient) { 

  }
  getEmployeeList():Observable<Empployee>{
     return this.http.get<Empployee>(this.baseUrl);
  }
  saveEmployee(employee:Empployee):Observable<Object>{
    return this.http.post<Object>("http://localhost:8080/employee/saveEmployee", employee);
  }
  updateEmployee(id:number,employee:Empployee):Observable<Object>{
   return this.http.put<Object>("http://localhost:8080/employee/employeeUpdate/",employee);
  }
  getEmployeeeById(id:number):Observable<Empployee>{
    return this.http.get<Empployee>(`${this.getUrl}${id}`);
  }
  deleteById(id:number):Observable<Empployee>{
   return this.http.delete<Empployee>(`${this.deleteUrl}${id}`);
  }
}
