import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-allstudent',
  templateUrl: './allstudent.component.html',
  styleUrls: ['./allstudent.component.css']
})
export class AllstudentComponent implements OnInit {
  students:Student[]=[]

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.getAllStudent();

  }
  getAllStudent() {
    this.studentService.getAllCategory().subscribe(
      (result) => {
        this.students = result;
      },
      (err) => {
        console.log(err);      
      }
    )
  }
  deleteCourse(student: any) {
    
    this.studentService.deleteUser(student.id).subscribe(
      (result) => {
 
        let index = this.students.indexOf(student);
        this.students.splice(index, 1);
      },
      (err) => {
        console.log(err);
      }

    )
  }
  updateInstructorState(student: Student) {    
    this.studentService.updateInstructorState(student.id).subscribe(
      result => {
        let index = this.students.indexOf(student)
        this.students[index].isEnabled = !this.students[index].isEnabled; 
      },
      err => console.log(err)
    )
  }

}
