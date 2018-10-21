import { IStudent } from './../redux/student';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/';
const studentsUrl = baseUrl + 'students/';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) {}

  createStudent(student: IStudent) {
     this.http.post(studentsUrl, student).subscribe();
  }
}