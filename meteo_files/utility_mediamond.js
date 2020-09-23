/* in questo file sono raccolte tutte le funzioni comuni utilizzate dai file js*/
var MMarrayUrlSkinControllo = new Array();
MMarrayUrlSkinControllo = MMSitoHp.split('?');
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//checkKrux
checkKruxMediamond = function(){
	//alert('Check Krux\n-----------\nKruxUser:'+KruxUser+'\n--------\nKruxSegments:'+KruxSegments);
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//js di test per gestire l'adv con un xml
var dataOggi = new Date();
var giornoOggi = dataOggi.getDate();
var meseOggi = dataOggi.getMonth()+1;	
var annoOggi = dataOggi.getFullYear();		
function dateCompare(anno,mese,giorno){
var preimpostata = new Date(anno,mese,giorno); 
var oggiMediamond = new Date();
	//console.log('[mediamond][xml]===>data oggi:'+oggi.getTime());
	var diff = preimpostata.getTime() - (parseInt(oggiMediamond.getTime())-82800000);  
	//console.log('[mediamond][xml]===>data xml:'+preimpostata.getTime());
	//console.log('[mediamond][xml]===>data oggi post:'+(parseInt(oggi.getTime())-82800000));
	//console.log('[mediamond][xml]===>data diff:'+diff);
	return diff;
	if(diff<=0){
		
		console.log('[mediamond][xml]===>a data è già passata!');
	}   //Se la data preimpostata non è ancora passata  
	else {     
		console.log('[mediamond][xml]===>Non è ancora passata la data!');
	} 
};

/// gestionale adv speciali
if(nomeSito == 'rockol' || nomeSito == 'ilgiornale' || nomeSito == 'focusjunior' || nomeSito == 'starbene' || nomeSito == 'donnamoderna' || nomeSito == 'soldionline' || nomeSito == 'androiworld' || nomeSito == 'mobileworld' || nomeSito == 'smartworld' || nomeSito == 'farmacoecura'|| nomeSito == 'nostrofiglio' || nomeSito == 'pianetadonna' || nomeSito == 'pianetamamma' || nomeSito == 'studenti_new' || nomeSito == 'sportmediaset' || nomeSito == 'salepepe' || nomeSito == 'valorinormali'){
	
	console.log('[mediamond][xml]===>ATTIVO');
	
	var urlClean = MMSitoHp.split('?');
	console.log('[mediamond][xml]===>urlClean:'+urlClean[0]);	
	
	function initXmlControll(){
	var x=docXmlMediamond.getElementsByTagName("display");
	//console.log('[mediamond][xml]===>numero elementi display:'+x.length);	
	//console.log('[mediamond][xml]===>numero elementi display:'+x.count);	

    
    for (i=0;i<x.length;i++){
	var sezioneXml;	
	var urlXml;	
	var urlXmlArray = [];	
	var urlXmlConfigurata = false;
	var newAdunit;
	//console.log('');
	//console.log('[mediamond][xml]===> blocco '+i+' +++++++++++++++++++++++++++++++++++++++++++');	
	//controllo presenza url
	if (typeof(x[i].getElementsByTagName("url")[0].childNodes[0]) != 'undefined' && typeof(x[i].getElementsByTagName("url")[0].childNodes[0]) != undefined ){
		urlXml = x[i].getElementsByTagName("url")[0].childNodes[0].nodeValue;
	}
	//controllo del settaggio sezione
	if (typeof(x[i].getElementsByTagName("sezione")[0].childNodes[0]) != 'undefined' && typeof(x[i].getElementsByTagName("sezione")[0].childNodes[0]) != undefined ){
		sezioneXml = x[i].getElementsByTagName("sezione")[0].childNodes[0].nodeValue;
	}else{
		sezioneXml = '';	
	}
	//console.log('[mediamond][xml]===>valore sezione:'+sezioneXml+'=>'+MMSitoHp.indexOf(sezioneXml));	
	if(x[i].getElementsByTagName("datafine")[0]){
		if (typeof(x[i].getElementsByTagName("datafine")[0].childNodes[0]) != 'undefined' && typeof(x[i].getElementsByTagName("datafine")[0].childNodes[0]) != undefined ){
			var dataFine = (x[i].getElementsByTagName("datafine")[0].childNodes[0].nodeValue).split('-');
			//console.log('[mediamond][xml]===>valore datafine:'+dataFine[0]+'-'+dataFine[1]+'-'+dataFine[2]);
			var dataVersus = dateCompare(dataFine[0],(dataFine[1]-1),dataFine[2]);
		}else{
			var dataVersus = '-1';
		}
		/*if(dataVersus<0)
		console.log('[mediamond][xml]===>data scaduta o non inserita');*/
	}
	/*dataVersus>0 vuol dire che non è scaduta*/
	if((x[i].getElementsByTagName("url")[0] || MMSitoHp.indexOf(sezioneXml)>0) && dataVersus>0){
	//console.log('[mediamond][xml]===>dataVersus2:'+dataVersus);
		if (typeof(x[i].getElementsByTagName("url")[0].childNodes[0]) != 'undefined' && typeof(x[i].getElementsByTagName("url")[0].childNodes[0]) != undefined ){
			urlXmlArray = (x[i].getElementsByTagName("url")[0].childNodes[0].nodeValue).split(';');
		}else{
			urlXmlArray = [];
			//console.log('[mediamond][xml]===>url non presenti');
		}
		//ciclo per le url
		for(var s=0;s<urlXmlArray.length;s++){
			//console.log('[mediamond][xml]===>url:'+urlXmlArray[s]);
			if(urlClean[0] == urlXmlArray[s]){
				urlXmlConfigurata = true;
				console.log('[mediamond][xml]===>url configurata dal XML');
				//controlli
				if(x[i].getElementsByTagName("skin")[0]){
					if(x[i].getElementsByTagName("skin")[0].childNodes[0].nodeValue == 'false')
						MMstatusSkin = false;
				}
				if(x[i].getElementsByTagName("richmedia")[0]){
					if(x[i].getElementsByTagName("richmedia")[0].childNodes[0].nodeValue == 'false')
						MMstatusRichMedia = false;
				}
				if(x[i].getElementsByTagName("inimage")[0]){
					if(x[i].getElementsByTagName("inimage")[0].childNodes[0].nodeValue == 'false')
						statusSeedTag = false;
				}
				if(x[i].getElementsByTagName("inread")[0]){
					if(x[i].getElementsByTagName("inread")[0].childNodes[0].nodeValue == 'false')
						statusInread = false;
				}
				if(x[i].getElementsByTagName("strip")[0]){
					if(x[i].getElementsByTagName("strip")[0].childNodes[0].nodeValue == 'false')
						MMstatusStrip = false;
				}
				if(x[i].getElementsByTagName("box")[0]){
					if(x[i].getElementsByTagName("box")[0].childNodes[0].nodeValue == 'false')
						MMstatusBox = false;
				}
				if(x[i].getElementsByTagName("nativepromobox")[0]){
					if(x[i].getElementsByTagName("nativepromobox")[0].childNodes[0].nodeValue == 'false')
						MMstatusNativePromoBox = false;
				}
				if(x[i].getElementsByTagName("promobox")[0]){
					if(x[i].getElementsByTagName("promobox")[0].childNodes[0].nodeValue == 'false')
						MMstatusPromoBox = false;
				}
				if(x[i].getElementsByTagName("adv")[0]){
					if(x[i].getElementsByTagName("adv")[0].childNodes[0].nodeValue == 'false')
						MMstatusAdv = false;
				}
				if(x[i].getElementsByTagName("keyworld")[0]){//vedi mypersonal trainer
					if (typeof(keywordURL) != 'undefined' && typeof(keywordURL) != undefined && typeof(x[i].getElementsByTagName("keyworld")[0]) != 'undefined' && typeof(x[i].getElementsByTagName("keyworld")[0]) != undefined)
					keywordURL += ','+x[i].getElementsByTagName("keyworld")[0].childNodes[0].nodeValue+',';
					console.log('[mediamond][xml]===>keywordURL inserita:'+x[i].getElementsByTagName("keyworld")[0].childNodes[0].nodeValue);	
				}
				
				if(x[i].getElementsByTagName("adunit")[0]){
					if (typeof(x[i].getElementsByTagName("adunit")[0]) != 'undefined' && typeof(x[i].getElementsByTagName("adunit")[0]) != undefined ){
						var MMsezioneTagArray = MMsezioneTag.split('/');
						newAdunit = '/'+MMsezioneTagArray[1]+'/'+MMsezioneTagArray[2]+'/'+x[i].getElementsByTagName("adunit")[0].childNodes[0].nodeValue;
						console.log('[mediamond][xml]===>adunit inserita:'+newAdunit);
						MMsezioneTag = newAdunit;
					}
				}
				
				
				/*console.log('[mediamond][xml]===>valore MMstatusSkin:'+MMstatusSkin);	
				console.log('[mediamond][xml]===>valore MMstatusRichMedia:'+MMstatusRichMedia);	
				console.log('[mediamond][xml]===>valore statusSeedTag:'+statusSeedTag);	
				console.log('[mediamond][xml]===>valore statusInread:'+statusInread);
				console.log('[mediamond][xml]===>valore MMstatusStrip:'+MMstatusStrip);	
				console.log('[mediamond][xml]===>valore MMstatusBox:'+MMstatusBox);
				console.log('[mediamond][xml]===>valore MMstatusNativePromoBox:'+MMstatusNativePromoBox);
				console.log('[mediamond][xml]===>valore MMstatusPromoBox:'+MMstatusPromoBox);
				console.log('[mediamond][xml]===>valore MMstatusAdv:'+MMstatusAdv);
				console.log('[mediamond][xml]===>valore newAdunit:'+newAdunit);
				console.log('[mediamond][xml]===>valore keywordURL:'+keywordURL);*/
				
			}
		}
		//se la sezione è configurata
		if(urlClean[0].indexOf(sezioneXml)>0 && !urlXmlConfigurata){
			console.log('[mediamond][xml]===>sezione configurata dal XML');
			if(x[i].getElementsByTagName("skin")[0]){
					if(x[i].getElementsByTagName("skin")[0].childNodes[0].nodeValue == 'no')
						MMstatusSkin = false;
				}
				if(x[i].getElementsByTagName("richmedia")[0]){
					if(x[i].getElementsByTagName("richmedia")[0].childNodes[0].nodeValue == 'no')
						MMstatusRichMedia = false;
				}
				if(x[i].getElementsByTagName("inimage")[0]){
					if(x[i].getElementsByTagName("inimage")[0].childNodes[0].nodeValue == 'no')
						statusSeedTag = false;
				}
				if(x[i].getElementsByTagName("inread")[0]){
					if(x[i].getElementsByTagName("inread")[0].childNodes[0].nodeValue == 'no')
						statusInread = false;
				}
				if(x[i].getElementsByTagName("strip")[0]){
					if(x[i].getElementsByTagName("strip")[0].childNodes[0].nodeValue == 'no')
						MMstatusStrip = false;
				}
				if(x[i].getElementsByTagName("box")[0]){
						if(x[i].getElementsByTagName("box")[0].childNodes[0].nodeValue == 'no')
							MMstatusBox = false;
				}
				if(x[i].getElementsByTagName("promobox")[0]){
					if(x[i].getElementsByTagName("promobox")[0].childNodes[0].nodeValue == 'no')
						MMstatusPromoBox = false;
				}
				if(x[i].getElementsByTagName("nativepromobox")[0]){
					if(x[i].getElementsByTagName("nativepromobox")[0].childNodes[0].nodeValue == 'no')
						MMstatusNativePromoBox = false;
				}
				if(x[i].getElementsByTagName("adv")[0]){
					if(x[i].getElementsByTagName("adv")[0].childNodes[0].nodeValue == 'no')
						MMstatusAdv = false;
				}
				if(x[i].getElementsByTagName("keyworld")[0]){//vedi mypersonal trainer
					if (typeof(keywordURL) != 'undefined' && typeof(keywordURL) != undefined && typeof(x[i].getElementsByTagName("keyworld")[0]) != 'undefined' && typeof(x[i].getElementsByTagName("keyworld")[0]) != undefined)
					keywordURL += x[i].getElementsByTagName("keyworld")[0].childNodes[0].nodeValue+',';
					console.log('[mediamond][xml]===>keywordURL inserita:'+x[i].getElementsByTagName("keyworld")[0].childNodes[0].nodeValue);	
				}
				
				if(x[i].getElementsByTagName("adunit")[0]){
					if (typeof(x[i].getElementsByTagName("adunit")[0]) != 'undefined' && typeof(x[i].getElementsByTagName("adunit")[0]) != undefined ){
						var MMsezioneTagArray = MMsezioneTag.split('/');
						newAdunit = '/'+MMsezioneTagArray[1]+'/'+MMsezioneTagArray[2]+'/'+x[i].getElementsByTagName("adunit")[0].childNodes[0].nodeValue;
						console.log('[mediamond][xml]===>adunit inserita:'+newAdunit);
						MMsezioneTag = newAdunit;
					}
				}
				/*console.log('[mediamond][xml]===>valore MMstatusSkin:'+MMstatusSkin);	
				console.log('[mediamond][xml]===>valore MMstatusRichMedia:'+MMstatusRichMedia);	
				console.log('[mediamond][xml]===>valore statusSeedTag:'+statusSeedTag);	
				console.log('[mediamond][xml]===>valore statusInread:'+statusInread);
				console.log('[mediamond][xml]===>valore MMstatusStrip:'+MMstatusStrip);	
				console.log('[mediamond][xml]===>valore MMstatusBox:'+MMstatusBox);
				console.log('[mediamond][xml]===>valore MMstatusNativePromoBox:'+MMstatusNativePromoBox);
				console.log('[mediamond][xml]===>valore MMstatusPromoBox:'+MMstatusPromoBox);
				console.log('[mediamond][xml]===>valore MMstatusAdv:'+MMstatusAdv);
				console.log('[mediamond][xml]===>valore newAdunit:'+newAdunit);
				console.log('[mediamond][xml]===>valore keywordURL:'+keywordURL);*/
		}
	}
}
    
    
    
	}//initXmlControll()
    
    
	
	//caricamento del file con i settaggi
	var lipHpsponsor = document.createElement("script");
	lipHpsponsor.async = false;
	lipHpsponsor.type = "text/javascript";
	var useSSL = "https:" == document.location.protocol;
	lipHpsponsor.src = (useSSL ? "https:" : "http:") + "//adv.mediamond.it/hp_sponsor/xml/"+nomeSito+"_mediamond.js";
	var node = document.getElementsByTagName("script")[0];
	node.parentNode.insertBefore(lipHpsponsor, node);
	
	
}//if(MMSitoHp == 'https://www.starbene.it/benessere/psicologia/make-up-trucco-personalita'){
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//controllo user agent
var devTypeUtility = '';
if( navigator.userAgent.indexOf('iPhone') != -1 ) //controllo l'ambiente per la site section
  { devTypeUtility = "mobile_web_iphone"; }
else if( navigator.userAgent.indexOf('iPad') != -1 )
  { devTypeUtility = "mobile_web_ipad"; }
else if( navigator.userAgent.indexOf('Android') != -1 && navigator.userAgent.indexOf('Mobile') != -1 )
  { devTypeUtility = "mobile_web_android_phone"; }
else if( navigator.userAgent.indexOf('Android') != -1 && !navigator.userAgent.indexOf('Mobile') != -1  )
  { devTypeUtility = "mobile_web_android_tablet"; }
else
  { devTypeUtility = "desktop_web"; }



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/// libreria ias ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var gadsIAS = document.createElement('script');
gadsIAS.async = true;
gadsIAS.type = "text/javascript";
var useSSL = 'https:' == document.location.protocol;
gadsIAS.src = (useSSL ? 'https:' : 'http:') + '//cdn.adsafeprotected.com/iasPET.1.js';
var node = document.getElementsByTagName('script')[0];
node.parentNode.insertBefore(gadsIAS, node);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//controllo tempo
var advTime = 0;
var loadAdvTime = setInterval(function(){setLoadAdvTime();},100);

setLoadAdvTime = function(){
    advTime ++;
    if(advTime >= 100){
        clearInterval(loadAdvTime);
        debugMediamond('[mediamond]===>stop timer:'+(advTime/10),'worn');
    }
}



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var adxLoad = false;
var statusLoadGpt = false;
var statusPolicy = 1;//per poter gestire i krux, 1 è non approvato
var timerCheckGTag;
var timerCheckPage;
var checkCallInit = false;

/* ------------------------------------------------------------------------------------------------------------------------------------------------------

CONFIGURAZIONE PER AME*/

if(nomeSito != 'tgcom24' && nomeSito != 'meteo' && nomeSito != 'meteo_new' && nomeSito != 'sportmediaset' && nomeSito != 'boing' && nomeSito != 'cartoonito' && nomeSito != 'rockol' ){//nomeSito != 'radio101' && nomeSito != 'radio105' && nomeSito != 'radiomontecarlo' && nomeSito != 'radiosubasio'

console.log('[mediamond][cmp]===> test AMENetworkCommon');


function CheckGTag(val) {
  if (window.googletag && googletag.apiReady) {
    
    console.log('[mediamond][cmp]===>googletag ready.');
    clearInterval(timerCheckGTag);
	googletag.cmd.push(function() {
	  googletag.pubads().setRequestNonPersonalizedAds(val);
      console.log('[mediamond][cmp]===>setRequestNonPersonalizedAds:'+val);  
        statusPolicy = val;
	});
		  
  } else {
    console.log('[mediamond][cmp]===>googletag not ready.');
  }
}

function initGptCMP(val){
    console.log('[mediamond][cmp]===>initGptCMP valore passato:'+val);
    //debugMediamond('[mediamond]===>chiamata initGptCMP timer:'+(advTime/10),'worn');
	if(!statusLoadGpt){
		statusLoadGpt = true;//per bloccare le altre funzioni
		timerCheckGTag = setInterval(function(){CheckGTag(val);},100);
		timerCheckPage = setInterval(function(){checkPageAdvIubenda();},500);
	}
}

//fa un refresh e permette di erogare i profilati
function refreshGptCMP(){
    console.log('[mediamond][cmp]===>refreshAdvCMP');
      if(document.getElementById('strip_adv') !== null ) { 
		document.getElementById('strip_adv').classList.add('advCollapse'); 
	}
    checkSkinAdv();
    googletag.pubads().setRequestNonPersonalizedAds(0);//profilato
    statusPolicy = 0;
    

    googletag.pubads().refresh();

}

//rimuovo la skin se è stata caricata
function checkSkinAdv(){
    console.log('[mediamond][cmp]===>checkSkinAdv');
    if(document.getElementById("contenitore-sito-x-adv")){   
        jQuery( "#contenitore-sito-x-adv" ).remove();
        jQuery( "#ancora-contenitore-x-adv" ).remove();
        jQuery( ".adv_esterno" ).remove();
       
    }
    if(document.getElementsByClassName('teads-inread')){
        //jQuery(".teads-inread").remove();
        console.log('[mediamond][teads]===> class presente');
    }else{
        console.log('[mediamond][teads]===> class non presente');
    }
     jQuery(".teads-inread").remove();
}

window.addEventListener('AMENetworkCommon', function (e) {
  console.log('[mediamond][cmp]===>caricato AMENetworkCommon');
    if (AME2MMConsent === 0 && typeof initGptCMP === "function") { 
      initGptCMP(AME2MMConsent); 
    }
}, false);
var MMAdvCall = new Event('MMAdvCall');
window.dispatchEvent(MMAdvCall);

    
}//if(MMSitoHp == 'https://www.starbene.it/bellezza/viso/acne-prova-la-maschera-allargilla/'){//test su starbene

/* fine configurazione AME*/

/// INIT GPT //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function checkPageAdv(){//questa funzione non mi serve più
    console.log('[mediamond]===>checkPageAdv...');
    if(typeof(ADX_label) != 'undefined' && !statusLoadGpt){
        if(MMarrayUrlSkinControllo[1] != 'noadv' && (document.getElementById(divslotnameBox) || document.getElementById(divslotnameStrip))){
            
            if ( window.googletag && googletag.apiReady ) {//controllo se la libreria gtp è pronta
                console.log('[mediamond][gtp3]===>libreria pronta...');
                //console.log('[mediamond][initTagGpt]===>set intervall');
                debugMediamond('[mediamond]===>timer:'+(advTime/10),'worn');
                initTagGpt();
                //clearInterval(timerCheckPage);
                statusLoadGpt = true;            
            }
        }
    }
}

