import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from  '@angular/common/http';
import { personnels } from '../../models/Personnel.models';
import {HttpHeaders} from '@angular/common/http';

import{Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpErrorHandler, HandleError} from '../../../../http-error-handler.service';



@Injectable()
export class ListPersonnelService{
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler){
      this.handleError = httpErrorHandler.createHandleError('ListPersonnelService')     
  }
  getPersonnel(): Observable<personnels[]>{
    return this.http
    .get<personnels[]>('api/tasks')
    .pipe(catchError(this.handleError('getTasks',[])))
  }

  addPersonnel(task: personnels): Observable<personnels>{
    return this.http
    .post<personnels>('api/tasks', task)
    .pipe(catchError(this.handleError('addTasks', task)))
  }

  deletePersonnel(id: number): Observable<{}>{
    const url = `api/task/${id}`
    return this.http
    .delete(url)
    .pipe(catchError(this.handleError('deleteTasks',[])))
  }

  updatePersonnel(task: personnels): Observable<personnels>{
    return this.http
    .put<personnels>('api/tasks{task._id}', task)
    .pipe(catchError(this.handleError('getTasks', task)))
  }
}
    