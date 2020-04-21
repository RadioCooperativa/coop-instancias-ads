// LIBRERIA INSTANCIA GAM
// window.googletag = window.googletag || {cmd: []};

let ittFooter     = [1,1];
let bannerTop     = [[728, 90], [990, 50], [728, 50], [728, 60], [990, 90], [990, 60], [728, 40], [990, 40], [1100, 90], [1300, 90]];
let bannerTower   = [[120, 600],[160, 600]];
let bannerRob     = [300, 250];
let bannerRobImpar  = [[300, 250],[300,400],[300,450],[300,600]];
let bannerMenuCoop = [250,90];

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
     return cadena;

 }

let dfp_sec         = getCleanedString(dfp_sec_);
let coop_dfp_tipo       = getCleanedString(coop_tipo_);
// let coop_dfp_region = getCleanedString(coop_dfp_region_); 

 //PARA ARTICULOS
    
    console.log("LIBRERIA INSTANCIA GAM dfp_sec: ",dfp_sec);
    console.log("LIBRERIA INSTANCIA GAM coop_dfp_tipo: ",coop_dfp_tipo);
    // console.log("LIBRERIA INSTANCIA GAM coop_dfp_region: ",coop_dfp_region);
if(coop_dfp_tipo === 'articulo'){

    console.log("LIBRERIA INSTANCIA GAM soy: "+coop_dfp_tipo);

    let coop_dfp_seccion_1        = getCleanedString("<!--# echo var="NOMSECCION1" default="" -->")     || null;
    let coop_dfp_seccion_2        = getCleanedString("<!--# echo var="NOMSECCION2" default="" -->")     || null;
    let coop_dfp_seccion_3        = getCleanedString("<!--# echo var="NOMSECCION3" default="" -->")     || null;

    let coop_dfp_tema_1           = getCleanedString("<!--# echo var="NOMTEMA1" default="" -->")        || null;
    let coop_dfp_subtema_1        = getCleanedString("<!--# echo var="NOMSUBTEMA1" default="" -->")     || null;

    let coop_dfp_tema_2           = getCleanedString("<!--# echo var="NOMTEMA2" default="" -->")        || null;
    let coop_dfp_subtema_2        = getCleanedString("<!--# echo var="NOMSUBTEMA2" default="" -->")     || null;

    let coop_dfp_tema_3           = getCleanedString("<!--# echo var="NOMTEMA3" default="" -->")        || null;
    let coop_dfp_subtema_3        = getCleanedString("<!--# echo var="NOMSUBTEMA3" default="" -->")     || null;
    let coop_dfp_ts               = "<!--# echo var="TS" default="" -->";

    let arraySeccion = [];
    arraySeccion.push(coop_dfp_seccion_1);
    arraySeccion.push(coop_dfp_seccion_2);
    arraySeccion.push(coop_dfp_seccion_3);

    let arrayTem = [];
    arrayTem.push(coop_dfp_tema_1);
    arrayTem.push(coop_dfp_tema_2);
    arrayTem.push(coop_dfp_tema_3);

    let arrayStem = [];
    arrayStem.push(coop_dfp_subtema_1);
    arrayStem.push(coop_dfp_subtema_2);
    arrayStem.push(coop_dfp_subtema_3);
}
    
  
   
let slot_ads = [];

// console.log("coop_dfp_tipo: ",coop_dfp_tipo);
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

    console.log("LIBRERIA INSTANCIA GAM cargarPublicidad");


 if( !$(".coop_blockSlot")[0] ) return false;
     googletag.cmd.push(function() {

         $(".coop_blockSlot:not(.loaded,.only-focus)").each(function(i) {

             let $item = $(this);
             
             $item.addClass("loaded");
            //  $item.css({'margin-top': '20px','margin-bottom': '20px','margin-left': 'auto','margin-right': 'auto'});
         
             let id         = $(this).data("adunit");
             let slot       = $(this).data("slot");
             let dimensions = $(this).data("dimensions");

             console.log("cargarPublicidad id: ", id);
             console.log("cargarPublicidad slot: ", slot);
             console.log("cargarPublicidad dimensions: ", dimensions);



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

             $(this).html(slotDiv);

             slot_ads[i] = googletag.defineSlot(slot, slotDimensions, id).addService(googletag.pubads());

             console.log("cargarPublicidad coop_dfp_tipo: ",coop_dfp_tipo);
            //  console.log("coop_tema_1: ",[arrayTem.toString()]);
            //  console.log("coop_seccion_1: ",[arraySec.toString()]);

             googletag.pubads().enableSingleRequest();
             googletag.pubads().setCentering(true);
             googletag.pubads().collapseEmptyDivs(true,true);
             googletag.pubads().setTargeting('coop_dfp_tipo', coop_dfp_tipo);
            //  googletag.pubads().setTargeting('coop_tema_1', [arrayTem.toString()]);
            //  googletag.pubads().setTargeting('coop_seccion_1', dfp_sec);

             googletag.enableServices();
             googletag.display(id);

             googletag.pubads().addEventListener('slotRenderEnded', function (event) {
                 console.info("slot renderizados: ",event.slot.getSlotElementId());
             });
     });
    //  for(let i =0; i<slot_ads.length; i++){
    //     if (slot_ads[i].getSlotElementId() === 'coop_d_120x600_01_home'){
    //          arraySlotBlocks = slot_ads[i];
    //     }
    //  }
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

             console.log("cargarPublicidadFocus id: ", id);
             console.log("cargarPublicidadFocus slot: ", slot);
             console.log("cargarPublicidadFocus dimensions: ", dimensions);

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

                 $item.html(slotDiv);

                 slot_ads = googletag.defineSlot(slot, slotDimensions, id).addService(googletag.pubads());

                 googletag.pubads().enableSingleRequest();
                 googletag.pubads().setCentering(true);
                 googletag.pubads().collapseEmptyDivs(true,true);

                // console.log("coop_dfp_tipo only-focus: ",coop_dfp_tipo);
                // console.log("coop_tema_1 only-focus: ",[arrayTem.toString()]);
                // console.log("coop_seccion_1 only-focus: ",[arraySec.toString()]);
                 
                //  googletag.pubads().setTargeting('coop_dfp_tipo', coop_dfp_tipo);
                //  googletag.pubads().setTargeting('coop_tema_1', [arrayTem.toString()]);
                //  googletag.pubads().setTargeting('coop_seccion_1', dfp_sec);

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