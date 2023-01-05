import { ITableObjects } from "../../models/table-objects/tableObjects";

export class TableInfo implements ITableObjects {
    name: string;
    email: string;
    rol: string;
    lastModify?: Date;

    constructor(name:string, email:string, rol:string, lastModify?:Date, ){
        this.name=name;
        this.email=email;
        this.rol=rol;
        this.lastModify=lastModify;
    }

    public setName(name: string) {
        this.name=name;
    }

    public getName():string {
        return this.name;
    }

    public setEmail(email: string) {
        this.email=email;
    }

    public getEmail():string {
        return this.email;
    }

    public setRol(rol: string) {
        this.rol=rol;
    }

    public getRol():string {
        return this.rol;
    }

    public setLastModify(lastModify: Date) {
        this.lastModify=lastModify;
    }

    public getLastModify():Date | undefined {
        return this.lastModify;
    }
}
