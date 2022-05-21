import { Injectable } from '@angular/core';
import { AbstractControl} from '@angular/forms';
import { first, map, switchMap } from 'rxjs';
import { NovoUsuarioService } from '../novo-usuario/novo-usuario.service';
@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private service: NovoUsuarioService) { }

  userAlredyExists() {
    return (control : AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap(
        (userName) => this.service.verifyExistentUser(userName)
        ),
        map((isTaken) => (isTaken ? {'userExists': true} : null)),
        first()
      )
    }
  }
}
