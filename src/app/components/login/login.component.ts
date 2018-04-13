import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public login(form: NgForm){
    //if(form.value.txUser == users_list[0].nombre && 
    //   form.value.txPassword == users_list[0].password)
    if(form.value.txUser != "" && form.value.txPassword != "")
    {
        sessionStorage.setItem('userlogin', form.value.txUser);
        alert("Bienvenido "+ form.value.txUser);
        this.router.navigate(['dashboard']);
    }else{
        sessionStorage.setItem('userlogin', null);
        alert("Usuario o contraseña incorrecta");
        this.clearForm(form);
    }
  }

  public clearForm(form: NgForm){

  }
}
