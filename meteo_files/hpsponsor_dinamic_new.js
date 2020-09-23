/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
//meteo///////////////////////////////////////////////////////////////////
var riferimentoLarghezza = 1200; 
var marginTopSidebarSkin;


eefPoint = document.querySelector("#main-nav-bar");
eefPointCss = '#main-nav-bar';
//contenitore
var contenitoreSkinGpt = document.createElement('div');                
contenitoreSkinGpt.setAttribute('id', 'contenitore-sito-x-adv');   
contenitoreSkinGpt.setAttribute('style', 'display:none;');
document.body.insertBefore(contenitoreSkinGpt, eefPoint);
//ancora
var ancoraSkinGpt = document.createElement('div');                
ancoraSkinGpt.setAttribute('id', 'ancora-contenitore-x-adv');    
document.body.insertBefore(ancoraSkinGpt, eefPoint);
//link
var linkSkinGpt = document.createElement('a');       
linkSkinGpt.setAttribute('class', 'adv_esterno');            
linkSkinGpt.setAttribute('id', 'adv_esterno');
linkSkinGpt.setAttribute('style', 'display:none;');
linkSkinGpt.setAttribute('target', '_blank');   
document.body.appendChild(linkSkinGpt);


//questa modifica è per i siti che hanno masthead e skin in comune nella tag
if(document.getElementById(divslotnameStrip)){
document.getElementById(divslotnameStrip).innerHTML = "<img src='//static.mediamond.it/img_generiche/20x20.png'></div>";
document.getElementById(divslotnameStrip).classList.add('skin-viewability');
}

//C0DICE PER LA SKIN WEB ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function loadSkinWeb(colore_sfondo_w,img_web_w,posizione_w,altezza_testata_w,url_puntamento_personalizzazione_w,statusStrip_w,status300x100_w,statusRichMedia_w){
	console.log('--> skin web 2.2');
	
	document.getElementById('adv_esterno').style.display = 'block';
	document.getElementById('contenitore-sito-x-adv').style.display = 'block';

	var urlLinkAdvEsterno = document.getElementById("adv_esterno");
	urlLinkAdvEsterno.setAttribute("href", url_puntamento_personalizzazione_w);
	
	var cssSkinWebObj = document.createElement('style');
			
	
	cssSkinWeb = 'a.adv_esterno {display:block;width:100%;height:840px;z-index:0;color:#000; margin-top:0;position:fixed;top:0;left:0;}';
	cssSkinWeb += 'body {background: url('+img_web_w+') no-repeat center top '+colore_sfondo_w+' '+posizione_w+'; background-size: 1764px auto !important;}#contenitore-sito-x-adv{height:'+(parseInt(altezza_testata_w)+16)+'px;}';
	
	
	cssSkinWebObj.innerHTML = cssSkinWeb;
	///blocco variabili	
	statusPersonalizzazioniWeb = true;
	statusStrip = statusStrip_w;
  	status300x100 = status300x100_w;
  	statusRichMedia = statusRichMedia_w;
  	MMPosition = posizione_w;

  	MMstatusPersonalizzazioniWeb = true;

	MMstatusStrip = statusStrip_w;
	MMstatus300x100 = status300x100_w;
	MMstatusRichMedia = statusRichMedia_w;
	
	
	//css
	document.body.appendChild(cssSkinWebObj);

	if(typeof(sizeStrip) == undefined || typeof(sizeStrip) == 'undefined'){
		sizeStrip = [0,0];
		 //console.log('[mediamond][skin]===>sizeStrip undefined');
	}else if(sizeStrip == null){
		sizeStrip = [0,0];
		 //console.log('[mediamond][skin]===>sizeStrip null');
	}
    
    marginTopSidebarSkin = sizeStrip[1]+70+50;
	
	
	initDivIasSkin(altezza_testata_w);

	document.body.classList.add("mt-skin-visible");
	
		//
}//function loadSkinWeb()



