class Hero {
    _nom;
    _prenom;
    _force;
    _degats;
    _defense;
    _pointdevie;
    _sacdepotions;
    _sacdarmes;



constructor(nom,prenom,force,degats,defense,pointdevie,sacdepotions,sacdarmes){
    this.nom = nom;
    this.prenom = prenom;
    this.force = force;
    this.degats = degats;
    this.defense = defense;
    this.pointdevie = pointdevie;
    this.sacdepotions = sacdepotions;
    this.sacdarmes = sacdarmes;

}

get degats() {
    return this.force + 3
}

MinForce = 3
MaxForce = 10
MinDef = 1
MaxDef = 5

sacdepotions = 10
sacdarmes = 4

pointdevie = 50


Attaque(){
    if (this.pointdevie == 0)
    return true
    else 
    return this.pointdevie
}

Recup_potion(_sacdepotions){
    if (this.sacdepotions < 10)
    return this.sacdepotions + 1
    else "Plus de place dans l/inventaire" 

    
}

Recup_arme(_sacdarmes){
    if (this.sacdarmes < 4)
    return this.Degats + 4
    else "Plus de place dans l/inventaire" 
}

Util_popo(_sacdepotions){
    if(this.pointdevie == 50)
    return false 
    else this.sacdepotions = this.sacdepotions - 1
    return pointdevie = pointdevie + 10;
    
}

static luckyWeapon = 4
static luckyPotion = 10; 

leaveReward() {

let randomPotion = Math.floor(math.random()*(skeleton.luckyPotion + 1));
let randomWeapon = Math.floor(math.random()*(skeleton.luckyWeapon + 1));
}

}

let user = new Hero ("user");
user.Attaque()
export { Hero }