import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fb: FormBuilder;
  registerForm: any;
  submitted: any = false;

  constructor(
    ifb: FormBuilder,
    private regService: RegisterService,
    private router: Router
  ) {
    this.fb = ifb;
    this.intilizeForms();
  }

  ngOnInit(): void {
  }
  get f() { return this.registerForm.controls; }

  intilizeForms() {
    this.registerForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      mobile: new FormControl(null, Validators.required),
      address: new FormControl(null, [Validators.required]),
      state: new FormControl("-- Select State --", [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      zipCode: new FormControl(null, [Validators.required])
    });
  }
  formSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      alert('Fill mandatory fields');
      return;
    }
    else {
      var result = this.regService.register(
        this.registerForm.value
      );
      result.subscribe(jsonData => {
        if (jsonData.statusCode == 200) {
          this.reset();
          alert('Success');
        }
        else {
          this.router.navigate(['error']);
        }
      },
        error => {
          this.router.navigate(['error']); 
        }
      );
    }
  }
  reset() {
    this.registerForm.reset();
  }
}
