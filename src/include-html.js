$(function(){
  $("*[include-html]").each(function(){
      var t = $(this).attr("include-html"),
       u = this.id;
      jQuery.ajax({
          url: t,
          successs: function(t) {
              $("#" + u).html(t)
          },
          error : function(n, c, i){
              var s = n.status + ": " + n.statusText;
              $("#" + u).html(t + "-" + s)
          }
          
      })
  })




});