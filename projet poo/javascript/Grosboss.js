class grosboss extends Monstre {
    _nom;
    _attaque;
    _defense;
    _pv;
    _vitesse;
    _img;
    

    constructor(nom,attaque,defense,pv,vitesse,img){
        super (nom, attaque, defense, pv, vitesse, img)
        this._nom = nom;
        this.attaque = 10;
        this._defense = 3;
        this._pv = 100;
        this._vitesse = vitesse;
        this._img = img;
    }

    attaque() {

    }
}