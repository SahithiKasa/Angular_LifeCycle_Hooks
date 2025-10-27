import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'AngularHooks_Oct';


  //By using life cycle hooks you can control component related inforamtion.

  parentData='Hello';



message:string="";


ngOnInit():void {
  console.log("ngOnInit called");
  this.message="This message is initialized in ngOnInit";
}

//Docheck//
student= {name:'Sahithi'};

changeName(){
 this.student.name="Kasa Sahithi";


}

content="Initial projected content";
changeContent(){
  this.content='Content changed at '+ new Date().toLocaleTimeString();
}




 
}

