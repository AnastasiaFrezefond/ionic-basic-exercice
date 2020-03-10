const design = document.querySelector('#input-design');
const montant = document.querySelector('#input-montant');
const boutonConfirmer = document.querySelector('#btn-confirm');
const boutonAnnuler = document.querySelector('#btn-cancel');
const liste_Achats = document.querySelector('#listeAchats');

const alertCtrl = document.querySelector('ion-alert-controller');


const montant_achats = document.querySelector('#total_achats');
let totalAchat = 0;

const clear = () => {
    design.value = '';
    montant.value = '';
}

boutonAnnuler.addEventListener( 'click' , clear);

boutonConfirmer.addEventListener( 'click' , () => {

    const designation_recup = design.value;
    const somme_recup = montant.value;

    if(designation_recup.trim().length <= 2 || somme_recup <= 0 
      || somme_recup.trim().length <= 0){

        //console.log("erreur de designation ou montant");

        alertCtrl.create({
                message: 'Veuillez entrez des données correctes',
                header: 'Valeurs incorrectes',
                buttons: ["J'ai compris"]
        }).then(alertElement => {
            alertElement.present();
        });

        return;
    }

    newItem = document.createElement('ion-item');
    newItem.textContent = designation_recup + ' : €' + somme_recup;
    liste_Achats.appendChild(newItem);

    totalAchat += +somme_recup
    // +somme_recup (se comporter comme un nombre)
    // totalAchat = totalAchat + somme_recup
    // console.log(totalAchat);
    
    montant_achats.textContent = totalAchat;

    clear();

    
});