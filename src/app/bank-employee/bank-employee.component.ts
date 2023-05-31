import { Component, OnInit } from '@angular/core';
import { Bank } from '../bank';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-employee',
  templateUrl: './bank-employee.component.html',
  styleUrls: ['./bank-employee.component.css']
})
export class BankEmployeeComponent implements OnInit{
  constructor(private route:Router){}
  bank:Bank=new Bank();
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit(){
    this.route.navigate(['/employee'])
  }

}