function loadSkinWeb2(configSkin){
	console.log('mediamond][skin]===>skin web 3.0');
	//console.log('===>test 1.0');
	//console.log('[mediamond][skin]===>cssTemplateSkin:'+cssTemplateSkin);
	//console.log('[mediamond][skin]===>colore_sfondo:'+configSkin.img_web_low);

	document.getElementById('adv_esterno').style.display = 'block';
	document.getElementById('contenitore-sito-x-adv').style.display = 'block';

	var urlLinkAdvEsterno = document.getElementById("adv_esterno");
	urlLinkAdvEsterno.setAttribute("href", configSkin.url_puntamento_personalizzazione);

	var cssSkinWebObj = document.createElement('style');	
	
	cssSkinWeb = 'a.adv_esterno {display:block;width:100%;height:840px;z-index:0;color:#000; margin-top:0;position:fixed;top:0;left:0;}';
	cssSkinWeb += 'body {background: url('+configSkin.img_web+') no-repeat center top '+configSkin.colore_sfondo+' '+configSkin.posizione+'; background-size: 1764px auto !important;}#contenitore-sito-x-adv{height:'+(parseInt(configSkin.altezza_testata)+16)+'px;}';
	
		cssSkinWeb += '@media only screen and (max-width: 1300px) {body {background: url('+configSkin.img_web_low+') no-repeat center top '+configSkin.colore_sfondo+' '+configSkin.posizione+'; background-size: 1764px auto !important;}#cookie-dialog {margin-top: 0px;} }';
	
	
	cssSkinWebObj.innerHTML = cssSkinWeb;
	
    ///blocco variabili
	MMstatusPersonalizzazioniWeb = true;
	MMstatusStrip = configSkin.statusStrip;
	MMstatus300x100 = configSkin.status300x100;
	MMstatusRichMedia = configSkin.statusRichMedia;
	MMPosition = configSkin.posizione;
	
	document.body.appendChild(cssSkinWebObj);
	
	if(typeof(sizeStrip) == undefined || typeof(sizeStrip) == 'undefined'){
		sizeStrip = [0,0];
		 //console.log('[mediamond][skin]===>sizeStrip undefined');
	}else if(sizeStrip == null){
		sizeStrip = [0,0];
		 //console.log('[mediamond][skin]===>sizeStrip null');
	}
    
    marginTopSidebarSkin = sizeStrip[1]+70+50;
    //console.log('[mediamond][skin]===>marginTopSidebarSkin:',marginTopSidebarSkin);
    //PER IAS
    initDivIasSkin(configSkin.altezza_testata);
	
	document.body.classList.add("mt-skin-visible");
    
}//function loadSkinWeb()


