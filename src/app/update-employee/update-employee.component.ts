import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Empployee } from '../empployee';
import { EmployeeService } from '../employee.service';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee:Empployee=new Empployee();
  id!:number;
  constructor(private service:EmployeeService,private route:ActivatedRoute,
    private router:Router){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.id=this.route.snapshot.params['id'];
    this.service.getEmployeeeById(this.id).subscribe(data =>{
      this.employee=data;
    })
   
  }
  onSubmit(){
    console.log(this.employee);
    this.service.saveEmployee(this.employee).subscribe(data=>{
      console.log(data);
      this.navigate();
    })
  
  }
  updateEmployee(){
   this.service.updateEmployee(this.employee.id,this.employee).subscribe(data=>{
    console.log(data);
     this.navigate();
   })
   }
  navigate(){
    this.router.navigate(['/employee']);
  }
}
 
