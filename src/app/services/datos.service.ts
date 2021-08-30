
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Datos } from "../models/datos";

@Injectable()

export class DatosService {
   
    idUser: number = 0;
    datosArrayList: Datos[] = [];
    constructor() { }

    AddUserService(infoUser: FormGroup,) : Array<any>{
     
            infoUser.get('id')?.setValue(this.idUser++);
            this.datosArrayList.push(infoUser.value);
            return this.datosArrayList
            
        
    }
    

}