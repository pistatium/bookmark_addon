chrome.tabs.getSelected(null,function(tab){
    var url = 'http://kimihiro-n.appspot.com/bookmark/post/?addon';
    url += '&title=' + encodeURIComponent(tab.title);
    url += '&url='   + encodeURIComponent(tab.url);
    postframe.location = url;
});
