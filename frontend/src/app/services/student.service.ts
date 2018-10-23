import { IStudent } from './../redux/student';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/';
const studentsUrl = baseUrl + 'students/';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) {}

  createStudent(student: IStudent):Observable<any> {
     return this.http.post(studentsUrl, student);
  }

  getStudents():Observable<any>{
    return this.http.get(studentsUrl);
}
deleteStudent(email:string):Observable<any>{
    return this.http.delete(studentsUrl+email);
}
getStudentByEmail(email:string):Observable<any>{
    return this.http.get(studentsUrl+email);
}
updateUser(student:IStudent):Observable<any>{
    return this.http.put(studentsUrl+student.enrollmentForm.email,student);
}
}
