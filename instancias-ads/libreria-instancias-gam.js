let ittFooter     = [1,1];
let bannerTop     = [[728, 90], [990, 50], [728, 50], [728, 60], [990, 90], [990, 60], [728, 40], [990, 40], [1100, 90], [1300, 90]];
let bannerTower   = [[120, 600],[160, 600]];
let bannerRob     = [300, 250];
let bannerRobImpar  = [[300, 250],[300,400],[300,450],[300,600]];
let bannerMenuCoop = [250,90];

let MbannerTop     = [[300, 50], [300, 60], [300, 70], [300, 80], [300, 90], [300, 100], [300, 150], [300, 400], [300, 450], [300, 600], [320, 50], [320, 60], [320, 70], [320, 80], [320, 90], [320, 100],[320, 150], [320, 480]];
let MbannerRob     = [[300, 40], [300, 50], [300, 60], [300, 70], [300, 80], [300, 90], [300, 100], [300, 150], [300, 250], [300, 400], [300, 450], [300, 600], [320, 40], [320, 50], [320, 60], [320, 70], [320, 80], [320, 90], [320, 100], [320, 150], [320, 250]];

let slotDimensions;
let slot_ads = [];
let arraySlotBlocks;

const getCleanedString = function(cadena){

    let specialChars = ["!@#$^&%*()+=-[]\/{}|:<>?,."];
        specialChars.push('&amp;');

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
           //  cadena = cadena.replace(/ñ/gi,"n");
           return cadena;
        }
        return null;
}

    let coop_dfp_tipo       = getCleanedString(coop_tipo_);
    let coop_dfp_region     = getCleanedString(nomRegion);

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

        console.info("coop_dfp_tipo: "+coop_dfp_tipo);
        console.info("tipoFid: "+tipoFid);

        console.info("nomSeccionTaxo_: "+nomSeccionTaxo_);
        console.info("nomTemaTaxo_: "+nomTemaTaxo_);
        console.info("nomSubTemTaxo_: "+nomSubTemTaxo_);

        console.info("arraySeccion: ",[arraySeccion.toString()]);
        console.info("arrayTem: ",[arrayTem.toString()]);
        console.info("arrayStem: ",[arrayStem.toString()]);


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

    //  if(!width || !height){
    //      return false;
    //  }

     var bounds = this.offset();
     bounds.right = bounds.left + width;
     bounds.bottom = bounds.top + height;

     var visible = (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
// console.log("visible__ :",visible)
    //  if(!visible){
    //      return false;
    //  }

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
            //  $item.css({'margin-top': '20px','margin-bottom': '20px','margin-left': 'auto','margin-right': 'auto'});
         
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
             googletag.pubads().setTargeting('coop_dfp_tipo', coop_dfp_tipo);
             googletag.pubads().setTargeting('coop_seccion_1', [arraySeccion.toString()]);
             googletag.pubads().setTargeting('coop_tema_1', [arrayTem.toString()]);
             googletag.pubads().setTargeting('coop_subtema_1', [arrayStem.toString()]);

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


let process_scroll_focus = false;
const cargarPublicidadFocus = function(){ 
    console.log("LIBRERIA INSTANCIA GAM cargarPublicidadFocus");

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
             }else{
                // $item.css({
                //     'margin-left': 'auto',
                //     'margin-right': '20px',
                //     'float':'left'
                // });
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
                googletag.pubads().setTargeting('coop_dfp_tipo', coop_dfp_tipo);
                googletag.pubads().setTargeting('coop_seccion_1', [arraySeccion.toString()]);
                googletag.pubads().setTargeting('coop_tema_1', [arrayTem.toString()]);
                googletag.pubads().setTargeting('coop_subtema_1', [arrayStem.toString()]);

                googletag.enableServices();
                googletag.display(id);

                googletag.pubads().addEventListener('slotRenderEnded', function (event) {
                    console.info("slot renderizados: ",event.slot.getSlotElementId())
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