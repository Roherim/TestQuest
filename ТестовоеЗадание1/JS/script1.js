const popapLinks=document.querySelectorAll('.Popap_Link');
const Body=document.querySelector('body');
let unlock=true;
const timeout=800;
if (popapLinks.length>0){
    for (let index=0; index<popapLinks.length; index++){
        const popapLink=popapLinks[index];
        popapLink.addEventListener('click', function(e){
            const popapName=popapLink.getAttribute(`href`).replace('#', '');
            const currentPopap=document.getElementById(popapName);
            popupOpen(currentPopap);
            e.preventDefault();
        });
    }
}
const PopapCloseicon=document.querySelectorAll(`.close-popup`);
if(PopapCloseicon.length>0){
    for (let index=0; index<PopapCloseicon.length; index++) {
        const el=PopapCloseicon[index];
        el.addEventListener('click', function(e){
            popupClose(el.closest('.popap'));
            e.preventDefault();
        });
    }
}
function popupOpen(currentPopap){
    if(currentPopap && unlock){
        const PopupActive=document.querySelector('.popap.open');
        if(PopupActive){
            popupClose(PopupActive, false);
        }
        currentPopap.classList.add('open');
        currentPopap.addEventListener('click', function(e){
            if(!e.target.closest('.popap_content')){
                popupClose(e.target.closest('.popap'))
            }
        });
    }
}
function popupClose(PopupActive){
    if(unlock){
        PopupActive.classList.remove('open');
    }
}