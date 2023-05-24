//El siguiente código es para aplicar el comportamiento de seleccionar y deseleccionar al hacer click en el icono star

jQuery(document).ready(function($) {
    jQuery('.bi-star').click(function() {
        jQuery(this).toggleClass('selected');
    });

jQuery('.card-title').click(function(event) {
    event.stopPropagation();
    jQuery(this).find('.bi-star').removeClass('selected');  
});

});


