import { Component } from '@angular/core';
import studentsData from 'src/assets/json/students.json';
import teachersData from 'src/assets/json/teachers.json';

interface Student {
  id: Number;
  name: String;
  email: String;
  gender: String;
}

interface Teacher {
  id: Number;
  name: String;
  email: String;
  gender: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-with-json';

  students:Student[] = studentsData;
  teachers:Teacher[] = teachersData;
}
