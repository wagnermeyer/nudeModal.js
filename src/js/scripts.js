/*
* ========================
* === NUDEMODAL OBJECT ===
* ========================
*/

var nudeModal = function(target,trigger,config) {

    this.target = target;

    var settings = $.extend({
        autoOpen: false,
        autoOpenDelay: 0,
        autoClose: false,
        autoCloseDelay: 0,
        backgroundColor: '#000000',
        backgroundOpacity: 0.5
    }, config);

    var click = 0;

    addNudeClass( target );
    wrapNudeModalBox( target );
    addBackground( target, settings.backgroundColor, settings.backgroundOpacity );
    clickOpenNudeModal( target, trigger, click );
    clickCloseNudeModal( target, click );
    escCloseNudeModal( target );
    autoOpenNudeModal( target, settings.autoOpen, settings.autoOpenDelay );
    autoCloseNudeModal( target, settings.autoClose, settings.autoOpenDelay, settings.autoCloseDelay )
}

/*
* =========================
* === GENERAL FUNCTIONS ===
* =========================
*/

//add class nude-modal
function addNudeClass(target) {
    $(target).addClass('nude-modal');
    console.log("addNudeClass")
}

//add background
function addBackground( target, bgColor, bgOpacity ) {
    $('<div class="nude-modal-background close-nude-modal"></div>').appendTo(target).css("background-color", bgColor);
    $('<style>.nude-modal-background.nm-show{ opacity:' + bgOpacity + '}</style>').appendTo('head');
    console.log("addBackground")
}

//create nude-modal-box class
function wrapNudeModalBox(target) {
    $(target).wrapInner('<div class="nude-modal-box"></div>')
    console.log("wrapNudeModalBox")
}

//open nude modal
function openNudeModal(target) {
    //block click event
    $(target).show().delay(100).queue(function(next){
        $(target + ' .nude-modal-box').addClass('nm-show');
        $(target + ' .nude-modal-background').addClass('nm-show');
        next();
        //unlock click event
    });
    console.log("[OPEN]openNudeModal");
}

//auto open nude modal
function autoOpenNudeModal(target, boolean, delay) {  
    
    if (boolean) {
        setTimeout(function(){
            openNudeModal(target)
        }, delay)
    }

    console.log("autoOpenNudeModal");
}

//auto close nude modal
function autoCloseNudeModal(target, boolean, openDelay, closeDelay) {  
    
    var delay = openDelay + closeDelay;

    if (boolean) {
        setTimeout(function(){
            closeNudeModal(target)
        }, delay)
    }
    console.log("autoCloseNudeModal");
}

//click open function
function clickOpenNudeModal(target,trigger, click) {

    click++;

    $(trigger).click(function(event){
        event.preventDefault()
        openNudeModal(target);
        console.log("[OPEN]clickOpenNudeModal");
    });
}

//click close function
function clickCloseNudeModal(target, click) {
    $(target + ' .close-nude-modal').on('click', function(){
        closeNudeModal(target);
        console.log("[CLOSE]clickCloseNudeModal");
    })
}

//esc close function
function escCloseNudeModal(target) {
    $(document).keypress(function(e){
        if(e.keyCode==27) {
            closeNudeModal(target);
        }
    });
}

//close nude modal
function closeNudeModal(target) {
    $(target + ' .nude-modal-box').removeClass('nm-show');
    $(target + ' .nude-modal-background').removeClass('nm-show').delay(600).queue(function(next){
        $(target).css('display', 'none');
        next();
    });
    console.log("[CLOSE]closeNudeModal");
}