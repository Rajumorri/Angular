import { Component, OnInit } from '@angular/core';
import { Empployee } from '../empployee';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{
  employee:Empployee=new Empployee();
  id!:number;
  constructor(private route:ActivatedRoute,private service:EmployeeService,private router:Router){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.service.getEmployeeeById(this.id).subscribe(data=>
      {
        console.log(data);
        this.employee=data;
      }
    )
  }
  back(){
  this.router.navigate(['employee']);
  }

}
