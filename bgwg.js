var sw_targ=true; var ff_targ=''; var qs= querySt('t'); switch(qs) {
case 'b22'	:ff_targ_text='Bruce Green and West Green Healthy Streets menu';  
		ff_targ='https://docs.google.com/document/d/1-y88Vl0XwcvIizlwtRNDcoKeKqxqHQGAnZK-NH-6FaI'; break; 
// bit.ly/bgwgmenu BGWGMENU https://bgwg123.github.io/redir/index.htm?t=b22					
case 'b23'	:ff_targ_text='Bruce Green and West Green Healthy Streets mailing list';  ff_targ='https://bruce-green-west-green-healthy-streets.mailchimpsites.com/sign-up'; break; 
// bit.ly/bgwgsup BGWGSUP https://bgwg123.github.io/redir/index.htm?t=b23 
case 'b24'	:ff_targ_text='Bruce Green and West Green Healthy Streets Facebook Group';  ff_targ='https://www.facebook.com/groups/bgwghealthystreets'; break; 
// bit.ly/bgwg247 BGWG247 https://bgwg123.github.io/redir/index.htm?t=b24&utm_source=a7&utm_medium=card&utm_campaign=ongoing				
case 'b25'	:ff_targ_text='Bruce Green and West Green Low Traffic Network consultation qr';  ff_targ='https://wh1.snapsurveys.com/s.asp?k=162885021566'; break; 
// https://bit.ly/bgwgcsurv https://bgwg123.github.io/redir/index.htm?t=b25&utm_source=2108&utm_medium=leaf&utm_campaign=surv	
case 'b26'	:				
case 'b27'	:				
case 'b28'	:					
case 'b29'	:					
case 'b31'	:				
case 'b32'	: break;				
								

default:sw_targ=false;break;
}
if (sw_targ==true) {window.location.href=ff_targ; document.write('<meta http-equiv="refresh" content="1;url='+ff_targ+'"><title>'+ff_targ_text+'</title>'); }
else {document.write('There may have been an error - no action possible:'+ff_targ);}
//function querySt(Key) {var url = window.location.href; KeysValues = url.split(/[\?&]+/);
//for (i = 0; i < KeysValues.length; i++) {KeyValue = KeysValues[i].split("="); if (KeyValue[0] == Key) {return KeyValue[1];}}}
////
function querySt(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}
