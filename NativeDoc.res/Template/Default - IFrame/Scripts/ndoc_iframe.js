/* *********************************************
 * NativeSoft NativeDoc 1.6 *********************
 ************************************************
 * Go to http://www.nativesoft.fr/nativedoc for more information about
 * NativeDoc code documentation tool.
 ************************************************
 * IFrame JavaScript file.
 ************************************************ */

$(function() {
    if(top == self && getValue("print") != "print") {
        top.location = ("../index.htm?page="+ self.location);
        return false;
    }
    
    tIsIE6 = false;
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){ //test for MSIE x.x;
        var ieversion=new Number(RegExp.$1)
        tIsIE6 = (ieversion>=5 && ieversion <= 7);
    }
        
    tIsTop = ($("#css").attr("href") == "Style/ndoc.css");
    if (getValue("print") == "print")
    {
        if (tIsTop)
            $("#css").attr("href", "Style/ndoc_print.css");
        else
            $("#css").attr("href", "../Style/ndoc_print.css");
        window.print();
    }
    else
    {
        if(typeof((parent.tabnav)) == 'function') {
            if (tIsTop) parent.tabnav(gPageType);
            else {
                parent.tabnav("api");
                if (tIsIE6 == false) {
                    parent.tree1.select_branch(parent.$('#'+ gPage));
                    parent.tree1.open_branch(parent.$('#'+ gPage));
                }
            }
        }
    }
});

function getValue(varname)
{
    var url = window.location.href;
    var qparts = url.split("?");
    if (qparts.length <= 1)
        return "";
    var query = qparts[1];
    var vars = query.split("&");
    var value = "";

    for (i=0;i<vars.length;i++) {
        var parts = vars[i].split("=");
        if (parts[0] == varname) {
            value = parts[1];
            break;
        }
    }
    value = unescape(value);
    value.replace(/\+/g," ");
    return value;
}