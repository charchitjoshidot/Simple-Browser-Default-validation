import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  lname: string;
  fname: string;
  userFlag;

  constructor() {
    this.userFlag = true;
  }

  onSubmit(form) {
    if(form.valid) {
      console.log(form.valid);
    }
  }
}
