import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from "@angular/forms"

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  modalForm?: FormGroup;
 
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.modalForm = this.formBuilder.group({
      options: this.formBuilder.array([this.group_Options()]),
      option3Array: this.formBuilder.array([this.group_Option3()])
    })

  }

  optionArray(): FormArray {
    return this.modalForm.get('options') as FormArray
  }

  option3Array(): FormArray {
    return this.modalForm.get('option3Array') as FormArray
  }
  
  group_Option3(): FormGroup {
    return this.formBuilder.group({
      option3: this.formBuilder.control(""),
    })
  }

  group_Options(): FormGroup {
    return this.formBuilder.group({
      option1: this.formBuilder.control(""),
      option2: this.formBuilder.control(""),
      option3Array: this.formBuilder.array([this.group_Option3()])
    })
  }

  removeOption3(index) {
     let control =  <FormArray>(<any>this.modalForm.controls).options.controls.at(index).option3Array;
      control.removeAt(index);
     
  }

  remove(index) {
    let control = <FormArray>(<any>this.modalForm.controls).options
      control.removeAt(index);
  }

  addOption3(index) {
    console.log(index);
   console.log(this.modalForm.controls.options.at(index));
    let objectArr = this.modalForm.controls.options.at(index).option3Array;
        objectArr.push(
        this.formBuilder.group({
         option3: new FormControl("")
        })
        )
     console.log(objectArr);
  }

  add() {
    let objectArr = <FormArray>(<any>this.modalForm.controls)
          .options
        objectArr.push(
          this.formBuilder.group(
            {
              option1: new FormControl(""),
              option2: new FormControl(""),
              option3Array: this.formBuilder.array([this.group_Option3()])
            }
          )
        )
  }

  submit(){
    console.log(this.modalForm.value);
  }
}
