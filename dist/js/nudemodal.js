/*
* ========================
* === NUDEMODAL OBJECT ===
* ========================
*/




var nudeModal = function(target,trigger,config) {

    this.target = target;

    var settings = $.extend({
        autoOpen: false,
        width: '100%',
        height: 'auto',
        backgroundColor: '#000000',
        backgroundOpacity: '0.4'
    }, config)

    addNudeClass(target);
    wrapNudeModalBox(target);
    addBackground(target);
    clickOpenNudeModal(target,trigger);
    clickCloseNudeModal(target);
    escCloseNudeModal(target);
    console.log(settings.teste);
}

/*
* =========================
* === GENERAL FUNCTIONS ===
* =========================
*/

//add class nude-modal
function addNudeClass(target) {
    $(target).addClass('nude-modal');
}

//add background
function addBackground(target) {
    $(target).append('<div class="nude-modal-background close-nude-modal"></div>')
}

//create nude-modal-box class
function wrapNudeModalBox(target) {
    $(target).wrapInner('<div class="nude-modal-box"></div>')
}

//open nude modal
function openNudeModal(target) {
    $(target).css('display', 'block').delay(100).queue(function(next){
        $(target + ' .nude-modal-box').addClass('show');
        $(target + ' .nude-modal-background').addClass('show');
        next();
    });
    console.log("openNudeModal");
}

//auto open nude modal
function autoOpenNudeModal(time) {

}

//click open function
function clickOpenNudeModal(target,trigger) {
    $(trigger).click(function(event){
        event.preventDefault()
        openNudeModal(target);
    });
}

//click close function
function clickCloseNudeModal(target) {
    $(target + ' .close-nude-modal').on('click', function(){
        closeNudeModal(target);
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
    $(target + ' .nude-modal-box').removeClass('show');
    $(target + ' .nude-modal-background').removeClass('show').delay(600).queue(function(next){
        $(target).css('display', 'none');
        next();
    });
    console.log("closeNudeModal");
}

/*
TODO:
Abrir automaticamente com delay
Opção para exibir imagens
Definir largura
Definir tempo de animação
*/