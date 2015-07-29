$(function (){

  var getContacts = function (){
    $.get( "/contacts", function (data) {
      $.each( data, function (key, val) {
        $("#all-contacts").append("<tr>" + "<td>" + val.firstname + "</td>" + "<td>" + val.lastname + "</td>" + "<td>" + val.email + "</td>" + "<td>" + val.phone + "</td>" + "</tr>");  
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
        $("#all-contacts").append("<tr>" + "<td>" + val.firstname + "</td>" + "<td>" + val.lastname + "</td>" + "<td>" + val.email + "</td>" + "<td>" + val.phone + "</td>" + "</tr>");
        clearForm();
      },
      'json'
    );
  });

  // var clearSearchForm = function (){
  //   $.each($("#search-form input"), function (key, value){
  //     $(value).val("");
  //   });
  // };

  $("#search").on("click", function (evt){
    evt.preventDefault();
    $("#searched-contacts tbody").remove();
    $.get( "/contacts/search", 
      $("#search-form").serialize(),
      function (data) {
        $.each( data, function (key, val) {
          $("#searched-contacts").append("<tr>" + "<td>" + val.firstname + "</td>" + "<td>" + val.lastname + "</td>" + "<td>" + val.email + "</td>" + "<td>" + val.phone + "</td>" + "<td>" + "<button> Edit </button>" + "</td>" + "<td>" + "<a class='delete-contact' href='/contacts/" + val.id + "'>DELETE</a>" + "</td>"+ "</tr>");  
        });
        $('#search-form').trigger("reset");
        //clearSearchForm();
      },
    "json");
  });
  
  // $("#searched-contacts").on("click", ".delete-contact", function (evt){
  //   evt.preventDefault();
  //   $.ajax({
  //     type: "DELETE",
  //     url: $(this).attr('href'),
  //     success: function(response){
  //       $(this).parent().parent().remove();
  //     }.bind(this)
  //   });
  // });

});