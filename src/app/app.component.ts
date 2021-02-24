import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <!-- ngIf structural directive -->
  <h2 *ngIf="true">Shahid Khan</h2>
  <ng-template ngIf="true">Shahid Khan</ng-template>

  <div style="background-color: red" *ngIf="displayName">
    <h1> hello </h1>
  </div>
  
  <!-- ngIf-else-->
  <h2 *ngIf="displayName; else elseBlock">
   Wahid Khan
  </h2>

  <ng-template #elseBlock>
     <h2> Name is hidden </h2>
  </ng-template>
 
  
 <hr> 
 <!--ngSwitch--> 
<div [ngSwitch]="color">
   <div *ngSwitchCase="'red'"> You picked red color</div>
   <div *ngSwitchCase="'green'"> You picked green color</div>
   <div *ngSwitchCase="'blue'"> You picked blue color</div>
   <div *ngSwitchDefault> Pick again</div>
</div>

<hr>
<!-- ngFor-->

<div *ngFor=" let color of colors; index as i">
   <h2>{{i}} {{color}}</h2>
</div>

  `,
  
  
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  
public displayName= false;
public color="black";
public colors= ["red","green", "blue", "yellow"];

}
