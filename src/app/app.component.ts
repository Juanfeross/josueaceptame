import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ITableObjects } from './core/models/table-objects/tableObjects';
import { IFilters } from './core/models/filters/filters';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'josueaceptame';
  public tempUsers: ITableObjects[] = [];

  public users: ITableObjects[] = [
    {
      name: 'neofit',
      email: 'Cq@rocketfy.co',
      rol: 'Administrador',
      lastModify: new Date()
    },
    {
      name: 'Bikeloop',
      email: 'sebastian.gutierrez@rocketfy.co',
      rol: 'Programador',
      lastModify: new Date()
    },
    {
      name: 'testqamonshy1',
      email: 'testqal@testrocketfy.co',
      rol: 'QA',
      lastModify: new Date()
    },
    {
      name: 'Josué Alonso',
      email: 'josue.alonso@rocketfy.co',
      rol: 'Programador',
      lastModify: new Date()
    },
    {
      name: 'Tienda Default',
      email: 'nombre.apellido@rocketfy.co',
      rol: 'Tripulante',
      lastModify: new Date()
    }
  ]

  ngOnInit(): void {
    this.tempUsers = [...this.users];
  }

  public getFilter(event:IFilters) {
    const result = this.users.filter(user => {
      let isNameOrEmail = false;
      let isRol = false;
      let isNameOrRol = 0;

      if (event.nameOrEmail) {
        isNameOrEmail = user.name.toLowerCase().includes(event.nameOrEmail.toLowerCase()) || user.email.toLowerCase().includes(event.nameOrEmail.toLowerCase());
        isNameOrRol++;
      }

      if (event.rol) {
        isRol = user.rol.toLowerCase().includes(event.rol.toLowerCase());
        isNameOrRol++;
      }

      switch (isNameOrRol) {
        case 1:
          return isNameOrEmail || isRol;

        case 2:
          return isNameOrEmail && isRol;

        default:
          return true;
      }
    });

    this.tempUsers = result;
  }
}
