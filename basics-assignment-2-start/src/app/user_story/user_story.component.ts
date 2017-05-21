import {Component} from '@angular/core';

@Component({
  selector:'app-user-story',
  templateUrl: './user_story.component.html'
})
export class UserStoryComponent {
  username:string = "";

  //Everything below here is not needed. :(
  disableClearUsername:boolean = true;

  onCheckEmpty() {
    this.disableClearUsername = (this.username == "");
  }
  onClearUsername() {
    this.username = "";
    this.onCheckEmpty();
  }
}
