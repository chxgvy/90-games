export class Monstre {
    _nom;
    _attaque;
    _defense;
    _pointdevie;
    _image;
    _target;
    _combat;


constructor(nom,attaque,defense,pointdevie,image, target, combat){
    this.nom = nom;
    this.attaque = attaque;
    this.defense = defense;
    this.pointdevie = pointdevie;
    this.image = image;
    this.target;
    this.combat = combat;
}

attaque(target) {
    combat()
    this.pointdevie = this.target - this.attaque;
}

Mort(){
    if (this.pointdevie <= 0) {
        this.combat = true;
        return console.log("mort");
}
}
}