function checkPageAdvIubenda(){
    console.log('[mediamond]===>checkPageAdvIubenda...');

        if(MMarrayUrlSkinControllo[1] != 'noadv' && (document.getElementById(divslotnameBox) || document.getElementById(divslotnameStrip))){
            
            if ( window.googletag && googletag.apiReady ) {//controllo se la libreria gtp è pronta
                
                //console.log('[mediamond][initTagGpt]===>set intervall');
                debugMediamond('[mediamond]===>chiamata checkPageAdvIubenda timer:'+(advTime/10),'worn');
                clearInterval(timerCheckPage);
                
                    initTagGpt();
                    statusLoadGpt = true;
             
                
            }
        }

}
if(nomeSito == 'meteo' || nomeSito == 'meteo_new' || nomeSito == 'grandefratello' || nomeSito == 'sportmediaset' || nomeSito == 'tgcom24' || nomeSito == 'rockol' || nomeSito == 'radio101' || nomeSito == 'wittytv'){////nomeSito == 'radio101' || nomeSito == 'radio105' || nomeSito == 'radiomontecarlo' || nomeSito == 'radiosubasio'
    //la chiamata è fatta dall'editore quando ha controllato se l'utente ha approvato la policy
    function initGptIubenda(){
		console.log('[mediamond]===>call initGptIubenda');
		if(checkCallInit == false){
		checkCallInit = true;
		/*=====> sui siti minori si tgcom la chiamata sta nel file tag_adv_mediamond*/
			console.log('[mediamond]===>call initGptIubenda esecuzione');
			if((document.getElementById(divslotnameStrip) || document.getElementById(divslotnameBox)) && MMarrayUrlSkinControllo[1] != 'noadv'){
				timerCheckPage = setInterval(function(){checkPageAdvIubenda();},300);
			}
			//piccola eccezione per lo stage di tgcom, DA RIMUOVERE
			if( MMarrayUrlSkin[2] == 'www-stage.tgcom24.mediaset.it'){
						initTagGpt();
						statusLoadGpt = true;
						
			}
		}
	}
}
if(nomeSito == 'casabella' || nomeSito == 'edonna' || nomeSito == 'ilvicolodellenews' || nomeSito == 'newsued' || nomeSito == 'nonsprecare' || nomeSito == 'boing' || nomeSito == 'cartoonito' || nomeSito == 'unitedmusic' ){
    //var timerCheckPage = setInterval(function(){checkPageAdv();},100);
    window.addEventListener('load', function() {
        //console.log('[mediamond]===>load windows');
        if(MMarrayUrlSkinControllo[1] != 'noadv' && !statusLoadGpt){   
            googletag.pubads().setRequestNonPersonalizedAds(1);//erogo i non profilati per i siti che non si sono aggiornati
            
            
            setTimeout(function(){ initTagGpt(); }, 1000);
            //clearInterval(timerCheckPage);
            statusLoadGpt = true;
            console.log('[mediamond][initTagGpt]===>load windows');
            debugMediamond('[mediamond][initTagGpt]===>chiamata senza controllo cmp:','error');
        }
    });
}


