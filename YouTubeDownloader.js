var downloadhtml = '<div style="border: 1px solid; padding: 4px; width:400px"><center><font face="Arial" size="2">Download <b>Youtube Video</b> !<br /> Enter The YouTube Video URL Below:-</font><p></p>'
var downloadhtml = downloadhtml + '<form onsubmit="return false;" name="myForm1"><input type="text" value="Enter URL Here..." name="vidurl1" size="40" style="border: 1px solid #93AC1D; padding-left: 4px; padding-right: 4px; padding-top: 1px; padding-bottom: 1px; background-color: #CCFF66"><input type="button" name="getlink1" value="Download" onClick="download1()"></form>'
var downloadhtml = downloadhtml + '<span id="loading1" style="display:none;"><p align="center"><img src="http://i197.photobucket.com/albums/aa309/technojuiceblog/loading.gif"></p></span>'
var downloadhtml = downloadhtml + '<span id="iframespan1" style="display:none;"><iframe id="iframe1" height="250px" marginwidth="0" marginheight="0" hspace="0" vspace="0"  frameborder="0" scrolling="no" onload="showframe1()"></iframe></span><div id="download1"></div></center></div>'
document.write(downloadhtml)

function showframe1(){
var browurl = document.getElementById("iframe1").src;
if (browurl.indexOf("youtube.com/watch?v=")!=-1) {
document.getElementById("loading1").style.display = 'none';
document.getElementById("iframespan1").style.display = 'inline';
}
}


function download1() {
document.getElementById("download1").innerHTML= ''
document.getElementById("iframespan1").style.display = 'none';

var vidurl = document.myForm1.vidurl1.value;
if (vidurl.indexOf("youtube.com/watch?v=")!=-1 && vidurl.indexOf("http://")!=-1) {

document.getElementById("loading1").style.display = 'inline';


document.getElementById("iframe1").src = 'http://watchorkeep.com/ytwidget/index.php?url=' + vidurl
}
else {
document.getElementById("download1").innerHTML= '<p><font face="Arial"><font color="#FF0000"><b>Error : </b></font>The link you gave seems incorrect. Try Again with correct youtube video url e.g. <i>http://www.youtube.com/watch?v=Y7dpJ0oseIA</i></font></p>'
}
document.getElementById("vidurl1").value = ''
}