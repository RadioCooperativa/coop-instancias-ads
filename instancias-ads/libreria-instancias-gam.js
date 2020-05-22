let ittFooter     = [1,1];
let bannerTop     = [[728, 90], [990, 50], [728, 50], [728, 60], [990, 90], [990, 100], [990, 200], [990, 60], [728, 40], [990, 40], [1100, 90], [1300, 90]];
let bannerTopArticles     = [[650, 90], [728, 60], [650, 40], [650, 60], [728, 90]];
let bannerTower   = [[120, 600],[160, 600]];
let bannerRob     = [300, 250];
let bannerRobImpar  = [[300, 250],[300,400],[300,450],[300,600]];
let bannerMenuCoop = [250,90];

let MbannerTop     = [[300, 50], [300, 60], [300, 70], [300, 80], [300, 90], [300, 100], [300, 140], [300, 150], [300, 180], [320, 50], [320, 60], [320, 70], [320, 80], [320, 90], [320, 100], [320, 150], [320, 180]];
let MbannerTop2     = [[300, 50], [300, 60], [300, 70], [300, 80], [300, 90], [300, 100], [300, 140], [300, 150], [300, 250], [300, 300], [300, 350], [300, 400], [300, 450], [300, 600], [320, 50], [320, 60], [320, 70], [320, 80], [320, 90], [320, 100], [320, 150], [320, 250]];

let MbannerRob     = [[300, 40], [300, 50], [300, 60], [300, 70], [300, 80], [300, 90], [300, 100], [300, 150], [300, 250], [300, 400], [300, 450], [300, 600], [320, 40], [320, 50], [320, 60], [320, 70], [320, 80], [320, 90], [320, 100], [320, 150], [320, 250]];

let slotDimensions;
let slot_ads = [];
let arraySlotBlocks;

const getCleanedString = function(cadena){
    let specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";
 
    if(cadena){
        for (let i = 0; i < specialChars.length; i++) {
            cadena= cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
        }    
        cadena = cadena.toLowerCase();
        cadena = cadena.replace(/ /g,"_");
        cadena = cadena.replace(/á/gi,"a");
        cadena = cadena.replace(/é/gi,"e");
        cadena = cadena.replace(/í/gi,"i");
        cadena = cadena.replace(/ó/gi,"o");
        cadena = cadena.replace(/ú/gi,"u");
    }
    return cadena;
 }

        let coop_dfp_tipo       = getCleanedString(coop_tipo_);
        let coop_fid_           = getCleanedString(coop_fid);
        let coop_dfp_region     = getCleanedString(nomRegion);
        let coop_seccion_       = getCleanedString(coop_seccion);
        let nomSeccionTaxo_     = getCleanedString(nomSeccionTaxo);
        let nomTemaTaxo_        = getCleanedString(nomTemaTaxo);
        let nomSubTemTaxo_      = getCleanedString(nomSubTemTaxo);

        arraySeccion.push(getCleanedString(coop_dfp_seccion_1));
        arraySeccion.push(getCleanedString(coop_dfp_seccion_2));
        arraySeccion.push(getCleanedString(coop_dfp_seccion_3));

        arrayTem.push(getCleanedString(coop_dfp_tema_1));
        arrayTem.push(getCleanedString(coop_dfp_tema_2));
        arrayTem.push(getCleanedString(coop_dfp_tema_3));

        arrayStem.push(getCleanedString(coop_dfp_subtema_1));
        arrayStem.push(getCleanedString(coop_dfp_subtema_2));
        arrayStem.push(getCleanedString(coop_dfp_subtema_3));


        console.info("************ VALORES SEGMENTACION PERSONALIZADA *************");
        console.info("    coop_dfp_tipo: "+coop_dfp_tipo);
        console.info("    arraySeccion: ",[arraySeccion.toString()]);
        console.info("    arrayTem: ",[arrayTem.toString()]);
        console.info("    arrayStem: ",[arrayStem.toString()]);
        console.info("    coop_seccion portadilla: "+coop_seccion_);
        console.info("    coop_region: "+coop_dfp_region);
        console.info("    nomSeccionTaxo_: "+nomSeccionTaxo_);
        console.info("    nomTemaTaxo_: "+nomTemaTaxo_);
        console.info("    nomSubTemTaxo_: "+nomSubTemTaxo_);
        console.info("    progressStatus: "+progressStatus);
        console.info("    coop_dfp_ts: "+coop_dfp_ts);
        console.info("    coop_fid_: "+coop_fid_);
        console.info("************ /VALORES SEGMENTACION PERSONALIZADA *************");

        callUrlPreroll();

        async function callUrlPreroll(){

            if(coop_fid_ === 'video'){
                if(plataforma === 1){
                    await go('https://pubads.g.doubleclick.net/gampad/ads?iu=/1020719/coop_m_preroll&description_url=https%3A%2F%2Fwww.cooperativa.cl&tfcd=0&npa=0&sz=640x360&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=',arraySeccion, arrayTem, arrayStem)
                }else{
                    await go('https://pubads.g.doubleclick.net/gampad/ads?iu=/1020719/coop_d_preroll&description_url=https%3A%2F%2Fwww.cooperativa.cl&tfcd=0&npa=0&sz=640x360&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=',arraySeccion, arrayTem, arrayStem)
                }
                
            }else if(coop_fid_ === 'audio'){
                if(plataforma === 1){
                    await go('https://pubads.g.doubleclick.net/gampad/ads?iu=/1020719/coop_m_preroll_audio&description_url=https%3A%2F%2Fwww.cooperativa.cl&tfcd=0&npa=0&sz=640x360&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=',arraySeccion, arrayTem, arrayStem)
                }else{
                    await go('https://pubads.g.doubleclick.net/gampad/ads?iu=/1020719/coop_d_preroll_audio&description_url=https%3A%2F%2Fwww.cooperativa.cl&tfcd=0&npa=0&sz=640x360&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=',arraySeccion, arrayTem, arrayStem)
                }
            }
        }