//solo per radio 101,105 e virgin chimata automatica ma solo se l'utente ha dato qualche forma di consenso
if(nomeSito == 'radio101' || nomeSito == 'radio105'  || nomeSito == 'virginradio' || nomeSito == 'radiosubasio_new' || nomeSito == 'radiomontecarlo'){
    //var timerCheckPage = setInterval(function(){checkPageAdv();},100);
    window.addEventListener('load', function() {
        //console.log('[mediamond]===>load windows');
        //googletag.pubads().setRequestNonPersonalizedAds(1);//erogo i non profilati per i siti che non si sono aggiornati
        console.log('[mediamond][initTagGpt]===>_iub.cs.api.isConsentGiven():'+_iub.cs.api.isConsentGiven());
        if(MMarrayUrlSkinControllo[1] != 'noadv' && !statusLoadGpt && _iub.cs.api.isConsentGiven()){   
            
            initTagGpt();
            //clearInterval(timerCheckPage);
            statusLoadGpt = true;
            console.log('[mediamond][initTagGpt]===>load windows con controllo consenso');
            debugMediamond('[mediamond]===>chiamata in load con controllo consenso:','error');
        }
    });
}

//fatto momentaneamente perchè non funziona il load windows
if(nomeSito == 'mariadefilippi' && !statusLoadGpt){
    setTimeout(function(){
    
    initTagGpt();
    //clearInterval(timerCheckPage);
    statusLoadGpt = true;
    console.log('[mediamond][initTagGpt]===>forzato');
    
    
    }, 2000);
   
}
//--------------------------------------------------------------------------------------
window.addEventListener('load', function() {
    //console.log('[mediamond]===>load windows test');
});
//--------------------------------------------------------------------------------------

//fa un refresh e permette di erogare i profilati
function refreshAdvCMP(){
    console.log('[mediamond][cmp]===>refreshAdvCMP');
    googletag.pubads().setRequestNonPersonalizedAds(0);//profilato
    googletag.pubads().refresh();
}
//al caricamento delle adv eroga i non profilati/profilati in base al cookie di iubenda
function initAdvCMP(){
    console.log('[mediamond][cmp]===>initAdvCMP');
     googletag.cmd.push(function() {
        googletag.pubads().setRequestNonPersonalizedAds(1);
         // setRequestNonPersonalizedAds(_iub.cs.api.isGoogleNonPersonalizedAds() ? 1 : 0) <==== DEFINITIVO
    });
}