////////////////////////////////////////////////////////////////////////////////////
//********************** IAS per la skin *******************************************
var MMaltezzaSitoAdv = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
//inserisco i div per la viewability di ias
function initDivIasSkin(altezza_testata_w){
    //console.log('[mediamond][skin]===>initDivIasSkin');
    var larghezzaSito = 1200;//in px
    var spazioSidebarSkin = ((MMlarghezzaSitoAdv - larghezzaSito)/2)-10;//il (MMlarghezzaSitoAdv-10) camcolo la larghezza tolta la barra di scorrimento
    var larghezzaDivSkinSidebar = 150;
    var altezzaTestataMh = 0;
    
    /*console.log('[mediamond][skin]===>spazioSidebarSkin:'+spazioSidebarSkin);
    console.log('[mediamond][skin]===>sizeStrip:'+sizeStrip);
    console.log('[mediamond][skin]===>altezzaTestataMh:'+altezzaTestataMh);*/
	if(typeof(sizeStrip) == undefined || typeof(sizeStrip) == 'undefined'){
		sizeStrip = [0,0];
		 //console.log('[mediamond][skin]===>sizeStrip undefined');
	}else if(sizeStrip == null){
		sizeStrip = [0,0];
		 //console.log('[mediamond][skin]===>sizeStrip null');
	}
    
	var marginTopSidebarSkin = sizeStrip[1]+70+40;
	if(altezzaTestataMh != 0){
		var altezzaDivSkinSidebar = MMaltezzaSitoAdv-altezzaTestataMh;
	}else{
		var altezzaDivSkinSidebar = MMaltezzaSitoAdv-sizeStrip[1];
	}
	
   //console.log('[mediamond][skin]===>marginTopSidebarSkin:'+marginTopSidebarSkin);
   //console.log('[mediamond][skin]===>altezzaTestataMh:'+altezzaTestataMh);
   //console.log('[mediamond][skin]===>sizeStrip[1]:'+sizeStrip[1]);
    
    var cssSkinWebObjIas = document.createElement('style');
    
    
    if(MMlarghezzaSitoAdv>riferimentoLarghezza){
        //barre laterali
		cssSkinWebIas = '#'+divslotnameStrip+'{width:'+spazioSidebarSkin+'px; height:610px; position:fixed; top:'+marginTopSidebarSkin+'px;}';//SETTAGGIO
		cssSkinWebIas += '#'+divslotnameStrip+'{left:0px;}';
       //safe area sopra 1370 = 138 e sotto i 1370 = 81 taratura sulla safe area
		//il calcolo è stato fatto
		if(MMlarghezzaSitoAdv > 1370){
			var widthMin = '138';
		}else{
			var widthMin = '81';
		}
		cssSkinWebIas += '#'+divslotnameStrip+'{min-width:'+widthMin+'px;}';
		
		if(spazioSidebarSkin < widthMin){
			document.getElementById(divslotnameStrip).style.left =  (spazioSidebarSkin-widthMin)+'px';
		}

		//ridimensiono il div di ias in base alla larghezza
		window.addEventListener("resize", function() {
			var MMlarghezzaSitoAdvNew = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			//console.log('[mediamond][skin]=========================================');
			//console.log('[mediamond][skin]===>resize:'+MMlarghezzaSitoAdvNew);
			spazioSidebarSkin = ((MMlarghezzaSitoAdvNew - larghezzaSito)/2)-10;//il (MMlarghezzaSitoAdv-10) camcolo la larghezza tolta la barra di scorrimento
			//console.log('[mediamond][skin]===>spazioSidebarSkin:'+spazioSidebarSkin);
			if(MMlarghezzaSitoAdvNew > 1370){
				widthMin = '138';
			}else{
				widthMin = '81';
			}
			//console.log('[mediamond][skin]===>widthMin:'+widthMin);
			if(spazioSidebarSkin > widthMin){
				document.getElementById(divslotnameStrip).style.width = spazioSidebarSkin+'px';
				document.getElementById(divslotnameStrip).style.left =  '0px';
			}else{
				document.getElementById(divslotnameStrip).style.width = spazioSidebarSkin+'px';
				document.getElementById(divslotnameStrip).style.left =  (spazioSidebarSkin-widthMin)+'px';
			}
			document.getElementById(divslotnameStrip).style.minWidth = widthMin+'px';
		});
		
		

        
    }else{
        //testata
       cssSkinWebIas = '#'+divslotnameStrip+'{width:'+MMlarghezzaSitoAdv+'px; height:'+(parseInt(altezza_testata_w)+16)+'px;margin:0 auto; position:fixed; left:0;}';
    }
	
	
    cssSkinWebIas += '#'+divslotnameStrip+' > div { width:100%; height:100%;} #'+divslotnameStrip+' > div > iframe { width:100%; height:100%; }';
    cssSkinWebIas += '.divSidebarPosScroll{height:610px !important;top:0px !important;}';//SETTAGGIO
    
    
	document.getElementById(divslotnameStrip).style.top = marginTopSidebarSkin+'px';
  
    cssSkinWebObjIas.innerHTML = cssSkinWebIas;
	document.body.appendChild(cssSkinWebObjIas);

	var intervalloIas = setInterval(function(){ 
		//console.log('[mediamond][skin]===intervallo');
		var newMarginTop = document.getElementById('contenitore-sito-x-adv').offsetTop;
		//console.log('[mediamond][skin]===newMarginTop:'+newMarginTop);
		document.getElementById(divslotnameStrip).style.top = newMarginTop+'px';
	}, 500);

	//mi serve per spostare il div allo scroll
        if(MMlarghezzaSitoAdv>riferimentoLarghezza){
            //console.log('[mediamond][skin][ias]===>controllo >1300');
           	window.addEventListener("scroll", function() {
                var scrollPosIas =  document.body.scrollTop  || document.documentElement.scrollTop
                //per ias
                //console.log('[mediamond][skin][ias]===>scrollPosIas:'+scrollPosIas);
                if(scrollPosIas >= marginTopSidebarSkin){
					document.getElementById(divslotnameStrip).classList.add("divSidebarPosScroll");
                }else{
					document.getElementById(divslotnameStrip).classList.remove("divSidebarPosScroll");
                }
            });
        }
}