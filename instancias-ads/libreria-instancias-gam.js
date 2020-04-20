// INSTANCIA GOOGLE DFP 

let ittFooter     = [1,1];
let bannerTop     = [[728, 90], [990, 50], [728, 50], [728, 60], [990, 90], [990, 60], [728, 40], [990, 40], [1100, 90], [1300, 90]];
let bannerTower   = [[120, 600],[160, 600]];
let bannerRob     = [300, 250];
let bannerRobImpar  = [[300, 250],[300,400],[300,450],[300,600]];

let MbannerTop     = [[300, 50], [300, 60], [300, 70], [300, 80], [300, 90], [300, 100], [300, 150], [300, 400], [300, 450], [300, 600], [320, 50], [320, 60], [320, 70], [320, 80], [320, 90], [320, 100],[320, 150], [320, 480]];
let MbannerRob     = [[300, 40], [300, 50], [300, 60], [300, 70], [300, 80], [300, 90], [300, 100], [300, 150], [300, 250], [300, 400], [300, 450], [300, 600], [320, 40], [320, 50], [320, 60], [320, 70], [320, 80], [320, 90], [320, 100], [320, 150], [320, 250]];

let slotDimensions;
let arraySlotBlocks;

const getCleanedString = function(cadena){

     let specialChars = ["!@#$^&%*()+=-[]\/{}|:<>?,."];
         specialChars.push('&amp;');
 
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

     if(cadena === 'm360_') return cadena === null;
    switch (cadena){
        case 'm360_sexo__pareja':
          return cadena = 'm360_sexo_y_pareja';
        break;
        case 'm360_moda__estilo':
          return cadena = 'm360_moda_y_estilo';
        break;
        case 'm360_deco__hogar': 
            return cadena = 'm360_deco_y_hogar';
          break;
      default: 
      return (cadena);
    }

 }

let dfp_sec       = getCleanedString(dfp_sec_)   || null;
let coop_tipo     = prefixTem + DFP_FID          || null;
let dfp_tem       = getCleanedString(dfp_tem_)   || null;
let dfp_tem2      = getCleanedString(dfp_tem2_)  || null;
let dfp_tem3      = getCleanedString(dfp_tem3_)  || null;


let arrayTem = [];
    arrayTem.push(dfp_tem);
    arrayTem.push(dfp_tem2);
    arrayTem.push(dfp_tem3);

let arraySec = [];
    arraySec.push(prefixTem + "destacados") 		|| null;
	arraySec.push(prefixTem + "lo_nuevo") 			|| null;
	arraySec.push(prefixTem + "moda") 				|| null;
	arraySec.push(prefixTem + "belleza") 			|| null;
	arraySec.push(prefixTem + "sexo_y_pareja") 		|| null;
	arraySec.push(prefixTem + "vivir_bien") 		|| null;
	arraySec.push(prefixTem + "lifestyle") 			|| null;
	arraySec.push(prefixTem + "cultura_pop") 		|| null;
	arraySec.push(prefixTem + "videos") 			|| null;
    arraySec.push(prefixTem + "top") 			    || null;
    arraySec.push(prefixTem + "comercial") 			|| null;

    
let seccionTop = prefixTem+'top';
let slot_ads = [];

// console.log("coop_tipo: ",coop_tipo);
// console.log("arrayTem: ",arrayTem);
// console.log("dfp_sec: ",dfp_sec);


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

 if( !$(".m360_blockSlot")[0] ) return false;
     googletag.cmd.push(function() {

         $(".m360_blockSlot:not(.loaded,.only-focus)").each(function(i) {

             let $item = $(this);
             
             $item.addClass("loaded");
             $item.css({'margin-top': '20px','margin-bottom': '20px','margin-left': 'auto','margin-right': 'auto'});
         
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
                default:
                    null;
            }

             let slotDiv = document.createElement('div');
             slotDiv.id  = id;

             $(this).html(slotDiv);

             slot_ads[i] = googletag.defineSlot(slot, slotDimensions, id).addService(googletag.pubads());

             console.log("coop_tipo: ",coop_tipo);
             console.log("coop_tema_1: ",[arrayTem.toString()]);
             console.log("coop_seccion_1: ",[arraySec.toString()]);

             googletag.pubads().enableSingleRequest();
             googletag.pubads().setCentering(true);
             googletag.pubads().collapseEmptyDivs(true,true);
             googletag.pubads().setTargeting('coop_tipo', coop_tipo);
             googletag.pubads().setTargeting('coop_tema_1', [arrayTem.toString()]);
             googletag.pubads().setTargeting('coop_seccion_1', dfp_sec);

             googletag.enableServices();
             googletag.display(id);

             googletag.pubads().addEventListener('slotRenderEnded', function (event) {
                 console.info("slot renderizados: ",event.slot.getSlotElementId());
             });
     });
     for(let i =0; i<slot_ads.length; i++){
        if (slot_ads[i].getSlotElementId() === 'm360_d_120x600_01_home'){
             arraySlotBlocks = slot_ads[i];
        }
     }
 });
}


let process_scroll_focus = false;
const cargarPublicidadFocus = function(){ 

 if( !$(".m360_blockSlot")[0] ) return false;
 
 googletag.cmd.push(function() {
     
     $(".m360_blockSlot.only-focus:not(.loaded)").each(function(i) { 

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
                $item.css({
                    'margin-left': 'auto',
                    'margin-right': '20px',
                    'float':'left'
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
                default:
                    null;
                }

             
                const slotDiv = document.createElement('div');
                 slotDiv.id  = id;

                 $item.html(slotDiv);

                 slot_ads = googletag.defineSlot(slot, slotDimensions, id).addService(googletag.pubads());

                 googletag.pubads().enableSingleRequest();
                 googletag.pubads().setCentering(true);
                 googletag.pubads().collapseEmptyDivs(true,true);

                console.log("coop_tipo only-focus: ",coop_tipo);
                console.log("coop_tema_1 only-focus: ",[arrayTem.toString()]);
                console.log("coop_seccion_1 only-focus: ",[arraySec.toString()]);
                 
                 googletag.pubads().setTargeting('coop_tipo', coop_tipo);
                 googletag.pubads().setTargeting('coop_tema_1', [arrayTem.toString()]);
                 googletag.pubads().setTargeting('coop_seccion_1', dfp_sec);

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