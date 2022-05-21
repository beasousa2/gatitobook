import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './minusculo.validator';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './services/novo-usuario/novo-usuario.service';
import { UsuarioExisteService } from './services/usuario-existe/usuario-existe.service';
;

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: NovoUsuarioService,
    private userIsTaken: UsuarioExisteService) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      fullName: ['',[
        Validators.required,
        Validators.minLength(4)
      ]],
      userName: ['', [minusculoValidator], [this.userIsTaken.userAlredyExists]],
      password: ['']
    });
  }

  register() {
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    console.log(novoUsuario)
  }

}