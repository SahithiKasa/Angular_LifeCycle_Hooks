import { Component,
   OnChanges,
   OnInit,
   AfterContentInit,
   Input,
   ContentChild,
   AfterViewInit,
   DoCheck,
   OnDestroy,
   AfterContentChecked,
   AfterViewChecked,
   ElementRef,
   ViewChild,
   SimpleChanges
  } from '@angular/core';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnChanges ,
 OnInit , AfterContentInit , AfterViewInit , 
 DoCheck ,
 AfterContentChecked ,
AfterViewChecked , OnDestroy {


  // @Input ---> we can send the data from p---c

  
  @Input('amount')   amount :any;
  @Input('location') location:any;
  // i want to add 200 rupees what ever i am getting from parent 
  

  //Life cycle hook wahtever data u r receing from parent --> 
  //if you want to do some action on that data the palce is that ngonchanges
  
  //STAGE for working @input (position)  -- prebuiitin event of copnnt like (button click)


  designation = "";

  //


  //javascript realted work class .

  //we can add the dependencies(Services)
  constructor(){

  }


  //angular
  //@Input handle

  ngOnChanges(): void {
        console.log("R u working????");
        this.amount = Number(this.amount) + 500;  //"1000"

        if(this.location == 'Hyd'){
             this.designation = "Software programmer"
        }

        console.log("ngonchanges loaded");
  }


  //wen your compnent loads then automatically it will be load
  //subscriptions 

  //we can prepare the subscriptions into the ngonint  //Routing
  ngOnInit(): void {
      console.log ("ngOninit loaded");
  }

  //we can prepare the unsubscribes into the ngonint  //Routing
  ngOnDestroy(): void {
    
  }



  @ContentChild('firstname') firstname !: ElementRef;

  johnDetails:any;
  //if you want to handle content related stuff then you can use this hook
  ngAfterContentInit(): void {
      console.log("NgAFterContent init loaded");
      this.firstname.nativeElement.style.background = "yellow";
      //console.log(this.firstname.nativeElement.value);   //input 
      let value = this.firstname.nativeElement.value; //"John"
      this.johnDetails = value + "From UK";   //John From UK
  }



  studentname = 'Ramu';
  userLocation = "Chennai";

//handle the view related stuff then you can use this hook

@ViewChild('midname') midname !: ElementRef;
  ngAfterViewInit(): void {
     console.log(this.midname);
     this.midname.nativeElement.style.background ="red";          //<input type="text" [value]="studentname" #midname />

     setTimeout(() => {
       this.studentname = "Sahithi";
       this.userLocation = this.studentname + "From US";
       
     }, 3000);
  }
  

 //compnont whatever activity is going on this life cycle will trigger.
  ngDoCheck(): void {
       console.log("Docheck");
  }

  //whatever work is going on your content then this life cycle hook will trigger.
  ngAfterContentChecked(): void {
    
  }

  ngAfterViewChecked():void {
    
  }
  

  


}
