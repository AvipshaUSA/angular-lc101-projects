import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {

//way no 1 from chore.component.html:
   // chores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries'];
   // todoTitles = ["Yesterday's Chores", "Today's Chores", "Tomorrow's Chores"];


//way no 2:
   chores = [
      {title:"Yesterday's Chores", task:['Empty DishWasher','Start LaunchCode prep work','Buy groceries']},
      {title:"Today's Chores",task:['Load dishwasher', 'Finish LaunchCode prep work', 'Buy the groceries you forgot']},
      {title: "Tomorrow's Chores", task:['Empty dishwasher AGAIN', 'Play with LaunchCode practice code', 'Groceries AGAIN']},
      {title:"Day after tomorrow's chores", task:['not assigned yet']}
              ];


   constructor() { }

   ngOnInit() {
   }

}
