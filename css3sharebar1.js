(function( $ ) {
  $(document).ready(function() {
    var url = window.location.href;
    var host =  window.location.hostname;
    var title = $('title').text();
    title = escape(title); //clean up unusual characters
 
    var twit = 'http://twitter.com/home?status='+title+'%20'+url;
    var facebook = 'http://www.facebook.com/sharer.php?u='+url
    var digg = 'http://digg.com/submit?phase=2&url='+url+'&amp;title='+title;
    var stumbleupon = 'http://stumbleupon.com/submit?url='+url+'&amp;title='+title;
    var buzz = 'http://www.google.com/reader/link?url='+url+'&amp;title='+title+'&amp;srcURL='+host;
    var delicious  = 'http://del.icio.us/post?url='+url+'&amp;title='+title;
 
    var tbar = '<div id="socializethis"><span>Share<br /><a href="#min" id="minimize" title="Minimize"> <img src="http://1.bp.blogspot.com/-fjEA9SL5y40/Tvc6BSzC_mI/AAAAAAAAB-M/l4jJCMEsqUQ/s1600/%255Bwww.gj37765.blogspot.com%255Dminimize.png" /> </a></span><div id="sicons">';
    tbar += '<a href="'+twit+'" id="twit" title="Share on twitter"><img src="http://1.bp.blogspot.com/-W3sVJWjdLZc/Tvc59u9wUiI/AAAAAAAAB9o/kcUDKGrTW8Y/s1600/%255Bwww.gj37765.blogspot.com%255Dtwitter.png"  alt="Share on Twitter" width="32" height="32" /></a>';
    tbar += '<a href="'+facebook+'" id="facebook" title="Share on Facebook"><img src="http://3.bp.blogspot.com/-Ij5Sks9Isdo/Tvc5_iithmI/AAAAAAAAB98/y8po9HCLTR0/s1600/%255Bwww.gj37765.blogspot.com%255Dfacebook.png"  alt="Share on facebook" width="32" height="32" /></a>';
    tbar += '<a href="'+digg+'" id="digg" title="Share on Digg"><img src="http://2.bp.blogspot.com/-k6sF7IvbCMM/Tvc5-2AzGAI/AAAAAAAAB90/UJMQRONIWxk/s1600/%255Bwww.gj37765.blogspot.com%255Ddigg.png"  alt="Share on Digg" width="32" height="32" /></a>';
    tbar += '<a href="'+stumbleupon+'" id="stumbleupon" title="Share on Stumbleupon"><img src="http://4.bp.blogspot.com/-lEBc5-CxTNQ/Tvc6CEzJ4SI/AAAAAAAAB-Y/RKHu6z7KNo4/s1600/%255Bwww.gj37765.blogspot.com%255Dstumbleupon.png"  alt="Share on Stumbleupon" width="32" height="32" /></a>';
    tbar += '<a href="'+delicious+'" id="delicious" title="Share on Del.icio.us"><img src="http://4.bp.blogspot.com/-azb7NOAmxIQ/Tvc5-cXwS9I/AAAAAAAAB9s/HhX4pS_NPmQ/s1600/%255Bwww.gj37765.blogspot.com%255Ddelicious.png"  alt="Share on Delicious" width="32" height="32" /></a>';
    tbar += '<a href="'+buzz+'" id="buzz" title="Share on Buzz"><img src="http://1.bp.blogspot.com/-pjxdhvSHuGc/Tvc6AUlbPDI/AAAAAAAAB-I/M3l4okr5uts/s1600/%255Bwww.gj37765.blogspot.com%255Dgoogle-buzz.png"  alt="Share on Buzz" width="32" height="32" /></a>';
tbar += '<a href=http://www.edutechnology.net/"> Get This  alt="Share on Buzz" </a>';
    tbar += '</div></div>';
 
    // Add the share tool bar.
    $('body').append(tbar);
    $('#socializethis').css({opacity: .7});
    // hover.
    $('#socializethis').bind('mouseenter',function(){
      $(this).animate({height:'35px', width:'260px', opacity: 1}, 300);
      $('#socializethis img').css('display', 'inline');
    });
    //leave
    $('#socializethis').bind('mouseleave',function(){
      $(this).animate({ opacity: .7}, 300);
    });
    // Click minimize
    $('#socializethis #minimize').click( function() {
      minshare();
      $.cookie('minshare', '1');
    });
 
    if($.cookie('minshare') == 1){
      minshare();
    } 
 
    function minshare(){
      $('#socializethis').animate({height:'15px', width: '40px', opacity: .7}, 300);
      $('#socializethis img').css('display', 'none');
      return false;
    }
  });
})(jQuery);