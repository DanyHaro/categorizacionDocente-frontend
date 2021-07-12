export class Estudios{
    public idestudios:number;
    public idsubfactor:number;
    public iduniversidad:number;
    public especialidad:string;
    public f_inicio:Date;
    public f_fin:Date;
    public sunedu:boolean;
    public archivo:string;
    public iddocente:number;
    public years:number;
    public nota:number;
    public horas:number;

    constructor(){
        this.nota = 0;
        // this.idusuario = idusuario;
    }
}