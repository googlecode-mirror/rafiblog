jQuery(document).ready(function() {
function makingdifferent_stickybar()  {
var mdwh = jQuery(window).height();
var mdpph = jQuery("#md-stickybar").height();
var mdfromTop = jQuery(window).scrollTop()+0;
 jQuery("#md-stickybar").css({"top":mdfromTop});
}jQuery(window)
.scroll(makingdifferent_stickybar)
.resize(makingdifferent_stickybar)
//alert(jQuery.cookie('sreqshown'));
//var mdww = jQuery(window).width();
//var mdppw = jQuery("#md-stickybar").width();
//var mdleftm = (mdww-mdppw)/2;
var mdleftm = 0;
//var mdwh = jQuery(window).height();
//var mdpph = jQuery("#md-stickybar").height();
//var mdfromTop = (jQuery(window).scrollTop()+mdwh-mdpph) / 2; 
jQuery("#md-stickybar").animate({opacity: "1", left: "0" , left: mdleftm}, 0).show();        
jQuery("#mdclose").click(function() {
jQuery("#md-stickybar").animate({opacity: "0", left: "-1500"}, 1500).show(); });});