import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Empployee } from '../empployee';
import { ActivatedRoute, Route, Router } from '@angular/router';
 

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit
{ 
  EmployeeArray: Empployee[]=[];
   id!:number;
  constructor(private employeeService:EmployeeService,private router:Router,private del:ActivatedRoute){
 
  }

  ngOnInit():void{
   this.getEmployee();
  }
  view(id:number){
  this.router.navigate(['viewDetails',id]);
  }
  
  update(id:number){
  this.router.navigate(['/update',id]);
  }
  remove(id:number){
    this.employeeService.deleteById(id).subscribe(data=>{
      console.log(data);
      this.getEmployee();
    })
  }
  bank(id:number){
    this.router.navigate(['/bank',id]);
  }

 private getEmployee(){
     this.employeeService.getEmployeeList().subscribe(
      (data:any)=>{
      this.EmployeeArray=data;
    console.log(data); 
     },
     (error:any)=>{
   
     }
     )
  }

}
