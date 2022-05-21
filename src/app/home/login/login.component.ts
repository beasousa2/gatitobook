import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: String = "";
  password: String = "";

  constructor(private authService: AutenticacaoService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.authenticate(this.user, this.password).subscribe(
      () => {
        this.router.navigate(['animais']);
      }, (error) => {
        alert("Usuário ou senha incorretos");
        console.log(error);
      }
    );

  }

}
