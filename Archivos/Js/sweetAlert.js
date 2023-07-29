Swal.fire({
    title: '<div class="modal-bodyh1">Attention!</h1>',
    html:'<div class="modal-body">'+
        '<div class="link_form_registro">'+
        '<p class="Hol4">Twitter or also named "X" has stopped providing the private messaging service for users who do not have Twitter Blue, if you have any problem sending me a message to my Twitter contact me through the "Contact" page or if you want a more direct treatment Tell me your username on the Contact page to follow you and be able to send you a DM.<br/><br/></p class="Hol4">'+
    '</div>'+
    '<div class="buttons_modal">' +
        '<button class="btn-toBuy"><a href="Contacto.html" style="color: rgb(255, 255, 255); text-decoration: none;">Go to Contact</a></button>'+
    '</div>'+
    '<form class="form_login" id="form_login" style="display: none;">'+
        '<div class="container_form">'+
        '<span class="text-center">O ingresa tu correo y tu contraseña <br></span>'+
        '<div class="container_inputs_login">'+
            '<div class="mb-3">'+
            '<input type="text" placeholder="Ingrese e-mail" class="form-control text-left" id="recipient-name">'+
            '</div>'+
            '<div class="mb-3">'+
            '<input type="password" placeholder="Ingrese contraseña" class="form-control" id="message-text">'+
            '</div>'+
            '<button type="submit" class="btn_email_ingreso">Ingresa a tu cuenta</button>'+
        '</div>'+
        '</div>'+
    '</form>'+
        '<div class="link_form_registro123">'+
            '<p><br/>Press Esc or click outside the box to close </p>'+
        '</div>'+
        '</div>',	
    timer: 30000,
    timerProgressBar: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    showConfirmButton: false,
    confirmButtonAriaLabel: false,
});