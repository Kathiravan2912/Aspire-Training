import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  Name:String = "Kathiravan";
  Age:number = 22;
  Department:String = "CSE";
  College:String = "IFET";
  Place:String = "villupuram";
  Message:String = "No more Data!!!";
  fontColor:String = "red"

  display(){
    alert(this.Message);
  }
}
