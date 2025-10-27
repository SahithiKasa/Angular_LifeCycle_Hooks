import {
  Component,
  OnChanges,
  SimpleChanges,
  OnInit,
  AfterContentInit,
  Input,
  ContentChild,
  AfterViewInit,
  DoCheck,
  AfterContentChecked,
  ElementRef,
  ViewChild,
  AfterViewChecked
} from '@angular/core';


@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnChanges, OnInit, AfterContentInit, AfterViewInit, DoCheck, AfterContentChecked, AfterViewChecked {
  @Input() data!: string;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnchanges called!');
    console.log(changes);
    if (changes['data']) {
      console.log('Previous value:', changes['data'].previousValue);
      console.log('Current value:', changes['data'].currentValue);
    }
  }
  ngOnInit(): void {

  }

  @ContentChild("") content!: ElementRef;
  constructor() {
    console.log("Construct called");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
  }

  @ViewChild("childParagraph") paragraph!: ElementRef;
  constructor1() { }
  ngAfterViewInit(): void {
    console.log("ngAterViewInit called");
    console.log("Child paragraph text:", this.paragraph.nativeElement.textContent);
    this.paragraph.nativeElement.textContent = "Text updated after view init";


  }


  @Input() student: any;
  previousName: string = "";

  ngDoCheck(): void {
    if (this.student && this.student.name !== this.previousName) {
      console.log("Student name changed from", this.previousName, 'to', this.student.name);
      this.previousName = this.student.name;
    }
  }

  @Input() message!: string;
  ngAfterContentChecked() {
    console.log("ngAterContentChecked called in childComponent");
  }

     message1: string="Hello from Child Component!";

  @ViewChild('paraRef') paraElement!: ElementRef;



  updateMessage1() {
    this.message1= "Message1 updated";
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called.");
    console.log("Current paragraph text:", this.paraElement.nativeElement.textContent);
  }

}






