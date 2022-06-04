import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/todo.interface';
import { API_URL } from '../constants/constants';

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {}

  convertObjToArray(obj: any) {
    let tempArr = [];
    for (let key in obj) {
      tempArr.push({ id: key, ...obj[key] });
    }

    return tempArr;
  }

  filterByPriority(arr: any) {
    const highPriorities = arr.filter((task: any) => task.priority === 1);
    const mediumPriorities = arr.filter((task: any) => task.priority === 2);
    const lowPriorities = arr.filter((task: any) => task.priority === 3);

    return {
      highPriorities,
      mediumPriorities,
      lowPriorities,
    };
  }

  getClassByPriority(priority: number | null | undefined) {
    switch (priority) {
      case 1: {
        return 'border-danger';
      }
      case 2: {
        return 'border-warning';
      }
      case 3: {
        return 'border-info';
      }
      default: {
        return '';
      }
    }
  }

  addTask(task: Task) {
    //   it returns observable.
    return this.http.post(`${API_URL}/todos.json`, task);
  }

  getTask() {
    return this.http.get(`${API_URL}/todos.json`);
  }

  updateTask(task: Task) {
    return this.http.put(`${API_URL}/${task.id}.json`, task);
  }
  deleteTask(id: string) {
    return this.http.delete(`${API_URL}/todos/${id}.json`);
  }
}
