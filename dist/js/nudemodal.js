//nudeModal object
function nudeModal(target,trigger) {
        this.target = target;
        wrapNudeModalBox(target);
        addBackground(target);
        openNudeModal(target,trigger);
        closeNudeModal(target,trigger);
    }

//add background
function addBackground(target) {
    $(target).append('<div class="nude-modal-background"></div>')
}

//create nude-modal-box class
function wrapNudeModalBox(target) {
    $(target).wrapInner('<div class="nude-modal-box"></div>')
}

//open nude modal
function openNudeModal(target,trigger) {
    $(trigger).click(function(event){
        event.preventDefault()
        $(target).css('display', 'block').delay(100).queue(function(next){
            $(target + ' .nude-modal-box').addClass('show');
            $(target + ' .nude-modal-background').addClass('show');
            next();
        });
        console.log("openNudeModal");
    });
}

//close nude modal
function closeNudeModal(target,trigger) {
    $(target + ' .nude-modal-background').on('click', function(){
        $(target + ' .nude-modal-box').removeClass('show');
        $(target + ' .nude-modal-background').removeClass('show').delay(600).queue(function(next){
            $(target).css('display', 'none');
            next();
        });
        console.log("closeNudeModal");
    })
}