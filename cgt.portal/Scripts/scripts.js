function numbersonly(e) {
    var unicode = e.charCode ? e.charCode : e.keyCode
    if ((unicode != 8) && (unicode != 13) && (unicode != 37) && (unicode != 39) && (unicode != 9)) { //if the key isn't the backspace key (which we should allow)
        if (unicode < 48 || unicode > 57) //if not a number
        {
            alert('ERROR, Input must be NUMBER!');
            return false //disable key press
        }
    }
}
function numericonly(e) {
    var unicode = e.charCode ? e.charCode : e.keyCode
    if ((unicode != 8) && (unicode != 13) && (unicode != 37) && (unicode != 39) && (unicode != 9)) { //if the key isn't the backspace key (which we should allow)
        if (unicode < 44 || unicode > 57) //if not a numeric
        {
            alert('ERROR, Input must be NUMBER!');
            return false //disable key press
        }
    }
}

function Focus(e) {
    if (window.event.keyCode == 13) {
        return false;
    }
}

function Select(e) {
    id = this.id;
    document.getIdFromElement(id).select();
}

var isIE = navigator.userAgent.toLowerCase().indexOf("msie");

function SetWidthToAuto(drpLst) {
    if (isIE > -1) {
        drpLst.style.width = 'auto';
    }
}
function ResetWidth(drpLst) {
    if (isIE > -1) {
        drpLst.style.width = '80px';
    }
}
function ResetWidth110(drpLst) {
    if (isIE > -1) {
        drpLst.style.width = '110px';
    }
}
function ResetWidth250(drpLst) {
    if (isIE > -1) {
        drpLst.style.width = '250px';
    }
}

//========================================




function aceSelectedSearch(sender, e) {
    var value = e.get_value();
    if (!value) {
        value = e._item.parentNode._value;
    }
    var searchText = "";
    searchText = searchText.replace('null', '');
    sender.get_element().value = value;
}

function acePopulatedSearch(sender, e) {
    var behavior = $find('AutoCompleteExSearch');
    var target = behavior.get_completionList();
    if (behavior._currentPrefix != null) {
        var prefix = behavior._currentPrefix.toLowerCase();
        var i;
        for (i = 0; i < target.childNodes.length; i++) {
            var sValue = target.childNodes[i].innerHTML.toLowerCase();
            if (sValue.indexOf(prefix) != -1) {
                var fstr = target.childNodes[i].innerHTML.substring(0, sValue.indexOf(prefix));
                var pstr = target.childNodes[i].innerHTML.substring(fstr.length, fstr.length + prefix.length);
                var estr = target.childNodes[i].innerHTML.substring(fstr.length + prefix.length, sValue.indexOf('|'));
                var istr = target.childNodes[i].innerHTML.substring(sValue.indexOf('|') + 1, target.childNodes[i].innerHTML.length);
                target.childNodes[i].innerHTML = "<table onmouseover='aceOverSearch(this);'><tr><td width='100'>" + fstr + '<B><font color=blue>' + pstr + '</font></B>' + '<font color=grey>' + estr + '</font>' + '</td><td><font color=black><B>' + istr + '</B></font>' + "</td></tr></table>";
            }
        }
    }
}

function aceOverSearch(divValue) {
    var ACBehavior = $find("AutoCompleteExSearch");
    var parent = divValue.parentElement;
    parent.innerHTML = parent.innerHTML.replace(divValue, divValue.innerHTML);
    var children = ACBehavior._completionListElement.childNodes;
    for (var i = 0; i < children.length; ++i) {
        if (parent === children[i]) {
            ACBehavior._highlightItem(parent);
            ACBehavior._selectIndex = i;
            break;
        }
    }
}

function aceSelectedProduct(sender, e) {
    var value = e.get_value();

    if (!value) {
        value = e._item.parentNode._value;
    }
    var searchText = "";
    searchText = searchText.replace('null', '');
    sender.get_element().value = value;
}

function acePopulatedProduct(sender, e) {
    var behavior = $find('AutoCompleteExProduct');
    var target = behavior.get_completionList();
    if (behavior._currentPrefix != null) {
        var prefix = behavior._currentPrefix.toLowerCase();
        var i;
        for (i = 0; i < target.childNodes.length; i++) {
            var sValue = target.childNodes[i].innerHTML.toLowerCase();
            if (sValue.indexOf(prefix) != -1) {
                var fstr = target.childNodes[i].innerHTML.substring(0, sValue.indexOf(prefix));
                var pstr = target.childNodes[i].innerHTML.substring(fstr.length, fstr.length + prefix.length);
                var estr = target.childNodes[i].innerHTML.substring(fstr.length + prefix.length, sValue.indexOf('|'));
                var istr = target.childNodes[i].innerHTML.substring(sValue.indexOf('|') + 1, target.childNodes[i].innerHTML.length);
                target.childNodes[i].innerHTML = "<table onmouseover='aceOverSearch(this);'><tr><td width='350'>" + fstr + '<B><font color=blue>' + pstr + '</font></B>' + '<font color=grey>' + estr + '</font>' + '</td><td><font color=red>' + istr + '</font>' + "</td></tr></table>";
            }
        }
    }
}

function aceOverProduct(divValue) {
    var ACBehavior = $find("AutoCompleteExProduct");
    var parent = divValue.parentElement;
    parent.innerHTML = parent.innerHTML.replace(divValue, divValue.innerHTML);
    var children = ACBehavior._completionListElement.childNodes;
    for (var i = 0; i < children.length; ++i) {
        if (parent === children[i]) {
            ACBehavior._highlightItem(parent);
            ACBehavior._selectIndex = i;
            break;
        }
    }
}

function aceSelectedSupplier(sender, e) {
    var value = e.get_value();
    if (!value) {
        value = e._item.parentNode._value;
    }
    var SupplierText = "";
    SupplierText = SupplierText.replace('null', '');
    sender.get_element().value = value;
}

function acePopulatedSupplier(sender, e) {
    var behavior = $find('AutoCompleteExSupplier');
    var target = behavior.get_completionList();
    if (behavior._currentPrefix != null) {
        var prefix = behavior._currentPrefix.toLowerCase();
        var i;
        for (i = 0; i < target.childNodes.length; i++) {
            var sValue = target.childNodes[i].innerHTML.toLowerCase();
            if (sValue.indexOf(prefix) != -1) {
                var fstr = target.childNodes[i].innerHTML.substring(0, sValue.indexOf(prefix));
                var pstr = target.childNodes[i].innerHTML.substring(fstr.length, fstr.length + prefix.length);
                var estr = target.childNodes[i].innerHTML.substring(fstr.length + prefix.length, sValue.indexOf('|'));
                var istr = target.childNodes[i].innerHTML.substring(sValue.indexOf('|') + 1, target.childNodes[i].innerHTML.length);
                target.childNodes[i].innerHTML = "<table onmouseover='aceOverSearch(this);'><tr><td width='200'>" + fstr + '<B><font color=blue>' + pstr + '</font></B>' + '<font color=grey>' + estr + '</font>' + '</td><td><font color=black><B>' + istr + '</B></font>' + "</td></tr></table>";
            }
        }
    }
}

function aceOverSupplier(divValue) {
    var ACBehavior = $find("AutoCompleteExSupplier");
    var parent = divValue.parentElement;
    parent.innerHTML = parent.innerHTML.replace(divValue, divValue.innerHTML);
    var children = ACBehavior._completionListElement.childNodes;
    for (var i = 0; i < children.length; ++i) {
        if (parent === children[i]) {
            ACBehavior._highlightItem(parent);
            ACBehavior._selectIndex = i;
            break;
        }
    }
}

