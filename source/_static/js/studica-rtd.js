//Make links open in another tab so docs are still open.
$(document).ready(function () {
    $('a.external').attr('target', '_blank');
    //This is just here in case someone is using an old browser
    $('a.external').attr('rel', 'noopener'); 
});