/// fine init gpt
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/// resize minimasthead /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function ResizeIframe4(tipoJq) {
	//===> prende come punto di riferimento il div divslotnameStrip configurato sulla pagina iniziale sempre presente in pagina
	//console.log('[mediamond]===>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
	console.log('[mediamond][strip]===>ResizeIframe4');
    //var rifDivSlot = jQuery("#"+divslotnameStrip);
    var rifDivSlot = document.getElementById(divslotnameStrip);
    var rifDivSlotW = rifDivSlot.offsetWidth;
	if (tipoJq == "$") { //a volte jQuery va in errore e bisogna usare $ oppure non ci sono proprio le lib jQuery
		var rifPointIframeMinimasthead = $("#"+divslotnameStrip).find("iframe");
		var rifPointDivMinimasthead = $("#"+divslotnameStrip).find("div");
		var rifPointIframeMinimastheadOK = rifPointIframeMinimasthead[0];
		var rifPointDivMinimastheadOK = rifPointDivMinimasthead[0];
	} else if (tipoJq =="noJQ") {
		var rifPointIframeMinimasthead = document.querySelector("#"+divslotnameStrip+" > div > iframe");
		var rifPointDivMinimasthead = document.querySelector("#"+divslotnameStrip+" > div");
		var rifPointIframeMinimastheadOK = rifPointIframeMinimasthead;
		var rifPointDivMinimastheadOK = rifPointDivMinimasthead;
	} else {
		var rifPointIframeMinimasthead = jQuery("#"+divslotnameStrip).find("iframe");
		var rifPointDivMinimasthead = jQuery("#"+divslotnameStrip).find("div");
		var rifPointIframeMinimastheadOK = rifPointIframeMinimasthead[0];
		var rifPointDivMinimastheadOK = rifPointDivMinimasthead[0];
	}
    //console.log('[mediamond]===>rifDivSlot:'+rifDivSlot.offsetWidth);
	//console.log('[mediamond][strip]===>rifPointIframeMinimasthead:'+rifPointIframeMinimasthead[0].offsetWidth);
	//console.log('[mediamond][strip]===>rifPointDivMinimasthead:'+rifPointDivMinimasthead[0].offsetWidth);
   // console.log('[mediamond][strip]===>rifDivSlotW:'+rifDivSlotW);
    //console.log('[mediamond][strip]===>MMlarghezzaSitoAdv:'+MMlarghezzaSitoAdv);
	var iFrameGptMastHeadWidth = rifPointIframeMinimastheadOK.offsetWidth;
	if(rifDivSlotW <= MMlarghezzaSitoAdv){
        //console.log('[mediamond][strip]===>risize sulla larghezza del div');
		rifPointIframeMinimastheadOK.style.width = rifDivSlotW+'px';
		rifPointDivMinimastheadOK.style.width = rifDivSlotW+'px';
		var divGptMastHeadHeightValNew = Math.ceil(((rifDivSlotW*720)/240)/9);
		rifPointDivMinimastheadOK.style.height = divGptMastHeadHeightValNew+'px';
		rifPointIframeMinimastheadOK.style.height = divGptMastHeadHeightValNew+'px';
	}else{
        //console.log('[mediamond][stript]===>risize sulla larghezza della pagina');
        rifPointIframeMinimastheadOK.style.width = MMlarghezzaSitoAdv+'px';
		rifPointDivMinimastheadOK.style.width = MMlarghezzaSitoAdv+'px';
		var divGptMastHeadHeightValNew = Math.ceil(((MMlarghezzaSitoAdv*720)/240)/9);
		rifPointDivMinimastheadOK.style.height = divGptMastHeadHeightValNew+'px';
		rifPointIframeMinimastheadOK.style.height = divGptMastHeadHeightValNew+'px';
    }
    //forzo un controllo perchè a volte ci sono creatività che cambiano gli stili dell'iframe
	if (tipoJq == "$") { //a volte jQuery va in errore e bisogna usare $ oppure non ci sono proprio le lib jQuery
		var rifPointIframeMinimastheadBefore = $("#"+divslotnameStrip).find("iframe");
		var rifPointIframeMinimastheadBeforeOK = rifPointIframeMinimastheadBefore[0];
	} else if (tipoJq =="noJQ") {
		var rifPointIframeMinimastheadBefore = document.querySelector("#"+divslotnameStrip+" > div > iframe");
		var rifPointIframeMinimastheadBeforeOK = rifPointIframeMinimastheadBefore;
	} else {
		var rifPointIframeMinimastheadBefore = jQuery("#"+divslotnameStrip).find("iframe");
		var rifPointIframeMinimastheadBeforeOK = rifPointIframeMinimastheadBefore[0];
	}
    if(rifPointIframeMinimastheadBeforeOK.offsetWidth == '720'){
     //console.log('[mediamond][strip]===>Recall ResizeIframe4');
      ResizeIframe4();
    }
    
}
//--------------
//******************************************** NOJQUERY
var rifPointIframeMinimasthead0;
var rifPointIframeMinimasthead1;
var rifPointDivMinimasthead1;
var iFrameGptMastHeadWidth1;
//
function ResizeIframe4nojquery() {
    //rivisitato senza jquery
    console.log('[mediamond][720x240]===>test resize no jquery');
    rifPointIframeMinimasthead0 = document.getElementById(divslotnameStrip);
    rifPointIframeMinimasthead1 = rifPointIframeMinimasthead0.getElementsByTagName("iframe");
    //
    rifPointDivMinimasthead1 = rifPointIframeMinimasthead0.getElementsByTagName("div");
    //
    iFrameGptMastHeadWidth1 = rifPointIframeMinimasthead1[0].offsetWidth;
    if(iFrameGptMastHeadWidth1 >= 720){
		rifPointIframeMinimasthead1[0].style.width = (MMlarghezzaSitoAdv-20)+'px';
		rifPointDivMinimasthead1[0].style.width = (MMlarghezzaSitoAdv-20)+'px';
		var divGptMastHeadHeightValNew = Math.ceil(((MMlarghezzaSitoAdv*720)/240)/9);
		rifPointDivMinimasthead1[0].style.height = divGptMastHeadHeightValNew+'px';
		rifPointIframeMinimasthead1[0].style.height = divGptMastHeadHeightValNew+'px';
	}
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/// Comscore //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var lipHpsponsor = document.createElement("script");
lipHpsponsor.async = false;
lipHpsponsor.type = "text/javascript";
var useSSL = "https:" == document.location.protocol;
lipHpsponsor.src = (useSSL ? "https:" : "http:") + "//adv.mediamond.it/hp_sponsor/sezsito_comscore.js";
var node = document.getElementsByTagName("script")[0];
node.parentNode.insertBefore(lipHpsponsor, node);
//

if(nomeSito == 'skuola' || nomeSito == 'ilvicolodellenews'){
    
    //senza jquery
    function initComscore(campaignId,creativeId,lineItemId,size,pos,slot,nslot,divslot){
/*		
	var sitoMM = document.location.hostname.replace("www.","").split(".")[0];
	if (MMarrayUrlSkin[3] != "" && MMarrayUrlSkin[3] != undefined && MMarrayUrlSkin[3].charAt(0) != '?') { 
		sezioneMMComscore = "_"+MMarrayUrlSkin[3];
	}else{
		sezioneMMComscore = '';
	}
        
    //console.log('[mediamond][comscore]===>dati codice Comscore:campaignId='+campaignId+',creativeId='+creativeId+',lineItemId:'+lineItemId+',size='+size+',pos='+pos+',slot='+slot+',nslot='+nslot+',divslot='+divslot);    
	var urlPag = sezioneMMcmsc;//sitoMM+sezioneMMComscore;
	var devType = "_desk";
	if(navigator.userAgent.indexOf('iPhone') != -1)   { devType = "_mob_iPh"; } else if( navigator.userAgent.indexOf('iPad') != -1 )   { devType = "_mob_iPa"; } else if( navigator.userAgent.indexOf('Android') != -1 && navigator.userAgent.indexOf('Mobile') != -1 )   { devType = "_mob_AnS"; } else if( navigator.userAgent.indexOf('Android') != -1 && !navigator.userAgent.indexOf('Mobile') != -1  )   { devType = "_mob_AnT"; }
	//rifPointComscore non si popolava in caso di iframe di adex per problemi di cross domain (perchè se eroga adex l'iframe di dfp non è presente), quindi l'ho dichiarata prima come nuovo array 	
    if(campaignId != null){
       var sizeMod = size[0]+'x'+size[1]
    }else{
        var sizeMod = '';
    }
	//no jquery
    var iframeAdvSrcNoJquery1 = document.getElementById(divslot);
    var iframeAdvSrcNoJquery2 = iframeAdvSrcNoJquery1.getElementsByTagName("iframe")[0];
    var iframeAdvSrcNoJquery3 = iframeAdvSrcNoJquery2.getAttribute("src");
    //console.log('[mediamond][comscore]===>iframeAdvSrcNoJquery3:'+iframeAdvSrcNoJquery3);
	if((iframeAdvSrcNoJquery3 == null || iframeAdvSrcNoJquery3 == undefined) && lineItemId != null){
        var rifPointComscoreNoJquery3 = iframeAdvSrcNoJquery2.contentDocument;
        var rifPointComscoreNoJquery4 = rifPointComscoreNoJquery3.getElementById("scriptComscore");
        console.log('[mediamond][comscore]===>scriptComscore presente');
		if(!rifPointComscoreNoJquery4){
			console.log('[mediamond][comscore]===>inserimento codice Comscore '+sizeMod+'...');

			var st = document.createElement('script');
			st.id="scriptComscore"+slot;
			st.type = 'text/javascript';
			st.async = true;
			st.src = "//sb.voicefive.com/c2/12315081/rs.js#c1=3&c3="+campaignId+"_"+lineItemId+"&c4="+sizeMod+"_"+pos+"_"+creativeId+devType+"&c5="+urlPag+devType+"&c11="+idSitoDfp+"&c12=&c13="+sizeMod+"&c16=dfp";
			document.getElementById(divslot).appendChild(st);

		}

	}else{
        
        console.log('[mediamond][comscore]===>inserimento codice Comscore '+sizeMod+' programmatic ...');

		var st = document.createElement('script');
		st.id="scriptComscore"+slot;
		st.type = 'text/javascript';
		st.async = true;
		st.src = "//sb.voicefive.com/c2/12315081/rs.js#c1=3&c3=programmatic&c4="+sizeMod+"_"+pos+devType+"&c5="+urlPag+devType+"&c11="+idSitoDfp+"&c12=&c13="+sizeMod+"&c16=dfp";
		document.getElementById(divslot).appendChild(st);

	}//if(iframeAdvBoxSrc == null || iframeAdvBoxSrc == undefined)

*/} 
    
}else{

    function initComscore(campaignId,creativeId,lineItemId,size,pos,slot,nslot,divslot){
		/*
        //console.log('[mediamond][comscore]====>sezioneMMcmsc:'+sezioneMMcmsc);
        //console.log('[mediamond][comscore]===>dati codice Comscore:campaignId='+campaignId+',creativeId='+creativeId+',lineItemId:'+lineItemId+',size='+size+',pos='+pos+',slot='+slot+',nslot='+nslot+',divslot='+divslot);
        var sitoMM = document.location.hostname.replace("www.","").split(".")[0];
        if (MMarrayUrlSkin[3] != "" && MMarrayUrlSkin[3] != undefined && MMarrayUrlSkin[3].charAt(0) != '?') {
            sezioneMMComscore = "_"+MMarrayUrlSkin[3];
        }else{
            sezioneMMComscore = '';
        }
        var urlPag = sezioneMMcmsc;//sitoMM+sezioneMMComscore;
        var custom3devType = "desktop"; if(navigator.userAgent.indexOf('iPhone') != -1)   { custom3devType = "mob_iphone"; } else if( navigator.userAgent.indexOf('iPad') != -1 )   { custom3devType = "mob_ipad"; } else if( navigator.userAgent.indexOf('Android') != -1 && navigator.userAgent.indexOf('Mobile') != -1 )   { custom3devType = "mob_android_sma"; } else if( navigator.userAgent.indexOf('Android') != -1 && !navigator.userAgent.indexOf('Mobile') != -1  )   { custom3devType = "mob_android_tab"; };
        //rifPointComscore non si popolava in caso di iframe di adex per problemi di cross domain (perchè se eroga adex l'iframe di dfp non è presente), quindi l'ho dichiarata prima come nuovo array
        var rifPointComscore = new Array();
        //---------------------------------------------------------------------------------------------------------------------------------------------
        if(campaignId != null){
           var sizeMod = size[0]+'x'+size[1]
        }else{
            var sizeMod = '';
        }
        //console.log('[mediamond]===>sizeMod:'+sizeMod);
        var iframeAdvSrc = jQuery('#'+divslot+' > div >iframe').attr('src');
        //console.log('[mediamond][comscore]===>iframeAdvSrc:'+iframeAdvSrc);
        if((iframeAdvSrc == null || iframeAdvSrc == undefined) && lineItemId != null){
            rifPointComscore = jQuery('#'+divslot+' > div >iframe').contents().find('#scriptComscore');
            //console.log('[mediamond][comscore]===>xxxx rifPointComscore:'+rifPointComscore.length);
            if(rifPointComscore.length == 0){
                console.log('[mediamond][comscore]===>inserimento codice Comscore '+sizeMod+'...');
                var st = document.createElement('script');
                st.id="scriptComscore"+slot;
                st.type = 'text/javascript';
                st.async = true;
                st.src = "//sb.voicefive.com/c2/12315081/rs.js#c1=3&c3="+campaignId+"_"+lineItemId+"&c4="+sizeMod+"_"+pos+"_"+creativeId+'_'+custom3devType+"&c5="+urlPag+'_'+custom3devType+"&c11="+idSitoDfp+"&c12=&c13="+sizeMod+"&c16=dfp";
                document.getElementById(divslot).appendChild(st);
            }
        }else if (lineItemId != null){
            console.log('[mediamond][comscore]===>inserimento codice Comscore 3th parti '+sizeMod+'...');
            var st = document.createElement('script');
                st.id="scriptComscore"+slot;
                st.type = 'text/javascript';
                st.async = true;
                st.src = "//sb.voicefive.com/c2/12315081/rs.js#c1=3&c3="+campaignId+"_"+lineItemId+"&c4="+sizeMod+"_"+pos+"_"+creativeId+'_'+custom3devType+"&c5="+urlPag+'_'+custom3devType+"&c11="+idSitoDfp+"&c12=&c13="+sizeMod+"&c16=dfp";

                document.getElementById(divslot).appendChild(st);
        }else{
            console.log('[mediamond][comscore]===>inserimento codice Comscore programmatic '+sizeMod+'...');
            var st = document.createElement('script');
            st.id="scriptComscore"+slot;
            st.type = 'text/javascript';
            st.async = true;
            st.src = "//sb.voicefive.com/c2/12315081/rs.js#c1=3&c3=programmatic&c4="+sizeMod+"_"+pos+'_'+custom3devType+"&c5="+urlPag+'_'+custom3devType+"&c11="+idSitoDfp+"&c12=&c13="+sizeMod+"&c16=dfp";
            document.getElementById(divslot).appendChild(st);
        }//if(iframeAdvBoxSrc == null || iframeAdvBoxSrc == undefined){
    */}//initComscore();
    
}//if(nomeSito == 'skuola'){

//setInterval(function(){ initComscore(); }, 5000);
/// fine comscore ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
///ias ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function initIAS(campaignId,creativeId,lineItemId,size,pos,divslot){
    //console.log('[mediamond][IAS]===>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
   //if(MMarrayUrlSkinControllo[1] == 'testIas'){
        //no jquery
        
        //debugMediamond'[mediamond][IAS]===>dati codice IAS:campaignId='+campaignId+',creativeId='+creativeId+',lineItemId:'+lineItemId+',size='+size+',pos='+pos+',divslot='+divslot,'info');
    
        MMsezioneTagOrig = MMsezioneTag.replace('/4758/','','ig').replace('/','_','ig');
        //console.log('[mediamond][IAS]===>MMsezioneTagOrig:'+MMsezioneTagOrig);

         if(campaignId != null){
           var sizeMod = size[0]+'x'+size[1]
        }else{
            var sizeMod = '';
        }


       //console.log('[mediamond][IAS]===>sizeMod:'+sizeMod);
        var sitoMM = document.location.hostname.replace("www.","").split(".")[0];
        if (MMarrayUrlSkin[3] != "" && MMarrayUrlSkin[3] != undefined && MMarrayUrlSkin[3].charAt(0) != '?') {
            sezioneMMComscore = "_"+MMarrayUrlSkin[3];
        }else{
            sezioneMMComscore = '';
        }

        //console.log('[mediamond][IAS]===>sezioneMMComscore:'+sezioneMMComscore);

        //var urlPag = sitoMM+sezioneMMComscore;
        var urlPag = '';//modifica per richiesta di mike il 16/04/2019 su skype
        // console.log('[mediamond][IAS]===>urlPag:'+urlPag);

        var custom3devType = "desktop"; if(navigator.userAgent.indexOf('iPhone') != -1)   { custom3devType = "mob_iphone"; } else if( navigator.userAgent.indexOf('iPad') != -1 )   { custom3devType = "mob_ipad"; } else if( navigator.userAgent.indexOf('Android') != -1 && navigator.userAgent.indexOf('Mobile') != -1 )   { custom3devType = "mob_android_sma"; } else if( navigator.userAgent.indexOf('Android') != -1 && !navigator.userAgent.indexOf('Mobile') != -1  )   { custom3devType = "mob_android_tab"; }
        //console.log('[mediamond][IAS]===>custom3devType:'+custom3devType);


        //rifPointIAS0 = jQuery('#'+divslot+' > div >iframe').attr('src');
        
         var iframeAdvSrcNoJquery1 = document.getElementById(divslot);
        var iframeAdvSrcNoJquery2 = iframeAdvSrcNoJquery1.getElementsByTagName("iframe")[0];
        if(iframeAdvSrcNoJquery2){
            var rifPointIAS0 = iframeAdvSrcNoJquery2.getAttribute("src");
        }else{
            var rifPointIAS0 = undefined;   
        }
    
        //console.log('[mediamond][IAS]===>src iframe:'+rifPointIAS0);
        
      var rifPointIAS0Array = [];
        if(rifPointIAS0 != undefined && rifPointIAS0 != null){
             var rifPointIAS0Replace = rifPointIAS0.replace('http://','').replace('https://','');
             //console.log('[mediamond][IAS]===>rifPointIAS0Replace:'+rifPointIAS0Replace);
            rifPointIAS0Array = rifPointIAS0Replace.split('/');
            //console.log('[mediamond][IAS]===>rifPointIAS0Array:'+rifPointIAS0Array[1]);
        }
        
       

        var cachebusterIAS = Math.floor(Math.random() * 10000000000); 
            //console.log('[mediamond][IAS]====>cachebusterIAS:'+cachebusterIAS);
            var idCachebusterIAS = 'ias-'+cachebusterIAS;

        if(rifPointIAS0Array[1] == 'safeframe'){

            //console.log('[mediamond][IAS]====>safeframe');
            //console.log('[mediamond][IAS]====>inserimento script:'+sizeMod);
            
            //debugMediamond('[IAS]====>safeframe','info');
            //debugMediamond('[IAS]====>inserimento script:'+sizeMod+' pos:'+pos,'info');



            var scriptIASObj = document.createElement('script');
            scriptIASObj.id = idCachebusterIAS;

            //document.body.appendChild(scriptIASObj);
            document.getElementById(divslot).appendChild(scriptIASObj);


            // IAS Monitoring
            if (typeof(MMsezioneTagOrig) == 'undefined' || MMsezioneTagOrig == null || MMsezioneTagOrig == '') { MMsezioneTagOrig = 'non definito'; }
            var iasScriptUrl, hiddenFrame, hiddenDoc, where, domain;
            iasScriptUrl = '//pixel.adsafeprotected.com/jload?anId=929824&campId='+sizeMod+'&pubId=programmatic&chanId='+MMsezioneTagOrig+'&placementId=programmatic&pubCreative=programmatic&pubOrder='+campaignId+'&cb='+cachebusterIAS+'&adsafe_par&impId=&custom='+pos+'&custom2='+urlPag+'&custom3='+custom3devType;
            hiddenFrame = document.createElement('iframe');
            (hiddenFrame.frameElement || hiddenFrame).style.cssText = 'width: 0; height: 0; border: 0; display: none;';
            hiddenFrame.src = 'javascript:false';
            where = document.getElementById(idCachebusterIAS);
            where.parentNode.insertBefore(hiddenFrame, where);
            try {
            hiddenDoc = hiddenFrame.contentWindow.document
            } catch (e) {
            domain = document.domain;
            hiddenFrame.src = "javascript:var d=document.open();d.domain=\" + domain + \";void(0);";
            hiddenDoc = hiddenFrame.contentWindow.document
            };
            hiddenDoc.open().write('<body onload=\"window.__IntegralASUseFIF = true; var js = document.createElement(\'script\');js.id = \'scriptIAS\';js.src = \'' + iasScriptUrl + '\';document.body.appendChild(js);\">');

            hiddenDoc.close();


        }else if (lineItemId == null ){

            //rifPointIAS1 = jQuery('#'+divslot+' > div >iframe').contents().find('iframe');
            //rifPointIAS2 = jQuery(rifPointIAS1[0]).contents().find('#scriptIAS');
            
           // console.log('[mediamond][IAS]====>programmatic');
            
            //debugMediamond('[IAS]====>programmatic','info');
            //debugMediamond('[IAS]====>inserimento script:'+sizeMod+' pos:'+pos,'info');
            // debugMediamond('[IAS]====>lineItemId=null','info');

         
            /*
            
            console.log('[mediamond][IAS]===>rifPointIAS2:'+rifPointIAS2.length);
             console.log('[mediamond][IAS]===>programmatic');
            console.log('[mediamond][IAS]====>inserimento script:'+sizeMod);
            console.log('[mediamond][IAS]===>rifPointIAS1:'+rifPointIAS1);*/


            var scriptIASObj = document.createElement('script');
            scriptIASObj.id = idCachebusterIAS;
            document.getElementById(divslot).appendChild(scriptIASObj);
            //document.body.appendChild(scriptIASObj);

            // IAS Monitoring
            if (typeof(MMsezioneTagOrig) == 'undefined' || MMsezioneTagOrig == null || MMsezioneTagOrig == '') { MMsezioneTagOrig = 'non definito'; }
            var iasScriptUrl, hiddenFrame, hiddenDoc, where, domain;
            iasScriptUrl = '//pixel.adsafeprotected.com/jload?anId=929824&campId='+sizeMod+'&pubId=programmatic&chanId='+MMsezioneTagOrig+'&placementId=programmatic&pubCreative=programmatic&pubOrder='+campaignId+'&cb='+cachebusterIAS+'&adsafe_par&impId=&custom='+pos+'&custom2='+urlPag+'&custom3='+custom3devType;
            hiddenFrame = document.createElement('iframe');
            (hiddenFrame.frameElement || hiddenFrame).style.cssText = 'width: 0; height: 0; border: 0; display: none;';
            hiddenFrame.src = 'javascript:false';
            where = document.getElementById(idCachebusterIAS);
            where.parentNode.insertBefore(hiddenFrame, where);
            try {
            hiddenDoc = hiddenFrame.contentWindow.document
            } catch (e) {
            domain = document.domain;
            hiddenFrame.src = "javascript:var d=document.open();d.domain=\" + domain + \";void(0);";
            hiddenDoc = hiddenFrame.contentWindow.document
            };
            hiddenDoc.open().write('<body onload=\"window.__IntegralASUseFIF = true; var js = document.createElement(\'script\');js.id = \'scriptIAS\';js.src = \'' + iasScriptUrl + '\';document.body.appendChild(js);\">');

            hiddenDoc.close();


        }else{

            //console.log('[mediamond][IAS]===>standard');
            
            //debugMediamond('[IAS]====>standard','info');
            
           
            
            //var iframeAdvSrcNoJquery2Test = document.getElementById("google_ads_iframe_/4758/ame_confidenze/home_1");
            var rifPointIASNoJquery3 = iframeAdvSrcNoJquery2.contentWindow.document;
            //console.log('[mediamond][IAS]===>iframe principale test:'+iframeAdvSrcNoJquery2Test);    
            //console.log('[mediamond][IAS]===>contenuto iframe principale test:'+rifPointIASNoJquery3);
            //secondo i frame
             var iframeAdvSrcNoJquery5 = rifPointIASNoJquery3.getElementsByTagName("iframe")[0];
            //var iframeAdvSrcNoJquery5Src = iframeAdvSrcNoJquery5.getAttribute("src");
            
            //alcune creatività generano iframe e devo trovare quello generato da ias.
            var iframeAdvSrcNoJqueryArray = rifPointIASNoJquery3.getElementsByTagName("iframe");
            for(i=0;i<iframeAdvSrcNoJqueryArray.length;i++){
                //console.log('[mediamond][IAS]===>src iframe:'+i+' - '+iframeAdvSrcNoJqueryArray[i].getAttribute("src"));
                if(iframeAdvSrcNoJqueryArray[i].getAttribute("src") == 'javascript:false'){
                    //console.log('[mediamond][IAS]===>contenuto iframe secondario affidabile');
                    iframeAdvSrcNoJquery5 = iframeAdvSrcNoJqueryArray[i];
                }
            }
            
            
            if(iframeAdvSrcNoJquery5){
            
           // debugMediamond('[IAS]====>presenza tag iframe ','info');
            //console.log('[mediamond][IAS]===>contenuto iframe secondario src:'+iframeAdvSrcNoJquery5Src);
            //console.log('[mediamond][IAS]===>contenuto iframe secondario test:'+iframeAdvSrcNoJquery5);
            var rifPointIASNoJquery6 = iframeAdvSrcNoJquery5.contentWindow.document;//contentDocument
            var rifPointIASNoJquery7 = rifPointIASNoJquery6.getElementById("scriptIAS");
           // console.log('[mediamond][IAS]===>presenza scriptIAS iframe secondario:'+rifPointIASNoJquery7);
            
            

            if(!rifPointIASNoJquery7){
                
                // debugMediamond('[IAS]====>non script ias in iframe ','info');
                //debugMediamond('[IAS]====>inserimento script:'+sizeMod+' pos:'+pos,'info');


                var scriptIASObj = document.createElement('script');
                scriptIASObj.id = idCachebusterIAS;
               // scriptIASTxt = "console.log('[mediamond][IAS]====>inserimento script');";
               // document.body.appendChild(scriptIASObj);
                document.getElementById(divslot).appendChild(scriptIASObj);

               // console.log('[mediamond][IAS]====>inserimento script:'+sizeMod);
                // IAS Monitoring
                if (typeof(MMsezioneTagOrig) == 'undefined' || MMsezioneTagOrig == null || MMsezioneTagOrig == '') { MMsezioneTagOrig = 'non definito'; }
                var iasScriptUrl, hiddenFrame, hiddenDoc, where, domain;
                iasScriptUrl = '//pixel.adsafeprotected.com/jload?anId=929824&campId='+sizeMod+'&pubId=non-rilevabile&chanId='+MMsezioneTagOrig+'&placementId='+lineItemId+'&pubCreative='+creativeId+'&pubOrder='+campaignId+'&cb='+cachebusterIAS+'&adsafe_par&impId=&custom='+pos+'&custom2='+urlPag+'&custom3='+custom3devType;
                hiddenFrame = document.createElement('iframe');
                (hiddenFrame.frameElement || hiddenFrame).style.cssText = 'width: 0; height: 0; border: 0; display: none;';
                hiddenFrame.src = 'javascript:false';
                where = document.getElementById(idCachebusterIAS);
                where.parentNode.insertBefore(hiddenFrame, where);
                try {
                hiddenDoc = hiddenFrame.contentWindow.document
                } catch (e) {
                domain = document.domain;
                hiddenFrame.src = "javascript:var d=document.open();d.domain=\" + domain + \";void(0);";
                hiddenDoc = hiddenFrame.contentWindow.document
                };
                hiddenDoc.open().write('<body onload=\"window.__IntegralASUseFIF = true; var js = document.createElement(\'script\');js.id = \'scriptIAS\';js.src = \'' + iasScriptUrl + '\';document.body.appendChild(js);\">');

                hiddenDoc.close();


            }// if(!rifPointIASNoJquery4){
                
            }else{//if(iframeAdvSrcNoJquery5){
                
                //debugMediamond('[IAS]====>standard programmatic','info');
                //debugMediamond('[IAS]====>inserimento script:'+sizeMod+' pos:'+pos,'info');
                
                var scriptIASObj = document.createElement('script');
                scriptIASObj.id = idCachebusterIAS;
                document.getElementById(divslot).appendChild(scriptIASObj);
                //document.body.appendChild(scriptIASObj);

                // IAS Monitoring
                if (typeof(MMsezioneTagOrig) == 'undefined' || MMsezioneTagOrig == null || MMsezioneTagOrig == '') { MMsezioneTagOrig = 'non definito'; }
                var iasScriptUrl, hiddenFrame, hiddenDoc, where, domain;
                iasScriptUrl = '//pixel.adsafeprotected.com/jload?anId=929824&campId='+sizeMod+'&pubId=programmatic&chanId='+MMsezioneTagOrig+'&placementId=programmatic&pubCreative=programmatic&pubOrder='+campaignId+'&cb='+cachebusterIAS+'&adsafe_par&impId=&custom='+pos+'&custom2='+urlPag+'&custom3='+custom3devType;
                hiddenFrame = document.createElement('iframe');
                (hiddenFrame.frameElement || hiddenFrame).style.cssText = 'width: 0; height: 0; border: 0; display: none;';
                hiddenFrame.src = 'javascript:false';
                where = document.getElementById(idCachebusterIAS);
                where.parentNode.insertBefore(hiddenFrame, where);
                try {
                hiddenDoc = hiddenFrame.contentWindow.document
                } catch (e) {
                domain = document.domain;
                hiddenFrame.src = "javascript:var d=document.open();d.domain=\" + domain + \";void(0);";
                hiddenDoc = hiddenFrame.contentWindow.document
                };
                hiddenDoc.open().write('<body onload=\"window.__IntegralASUseFIF = true; var js = document.createElement(\'script\');js.id = \'scriptIAS\';js.src = \'' + iasScriptUrl + '\';document.body.appendChild(js);\">');

                hiddenDoc.close();
                
            }

        }//if(rifPointIAS0 == 'https://tpc.googlesyndication.com/safeframe/1-0-31/html/container.html'){

//}//MMarrayUrlSkin[2] == 'www.starbene.it'
        
}
//fine ias //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///ias nuovo - questo script fa fare il refresh della tag
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var refreshBoxIas = false;//mi serve per limitare il refresh
function initIAS2(campaignId,creativeId,lineItemId,size,pos,divslot,slot){
    console.log('[mediamond][IAS]===>chiamata initIAS2');
	
	
	
   //if(MMarrayUrlSkinControllo[1] == 'testIas'){
        //no jquery
        
        //debugMediamond'[mediamond][IAS]===>dati codice IAS:campaignId='+campaignId+',creativeId='+creativeId+',lineItemId:'+lineItemId+',size='+size+',pos='+pos+',divslot='+divslot,'info');
    
        MMsezioneTagOrig = MMsezioneTag.replace('/4758/','','ig').replace('/','_','ig');
        //console.log('[mediamond][IAS]===>MMsezioneTagOrig:'+MMsezioneTagOrig);

         if(campaignId != null){
           var sizeMod = size[0]+'x'+size[1]
        }else{
            var sizeMod = '';
        }


       //console.log('[mediamond][IAS]===>sizeMod:'+sizeMod);
        var sitoMM = document.location.hostname.replace("www.","").split(".")[0];
        if (MMarrayUrlSkin[3] != "" && MMarrayUrlSkin[3] != undefined && MMarrayUrlSkin[3].charAt(0) != '?') {
            sezioneMMComscore = "_"+MMarrayUrlSkin[3];
        }else{
            sezioneMMComscore = '';
        }

        //console.log('[mediamond][IAS]===>sezioneMMComscore:'+sezioneMMComscore);

        //var urlPag = sitoMM+sezioneMMComscore;
        var urlPag = '';//modifica per richiesta di mike il 16/04/2019 su skype
        // console.log('[mediamond][IAS]===>urlPag:'+urlPag);

        var custom3devType = "desktop"; if(navigator.userAgent.indexOf('iPhone') != -1)   { custom3devType = "mob_iphone"; } else if( navigator.userAgent.indexOf('iPad') != -1 )   { custom3devType = "mob_ipad"; } else if( navigator.userAgent.indexOf('Android') != -1 && navigator.userAgent.indexOf('Mobile') != -1 )   { custom3devType = "mob_android_sma"; } else if( navigator.userAgent.indexOf('Android') != -1 && !navigator.userAgent.indexOf('Mobile') != -1  )   { custom3devType = "mob_android_tab"; }
        //console.log('[mediamond][IAS]===>custom3devType:'+custom3devType);


        //rifPointIAS0 = jQuery('#'+divslot+' > div >iframe').attr('src');
        
         var iframeAdvSrcNoJquery1 = document.getElementById(divslot);
        var iframeAdvSrcNoJquery2 = iframeAdvSrcNoJquery1.getElementsByTagName("iframe")[0];
        if(iframeAdvSrcNoJquery2){
            var rifPointIAS0 = iframeAdvSrcNoJquery2.getAttribute("src");
        }else{
            var rifPointIAS0 = undefined;   
        }
    
        //console.log('[mediamond][IAS]===>src iframe:'+rifPointIAS0);
        
      var rifPointIAS0Array = [];
        if(rifPointIAS0 != undefined && rifPointIAS0 != null){
             var rifPointIAS0Replace = rifPointIAS0.replace('http://','').replace('https://','');
             //console.log('[mediamond][IAS]===>rifPointIAS0Replace:'+rifPointIAS0Replace);
            rifPointIAS0Array = rifPointIAS0Replace.split('/');
            //console.log('[mediamond][IAS]===>rifPointIAS0Array:'+rifPointIAS0Array[1]);
        }
        
       

        var cachebusterIAS = Math.floor(Math.random() * 10000000000); 
            //console.log('[mediamond][IAS]====>cachebusterIAS:'+cachebusterIAS);
            var idCachebusterIAS = 'ias-'+cachebusterIAS;

        if(rifPointIAS0Array[1] == 'safeframe'){

            //console.log('[mediamond][IAS]====>safeframe');
            //console.log('[mediamond][IAS]====>inserimento script:'+sizeMod);
            
            //debugMediamond('[IAS]====>safeframe','info');
            //debugMediamond('[IAS]====>inserimento script:'+sizeMod+' pos:'+pos,'info');



            var scriptIASObj = document.createElement('script');
            scriptIASObj.id = idCachebusterIAS;

            //document.body.appendChild(scriptIASObj);
            document.getElementById(divslot).appendChild(scriptIASObj);


            // IAS Monitoring
            if (typeof(MMsezioneTagOrig) == 'undefined' || MMsezioneTagOrig == null || MMsezioneTagOrig == '') { MMsezioneTagOrig = 'non definito'; }
            var iasScriptUrl, hiddenFrame, hiddenDoc, where, domain;
            iasScriptUrl = '//pixel.adsafeprotected.com/jload?anId=929824&campId='+sizeMod+'&pubId=programmatic&chanId='+MMsezioneTagOrig+'&placementId=programmatic&pubCreative=programmatic&pubOrder='+campaignId+'&cb='+cachebusterIAS+'&adsafe_par&impId=&custom='+pos+'&custom2='+urlPag+'&custom3='+custom3devType;
            hiddenFrame = document.createElement('iframe');
            (hiddenFrame.frameElement || hiddenFrame).style.cssText = 'width: 0; height: 0; border: 0; display: none;';
            hiddenFrame.src = 'javascript:false';
            where = document.getElementById(idCachebusterIAS);
            where.parentNode.insertBefore(hiddenFrame, where);
            try {
            hiddenDoc = hiddenFrame.contentWindow.document
            } catch (e) {
            domain = document.domain;
            hiddenFrame.src = "javascript:var d=document.open();d.domain=\" + domain + \";void(0);";
            hiddenDoc = hiddenFrame.contentWindow.document
            };
            hiddenDoc.open().write('<body onload=\"window.__IntegralASUseFIF = true; var js = document.createElement(\'script\');js.id = \'scriptIAS\';js.src = \'' + iasScriptUrl + '\';document.body.appendChild(js);\">');

            hiddenDoc.close();
			
			//refresh richiesto da ias 27-04-2020
				if(MMarrayUrlSkinControllo[1] != 'norefresh' && MMlarghezzaSitoAdv >= 970 && nomeSito == 'zingarate' && refreshBoxIas){
					setTimeout(function(){ googletag.pubads().refresh([slot]); console.log('[mediamond][IAS]===>refresh tag'); }, 30000);//15 secondi
					refreshBoxIas = false;
				}

        }else if (lineItemId == null ){

            //rifPointIAS1 = jQuery('#'+divslot+' > div >iframe').contents().find('iframe');
            //rifPointIAS2 = jQuery(rifPointIAS1[0]).contents().find('#scriptIAS');
            
           // console.log('[mediamond][IAS]====>programmatic');
            
            //debugMediamond('[IAS]====>programmatic','info');
            //debugMediamond('[IAS]====>inserimento script:'+sizeMod+' pos:'+pos,'info');
            // debugMediamond('[IAS]====>lineItemId=null','info');

         
            /*
            
            console.log('[mediamond][IAS]===>rifPointIAS2:'+rifPointIAS2.length);
             console.log('[mediamond][IAS]===>programmatic');
            console.log('[mediamond][IAS]====>inserimento script:'+sizeMod);
            console.log('[mediamond][IAS]===>rifPointIAS1:'+rifPointIAS1);*/


            var scriptIASObj = document.createElement('script');
            scriptIASObj.id = idCachebusterIAS;
            document.getElementById(divslot).appendChild(scriptIASObj);
            //document.body.appendChild(scriptIASObj);

            // IAS Monitoring
            if (typeof(MMsezioneTagOrig) == 'undefined' || MMsezioneTagOrig == null || MMsezioneTagOrig == '') { MMsezioneTagOrig = 'non definito'; }
            var iasScriptUrl, hiddenFrame, hiddenDoc, where, domain;
            iasScriptUrl = '//pixel.adsafeprotected.com/jload?anId=929824&campId='+sizeMod+'&pubId=programmatic&chanId='+MMsezioneTagOrig+'&placementId=programmatic&pubCreative=programmatic&pubOrder='+campaignId+'&cb='+cachebusterIAS+'&adsafe_par&impId=&custom='+pos+'&custom2='+urlPag+'&custom3='+custom3devType;
            hiddenFrame = document.createElement('iframe');
            (hiddenFrame.frameElement || hiddenFrame).style.cssText = 'width: 0; height: 0; border: 0; display: none;';
            hiddenFrame.src = 'javascript:false';
            where = document.getElementById(idCachebusterIAS);
            where.parentNode.insertBefore(hiddenFrame, where);
            try {
            hiddenDoc = hiddenFrame.contentWindow.document
            } catch (e) {
            domain = document.domain;
            hiddenFrame.src = "javascript:var d=document.open();d.domain=\" + domain + \";void(0);";
            hiddenDoc = hiddenFrame.contentWindow.document
            };
            hiddenDoc.open().write('<body onload=\"window.__IntegralASUseFIF = true; var js = document.createElement(\'script\');js.id = \'scriptIAS\';js.src = \'' + iasScriptUrl + '\';document.body.appendChild(js);\">');

            hiddenDoc.close();
			
			if(MMarrayUrlSkinControllo[1] != 'norefresh' && MMlarghezzaSitoAdv >= 970 && nomeSito == 'zingarate' && refreshBoxIas){
				setTimeout(function(){ googletag.pubads().refresh([slot]); console.log('[mediamond][IAS]===>refresh tag'); }, 30000);//15 secondi
				refreshBoxIas = false;
			}


        }else{

            //console.log('[mediamond][IAS]===>standard');
            
            //debugMediamond('[IAS]====>standard','info');
            
           
            
            //var iframeAdvSrcNoJquery2Test = document.getElementById("google_ads_iframe_/4758/ame_confidenze/home_1");
            var rifPointIASNoJquery3 = iframeAdvSrcNoJquery2.contentWindow.document;
            //console.log('[mediamond][IAS]===>iframe principale test:'+iframeAdvSrcNoJquery2Test);    
            //console.log('[mediamond][IAS]===>contenuto iframe principale test:'+rifPointIASNoJquery3);
            //secondo i frame
             var iframeAdvSrcNoJquery5 = rifPointIASNoJquery3.getElementsByTagName("iframe")[0];
            //var iframeAdvSrcNoJquery5Src = iframeAdvSrcNoJquery5.getAttribute("src");
            
            //alcune creatività generano iframe e devo trovare quello generato da ias.
            var iframeAdvSrcNoJqueryArray = rifPointIASNoJquery3.getElementsByTagName("iframe");
            for(i=0;i<iframeAdvSrcNoJqueryArray.length;i++){
                //console.log('[mediamond][IAS]===>src iframe:'+i+' - '+iframeAdvSrcNoJqueryArray[i].getAttribute("src"));
                if(iframeAdvSrcNoJqueryArray[i].getAttribute("src") == 'javascript:false'){
                    //console.log('[mediamond][IAS]===>contenuto iframe secondario affidabile');
                    iframeAdvSrcNoJquery5 = iframeAdvSrcNoJqueryArray[i];
                }
            }
            
            
            if(iframeAdvSrcNoJquery5){
            
           // debugMediamond('[IAS]====>presenza tag iframe ','info');
            //console.log('[mediamond][IAS]===>contenuto iframe secondario src:'+iframeAdvSrcNoJquery5Src);
            //console.log('[mediamond][IAS]===>contenuto iframe secondario test:'+iframeAdvSrcNoJquery5);
            var rifPointIASNoJquery6 = iframeAdvSrcNoJquery5.contentWindow.document;//contentDocument
            var rifPointIASNoJquery7 = rifPointIASNoJquery6.getElementById("scriptIAS");
           // console.log('[mediamond][IAS]===>presenza scriptIAS iframe secondario:'+rifPointIASNoJquery7);
            
            

            if(!rifPointIASNoJquery7){
                
                // debugMediamond('[IAS]====>non script ias in iframe ','info');
                //debugMediamond('[IAS]====>inserimento script:'+sizeMod+' pos:'+pos,'info');


                var scriptIASObj = document.createElement('script');
                scriptIASObj.id = idCachebusterIAS;
               // scriptIASTxt = "console.log('[mediamond][IAS]====>inserimento script');";
               // document.body.appendChild(scriptIASObj);
                document.getElementById(divslot).appendChild(scriptIASObj);

               // console.log('[mediamond][IAS]====>inserimento script:'+sizeMod);
                // IAS Monitoring
                if (typeof(MMsezioneTagOrig) == 'undefined' || MMsezioneTagOrig == null || MMsezioneTagOrig == '') { MMsezioneTagOrig = 'non definito'; }
                var iasScriptUrl, hiddenFrame, hiddenDoc, where, domain;
                iasScriptUrl = '//pixel.adsafeprotected.com/jload?anId=929824&campId='+sizeMod+'&pubId=non-rilevabile&chanId='+MMsezioneTagOrig+'&placementId='+lineItemId+'&pubCreative='+creativeId+'&pubOrder='+campaignId+'&cb='+cachebusterIAS+'&adsafe_par&impId=&custom='+pos+'&custom2='+urlPag+'&custom3='+custom3devType;
                hiddenFrame = document.createElement('iframe');
                (hiddenFrame.frameElement || hiddenFrame).style.cssText = 'width: 0; height: 0; border: 0; display: none;';
                hiddenFrame.src = 'javascript:false';
                where = document.getElementById(idCachebusterIAS);
                where.parentNode.insertBefore(hiddenFrame, where);
                try {
                hiddenDoc = hiddenFrame.contentWindow.document
                } catch (e) {
                domain = document.domain;
                hiddenFrame.src = "javascript:var d=document.open();d.domain=\" + domain + \";void(0);";
                hiddenDoc = hiddenFrame.contentWindow.document
                };
                hiddenDoc.open().write('<body onload=\"window.__IntegralASUseFIF = true; var js = document.createElement(\'script\');js.id = \'scriptIAS\';js.src = \'' + iasScriptUrl + '\';document.body.appendChild(js);\">');

                hiddenDoc.close();
				
				if(MMarrayUrlSkinControllo[1] != 'norefresh' && MMlarghezzaSitoAdv >= 970 && nomeSito == 'zingarate' && refreshBoxIas){
					setTimeout(function(){ googletag.pubads().refresh([slot]); console.log('[mediamond][IAS]===>refresh tag'); }, 30000);//15 secondi
					refreshBoxIas = false;
				}


            }// if(!rifPointIASNoJquery4){
                
            }else{//if(iframeAdvSrcNoJquery5){
                
                //debugMediamond('[IAS]====>standard programmatic','info');
                //debugMediamond('[IAS]====>inserimento script:'+sizeMod+' pos:'+pos,'info');
                
                var scriptIASObj = document.createElement('script');
                scriptIASObj.id = idCachebusterIAS;
                document.getElementById(divslot).appendChild(scriptIASObj);
                //document.body.appendChild(scriptIASObj);

                // IAS Monitoring
                if (typeof(MMsezioneTagOrig) == 'undefined' || MMsezioneTagOrig == null || MMsezioneTagOrig == '') { MMsezioneTagOrig = 'non definito'; }
                var iasScriptUrl, hiddenFrame, hiddenDoc, where, domain;
                iasScriptUrl = '//pixel.adsafeprotected.com/jload?anId=929824&campId='+sizeMod+'&pubId=programmatic&chanId='+MMsezioneTagOrig+'&placementId=programmatic&pubCreative=programmatic&pubOrder='+campaignId+'&cb='+cachebusterIAS+'&adsafe_par&impId=&custom='+pos+'&custom2='+urlPag+'&custom3='+custom3devType;
                hiddenFrame = document.createElement('iframe');
                (hiddenFrame.frameElement || hiddenFrame).style.cssText = 'width: 0; height: 0; border: 0; display: none;';
                hiddenFrame.src = 'javascript:false';
                where = document.getElementById(idCachebusterIAS);
                where.parentNode.insertBefore(hiddenFrame, where);
                try {
                hiddenDoc = hiddenFrame.contentWindow.document
                } catch (e) {
                domain = document.domain;
                hiddenFrame.src = "javascript:var d=document.open();d.domain=\" + domain + \";void(0);";
                hiddenDoc = hiddenFrame.contentWindow.document
                };
                hiddenDoc.open().write('<body onload=\"window.__IntegralASUseFIF = true; var js = document.createElement(\'script\');js.id = \'scriptIAS\';js.src = \'' + iasScriptUrl + '\';document.body.appendChild(js);\">');

                hiddenDoc.close();
				
				if(MMarrayUrlSkinControllo[1] != 'norefresh' && MMlarghezzaSitoAdv >= 970 && nomeSito == 'zingarate' && refreshBoxIas){
					setTimeout(function(){ googletag.pubads().refresh([slot]); console.log('[mediamond][IAS]===>refresh tag'); }, 30000);//15 secondi
					refreshBoxIas = false;
				}
                
            }

        }//if(rifPointIAS0 == 'https://tpc.googlesyndication.com/safeframe/1-0-31/html/container.html'){

//}//MMarrayUrlSkin[2] == 'www.starbene.it'
        
}
//fine ias //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/// JS Open Wrap  Header Bidding Pubmatic ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//no su rti, meteo si per richiesta diretta da programmatic
if(nomeSito != 'tgcom24' && nomeSito != 'boing' && nomeSito != 'cartoonito' && nomeSito != 'icon' && nomeSito != 'icondesign' && nomeSito != 'interni' && nomeSito != 'grazia' && nomeSito != 'panoramaauto' && nomeSito != 'focusjunior' && nomeSito != 'grandefratello' ){

    //console.log('[mediamond]===>caricamento Header Bidding Pubmatic');
    debugMediamond('[mediamond]===>caricamento Header Bidding Pubmatic timer:'+(advTime/10),'worn');
    
    var PWT={}; //Initialize Namespace
    var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];
    var gptRan = false;
    PWT.jsLoaded = function(){ //PubMatic pwt.js on load callback is used to load GPT
        loadGPT();
    };
    var loadGPT = function() {
    // Check the gptRan flag
        if (!gptRan) {
            //console.log('[mediamond]===>caricamento libreria googletagservices');
            debugMediamond('[mediamond]===>caricamento libreria googletagservices timer:'+(advTime/10),'worn');
            gptRan = true;
            var gads = document.createElement('script');
            gads.async = true;
            gads.type = "text/javascript";
            var useSSL = 'https:' == document.location.protocol;
            gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
            var node = document.getElementsByTagName('script')[0];
            node.parentNode.insertBefore(gads, node);
        }
    };
    // Failsafe to call gpt. 500 ms timeout can be updated as per publisher preference.
    setTimeout(loadGPT, 500);
    //    
    (function() {
        var purl = window.location.href;
        
        //variazione per i siti: - Radio 105 - Confidenze - Virgin Radio - Radio Subasio - che non hanno cmp
        if(nomeSito == 'radio105' || nomeSito == 'confidenze' || nomeSito == 'virginradio' || nomeSito == 'radiosubasio'){
            
            if(devTypeUtility == "mobile_web_iphone" || devTypeUtility == "mobile_web_ipad" || devTypeUtility == "mobile_web_android_phone" || devTypeUtility == "mobile_web_android_tablet" ){//if(MMlarghezzaSitoAdv<970){
                var url = '//ads.pubmatic.com/AdServer/js/pwt/76492/1306';
            }else{
                var url = '//ads.pubmatic.com/AdServer/js/pwt/76492/1307';
            }
            
            
        /*}else if(nomeSito == 'zingarate' || nomeSito == 'mypersonaltrainer_new'){
            
            if(devTypeUtility == "mobile_web_iphone" || devTypeUtility == "mobile_web_ipad" || devTypeUtility == "mobile_web_android_phone" || devTypeUtility == "mobile_web_android_tablet" ){//if(MMlarghezzaSitoAdv<970){
                var url = '//ads.pubmatic.com/AdServer/js/pwt/76492/2315';
            }else{
                var url = '//ads.pubmatic.com/AdServer/js/pwt/76492/2220';
            }*/
            
            
        }else{
        
            if(devTypeUtility == "mobile_web_iphone" || devTypeUtility == "mobile_web_ipad" || devTypeUtility == "mobile_web_android_phone" || devTypeUtility == "mobile_web_android_tablet" ){
                var url = '//ads.pubmatic.com/AdServer/js/pwt/76492/1305';
            }else{
                var url = '//ads.pubmatic.com/AdServer/js/pwt/76492/745';
            }
            
        }
        
        
        var profileVersionId = '';
        if(purl.indexOf('pwtv=')>0){
            var regexp = /pwtv=(.*?)(&|$)/g;
            var matches = regexp.exec(purl);
            if(matches.length >= 2 && matches[1].length > 0){
                            profileVersionId = '/'+matches[1];
            }
        }
        var wtads = document.createElement('script');
        wtads.async = true;
        wtads.type = 'text/javascript';
        wtads.src = url+profileVersionId+'/pwt.js';
        var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(wtads, node);
    })();

}else{
    //console.log('[mediamond]===>non caricamento Header Bidding Pubmatic');
    debugMediamond('[mediamond]===>caricamento libreria googletagservices timer:'+(advTime/10),'worn');
    var gads = document.createElement('script');
    gads.async = true;
    gads.type = "text/javascript";
    var useSSL = 'https:' == document.location.protocol;
    gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(gads, node);
    
}