(function($){

 $.fn.isOnScreen = function(x, y){

     if(x == null || typeof x == 'undefined') x = 1;
     if(y == null || typeof y == 'undefined') y = 1;

     var win = $(window);

     var viewport = {
         top : win.scrollTop(),
         left : win.scrollLeft()
     };
     viewport.right = viewport.left + win.width();
     viewport.bottom = viewport.top + win.height();

     var height = this.outerHeight();
     var width = this.outerWidth();

     var bounds = this.offset();

     bounds.right = bounds.left + width;
     bounds.bottom = bounds.top + height;

     var deltas = {
         top : Math.min( 1, ( bounds.bottom - viewport.top ) / height),
         bottom : Math.min(1, ( viewport.bottom - bounds.top ) / height),
         left : Math.min(1, ( bounds.right - viewport.left ) / width),
         right : Math.min(1, ( viewport.right - bounds.left ) / width)
     };

     return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;

 };
})(jQuery);

const cargarPublicidad = function(){

    if( !$(".coop_blockSlot")[0] ) return false;
     googletag.cmd.push(function() {

         $(".coop_blockSlot:not(.loaded,.only-focus)").each(function(i) {

             let $item = $(this);
             
             $item.addClass("loaded");
         
             let id         = $(this).data("adunit");
             let slot       = $(this).data("slot");
             let dimensions = $(this).data("dimensions");

             switch(dimensions)            
            {
                case (1):
                    slotDimensions = bannerRob;               
                    break;
                 case(2):
                    slotDimensions = ittFooter ;             
                    break;
                 case(3):
                    slotDimensions = bannerTower;
                    break;
                 case(4):
                    slotDimensions = bannerTop;
                    break;
                case(5):
                    slotDimensions = bannerRobImpar;
                    break;
                case(6):
                    slotDimensions = MbannerTop;
                    break;
                case(7):
                    slotDimensions = MbannerRob;
                    break;
                case(8):
                    slotDimensions = bannerMenuCoop;
                    break;
                case(9):
                    slotDimensions = MbannerTop2;
                    break;
                case(10):
                    slotDimensions = bannerTopArticles;
                    break;
                default:
                    null;
            }

             let slotDiv = document.createElement('div');
             slotDiv.id  = id;

             let nomBloque = slot.slice(9);
             $(this).html(slotDiv);

             slot_ads[i] = googletag.defineSlot(slot, slotDimensions, id).addService(googletag.pubads().setTargeting('coop_bloque', nomBloque));

             googletag.pubads().enableSingleRequest();
             googletag.pubads().setCentering(true);
             googletag.pubads().collapseEmptyDivs(true,true);
             googletag.pubads().setTargeting('coop_tipo', coop_dfp_tipo);
             googletag.pubads().setTargeting('coop_region', coop_dfp_region);
             googletag.pubads().setTargeting('progressStatus', progressStatus);
             googletag.pubads().setTargeting('coop_ts', coop_dfp_ts);


            switch (coop_dfp_tipo){
                case('portadilla'):
                    googletag.pubads().setTargeting('coop_seccion_1', coop_seccion_);
                break;
                case('portadilla_taxonomica'):
                    googletag.pubads().setTargeting('coop_seccion_1', nomSeccionTaxo_);
                    googletag.pubads().setTargeting('coop_tema_1', nomTemaTaxo_);
                    googletag.pubads().setTargeting('coop_subtema_1', nomSubTemTaxo_);
                case('articulo'): 
                    googletag.pubads().setTargeting('coop_seccion_1', [arraySeccion.toString()]);
                    googletag.pubads().setTargeting('coop_tema_1', [arrayTem.toString()]);
                    googletag.pubads().setTargeting('coop_subtema_1', [arrayStem.toString()]);
                break;
                default:
                    null;
            }
            
             googletag.enableServices();
             googletag.display(id);

             googletag.pubads().addEventListener('slotRenderEnded', function (event) {
                 console.info("slot renderizados: ",event.slot.getSlotElementId());
             });
     });
        for(let i =0; i<slot_ads.length; i++){
            if (slot_ads[i].getSlotElementId() === 'coop_d_120x600_01_1'){
                arraySlotBlocks = slot_ads[i];
            }
        }
        });
}

