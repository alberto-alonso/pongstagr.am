(function($){
  /*!
   * jQuery Pongstagr.am Plugin 
   * Copyright (c) 2013 Pongstr Ordillo
   * Version: 2.0.5
   * Code license under Apache License v2.0
   * http://www.apache.org/licenses/LICENSE-2.0
   * Requires: jQuery v1.9 and Bootstrap JS
   */
  (function(e,t,n,r){"use strict";function i(t,n,r){var i='<ul class="thumbnails"></ul>',s='<div class="row-fluid">'+i+"</div>",o='<div class="row-fluid"><a href="javascript:void(0);" data-paginate="'+n+'-pages" class="span4 offset4 btn btn-large btn-block btn-success">Load More</a></div>';e(t).append(s);if(r===null||r===true){e(t).after(o)}}function s(t,n,r,i,s,o){var u='<div id="'+n+'" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">';u+='<div class="modal-header">';u+='<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';u+='<div class="row-fluid">';u+='<div class="span1"><img src="'+s+'" alt="" class="img-polaroid" style="width: 32px; height: 32px; margin-right: 10px; vertical-align: middle;" /></div>';u+='<div class="span10"><strong><a href="http://www.instagram.com/'+t+'">'+t+"</a> "+r+"</strong></div>";u+="</div><!-- end of .row-fluid -->";u+="</div><!-- end of .modal-header -->";u+='<div class="modal-body">';u+='<div class="row-fluid">';if(o!==0){u+='<div class="span7"><img src="'+i+'" alt="'+r+'" class="img-polaroid" /><br /></div>';u+='<div class="modal-comments span5"></div>'}else{u+='<img src="'+i+'" alt="'+r+'" class="img-polaroid" />'}u+="</div><!-- end of .modal-fluid -->";u+="</div><!-- end of .modal-body -->";u+='<div class="modal-footer">';u+='<button class="btn btn-inverse btn-mini" data-dismiss="modal" aria-hidden="true">Close</button>';u+="</div><!-- end of .modal-footer -->";u+="</div><!-- end of .modal -->";e("body").append(u);e("#"+n).on("hidden",function(){e(this).remove();e("body").removeAttr("style")})}function o(t,n){e.ajax({method:"GET",url:t,cache:true,dataType:"jsonp",success:function(t){var r="#"+e(n).attr("id");e.each(t.data,function(t,n){var i=n.images.low_resolution.url,o=n.caption!==null?n.caption.text!==null?n.caption.text:"":n.user.username,u=n.comments.count!==null?n.comments.count:"0",a=n.likes.count!==null?n.comments.count:"0",f=n.images.standard_resolution.url,l=n.id,c=n.user.profile_picture,h=n.user.username;var p='<li class="span3">';p+='<div class="thumbnail">';p+='<a href="#" class="btn btn-mini btn-info btn-likes"><i class="icon-heart icon-white"></i>  '+a+"</a>";p+='<a href="#" class="btn btn-mini btn-info btn-comments"><i class="icon-comment icon-white"></i>  '+u+"</a>";p+='<a href="#" role="button" data-toggle="modal" data-reveal-id="'+l+'"><img src="'+i+'" alt="'+o+'" /></a>';p+="</div>";p+="</li>";e(r+" .thumbnails").append(p);e('[data-reveal-id="'+l+'"]').click(function(){var t=e("body").height();e(".modal").attr("id",l);e("body").css({"padding-bottom":t*1.5});s(h,l,o,f,c,u);e.each(n.comments.data,function(t,n){var r='<div class="row-fluid">';r+='<div class="span2"><img src="'+n.from.profile_picture+'" style="width: 36px; height: 36px; margin-right: 10px; vertical-align: middle;" class="img-polaroid" /></div>';r+='<div class="span9 offset1">';r+='<a href="http://www.instagram.com/'+n.from.username+'"><strong>'+n.from.username+"</strong></a><br />";r+=n.text;r+="</div>";r+="</div><!-- end of .row-fluid -->";e(".modal-comments").append(r)});e("#"+l).modal()})});u(t.pagination.next_url,r)}})}function u(t,n){if(t===r||t===null){e(".btn").click(function(t){t.preventDefault();e(this).removeClass("btn-success").addClass("disabled btn-secondary")})}else{e(".btn").click(function(r){r.preventDefault();o(t,n);e(this).unbind(r)})}}function a(e,t,n,r,s,u){var a="https://api.instagram.com/v1/users/",f=t!==null?"?count="+t+"&access_token="+r:"?count="+8+"&access_token="+r,l=e===null?"recent":e;if(e===null||e==="recent"){var c=a+n+"/media/recent"+f;o(c,s)}if(e==="liked"){var h=a+"self/media/liked"+f;o(h,s)}if(e==="feed"){var p=a+"self/feed"+f;o(p,s)}i(s,l,u)}function f(e,t){if(e!==null||t!==null){return true}else{console.log("Please check whether your Access ID and Access Token if it's valid.");console.log("You may visit http://instagram.com/developer/authentication/ for more info.");return false}}e.fn.pongstgrm=function(t){var n=e.extend({},e.fn.pongstgrm.defaults,t);return this.each(function(e,t){if(f(n.accessId,n.accessToken)!==false){a(n.show,n.count,n.accessId,n.accessToken,t,n.pager)}})};e.fn.pongstgrm.defaults={accessId:null,accessToken:null,show:null,count:null,resolution:null,pager:null}})(jQuery,window,document)  
})(this.jQuery);

$(window).load(function(){
  
  "use strict";

  // Smooth scroll for internal links
  // ================================
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    var target = this.hash,
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
  });

  var $id = '39666111',
      $tk = '39666111.1fb234f.c3901000b4944a549fd5fd2310c63780';
  
  $('#recent').pongstgrm({
    accessId: $id,
    accessToken: $tk,
    count: 4
  });

  $('#liked').pongstgrm({
    accessId: $id,
    accessToken: $tk,
    show: 'liked',
    count: 4
  });

  $('#feed').pongstgrm({
    accessId: $id,
    accessToken: $tk,
    show: 'feed',
    count: 4
  });
  
});