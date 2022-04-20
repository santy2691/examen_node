$(document).ready(function () {
  //Inicializa socket con IO

  //Cuando cambia el select redirigimos a la URL del chat
  $('#selectRoom').on("change",()=>{
    var sala = $(this).find("option:selected").val();
    window.location.href = "/chat/"+sala;
  })
  
  //Accion cuando el usuario envia mensaje con submit
  $("#chat").submit(function (e) {
    e.preventDefault();
    var msg = $("#msg").val();
    $("#chatBox").append(`<p>${msg}<p>`);
  });

  //Acciones a realizar cuando se detecta actividad en el canal newMsg
  
});
