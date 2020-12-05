function aceSelected(sender, e) {
    var value = e.get_value();
    if (!value) {
        value = e._item.parentNode._value;
    }
    var searchText = "";
    searchText = searchText.replace('null', '');
    sender.get_element().value = value;
}
function acePopulated(sender, e) {
    var behavior = $find('AutoCompleteEx');
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
                target.childNodes[i].innerHTML = "<div class='ACDiv500'><div class='ACLeft'>" + fstr + "<B><font color=blue>" + pstr + "</font></B><font color=grey>" + estr + "</font></div><div class='ACRight'><font color=black>" + istr + "</font></div></div>";
            }
        }
    }
}

function aceSelectedPOSearch(sender, e) {
    var value = e.get_value();
    if (!value) {
        value = e._item.parentNode._value;
    }
    var searchText = "";
    searchText = searchText.replace('null', '');
    sender.get_element().value = value;
}
function acePopulatedPOSearch(sender, e) {
    var behavior = $find('AutoCompleteExPOSearch');
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
                target.childNodes[i].innerHTML = "<div class='ACDiv500'><div class='ACLeft'>" + fstr + "<B><font color=blue>" + pstr + "</font></B><font color=grey>" + estr + "</font></div><div class='ACRight'><font color=black>" + istr + "</font></div></div>";
            }
        }
    }
}

function aceSelectedPRSearch(sender, e) {
    var value = e.get_value();
    if (!value) {
        value = e._item.parentNode._value;
    }
    var searchText = "";
    searchText = searchText.replace('null', '');
    sender.get_element().value = value;
}
function acePopulatedPRSearch(sender, e) {
    var behavior = $find('AutoCompleteExPRSearch');
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
                target.childNodes[i].innerHTML = "<div class='ACDiv500'><div class='ACLeft'>" + fstr + "<B><font color=blue>" + pstr + "</font></B><font color=grey>" + estr + "</font></div><div class='ACRight'><font color=black>" + istr + "</font></div></div>";
            }
        }
    }
}

function aceSelectedSuplier(sender, e) {
    var value = e.get_value();
    if (!value) {
        value = e._item.parentNode._value;
    }
    var searchText = "";
    searchText = searchText.replace('null', '');
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
				target.childNodes[i].innerHTML = "<div class='ACDiv400'><div class='ACLeft'>" + fstr + "<B><font color=blue>" + pstr + "</font></B><font color=grey>" + estr + "</font></div><div class='ACRight'><font color=black>" + istr + "</font></div></div>";
            }
        }
    }
}
function ProductAS(sender, e) {
    var value = e.get_value();
    if (!value) {
        value = e._item.parentNode._value;
    }
    var searchText = "";
    searchText = searchText.replace('null', '');
    sender.get_element().value = value;
}
function ProductAP(sender, e) {
    var behavior = $find('ProductACE');
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
                target.childNodes[i].innerHTML = "<div class='ACDiv500'><div class='ACLeft'>" + fstr + "<B><font color=blue>" + pstr + "</font></B><font color=grey>" + estr + "</font></div><div class='ACRight'><font color=black>" + istr + "</font></div></div>";
            }
        }
    }
}