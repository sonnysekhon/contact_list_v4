$(function (){

  var getContacts = function (){
    $.get( "/contacts", function (data) {
      $.each( data, function (key, val) {
        $("#all-contacts").append("<tr>" + "<td>" + val.firstname + "</td>" + "<td>" + val.lastname + "</td>" + "<td>" + val.email + "</td>" + "<td>" + val.phone + "</td>" + "<td>" + "<button> Delete </button>" + "</td>"+ "</tr>");  
      });
    }, "json");
  };

  getContacts();

  var clearForm = function (){
    $.each($("#add-contact input"), function (key, value){
      $(value).val("");
    });
  };

  $("#add-contact").on("submit", function (evt){
    evt.preventDefault();
    $.post(
      "/contacts",
      $("#add-contact").serialize(),
      function (val){
        $("#all-contacts").append("<tr>" + "<td>" + val.firstname + "</td>" + "<td>" + val.lastname + "</td>" + "<td>" + val.email + "</td>" + "<td>" + val.phone + "</td>" + "<td>" + "<button> Delete </button>" + "</td>"+ "</tr>");
        clearForm();
      },
      'json'
    );
  });

});