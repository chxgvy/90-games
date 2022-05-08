import { Monstre } from "./monstre";

class boss extends Monstre {
    _nom;
    _attaque;
    _defense;
    _pv;
    _vitesse;
    _img;
    

    constructor(nom,attaque,defense,pv,vitesse,img){
        super (nom, attaque, defense, pv, vitesse, img)
        this._nom = nom;
        this.attaque = 5 ;
        this._defense = 1;
        this._pv = 100;
        this._vitesse = vitesse;
        this._img = img;
    }

    attaque() {

    }
}