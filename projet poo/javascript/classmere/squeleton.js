class squeleton extends Monstre {
    _nom;
    _attaque;
    _defense;
    _pv;
    _vitesse;
    _img;
    

    constructor(nom,attaque,defense,pv,vitesse,img){
        this._nom = nom;
        this.attaque = 5;
        this._defense = 1;
        this._pv = 100;
        this._vitesse = vitesse;
        this._img = img;
    }

    attaque() {
        
    }

    get nom(){
        return this._nom;
    }
    
    set nom(tmp){
        this._nom = tmp;
    }

    get attaque(){
        return this._attaque;
    }
    
    set attaque(tmp){
        this._attaque = tmp;
    }

    get defense(){
        return this._defense;
    }
    
    set defense(tmp){
        this._defense = tmp;
    }

    get pv(){
        return this._pv;
    }
    
    set pv(tmp){
        this._pv = tmp;
    }

    get vitesse(){
        return this._vitesse;
    }
    
    set vitesse(tmp){
        this._vitesse = tmp;
    }

    get img(){
        return this._img;
    }
    
    set img(tmp){
        this._img = tmp;
    }

}