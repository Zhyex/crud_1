import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Datos } from 'src/app/models/datos';
import { DatosService } from 'src/app/services/datos.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    providers: [DatosService]
})
export class UsersComponent implements OnInit {

    usersForm!: FormGroup;
    datos?: Datos;
    nameButton: string = 'Guardar';
    flagButton: boolean = true;
    datosArrayList: Datos[] = [];
    userSaves: any

    constructor(private fromBuild: FormBuilder, private datosService: DatosService,private routes: Router) { }

    ngOnInit() {
        this.inicializarFormulario();
        this.GetUserSaves();
    }

    AddUsers() {
        console.log(this.usersForm.value);
        if (this.usersForm.valid) {
            this.datosArrayList = this.datosService.AddUserService(this.usersForm);
            this.usersForm.reset();
            localStorage.setItem('UserSaves', JSON.stringify(this.datosArrayList));
            this.GetUserSaves();
        }
    }

    GetUserSaves() {
        var userJsonLocal = localStorage.getItem('UserSaves');
        this.userSaves = JSON.parse(userJsonLocal!);
    }

    MapperUser(item: any) {
        this.nameButton = 'Editar';
        this.flagButton = false;
        this.usersForm.get('id')?.setValue(item.id);
        this.usersForm.get('NombreUser')?.setValue(item.NombreUser);
        this.usersForm.get('FechaNacimiento')?.setValue(item.FechaNacimiento);
        this.usersForm.get('Cedula')?.setValue(item.Cedula);
        this.usersForm.get('Telefono')?.setValue(item.Telefono);
        this.usersForm.get('Salario')?.setValue(item.Salario);
        // this.usersForm.controls.NombreUser.setValue(item.NombreUser);
    }

    EditUsers() {
        this.datosArrayList = this.userSaves;
        this.datosArrayList.forEach((elementArray, index) => {
            if (elementArray.id === this.usersForm.get('id')?.value) {
                this.datosArrayList.splice(index, 1);
            }
        });
        this.datosArrayList.push(this.usersForm.value);

        this.usersForm.reset();
        this.flagButton = true;
    }

    DeleteUsers(id: number) {
        this.datosArrayList.splice(id, 1);
    }

    inicializarFormulario() {
        this.usersForm = this.fromBuild.group({
            id: [''],
            NombreUser: ['', Validators.required],
            FechaNacimiento: ['', Validators.required],
            Cedula: ['', Validators.required],
            Telefono: ['', Validators.required],
            Salario: ['', Validators.required]
        })
    }
    redirect(){
        this.routes.navigateByUrl('/');
    }

}
