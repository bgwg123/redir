var sw_targ=true; var ff_targ=''; var qs= querySt('t'); switch(qs) {
case 'b22'	:ff_targ_text='Bruce Green and West Green Healthy Streets menu';  ff_targ='https://docs.google.com/document/d/1-y88Vl0XwcvIizlwtRNDcoKeKqxqHQGAnZK-NH-6FaI'; break; 
// bit.ly/bgwgmenu BGWGMENU https://bgwg13.github.io/redir/index.htm?t=b22					
case 'b23'	: 
case 'b24'	:					
case 'b25'	:			
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
function querySt(Key) {var url = window.location.href; KeysValues = url.split(/[\?&]+/);
for (i = 0; i < KeysValues.length; i++) {KeyValue = KeysValues[i].split("="); if (KeyValue[0] == Key) {return KeyValue[1];}}}
