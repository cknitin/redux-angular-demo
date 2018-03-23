import { IEmployee } from './employee';
import { ADD_EMPLOYEE, TOGGLE_EMPLOYEE, REMOVE_EMPLOYEE, REMOVE_ALL_EMPLOYEE } from './actions';

export interface IAppState {
    employees: IEmployee[];
    lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
    employees: [],
    lastUpdate: null
};

export function rootReducer(state: IAppState, action): IAppState {
    let employee: any;
    let index: any;
    switch (action.type) {
        case ADD_EMPLOYEE:
            action.employee.id = state.employees.length + 1;
            return Object.assign({}, state, {
                employees: state.employees.concat(Object.assign({}, action.employee)),
                lastUpdate: new Date()
            });
        case TOGGLE_EMPLOYEE:
        employee = state.employees.find(t => t.id === action.id);
            index = state.employees.indexOf(employee);
            return Object.assign({}, state, {
                employees: [
                    ...state.employees.slice(0, index),
                    Object.assign({}, employee, {isCompleted: !employee.isCompleted}),
                    ...state.employees.slice(index + 1)
                ],
                lastUpdate: new Date()
            });
        case REMOVE_EMPLOYEE:
            return Object.assign({}, state, {
                employees: state.employees.filter(t => t.id !== action.id),
                lastUpdate: new Date()
            });

        case REMOVE_ALL_EMPLOYEE:
            return Object.assign({}, state, {
                employees: [],
                lastUpdate: new Date()
            });
    }
    return state;
}
