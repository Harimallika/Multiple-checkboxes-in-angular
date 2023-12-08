import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
  langs = ['C' , 'java', 'Python', 'PHP', 'Javascript'];
  testForm;

  constructor(private fb: FormBuilder) {
    this.testForm =this.fb.group({
      languages: this.fb.array([])
    })
  }
  handlelangs(e:any){
    let langarr = this.testForm.get('languages') as FormArray;
    if(e.target.checked){
      langarr.push(new FormControl(e.target.value))
    }
    else{
      let i=0;
      langarr.controls.forEach( 
        (l:any)=> {
          if(l.value == e.target.value){
            langarr.removeAt(i);
            return
          }
           i++
      });
    }
  }
}
