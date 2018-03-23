import { Component, OnInit } from '@angular/core';
import {NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store';
import { REMOVE_ALL_EMPLOYEE } from '../../actions';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  @select() employees;
  @select() lastUpdate;
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  clearEmployee() {
    this.ngRedux.dispatch({type: REMOVE_ALL_EMPLOYEE});
  }

}
