function addCssJs(css, js){
    var d = new Date();
    var n = d.getTime();
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('link');
    s.setAttribute('rel', 'stylesheet');
    s.setAttribute('href', css+'?v='+n)
    head.appendChild(s);

    var body = document.getElementsByTagName('body')[0];
    var r = document.createElement('script');
    r.setAttribute('src', js+'?v='+n)
    head.appendChild(r);
}   
addCssJs('css/style.css', 'js/calculos.js');