/// fine JS Open Wrap  Header Bidding Pubmatic /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//chiamate per debug ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function debugMediamond(testo,tipo){
    var debugStyleError = 'background: none; color: #000; padding: 5px;';
    if(tipo == 'error'){
        debugStyleError = 'background: red; color: #fff; padding: 5px;';
    }else if(tipo == 'worn'){
        debugStyleError = 'background: orange; color: #000; padding: 5px;';
    }else if(tipo == 'info'){
        debugStyleError = 'background: blue; color: #fff; padding: 5px;';
    }
    console.log('%c[mediamond]'+testo+'',debugStyleError);
}

//fine chiamate debug ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//verifica presenta box e strip e krux /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.addEventListener('load', function() {
    if (!document.getElementById(divslotnameStrip)){
        debugMediamond('[strip] non presente','error');
    }
    if (!document.getElementById(divslotnameBox)){
        debugMediamond('[box] non presente','error');
    }
	//krux
	if(typeof(Krux) != undefined && typeof(Krux) != 'undefined'){
		//debugMediamond('[krux] presente','error');
	}else{
		debugMediamond('[krux] non presente','error');
	}
});
//fine verifica box ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
///
//per poter disattivare i formati richmedia e il mh
if(MMarrayUrlSkinControllo[1] == 'skinlight'){
	MMstatusStrip = false;
    MMstatusRichMedia = false;
    debugMediamond('[strip e rich] risattivati','worn');
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Controllo seedtag per non farlo uscire sulle hp
if((MMarrayUrlSkin[4] == '' || MMarrayUrlSkin[4] == undefined || MMarrayUrlSkin[4] == 'undefined')){
 debugMediamond('[mediamond][seedtag]===>non in erogazione','worn');
 statusSeedTag = false;
}else{
debugMediamond('[mediamond][seedtag]==> in erogazione','worn');
}


// CONTROLLO GENERICO EVENTI TAG ///////////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var globalCampaignIdStrip;
var globalCreativeIdStrip;
var globalLineItemIdStrip;
var globalSizeStrip;
var globalinViewPercentageStrip;
var globalCampaignIdBox;
var globalCreativeIdBox;
var globalLineItemIdBox;
var globalSizeBox;
var globalinViewPercentageBox;
globalRefreshTag = function(slot){
	setTimeout(function(){ googletag.pubads().refresh([slot]); console.log('[mediamond][global tag event]===>refresh tag'); }, 15000);//15
}
//
///per i siti che non hanno problemi
if(nomeSito == 'rockol' || nomeSito == 'mypersonaltrainer_new' || nomeSito == 'mobileworld' || nomeSito == 'androidworld' || nomeSito == 'smartworld'  || nomeSito == 'nostrofiglio' || nomeSito == 'nostrofiglio_new' || nomeSito == 'zingarate' || nomeSito == 'studenti_new' || nomeSito == 'farmacoecura' || nomeSito == 'donnamoderna' || nomeSito == 'filmtv' || nomeSito == 'focus' || nomeSito == 'pianetadonna' || nomeSito == 'pianetamamma' || nomeSito == 'pianetamamma_new' || nomeSito == 'soldionline' || nomeSito == 'icon' || nomeSito == 'sorrisi' || nomeSito == 'ilgiornale' || nomeSito == 'sportmediaset' || nomeSito == 'starbene' || nomeSito == 'superguidatv' || nomeSito == 'tustyle' || nomeSito == 'valorinormali' || nomeSito == 'skuola' || nomeSito == 'panoramaauto' || nomeSito == 'casabella' || nomeSito == 'confidenze' || nomeSito == 'meteo' || nomeSito == 'meteo_new' || nomeSito == 'radio105' || nomeSito == 'radio101' || nomeSito == 'virginradio'){
	googletag.cmd.push(function() {
		googletag.pubads().addEventListener('slotOnload', function(event) {
			if (document.getElementById(divslotnameStrip) && MMstatusStrip) { 
				if(nomeSito!='ilgiornale' && nomeSito!='sportmediaset' && nomeSito!='superguidatv' && nomeSito!='meteo' && nomeSito!='meteo_new' && nomeSito != 'radio105' && nomeSito != 'radio101' && nomeSito != 'virginradio'){
					if(typeof(mm_stript1)!=undefined && typeof(mm_stript1)!='undefined'){
						if(event.slot===mm_stript1) {
							console.log('[mediamond][global tag event]===> slot strip caricato');	
							console.log('[mediamond][global tag event]===> sizeStrip:'+sizeStrip);
							if(globalSizeStrip == '728,90'){
								console.log('[mediamond][global tag event]===> sizeStrip 728,90');
							}
							if(globalSizeStrip == '970,250'){ 
								console.log('[mediamond][global tag event]===> sizeStrip 970,250');
							}
							if(globalSizeStrip == '720,240'){ 
								console.log('[mediamond][global tag event]===> sizeStrip 720,24');
							}
							if(globalSizeStrip == '320,50' || globalSizeStrip == '320,100' || globalSizeStrip == '375,100'){
								//console.log('[mediamond][global tag event]===> sizeStrip');
								globalRefreshTag(mm_stript1);
							}
						}
					}
				}
				
				
            }
			 if (document.getElementById('div-gpt-320x50') && MMstatusStrip) {
				 if(nomeSito=='superguidatv'){
					if(event.slot===mm_stript_sticky) {
						globalRefreshTag(mm_stript_sticky);
					}
				}
				if(nomeSito=='ilgiornale' || nomeSito=='sportmediaset' || nomeSito=='meteo' || nomeSito=='meteo_new' || nomeSito == 'radio105' || nomeSito == 'radio101' || nomeSito == 'virginradio'){
					if(event.slot===mm_stript2){
						globalRefreshTag(mm_stript2);
					}
				}
            }
			if (document.getElementById(divslotnameBox) && MMstatusBox) {
				if(typeof(mm_box1)!=undefined && typeof(mm_box1)!='undefined'){
					if(event.slot===mm_box1) {
						console.log('[mediamond][global tag event]===> slot box caricato');	
					}
				}
			}
		});
		googletag.pubads().addEventListener('slotRenderEnded', function(event) {
            if (document.getElementById(divslotnameStrip) && MMstatusStrip) {
				if(typeof(mm_stript1)!=undefined && typeof(mm_stript1)!='undefined'){
					if(event.slot===mm_stript1) {
						console.log('[mediamond][global tag event]===> slot strip renderizzato');					
						globalCampaignIdStrip = event.campaignId;
						globalCreativeIdStrip = event.creativeId;
						globalLineItemIdStrip = event.lineItemId;
						globalSizeStrip = event.size;
					}
				}
            }
			if (document.getElementById(divslotnameBox) && MMstatusBox) {
				if(typeof(mm_box1)!=undefined && typeof(mm_box1)!='undefined'){
					if(event.slot===mm_box1) {
						console.log('[mediamond][global tag event]===> slot box renderizzato');	
						globalCampaignIdBox = event.campaignId;
						globalCreativeIdBox = event.creativeId;
						globalLineItemIdBox = event.lineItemId;
						globalSizeBox = event.size;
					}
				}
			}
		});
		googletag.pubads().addEventListener('impressionViewable', function(event) {
            if (document.getElementById(divslotnameStrip) && MMstatusStrip) {
				if(typeof(mm_stript1)!=undefined && typeof(mm_stript1)!='undefined'){
					if(event.slot===mm_stript1) {
						//console.log('[mediamond][global tag event]===> slot strip viewable');					
					}
				}
            }
			if (document.getElementById(divslotnameBox) && MMstatusBox) {
				if(typeof(mm_box1)!=undefined && typeof(mm_box1)!='undefined'){
				if(event.slot===mm_box1) {
					//console.log('[mediamond][global tag event]===> slot box viewable');	
				}
				}
			}
		});
		googletag.pubads().addEventListener('slotVisibilityChanged', function(event) {
            if (document.getElementById(divslotnameStrip) && MMstatusStrip) {
				if(typeof(mm_stript1)!=undefined && typeof(mm_stript1)!='undefined'){
					if(event.slot===mm_stript1) {
						//console.log('[mediamond][global tag event]===> slot strip slotVisibilityChanged');					
						globalinViewPercentageStrip = event.inViewPercentage;
						//console.log('[mediamond][global tag event]===> strip slotVisibilityChanged:'+globalinViewPercentageStrip);
					}
				}
            }
			if (document.getElementById(divslotnameBox) && MMstatusBox) {
				if(typeof(mm_box1)!=undefined && typeof(mm_box1)!='undefined'){
				if(event.slot===mm_box1) {
					//console.log('[mediamond][global tag event]===> slot box slotVisibilityChanged');	
					globalinViewPercentageBox = event.inViewPercentage;
					//console.log('[mediamond][global tag event]===> box slotVisibilityChanged:'+globalinViewPercentageBox);
				}
				}
			}
		});
	});
}//if(nomeSito == '.....' ){

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//aggiunta variabili semantica
var counSemantica = 0;
checkSemantica = function(){
	console.log('[mediamond][semantica]===>chiamata');
	var adxLemmas;
	var adxPeople;
	var advCategories;
	var adxPlaces;
	var adxCompanies;
	if(typeof(ADX_lemmas) != undefined && typeof(ADX_lemmas) != 'undefined'){
		adxLemmas =  ADX_lemmas;
	}
	if(typeof(ADX_people) != undefined && typeof(ADX_people) != 'undefined'){
		adxPeople = ADX_people;
	}
	if(typeof(ADX_categories) != undefined && typeof(ADX_categories) != 'undefined'){
		advCategories = ADX_categories;
	}
	if(typeof(ADX_places) != undefined && typeof(ADX_places) != 'undefined'){
		adxPlaces = ADX_places;
	}
	if(typeof(ADX_companies) != undefined && typeof(ADX_companies) != 'undefined'){
		adxCompanies = ADX_companies;
	}
	if(typeof(ADX_label) != undefined && typeof(ADX_label) != 'undefined'){
		console.log('[mediamond][semantica]===>base:'+ADX_label);
		ADX_label += ','+adxLemmas+','+adxPeople+','+advCategories+','+adxPlaces+','+adxCompanies;
		console.log('[mediamond][semantica]===>fine aggiunta:'+ADX_label);
		clearInterval(checkSemanticaInterval);
	}else{
		console.log('[mediamond][semantica]===>non pronta');
		if(counSemantica > 20){
			clearInterval(checkSemanticaInterval);
			console.log('[mediamond][semantica]===>non presente');
		}
	}
	counSemantica ++;
}
var checkSemanticaInterval = setInterval(function(){ checkSemantica(); }, 100);