import { Component, OnInit } from '@angular/core';
import { Instructor } from 'src/app/model/instructor';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-listinstructor',
  templateUrl: './listinstructor.component.html',
  styleUrls: ['./listinstructor.component.css']
})
export class ListinstructorComponent implements OnInit {

  instructors:Instructor[]=[]
  constructor( private instructorService:InstructorService) { }

  ngOnInit(): void {
    this.getAllInstructor();
  }

  getAllInstructor() {
    this.instructorService.getAllCategory().subscribe(
      (result) => {
        this.instructors = result;
      },
      (err) => {
        console.log(err);      
      }
    )
  }

  deleteCourse(instructor: any) {
    
    this.instructorService.deleteUser(instructor.id).subscribe(
      (result) => {
 
        let index = this.instructors.indexOf(instructor);
        this.instructors.splice(index, 1);
      },
      (err) => {
        console.log(err);
      }

    )
  }
  updateInstructorState(instructor: Instructor) {    
    this.instructorService.updateInstructorState(instructor.id).subscribe(
      result => {
        let index = this.instructors.indexOf(instructor)
        this.instructors[index].accountState = !this.instructors[index].accountState; 
      },
      err => console.log(err)
    )
  }

}
