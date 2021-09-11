import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Instructor } from 'src/app/model/instructor';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-profilinstructor',
  templateUrl: './profilinstructor.component.html',
  styleUrls: ['./profilinstructor.component.css']
})
export class ProfilinstructorComponent implements OnInit {

  constructor(private instructorservice:InstructorService, private route: ActivatedRoute, ) { }
  instructors:Instructor[]=[]
  instructor:Instructor
  id:any

  ngOnInit(): void {
    this.getcoursebyId();

  }
  getcoursebyId(){
    let id = this.route.snapshot.params.id;
    
      this.instructorservice.findCourseById(id).subscribe(
        res=>{
          this.instructor=res;
         
          
        },
        err=>{
          console.log(err);
        }
      )
   
  }
}