//   const refresca_banners = function(){
//       console.log("Llamo a refresca_banners");
//       googletag.pubads().refresh();

//   }

let process_scroll_focus = false;
const cargarPublicidadFocus = function(){ 

 if( !$(".coop_blockSlot")[0] ) return false;

    googletag.cmd.push(function() {
     
     $(".coop_blockSlot.only-focus:not(.loaded)").each(function(i) { 

         let $item = $(this);
            $item.addClass("loaded");

            if($item.isOnScreen(0.5,0.5) === true && process_scroll_focus === false ){

                    process_scroll_focus = true;
                    $item.removeAttr('style');

                    let id         = $item.data("adunit");
                    let slot       = $item.data("slot");
                    let dimensions = $item.data("dimensions");

                    if(dimensions === 4){
                        $item.css({                    
                            'display':'table',
                            'margin':'5px auto 10px auto'                 
                        });
                    }
                    
                    switch(dimensions)            
                    {
                        case (1):
                            slotDimensions = bannerRob;               
                            break;
                        case(2):
                            slotDimensions = ittFooter ;             
                            break;
                        case(3):
                            slotDimensions = bannerTower;
                            break;
                        case(4):
                            slotDimensions = bannerTop;
                            break;
                        case(5):
                            slotDimensions = bannerRobImpar;
                            break;
                        case(6):
                            slotDimensions = MbannerTop;
                            break;
                        case(7):
                            slotDimensions = MbannerRob;
                            break;
                        case(8):
                            slotDimensions = bannerMenuCoop;
                            break;
                        case(9):
                            slotDimensions = MbannerTop2;
                            break;
                        case(10):
                            slotDimensions = bannerTopArticles;
                            break;
                        default:
                            null;
                        }

                        const slotDiv = document.createElement('div');
                        slotDiv.id  = id;
                        
                        let nomBloqueFocus = slot.slice(9);
                        $item.html(slotDiv);

                        slot_ads = googletag.defineSlot(slot, slotDimensions, id).addService(googletag.pubads().setTargeting('coop_bloque', nomBloqueFocus));

                        googletag.pubads().enableSingleRequest();
                        googletag.pubads().setCentering(true);
                        googletag.pubads().collapseEmptyDivs(true,true);
                        googletag.pubads().setTargeting('coop_tipo', coop_dfp_tipo);
                        googletag.pubads().setTargeting('coop_region', coop_dfp_region);
                        googletag.pubads().setTargeting('progressStatus', progressStatus);
                        googletag.pubads().setTargeting('coop_ts', coop_dfp_ts);

                        switch (coop_dfp_tipo){
                            case('portadilla'):
                                googletag.pubads().setTargeting('coop_seccion_1', coop_seccion_);
                            break;
                            case('portadilla_taxonomica'):
                                googletag.pubads().setTargeting('coop_seccion_1', nomSeccionTaxo_);
                                googletag.pubads().setTargeting('coop_tema_1', nomTemaTaxo_);
                                googletag.pubads().setTargeting('coop_subtema_1', nomSubTemTaxo_);
                            case('articulo'): 
                                googletag.pubads().setTargeting('coop_seccion_1', [arraySeccion.toString()]);
                                googletag.pubads().setTargeting('coop_tema_1', [arrayTem.toString()]);
                                googletag.pubads().setTargeting('coop_subtema_1', [arrayStem.toString()]);
                            break;
                            default:
                                null;
                        }
                        googletag.enableServices();
                        googletag.display(id);
                        googletag.pubads().addEventListener('slotRenderEnded', function (event) {
                            console.info("slot renderizados: ",event.slot.getSlotElementId());
                        });
                    process_scroll_focus = false;
            }
            else{
                $item.removeClass("loaded");
         }
     });
 });
}

$(window).on('scroll load', function() {
     cargarPublicidadFocus();
});

$(document).ready(function(){
    cargarPublicidad();
});