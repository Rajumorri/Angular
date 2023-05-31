import { Component,OnInit } from '@angular/core';
import { Empployee } from '../empployee';
import { FormBuilder, NgModel, Validators,FormGroup,FormControl } from '@angular/forms';
import { from } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee:Empployee=new Empployee();
  constructor(private service:EmployeeService,private router:Router){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');

  }
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
  saveEmployee(){
    this.service.saveEmployee(this.employee).subscribe(data=>{
      console.log(data);
      this.gotoMain();
    })
  }
  gotoMain()
  {
    this.router.navigate(['/employee']);
  }

}
function data(value: Object): void {
  throw new Error('Function not implemented.');
}

