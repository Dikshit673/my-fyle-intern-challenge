import { Component, OnInit, inject } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  usersService = inject(UsersService);
  herosData: any;
  reposData: any;
  herosError: any;
  reposError: any;
  loaded: boolean = true;

  ngOnInit(): void { }

  userSearch(username: string) {
    if (username) {
      this.loaded = false;
      this.usersService.getUserDetails(username).subscribe(
        {
          next: (data: any) => {
            // console.log(data);
            this.herosData = data;
            if (this.herosData) {
              this.loaded = true;
            }
          },

          error: (error: any) => {
            // console.log(error);
            // alert(error);
            this.herosError = error;
            // console.log(this.herosError);


          }
        }

      )

      this.usersService.getUserRepos(username).subscribe(
        {
          next: (data: any) => {
            // console.log(data);
            this.reposData = data;
            if (this.reposData) {
              this.loaded = true;
            }
          },

          error: (error: any) => {
            // console.log(error);
            // alert(error);
            this.reposError = error;
          }
        }
      )


    }
  }
}
