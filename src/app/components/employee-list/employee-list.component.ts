import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store';
import { ADD_EMPLOYEE, REMOVE_EMPLOYEE, TOGGLE_EMPLOYEE } from '../../actions';
import { IEmployee } from '../../Employee';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  @select() employees;

  model: IEmployee = {
    id: 0,
    name: '',
    city: '',
    designation: 'software engineer',
    isWorking: false
  };
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  onSubmit() {
    this.ngRedux.dispatch({type: ADD_EMPLOYEE, employee: this.model});
  }

  toggleEmployee(employee) {
    this.ngRedux.dispatch({ type: TOGGLE_EMPLOYEE, id: employee.id });
  }

  removeEmployee(employee) {
    this.ngRedux.dispatch({type: REMOVE_EMPLOYEE, id: employee.id });
  }


}
