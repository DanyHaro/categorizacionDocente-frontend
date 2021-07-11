export class Grado{
    public idgrado:number;
    public idsubfactor:number;
    public iduniversidad:number;
    public especialidad:string;
    public horas:number;
    public f_obtencion:Date;
    public sunedu:boolean;
    public archivo:string;
    public idusuario:number;
    public years:number;
    public nota:number;

    constructor(){
        this.nota = 0;
        // this.idusuario = idusuario;
    }
}
