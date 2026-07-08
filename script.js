const hasloInput = document.getElementById('haslo-input');
const pasekPostepu = document.getElementById('pasek-postepu');

const min8Znakow = document.getElementById('wymog-1');
const duzaLitera = document.getElementById('wymog-2');
const malaLitera = document.getElementById('wymog-3');
const zawieraCyfre = document.getElementById('wymog-4');
const specjalnyZnak = document.getElementById('wymog-5');


hasloInput.addEventListener('input',function(){

    const aktualneHaslo = hasloInput.value;
    let licznikSpelnionychWarunkow = 0;
    const tekstSilaHasla = document.getElementById('tekst-sila-hasla');

    if(aktualneHaslo.length < 8){
        min8Znakow.style.color = '#d70909';
    } else {
        min8Znakow.style.color = 'lime';
        licznikSpelnionychWarunkow++;
    }

    if(/[A-Z]/.test(aktualneHaslo)) {
        duzaLitera.style.color = 'lime';
        licznikSpelnionychWarunkow++;
    } else {
        duzaLitera.style.color ='#d70909';
    }

    if(/[a-z]/.test(aktualneHaslo)) {
        malaLitera.style.color = 'lime';
        licznikSpelnionychWarunkow++;
    } else {
        malaLitera.style.color = '#d70909';
    }

    if(/[0-9]/.test(aktualneHaslo)){
        zawieraCyfre.style.color = 'lime';
        licznikSpelnionychWarunkow++;
    } else {
        zawieraCyfre.style.color = '#d70909';
    }

    if(/[^A-Za-z0-9]/.test(aktualneHaslo)){
        specjalnyZnak.style.color = 'lime';
        licznikSpelnionychWarunkow++;
    } else {
        specjalnyZnak.style.color = '#d70909';
    }

    const procentowoSPelnioneWarunki = licznikSpelnionychWarunkow * 20;
    pasekPostepu.style.width = procentowoSPelnioneWarunki + '%';

    if(aktualneHaslo.length === 0){
        pasekPostepu.style.width = '0%';
        tekstSilaHasla.innerText = 'Zacznij wpisywac hasło...';
        tekstSilaHasla.style.color = '#848383';
    } else if(licznikSpelnionychWarunkow <= 2){
        pasekPostepu.style.backgroundColor = '#d70909';
        tekstSilaHasla.innerText = 'Słabe haslo';
        tekstSilaHasla.style.color = '#d70909';
    } else if(licznikSpelnionychWarunkow < 4){
        tekstSilaHasla.innerText = 'Średnie haslo';
        pasekPostepu.style.backgroundColor = '#df5a13';
        tekstSilaHasla.style.color = '#df5a13';
    } else if(licznikSpelnionychWarunkow < 5){
        tekstSilaHasla.innerText = 'Dobre hasło';
        pasekPostepu.style.backgroundColor = '#e8e833';
        tekstSilaHasla.style.color = '#e8e833';
    } else {
        tekstSilaHasla.innerText = 'Bardzo mocne hasło';
        pasekPostepu.style.backgroundColor = 'lime';
        tekstSilaHasla.style.color = 'lime';
    }

});

const pokazHaslo = document.getElementById('pokaz-haslo');

pokazHaslo.addEventListener('click', function(){

    if(hasloInput.type === 'password'){
        hasloInput.type = 'text';
        pokazHaslo.innerText = 'visibility_off';
    } else {
        hasloInput.type = 'password';
        pokazHaslo.innerText = 'visibility';
    }
});

async function szyfr(pierwszeHaslo){

    const tlumacz = new TextEncoder();
    const hasloBajty = tlumacz.encode(pierwszeHaslo);

    const zaszyfrowaneHasloBajty = await crypto.subtle.digest('SHA-1', hasloBajty);

    const tablicaBajtow = Array.from(new Uint8Array(zaszyfrowaneHasloBajty));
    const gotowyHash = tablicaBajtow.map(bajt => bajt.toString(16).padStart(2,'0')).join('');
    return gotowyHash.toUpperCase();
    
}
async function sprawdzWyciek(gotowyHash){

    const preffix = gotowyHash.slice(0,5);
    const suffix = gotowyHash.slice(5);
    const urlGotowy = "https://api.pwnedpasswords.com/range/" + preffix;
    
    const odpowiedzSerwera = await fetch(urlGotowy);
    const surowyTekstListy = await odpowiedzSerwera.text();

    console.log(surowyTekstListy);

    if(surowyTekstListy.includes(suffix)){
        return true;
    }else{
        return false;
    }   
}

const przyciskWycieku = document.getElementById('przycisk-wycieku');
const wynikWycieku = document.getElementById('wynik-wycieku');

przyciskWycieku.addEventListener('click', async function(){
    
    const aktualneHaslo = hasloInput.value;

    if(aktualneHaslo.length > 0){
        const wygenerowanyHash = await szyfr(aktualneHaslo);
        const czyBylWyciek = await sprawdzWyciek(wygenerowanyHash);

        if(czyBylWyciek === true){
            wynikWycieku.innerText = "Hasło wyciekło!";
            wynikWycieku.style.color = '#d70909';
        } else {
            wynikWycieku.innerText = "Hasło jest bezpieczne.";
            wynikWycieku.style.color = 'lime';
        } 
    } else {
            wynikWycieku.innerText = "Wpisz hasło";
            wynikWycieku.style.color = "pink"
        }
});

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', function(){
    document.body.classList.toggle('light-mode');
})