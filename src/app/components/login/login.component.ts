import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

//Services

import { MoodleService } from "../../services/moodle.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user:string;
  private userid:string;
  constructor(private router:Router, private moodleService: MoodleService) { 
    
  }

  ngOnInit() {
  }

  public login(form: NgForm){

    this.moodleService.getToken();

    

    //if(form.value.txUser == users_list[0].nombre && 
    //   form.value.txPassword == users_list[0].password)
    let username = form.value.txUser;
    if(username != "" && form.value.txPassword != "")
    {
      debugger;
      let user:any;
      this.moodleService.getUsers("username", form.value.txUser )
        .subscribe((res:any)=> { 
          let user = res.users[0];
          console.log(user, 'getUser');

          debugger;
          if (user !=null){
            sessionStorage.setItem('userlogin', user.username);
            sessionStorage.setItem('userid', user.id);
            alert("Bienvenido/a "+ user.firstname);

            this.router.navigate(['asignaturas']);
          } 


        });
        
        

        
    }else{
        sessionStorage.setItem('userlogin', null);
        alert("Usuario o contraseña incorrecta");
        this.clearForm(form);
    }
  }

  public clearForm(form: NgForm){

  }
}
