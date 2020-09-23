// JavaScript Document
//vengono definite delle variabili che poi verranno utilizzate nei js per l'erogazione dei formati
var MMdatiSkin = new Array();
var nomeSito = 'meteo_new';
//
var MMstatusStrip = true;
var MMstatusRichMedia = true;
var MMstatusSkin = true;
var MMstatusBox = true;
var statusInread = false;
var statusSeedTag = true;
var MMstatusPromoBox = true;
var MMstatusNativePromoBox = true;
var MMstatusAdv = true;
//
var idSitoDfp = '244175897';
//per differenziare le varie sezioni
var MMSitoHp = window.location.href;
var MMarrayUrlSkin = new Array();
MMarrayUrlSkin = MMSitoHp.split('/');
/*controllo per togliere la skin momentaneamente*/
var MMarrayUrlSkinControllo = new Array();
MMarrayUrlSkinControllo = MMSitoHp.split('?');
var VerificaSottocanale = MMarrayUrlSkin[3].substr(0, 1);
//url modificata per passarla nel settargheting
var urlSetTargheting = MMarrayUrlSkinControllo[0].replace('http://','').replace('https://','').replace('www.','').replace('?refresh','').replace('?utm_source=Zemanta&utm_medium=referral','').replace(/\//gi,'_').replace('=','_','ig').replace('!','_','ig').replace('+','_','ig').replace('*','_','ig').replace('#','_','ig').replace('^','_','ig').replace('~','_','ig').replace(';','_','ig').replace('(','_','ig').replace(')','_','ig').replace('[','_','ig').replace(']','_','ig').replace('"','_','ig').replace("'","_","ig").replace('<','_','ig').replace('>','_');
//console.log('===>urlSetTargheting:'+urlSetTargheting);
//
var cssTemplateSkin = 1;
var MMPosition = 'init';
/* varibile per il canale della tag*/
var MMsezioneTag;
//cerco la sotto stringa sulle url dei pubbliredazionali dalla url principale per poi poter settare una adunit pubbli
var MMurlPubbli = new Array();
var MMstatusPubbli;

window.addEventListener('load', function() {
	
	if(typeof(ADX_label) != undefined && typeof(ADX_label) != 'undefined'){
		//console.log('===>ADX_label definita');
		
	}else{
		//console.log('===>ADX_label NON definita');
		ADX_label = '';
	}
	//console.log('===>ADX_label:'+ADX_label);
});

if(typeof(advSezione) != undefined && typeof(advSezione) != 'undefined'){
//
}else{
	var advSezione = '' 
}



// -- SCRIPT PER LA GEOLOCALIZZAZIONE --------------------------------------------------------------------------------------------------------//

//
	 
var datiMediamondGeo = new Object();

	
today = new Date();
oraAttuale = today.getHours();
//console.log('===>oraAttuale:'+oraAttuale);



function setKeywords(valore){
	//console.log('===>mediamondAd.setKeywords='+valore);
	//divido la stringa in array separendoli dove trovo il carattere -
	var KeywordsArray = valore.split('|');
	//console.log('===>KeywordsArray='+KeywordsArray);
	//console.log('===>KeywordsArray.length:'+KeywordsArray.length);

	//ciclo l'array per poi dividere i valori con i :
	for(u=0;u<KeywordsArray.length;u++){
		var vDatoCorrente;
		//console.log('===>----------------------------');
		vDato = KeywordsArray[u].split(':');	
		//console.log('===>VDato[0]:'+vDato[0]);
		var vDatoCorrenteArray = vDato[1].split('.');
		//console.log('===>vDatoCorrenteArray:'+vDatoCorrenteArray.length);
		//se il dato contiene + valori lo spezzo e mi prendo solo quello dell'ora corrente
		if(vDatoCorrenteArray.length>1){
			//console.log('===>analisi...');
			for(t=0;t<vDatoCorrenteArray.length;t++){
				if(t == oraAttuale){//tenere conto che la giornata inizia dall'ora 0
					vDatoCorrente = vDatoCorrenteArray[t];
				}
			}
		}else{
			//console.log('===>analisi2...');
			//console.log('===>VDato[1]:'+vDato[1]);
			vDatoCorrente = vDato[1];
		}
		//datiMediamondGeo.push(vDato[0]);
		//popolo l'oggetto	
		//console.log('===>datiMediamondGeo.'+vDato[0]+':'+vDatoCorrente);

		datiMediamondGeo[vDato[0]] = vDatoCorrente;
		window[vDato[0]] = vDatoCorrente;
		//console.log('===>window.'+vDato[0]+':'+window.pr);
		//console.log('===>datiMediamondGeo.'+vDato[0]+':'+datiMediamondGeo.pr);
		//console.log('===>----------------------------');
	}

}

if(typeof(adserverKw) != 'undefined'){
	setKeywords(adserverKw);
}
	

// -- FINE SCRIPT PER LA GEOLOCALIZZAZIONE --------------------------------------------------------------------------------------------------//
function sendAdUnit(canaleSito){
	MMsezioneTag = '/4758/'+canaleSito;
}
//blocco generico
if(MMarrayUrlSkin[2] == 'www.meteo.it' ){
	if(MMarrayUrlSkin[3] == '' || VerificaSottocanale == '?'){//home
		sendAdUnit('rti_meteo/home');
		cssTemplateSkin = 1;
	}else if (MMarrayUrlSkin[3] == 'video'){
		sendAdUnit('rti_meteo/video');
	}else if (MMarrayUrlSkin[4] == 'italia'){
		sendAdUnit('rti_meteo/italia');
	}else if (MMarrayUrlSkin[4] == 'mondo' || MMarrayUrlSkin[4] == 'europa'){
		sendAdUnit('rti_meteo/estero');
	}else{
		sendAdUnit('rti_meteo/altre');
		cssTemplateSkin = 1;
	}
}else{
	sendAdUnit('rti_meteo/altre');
	cssTemplateSkin = 1;
}
//blocco regioni province
//abruzzo
if(datiMediamondGeo.rg == 'abr' || MMarrayUrlSkin[4] == 'abruzzo' ){
	switch(datiMediamondGeo.pr){
		case 'ch':
			sendAdUnit('rti_meteo/abruzzo_chieti');
			break;
		case 'aq':
			sendAdUnit('rti_meteo/abruzzo_aquila');
			break;
		case 'pe':
			sendAdUnit('rti_meteo/abruzzo_pescara');
			break;
		case 'te':
			sendAdUnit('rti_meteo/abruzzo_teramo');
			break;
		default:
			sendAdUnit('rti_meteo/abruzzo_altre');
	}
}
//basilicata
if(datiMediamondGeo.rg == 'bas' || MMarrayUrlSkin[4] == 'basilicata'){
	switch(datiMediamondGeo.pr){
		case 'mt':
			sendAdUnit('rti_meteo/basilicata_matera');
			break;
		case 'pz':
			sendAdUnit('rti_meteo/basilicata_potenza');
			break;
		default:
			sendAdUnit('rti_meteo/basilicata_altre');
	}
}
//calabria
if(datiMediamondGeo.rg == 'cal' || MMarrayUrlSkin[4] == 'calabria'){
	switch(datiMediamondGeo.pr){
		case 'cz':
			sendAdUnit('rti_meteo/calabria_catanzaro');
			break;
		case 'cs':
			sendAdUnit('rti_meteo/calabria_cosenza');
			break;
		case 'kr':
			sendAdUnit('rti_meteo/calabria_crotone');
			break;
		case 'rc':
			sendAdUnit('rti_meteo/calabria_reggiocalabria');
			break;
		case 'vv':
			sendAdUnit('rti_meteo/calabria_vibovalentia');
			break;
		default:
			sendAdUnit('rti_meteo/calabria_altre');
	}
}
//campania
if(datiMediamondGeo.rg == 'cam' || MMarrayUrlSkin[4] == 'campania'){
	switch(datiMediamondGeo.pr){
		case 'av':
			sendAdUnit('rti_meteo/campania_avellino');
			break;
		case 'bn':
			sendAdUnit('rti_meteo/campania_benevento');
			break;
		case 'ce':
			sendAdUnit('rti_meteo/campania_caserta');
			break;
		case 'na':
			sendAdUnit('rti_meteo/campania_napoli');
			break;
		case 'sa':
			sendAdUnit('rti_meteo/campania_salerno');
			break;
		default:
			sendAdUnit('rti_meteo/campania_altre');
	}
}
//emilia romagna
if(datiMediamondGeo.rg == 'emi' || MMarrayUrlSkin[4] == 'emilia-romagna'){
	switch(datiMediamondGeo.pr){
		case 'bo':
			sendAdUnit('rti_meteo/emiliaromagna_bologna');
			break;
		case 'fe':
			sendAdUnit('rti_meteo/emiliaromagna_ferrara');
			break;
		case 'fc':
			sendAdUnit('rti_meteo/emiliaromagna_forlicesena');
			break;
		case 'mo':
			sendAdUnit('rti_meteo/emiliaromagna_modena');
			break;
		case 'pr':
			sendAdUnit('rti_meteo/emiliaromagna_parma');
			break;
		case 'pc':
			sendAdUnit('rti_meteo/emiliaromagna_piacenza');
			break;
		case 'ra':
			sendAdUnit('rti_meteo/emiliaromagna_ravenna');
			break;
		case 're':
			sendAdUnit('rti_meteo/emiliaromagna_reggioemilia');
			break;
		case 'rn':
			sendAdUnit('rti_meteo/emiliaromagna_rimini');
			break;
		default:
			sendAdUnit('rti_meteo/emiliaromagna_altre');
	}
}
//friuli venezia giulia
if(datiMediamondGeo.rg == 'fri' || MMarrayUrlSkin[4] == 'friuli-venezia-giulia'){
	switch(datiMediamondGeo.pr){
		case 'go':
			sendAdUnit('rti_meteo/friuliveneziagiulia_gorizia');
			break;
		case 'pn':
			sendAdUnit('rti_meteo/friuliveneziagiulia_pordenone');
			break;
		case 'ts':
			sendAdUnit('rti_meteo/friuliveneziagiulia_trieste');
			break;
		case 'ud':
			sendAdUnit('rti_meteo/friuliveneziagiulia_udine');
			break;
		default:
			sendAdUnit('rti_meteo/friuliveneziagiulia_altre');
	}
}
//lazio
if(datiMediamondGeo.rg == 'laz' || MMarrayUrlSkin[4] == 'lazio'){
	switch(datiMediamondGeo.pr){
		case 'fr':
			sendAdUnit('rti_meteo/lazio_frosinone');
			break;
		case 'lt':
			sendAdUnit('rti_meteo/lazio_latina');
			break;
		case 'rm':
			sendAdUnit('rti_meteo/lazio_roma');
			break;
		case 'ri':
			sendAdUnit('rti_meteo/lazio_rieti');
			break;
		case 'vt':
			sendAdUnit('rti_meteo/lazio_viterbo');
			break;
		default:
			sendAdUnit('rti_meteo/lazio_altre');
	}
}
//liguria
if(datiMediamondGeo.rg == 'lig' || MMarrayUrlSkin[4] == 'liguria'){
	switch(datiMediamondGeo.pr){
		case 'ge':
			sendAdUnit('rti_meteo/liguria_genova');
			break;
		case 'im':
			sendAdUnit('rti_meteo/liguria_imperia');
			break;
		case 'sp':
			sendAdUnit('rti_meteo/liguria_laspezia');
			break;
		case 'sv':
			sendAdUnit('rti_meteo/liguria_savona');
			break;
		default:
			sendAdUnit('rti_meteo/liguria_altre');
	}
}
//lombardia
if(datiMediamondGeo.rg == 'lom' || MMarrayUrlSkin[4] == 'lombardia'){
	switch(datiMediamondGeo.pr){
		case 'bg':
			sendAdUnit('rti_meteo/lombardia_bergamo');
			break;
		case 'bs':
			sendAdUnit('rti_meteo/lombardia_brescia');
			break;
		case 'co':
			sendAdUnit('rti_meteo/lombardia_como');
			break;
		case 'cr':
			sendAdUnit('rti_meteo/lombardia_cremona');
			break;
		case 'lc':
			sendAdUnit('rti_meteo/lombardia_lecco');
			break;
		case 'lo':
			sendAdUnit('rti_meteo/lombardia_lodi');
			break;
		case 'mn':
			sendAdUnit('rti_meteo/lombardia_mantova');
			break;
		case 'mi':
			sendAdUnit('rti_meteo/lombardia_milano');
			break;
		case 'mb':
			sendAdUnit('rti_meteo/lombardia_monzaebrianza');
			break;
		case 'pv':
			sendAdUnit('rti_meteo/lombardia_pavia');
			break;
		case 'so':
			sendAdUnit('rti_meteo/lombardia_sondrio');
			break;
		case 'va':
			sendAdUnit('rti_meteo/lombardia_varese');
			break;
		default:
			sendAdUnit('rti_meteo/lombardia_altre');
	}
}
//marche
if(datiMediamondGeo.rg == 'mar' || MMarrayUrlSkin[4] == 'marche'){
	switch(datiMediamondGeo.pr){
		case 'an':
			sendAdUnit('rti_meteo/marche_ancona');
			break;
		case 'ap':
			sendAdUnit('rti_meteo/marche_ascolipiceno');
			break;
		case 'fm':
			sendAdUnit('rti_meteo/marche_fermo');
			break;
		case 'mc':
			sendAdUnit('rti_meteo/marche_macerata');
			break;	
		case 'pu':
			sendAdUnit('rti_meteo/marche_pesarourbino');
			break;
		default:
			sendAdUnit('rti_meteo/marche_altre');
	}
}
//molise
if(datiMediamondGeo.rg == 'mol' || MMarrayUrlSkin[4] == 'molise'){
	switch(datiMediamondGeo.pr){
		case 'cb':
			sendAdUnit('rti_meteo/molise_campobasso');
			break;
		case 'is':
			sendAdUnit('rti_meteo/molise_isernia');
			break;
		default:
			sendAdUnit('rti_meteo/molise_altre');
	}
}
//piemonte
if(datiMediamondGeo.rg == 'pie' || MMarrayUrlSkin[4] == 'piemonte'){
	switch(datiMediamondGeo.pr){
		case 'al':
			sendAdUnit('rti_meteo/piemonte_alessandria');
			break;
		case 'at':
			sendAdUnit('rti_meteo/piemonte_asti');
			break;
		case 'bi':
			sendAdUnit('rti_meteo/piemonte_biella');
			break;
		case 'cn':
			sendAdUnit('rti_meteo/piemonte_cuneo');
			break;
		case 'no':
			sendAdUnit('rti_meteo/piemonte_novara');
			break;
		case 'to':
			sendAdUnit('rti_meteo/piemonte_torino');
			break;
		case 'vb':
			sendAdUnit('rti_meteo/piemonte_verbanocusioossola');
			break;
		case 'vc':
			sendAdUnit('rti_meteo/piemonte_vercelli');
			break;	
		default:
			sendAdUnit('rti_meteo/piemonte_altre');
	}
}

//puglia
if(datiMediamondGeo.rg == 'pug' || MMarrayUrlSkin[4] == 'puglia'){
	switch(datiMediamondGeo.pr){
		case 'ba':
			sendAdUnit('rti_meteo/puglia_bari');
			break;
		case 'br':
			sendAdUnit('rti_meteo/puglia_brindisi');
			break;
		case 'bt':
			sendAdUnit('rti_meteo/puglia_barlettaandriatrani');
			break;
		case 'fg':
			sendAdUnit('rti_meteo/puglia_foggia');
			break;
		case 'le':
			sendAdUnit('rti_meteo/puglia_lecce');
			break;
		case 'ta':
			sendAdUnit('rti_meteo/puglia_taranto');
			break;	
		default:
			sendAdUnit('rti_meteo/puglia_altre');
	}
}
//sardegna
if(datiMediamondGeo.rg == 'sar' || MMarrayUrlSkin[4] == 'sardegna'){
	switch(datiMediamondGeo.pr){
		case 'ca':
			sendAdUnit('rti_meteo/sardegna_cagliari');
			break;
		case 'ci':
			sendAdUnit('rti_meteo/sardegna_carboniaiglesias');
			break;
		case 'vs':
			sendAdUnit('rti_meteo/sardegna_mediocampidano');
			break;
		case 'nu':
			sendAdUnit('rti_meteo/sardegna_nuoro');
			break;
		case 'og':
			sendAdUnit('rti_meteo/sardegna_ogliastra');
			break;
		case 'ot':
			sendAdUnit('rti_meteo/sardegna_olbiatempio');
			break;
		case 'or':
			sendAdUnit('rti_meteo/sardegna_oristano');
			break;
		case 'ss':
			sendAdUnit('rti_meteo/sardegna_sassari');
			break;
		case 'su':
			sendAdUnit('rti_meteo/sardegna_sudsardegna');
			break;
		default:
			sendAdUnit('rti_meteo/sardegna_altre');
	}
}
//sicilia
if(datiMediamondGeo.rg == 'sic' || MMarrayUrlSkin[4] == 'sicilia'){
	switch(datiMediamondGeo.pr){
		case 'ag':
			sendAdUnit('rti_meteo/sicilia_agrigento');
			break;
		case 'cl':
			sendAdUnit('rti_meteo/sicilia_caltanissetta');
			break;
		case 'ct':
			sendAdUnit('rti_meteo/sicilia_catania');
			break;
		case 'en':
			sendAdUnit('rti_meteo/sicilia_enna');
			break;
		case 'me':
			sendAdUnit('rti_meteo/sicilia_messina');
			break;
		case 'pa':
			sendAdUnit('rti_meteo/sicilia_palermo');
			break;
		case 'rg':
			sendAdUnit('rti_meteo/sicilia_ragusa');
			break;
		case 'sr':
			sendAdUnit('rti_meteo/sicilia_siracusa');
			break;
		case 'tp':
			sendAdUnit('rti_meteo/sicilia_trapani');
			break;
		default:
			sendAdUnit('rti_meteo/sicilia_altre');
	}
}
//toscana
if(datiMediamondGeo.rg == 'tos' || MMarrayUrlSkin[4] == 'toscana'){
	switch(datiMediamondGeo.pr){
		case 'ar':
			sendAdUnit('rti_meteo/toscana_arezzo');
			break;
		case 'fi':
			sendAdUnit('rti_meteo/toscana_firenze');
			break;
		case 'gr':
			sendAdUnit('rti_meteo/toscana_grosseto');
			break;
		case 'li':
			sendAdUnit('rti_meteo/toscana_livorno');
			break;
		case 'lu':
			sendAdUnit('rti_meteo/toscana_lucca');
			break;
		case 'ms':
			sendAdUnit('rti_meteo/toscana_massacarrara');
			break;
		case 'pi':
			sendAdUnit('rti_meteo/toscana_pisa');
			break;
		case 'pt':
			sendAdUnit('rti_meteo/toscana_pistoia');
			break;
		case 'po':
			sendAdUnit('rti_meteo/toscana_prato');
			break;
		case 'si':
			sendAdUnit('rti_meteo/toscana_siena');
			break;
		default:
			sendAdUnit('rti_meteo/toscana_altre');
	}
}
//trentino
if(datiMediamondGeo.rg == 'tre' || MMarrayUrlSkin[4] == 'trentino-alto-adige'){
	switch(datiMediamondGeo.pr){
		case 'bz':
			sendAdUnit('rti_meteo/trentinoaltoadige_bolzano');
			break;
		case 'tn':
			sendAdUnit('rti_meteo/trentinoaltoadige_trento');
			break;
		
		default:
			sendAdUnit('rti_meteo/trentinoaltoadige_altre');
	}
}
//umbria
if(datiMediamondGeo.rg == 'umb' || MMarrayUrlSkin[4] == 'umbria'){
	switch(datiMediamondGeo.pr){
		case 'pg':
			sendAdUnit('rti_meteo/umbria_perugia');
			break;
		case 'tr':
			sendAdUnit('rti_meteo/umbria_terni');
			break;
		default:
			sendAdUnit('rti_meteo/umbria_altre');
	}
}
//valle d'aosta
if(datiMediamondGeo.rg == 'val' || MMarrayUrlSkin[4] == 'valle-d-aosta'){
	switch(datiMediamondGeo.pr){
		case 'ao':
			sendAdUnit('rti_meteo/valledaosta_aosta');
			break;
		default:
			sendAdUnit('rti_meteo/valledaosta_altre');
	}
}
//veneto
if(datiMediamondGeo.rg == 'ven' || MMarrayUrlSkin[4] == 'veneto'){
	switch(datiMediamondGeo.pr){
		case 'bl':
			sendAdUnit('rti_meteo/veneto_belluno');
			break;
		case 'pd':
			sendAdUnit('rti_meteo/veneto_padova');
			break;
		case 'ro':
			sendAdUnit('rti_meteo/veneto_rovigo');
			break;
		case 'tv':
			sendAdUnit('rti_meteo/veneto_treviso');
			break;
		case 've':
			sendAdUnit('rti_meteo/veneto_venezia');
			break;
		case 'vr':
			sendAdUnit('rti_meteo/veneto_verona');
			break;
		case 'vi':
			sendAdUnit('rti_meteo/veneto_vicenza');
			break;
		default:
			sendAdUnit('rti_meteo/veneto_altre');
	}
}



var sezionePaginaKey = new Array();
sezionePaginaKey.push(advSezione);
var keywordURL = '';
function cercaSezioneUrl() {
	//ciclo tutte le parole dell'array
	var numeroMMarrayUrlSkin = MMarrayUrlSkin.length;
	for (u=3; u<(MMarrayUrlSkin.length-1);u++){ 
		 sezionePaginaKey.push(MMarrayUrlSkin[u].toLowerCase()); 
	}
	var urlFinaleArticolo = MMarrayUrlSkin[(numeroMMarrayUrlSkin-1)].split('-');		
	var urlArrayArticoloCompleto = sezionePaginaKey.concat(urlFinaleArticolo);

	for(i=0;i<urlArrayArticoloCompleto.length;i++){
		keywordURL += urlArrayArticoloCompleto[i]+',';
	}
	//aggiungo alle kw anche quello che sta oltre il ?
	if(MMarrayUrlSkinControllo[1] != undefined && MMarrayUrlSkinControllo[1] != ''){
		keywordURL += MMarrayUrlSkinControllo[1];
	}
}
cercaSezioneUrl();



MMurlPubbli.push("speciale-nessuno");
for(t=0; t<MMurlPubbli.length; t++){
	MMstatusPubbli = MMSitoHp.indexOf(MMurlPubbli[t]);
	//console.log('===>MMurlPubbli:'+MMurlPubbli[t]);
	//console.log('===>statusPubbli:'+MMstatusPubbli);
	if(MMstatusPubbli>0){
		MMsezioneTag = '/4758/rti_meteo/publi';
	}
}
//MMsezioneTag = '/4758/test_mediamond/test2';
if(MMlarghezzaSitoAdv < 970) {
		//mobile
    divslotnameStrip = 'adv-gpt-masthead-skin-container1';
		divslotnameBox = 'adv-gpt-box-mobile-container1';
		divslotpromobox1 = 'adv-gpt-promobox-mobile-container1';
		divslotpromobox2 = 'adv-gpt-promobox-mobile-container2';
		divslotpromobox3 = 'adv-gpt-promobox-mobile-container3';
		divslotpromobox4 = 'adv-gpt-promobox-mobile-container4';
	}else{
		//desktop
        divslotnameStrip = 'adv-gpt-masthead-skin-container1';
		divslotnameBox = 'adv-gpt-box-container1';
		divslotpromobox1 = 'adv-gpt-promobox-container1';
		divslotpromobox2 = 'adv-gpt-promobox-container2';
		divslotpromobox3 = 'adv-gpt-promobox-container3';
		divslotpromobox4 = 'adv-gpt-promobox-container4';
	}
//
//
var campaignIdStrip;
var creativeIdStrip;
var lineItemIdStrip;
var sizeStrip;
//
var campaignIdBox;
var creativeIdBox;
var lineItemIdBox;
var sizeBox;
//
function initTagGpt(){


/*codice krux per settare le variabili*/
window.Krux||((Krux=function(){Krux.q.push(arguments);}).q=[]);
(function(){
  function retrieve(n){
    var m, k='kx'+n;
    if (window.localStorage) {
      return window.localStorage[k] || "";
    } else if (navigator.cookieEnabled) {
      m = document.cookie.match(k+'=([^;]*)');
      return (m && unescape(m[1])) || "";
    } else {
       return '';
    }
  }
  Krux.user = retrieve('user');
  /* nuova variabile */
  Krux.kxkuid = retrieve('kuid');
  /* fine nuova variabile */  
  Krux.segments = retrieve('segs') && retrieve('segs').split(',') || [];
})();

/*fine codice krux*/

	
	var lipHpsponsor = document.createElement("script");
	lipHpsponsor.async = false;
	lipHpsponsor.type = "text/javascript";
	lipHpsponsor.src = "//adv.mediamond.it/hpsponsor/meteo/hpsponsor_dinamic_new.js";
	var node = document.getElementsByTagName("body")[0];
	node.parentNode.insertBefore(lipHpsponsor, node);
	
//creo un div in cui erogare la tag del out of page
	var newdiv = document.createElement('div');
	newdiv.setAttribute('id', 'adv-gpt-outofpage');
	newdiv.setAttribute("style", "position:fixed;width:25px;height:25px;overflow:hidden;top:0;left:0;");//25x25 per ias
	var node = document.getElementsByTagName("body")[0];
	node.appendChild(newdiv);
	document.getElementById("adv-gpt-outofpage").innerHTML = "<img src='//static.mediamond.it/img_generiche/20x20.png' style='width:25px;height:25px'>";//per ias
	
	//ci permetterebbe di gestire un’offerta in programmatic guaranteed anche con i formati out of page
	var newdiv = document.createElement('div');
	newdiv.setAttribute('id', 'adv-gpt-outofpage2x2');
	newdiv.setAttribute("style", "position:absolute;width:1px;height:1px;overflow:hidden;");
	var node = document.getElementsByTagName("body")[0];
	node.appendChild(newdiv);
	
	//creo un div in cui erogare la tag della strip 320x50
	if(MMlarghezzaSitoAdv<760){
	var newdiv = document.createElement('div');
	newdiv.setAttribute('id', 'div-gpt-320x50');
	newdiv.setAttribute("style", "position:absolute;width:1px;height:1px;overflow:hidden;");
	var node = document.getElementsByTagName("body")[0];
	node.appendChild(newdiv);
	}
	
	if(typeof(ADX_label) != undefined && typeof(ADX_label) != 'undefined'){
		//console.log('===>ADX_label definita');
		//console.log('===>ADX_label:'+ADX_label);
	}else{
		//console.log('===>ADX_label NON definita');
		ADX_label = '';
	}
	if(typeof(Krux) != undefined && typeof(Krux) != 'undefined'){
		KruxSegments = Krux.segments;
		KruxUser = Krux.user;
	}else{
		KruxSegments = '';
		KruxUser = '';
	}
	

	
googletag.cmd.push(function() {
    
   // ripristinare quando online
	//metodo di iubenda per controllare l'erogazione adv profilati e non
    //googletag.pubads().setRequestNonPersonalizedAds(_iub.cs.api.isGoogleNonPersonalizedAds() ? 1 : 0); 
    //var statusCMP = _iub.cs.api.isGoogleNonPersonalizedAds() ? 1 : 0;

	//nuovo metodo _iub.cs.api.isConsentGiven() è true se c'è il consenso, false se ancora no;
	googletag.pubads().setRequestNonPersonalizedAds(_iub.cs.api.isConsentGiven() ? 0 : 1); 
    var statusCMP = _iub.cs.api.isConsentGiven() ? 0 : 1;
	
    console.log('[mediamond][cmp]===>statusCMP:'+statusCMP)
    console.log('[mediamond][cmp]===>_iub.cs.api.isGoogleNonPersonalizedAds():'+_iub.cs.api.isGoogleNonPersonalizedAds());
	console.log('[mediamond][cmp]===>_iub.cs.api.isConsentGiven():'+_iub.cs.api.isConsentGiven());
	
	
	/*temporanea*/
	 //console.log('[mediamond][cmp]===>no iubenda:');
	//var statusCMP = 0;
	//googletag.pubads().setRequestNonPersonalizedAds(1);
	
	if(MMstatusRichMedia){
			richmedia = googletag.defineOutOfPageSlot(MMsezioneTag,'adv-gpt-outofpage').addService(googletag.pubads());	
		}
		
		
		if(MMarrayUrlSkinControllo[1] != 'noskin' && MMstatusSkin){			
			
				
			if(devTypeUtility == "mobile_web_ipad" || devTypeUtility == "mobile_web_android_tablet"){
				  var mappingStrip = googletag.sizeMapping().
					addSize([0, 0], [[320, 100],[720, 240]]).
					addSize([600, 499], [720, 240]).
					addSize([971, 500], [[720, 240],[970, 250]]).
					addSize([1200, 500], [[100, 100],[970, 250]]).//su tablet non deve essere erogato il backgroud
					build();
			}else{
				  var mappingStrip = googletag.sizeMapping().
					addSize([0, 0], [[320, 100],[720, 240]]).
					addSize([971, 500], [[720, 240],[970, 250]]).
					addSize([1200, 500], [[100, 100],[970, 250]]).//su tablet non deve essere erogato il backgroud
					build();
			}
				

		}else if(MMstatusStrip){
			
			
			if(devTypeUtility == "mobile_web_ipad" || devTypeUtility == "mobile_web_android_tablet"){
				  var mappingStrip = googletag.sizeMapping().
					addSize([0, 0], [[320, 100],[720, 240]]).
					addSize([600, 499], [720, 240]).
					addSize([971, 500], [[720, 240],[970, 250]]).
					addSize([1200, 500], [[970, 250]]).//su tablet non deve essere erogato il backgroud
					build();
			}else{
				  var mappingStrip = googletag.sizeMapping().
					addSize([0, 0], [[320, 100],[720, 240]]).
					addSize([971, 500], [[720, 240],[970, 250]]).
					addSize([1200, 500], [[970, 250]]).//su tablet non deve essere erogato il backgroud
					build();
			}
			

		}
			
		//strip
		mm_stript1 = googletag.defineSlot(MMsezioneTag,[970,250],divslotnameStrip)
			.defineSizeMapping(mappingStrip)
			.setTargeting("pos","1")
			.setCollapseEmptyDiv(true,true)
			.addService(googletag.pubads());
	
	//strip 320x50
		
		if (document.getElementById('div-gpt-320x50') && MMstatusStrip) {
			mm_stript2 = googletag.defineSlot(MMsezioneTag,[320,50],'div-gpt-320x50')
				.setTargeting("pos","1")
				.setCollapseEmptyDiv(true,true)
				.addService(googletag.pubads());
		}


		//box
		if (document.getElementById(divslotnameBox) && MMstatusBox) {
			
			mm_box1 = googletag.defineSlot(MMsezioneTag,[[300,250],[300,600]],divslotnameBox)
				.setTargeting("pos","1")
				.setCollapseEmptyDiv(true,true)
				.addService(googletag.pubads());
			
		}
		
		if(MMstatusPromoBox){
			if ((document.getElementById("adv-gpt-promobox-container1") && MMlarghezzaSitoAdv >= 970) || (document.getElementById("adv-gpt-promobox-mobile-container1") && MMlarghezzaSitoAdv < 970) ) {

				//promobox
				promobox1 = googletag.defineSlot(MMsezioneTag, [300, 100], divslotpromobox1)
					.addService(googletag.pubads())
					.setCollapseEmptyDiv(true,true)
					.setTargeting("pos", "1");

			}


			if ((document.getElementById("adv-gpt-promobox-container2") && MMlarghezzaSitoAdv >= 970) || (document.getElementById("adv-gpt-promobox-mobile-container2") && MMlarghezzaSitoAdv < 970) ) {


				promobox2 = googletag.defineSlot(MMsezioneTag, [[300, 100],'fluid'], divslotpromobox2)
					.addService(googletag.pubads())
					.setCollapseEmptyDiv(true)

					.setTargeting("pos", "2");

			}

			if ((document.getElementById("adv-gpt-promobox-container3") && MMlarghezzaSitoAdv >= 970) || (document.getElementById("adv-gpt-promobox-mobile-container3") && MMlarghezzaSitoAdv < 970) ) {	

				promobox3 = googletag.defineSlot(MMsezioneTag, [300, 100], divslotpromobox3)
					.addService(googletag.pubads())
					.setCollapseEmptyDiv(true)
					.setTargeting("pos", "3");

			}

			if ((document.getElementById("adv-gpt-promobox-container4") && MMlarghezzaSitoAdv >= 970) || (document.getElementById("adv-gpt-promobox-mobile-container4") && MMlarghezzaSitoAdv < 970) ) {

				promobox4 = googletag.defineSlot(MMsezioneTag, [300, 100], divslotpromobox4)
					.addService(googletag.pubads())
					.setCollapseEmptyDiv(true)
					.setTargeting("pos", "4");

			}
		}
	
	if(MMstatusRichMedia){
		richmedia2x2 = googletag.defineSlot(MMsezioneTag, [2,2], 'adv-gpt-outofpage2x2').addService(googletag.pubads());
	}

	googletag.pubads().setTargeting("purl",""+urlSetTargheting+"");	
	googletag.pubads().setTargeting("keywordURL",[""+keywordURL+""]);
	googletag.pubads().setTargeting("sezionePagina",[""+sezionePaginaKey+""]);
	googletag.pubads().setTargeting("meteo_regione",""+datiMediamondGeo.rg+"");
	googletag.pubads().setTargeting("meteo_provincia",""+datiMediamondGeo.pr+"");
	googletag.pubads().setTargeting("meteo_nomelocalita",""+datiMediamondGeo.loc+"");
	googletag.pubads().setTargeting("meteo_tipolocalita",""+datiMediamondGeo.tloc+"");
	googletag.pubads().setTargeting("meteo_targetingmeteorologico",""+datiMediamondGeo.prev+"");
	googletag.pubads().setTargeting("meteo_temperaturaminima",""+datiMediamondGeo.tmin+"");
	googletag.pubads().setTargeting("meteo_temperaturamassima",""+datiMediamondGeo.tmax+"");
	googletag.pubads().setTargeting("meteo_temperaturapercepita",""+datiMediamondGeo.tperc+"");
	googletag.pubads().setTargeting("meteo_temperaturamedia",""+datiMediamondGeo.temp+"");
	googletag.pubads().setTargeting("meteo_umidita",""+datiMediamondGeo.um+"");
	googletag.pubads().setTargeting("meteo_mare",""+datiMediamondGeo.mr+"");
	googletag.pubads().setTargeting("meteo_codiceistat",""+datiMediamondGeo.cm+"");
	googletag.pubads().setTargeting("meteo_indiceuv",""+datiMediamondGeo.uv+"");
	googletag.pubads().setTargeting("meteo_vento",""+datiMediamondGeo.vn+"");
	if(statusCMP === 0){
            googletag.pubads().setTargeting("ksg",KruxSegments);
            googletag.pubads().setTargeting("kuid",KruxUser);
        }
	googletag.pubads().enableSingleRequest();
    googletag.pubads().disableInitialLoad();
	googletag.enableServices();
	
	googletag.pubads().addEventListener('slotOnload', function(event) {
		if(MMstatusStrip){
			if(event.slot===mm_stript1) {
				//console.log('===> slot strip caricato');
				
                if(sizeStrip == '728,90'){
                   initComscore(campaignIdStrip,creativeIdStrip,lineItemIdStrip,sizeStrip,1,'mm_stript1',1,divslotnameStrip);
                }
                if(sizeStrip == '970,250'){
                    initIAS(campaignIdStrip,creativeIdStrip,lineItemIdStrip,sizeStrip,1,divslotnameStrip);
                }
                if(sizeStrip == '720,240'){
                    initIAS(campaignIdStrip,creativeIdStrip,lineItemIdStrip,sizeStrip,1,divslotnameStrip);
                }
			}
		}
		if(document.getElementById(divslotnameBox) && MMstatusBox){
            if(event.slot===mm_box1) {
				initComscore(campaignIdBox,creativeIdBox,lineItemIdBox,sizeBox,1,'mm_box1',1,divslotnameBox);
                initIAS(campaignIdBox,creativeIdBox,lineItemIdBox,sizeBox,1,divslotnameBox);
			}
		}
		});
		googletag.pubads().addEventListener('slotRenderEnded', function(event) {
			if(MMstatusStrip){
				if(event.slot===mm_stript1) {
					campaignIdStrip = event.campaignId;
					creativeIdStrip = event.creativeId;
					lineItemIdStrip = event.lineItemId;
					sizeStrip = event.size;

					sizeCompleta = event.size;				
					//console.log('[mediamond]===>mm_stript1 sizeCompleta:'+sizeCompleta);
					idCampagnaMastHead=event.campaignId;
					if(MMlarghezzaSitoAdv <= 970 && sizeCompleta == '720,240'){
						//console.log('chiamata resize iframe2');
						ResizeIframe4("noJQ");
					}

					if(MMlarghezzaSitoAdv >= 970 && sizeCompleta == '720,240'){
						//mi serve per centrare il minimasthead quando la risoluzione è superiore ai 970
						//CenterMinimasthead();
					}
				}
			}
			if(MMlarghezzaSitoAdv <= 970){
				if (document.getElementById('div-gpt-320x50') && MMstatusStrip) {
					if(event.slot===mm_stript2) {
						//console.log('[mediamond]===> slot mm_stript2 renderizzato');
						//console.log('[mediamond]===> slot mm_stript2 status'+event.isEmpty);
						var statusSlot = event.isEmpty

						idCampagnaMastHead=event.campaignId;				
						if(MMlarghezzaSitoAdv <= 970 && !statusSlot){
							//console.log('===>chiamata ChangePosition...');
							ChangePosition();
						}
					}
				}
			}
			if(document.getElementById(divslotnameBox) && MMstatusBox){
				if(event.slot===mm_box1) {
					campaignIdBox = event.campaignId;
					creativeIdBox = event.creativeId;
					lineItemIdBox = event.lineItemId;
					sizeBox = event.size;
					idCampagnaBox=event.campaignId;

					if(event.isEmpty == true){
						bloccoScrollBox = true;
					}
				}
			}
		}); 
	
});
    
    
    /*configurazione ias per ottimizzazione --------------------------------------------------------------------------------------------------- */
    
      /*if(MMSitoHp == 'https://www.tgcom24.mediaset.it/spettacolo/'){*/
        // The following lines provide an example of how you can encapsulate the call to
            // DFP in a function that ensures the ads are requested only once. If you use
            // lazy loading and need to call DFP multiple times for the same page, we can
            // provide a different example that manages such a case (ensuring that only
            // new ad slots are refreshed).
            var adserverRequestSent = false;
            function requestAds() {
                if (adserverRequestSent) return;
                clearTimeout(IASPET_TIMEOUT);
                googletag.pubads().refresh(); // Display the ads
                //per lanciare i promobox
                console.log('[mediamond][ias ottimizzazione]===>refresh');
                adserverRequestSent = true;
            }
            // Initial IAS setup
            var iasDataHandler;
            window.__iasPET = window.__iasPET || {};

            window.__iasPET.queue = window.__iasPET.queue || [];
            window.__iasPET.pubId = '929824'; // constant for your account
            var IASPET_TIMEOUT = 2000; // max milliseconds to wait for a PET response
            var __iasPETTimeoutRequestAds = setTimeout(requestAds, IASPET_TIMEOUT);
            var iasDataHandler = function (adSlotData) {
                clearTimeout(__iasPETTimeoutRequestAds);
                window.__iasPET.setTargetingForGPT();
                requestAds();
            };

            // make the PET request
            googletag.cmd.push(function () {
                // read the currently defined GPT ad slots for sending to the PET endpoint
                // defined all GPT ad slots before calling PET
                var gptSlots = googletag.pubads().getSlots();
                var iasPETSlots = [];
                for (var i = 0; i < gptSlots.length; i++) {
                    var sizes = gptSlots[i].getSizes().map(function (size) {
                        if (size.getWidth && size.getHeight)
                            return [size.getWidth(), size.getHeight()];
                        else
                            return [1, 1];
                    });
                    iasPETSlots.push({
                        adSlotId: gptSlots[i].getSlotElementId(),
                        //size: can either be a single size (for example, [728, 90])
                        // or an array of sizes (for example, [[728, 90], [970, 90]])
                        size: sizes,
                        adUnitPath: gptSlots[i].getAdUnitPath()
                    });
                }
                // make the request to PET. if your page makes multiple ad requests to DFP
                // (for example, lazily loaded ads, infinite scrolling pages, etc.), make
                // a request to PET before every request to DFP
                window.__iasPET.queue.push({
                    adSlots: iasPETSlots,
                    dataHandler: iasDataHandler
                });
            });
        
    
      //}//if(MMSitoHp == ''){
    /* fine configurazione ias -------------------------------------------------------------------------------------------- */
	
}



function ChangePosition(){
	//console.log('===>ChangePosition');
	//console.log('[medimamond]===>MMaltezzaSitoAdv:'+MMaltezzaSitoAdv);
	document.querySelector('#div-gpt-320x50').setAttribute('style','left: 0; position:fixed; bottom:0; z-index:999999;text-align:center;width:100%;background-color:#fff;-webkit-box-shadow: 0px -3px 3px 0px rgba(50, 50, 50, 0.75);box-shadow: 0px -3px 3px 0px rgba(50, 50, 50, 0.75);-webkit-transition: all 0.3s ease-in-out;');  
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var idCampagnaBox;
var idCampagnaMastHead;
var MMlarghezzaSitoAdv = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var MMerogazioneSkin = false;
var sizeCompletaBox;

////------------------------------------------------------------------------------------------------------------------
var nRefresh = 0;
var idCampagnaBox;
var bloccoScrollBox = false;
//funzione per il refresh
function MediamondTagRefresh(){
	//console.log('refresh tag');
	//viene fatto il refresh della tag dopo la 4° chiamata
	if(nRefresh == 4){
		googletag.pubads().refresh([mm_box1]);
		nRefresh = 0;
	}else{
		nRefresh ++;
	}
}
var arraySlot = new Array();
//controllo lo scrol della pagina
window.addEventListener('load', function() {
	window.addEventListener('scroll', function() {
		//console.log('windows scroll');
		for (n=2;n<20;n++){
			if( document.querySelector("#adv-gpt-box-container"+n) && MMlarghezzaSitoAdv >= 970 && MMstatusBox) {
			  //console.log('--> adv-gpt-box-container'+n+' esiste');
			  //console.log('array:'+arraySlot[4]);
			  if( arraySlot[n] == undefined ){
					generaGpt(n);
				//console.log('div vuoto' );
			  }
			}
			if(document.querySelector("#adv-gpt-box-mobile-container"+n) && MMlarghezzaSitoAdv < 970 && MMstatusBox ) {
			  //console.log('===> adv-gpt-box-container'+n+' esiste');
			  //console.log('array:'+arraySlot[4]);
			  if( arraySlot[n] == undefined ){
					generaGpt(n);
				//console.log('div vuoto' );
			  }else{
				  //checkInvendutoBox(n,250);
			  }
			}
		}
	});
});
//questa funzione genera le tag gpt
function generaGpt(nSlot){
	//console.log('===> generare slot gpt:'+nSlot);
	posNew = nSlot;
	if(MMlarghezzaSitoAdv < 970) {
		//mobile
		divslotnameNew = 'adv-gpt-box-mobile-container' + nSlot;
		window['mm_mobile_box' + posNew];
		//tag gpt
		googletag.cmd.push(function() {
		window['mm_mobile_box' + posNew] = googletag.defineSlot(MMsezioneTag,[300,250],divslotnameNew).addService(googletag.pubads())
		.setTargeting("pos",""+posNew+"").setCollapseEmptyDiv(true);
		googletag.pubads().setTargeting("idcampagna",""+idCampagnaBox+"");
		googletag.pubads().setTargeting("purl",""+urlSetTargheting+"");
			
		googletag.pubads().setTargeting("meteo_regione",""+datiMediamondGeo.rg+"");
		googletag.pubads().setTargeting("meteo_provincia",""+datiMediamondGeo.pr+"");
		googletag.pubads().setTargeting("meteo_nomelocalita",""+datiMediamondGeo.loc+"");
		googletag.pubads().setTargeting("meteo_tipolocalita",""+datiMediamondGeo.tloc+"");
		googletag.pubads().setTargeting("meteo_targetingmeteorologico",""+datiMediamondGeo.prev+"");
		googletag.pubads().setTargeting("meteo_temperaturaminima",""+datiMediamondGeo.tmin+"");
		googletag.pubads().setTargeting("meteo_temperaturamassima",""+datiMediamondGeo.tmax+"");
		googletag.pubads().setTargeting("meteo_temperaturapercepita",""+datiMediamondGeo.tperc+"");
		googletag.pubads().setTargeting("meteo_temperaturamedia",""+datiMediamondGeo.temp+"");
		googletag.pubads().setTargeting("meteo_umidita",""+datiMediamondGeo.um+"");
		googletag.pubads().setTargeting("meteo_mare",""+datiMediamondGeo.mr+"");
			
		googletag.pubads().setTargeting("meteo_codiceistat",""+datiMediamondGeo.cm+"");
		googletag.pubads().setTargeting("meteo_indiceuv",""+datiMediamondGeo.uv+"");
		googletag.pubads().setTargeting("meteo_vento",""+datiMediamondGeo.vn+"");
			
			
			//googletag.pubads().collapseEmptyDivs(); 
		googletag.enableServices();
			
            
            
            
             googletag.pubads().addEventListener('slotRenderEnded', function(event) {
				if(event.slot===window['mm_mobile_box' + posNew]) {
                    campaignIdBox = event.campaignId;
				creativeIdBox = event.creativeId;
				lineItemIdBox = event.lineItemId;
				sizeBox = event.size;
					//leggo l'id label: https://developers.google.com/doubleclick-gpt/reference#googletagresponseinformation
					sizeCompleta = event.size;
					//console.log('===>sizeCompleta[0]:'+sizeCompleta[0]);
					//console.log('===>sizeCompleta[1]:'+sizeCompleta[1]);
					idCampagnaBox=event.campaignId;
					//checkInvendutoBox(nSlot,sizeCompleta[1]);
				}
			}); 
            googletag.pubads().addEventListener('slotOnload', function(event) {
                if(event.slot===window['mm_mobile_box' + posNew]) {
                    initComscore(campaignIdBox,creativeIdBox,lineItemIdBox,sizeBox,posNew,window['mm_mobile_box' + posNew],nSlot,divslotnameNew);
                    initIAS(campaignIdBox,creativeIdBox,lineItemIdBox,sizeBox,posNew,divslotnameNew);
                }
		      }); 
			
			
			
		});
	}else{
		//desktop
		divslotnameNew = 'adv-gpt-box-container' + nSlot;
		window['mm_box' + posNew];	
		//tag gpt
		googletag.cmd.push(function() {
		window['mm_box' + posNew] = googletag.defineSlot(MMsezioneTag,[[300,250],[300,600]],divslotnameNew).addService(googletag.pubads())
		.setTargeting("pos",""+posNew+"").setCollapseEmptyDiv(true);
		googletag.pubads().setTargeting("idcampagna",""+idCampagnaBox+"");
		googletag.pubads().setTargeting("purl",""+urlSetTargheting+"");
			
		googletag.pubads().setTargeting("meteo_regione",""+datiMediamondGeo.rg+"");
		googletag.pubads().setTargeting("meteo_provincia",""+datiMediamondGeo.pr+"");
		googletag.pubads().setTargeting("meteo_nomelocalita",""+datiMediamondGeo.loc+"");
		googletag.pubads().setTargeting("meteo_tipolocalita",""+datiMediamondGeo.tloc+"");
		googletag.pubads().setTargeting("meteo_targetingmeteorologico",""+datiMediamondGeo.prev+"");
		googletag.pubads().setTargeting("meteo_temperaturaminima",""+datiMediamondGeo.tmin+"");
		googletag.pubads().setTargeting("meteo_temperaturamassima",""+datiMediamondGeo.tmax+"");
		googletag.pubads().setTargeting("meteo_temperaturapercepita",""+datiMediamondGeo.tperc+"");
		googletag.pubads().setTargeting("meteo_temperaturamedia",""+datiMediamondGeo.temp+"");
		googletag.pubads().setTargeting("meteo_umidita",""+datiMediamondGeo.um+"");
		googletag.pubads().setTargeting("meteo_mare",""+datiMediamondGeo.mr+"");
			
		googletag.pubads().setTargeting("meteo_codiceistat",""+datiMediamondGeo.cm+"");
		googletag.pubads().setTargeting("meteo_indiceuv",""+datiMediamondGeo.uv+"");
		googletag.pubads().setTargeting("meteo_vento",""+datiMediamondGeo.vn+"");
			
			
			//googletag.pubads().collapseEmptyDivs(); 
		googletag.enableServices();
			
			
			 googletag.pubads().addEventListener('slotRenderEnded', function(event) {
				if(event.slot===window['mm_box' + posNew]) {
                    campaignIdBox = event.campaignId;
				creativeIdBox = event.creativeId;
				lineItemIdBox = event.lineItemId;
				sizeBox = event.size;
					//leggo l'id label: https://developers.google.com/doubleclick-gpt/reference#googletagresponseinformation
					sizeCompleta = event.size;
					//console.log('===>sizeCompleta[0]:'+sizeCompleta[0]);
					//console.log('===>sizeCompleta[1]:'+sizeCompleta[1]);
					idCampagnaBox=event.campaignId;
					//checkInvendutoBox(nSlot,sizeCompleta[1]);
				}
			}); 
			
			googletag.pubads().addEventListener('slotOnload', function(event) {
                if(event.slot===window['mm_box' + posNew]) {
                    initComscore(campaignIdBox,creativeIdBox,lineItemIdBox,sizeBox,posNew,window['mm_box' + posNew],nSlot,divslotnameNew);
                    initIAS(campaignIdBox,creativeIdBox,lineItemIdBox,sizeBox,posNew,divslotnameNew);
                }
		  }); 
			
			
		});
	}
	arraySlot[nSlot] = "pieno";
	googletag.cmd.push(function() { googletag.display(divslotnameNew); });
	if(MMlarghezzaSitoAdv<970){
        googletag.pubads().refresh([window['mm_mobile_box' + posNew]]);
    }else{
        googletag.pubads().refresh([window['mm_box' + posNew]]);
    }
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//js utility ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var lipHpsponsor = document.createElement("script");
lipHpsponsor.async = false;
lipHpsponsor.type = "text/javascript";
var useSSL = "https:" == document.location.protocol;
lipHpsponsor.src = (useSSL ? "https:" : "http:") + "//adv.mediamond.it/hp_sponsor/utility_mediamond.js";
var node = document.getElementsByTagName("script")[0];
node.parentNode.insertBefore(lipHpsponsor, node);