(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-full-screen" viewBox="0 0 1024 1024">'+""+'<path d="M836.266667 921.6l-648.533333 0c-56.558933 0-102.4-46.830933-102.4-104.584533L85.333333 206.984533C85.333333 149.230933 131.1744 102.4 187.733333 102.4l648.533333 0c56.558933 0 102.4 46.830933 102.4 104.584533l0 610.030933C938.666667 874.769067 892.8256 921.6 836.266667 921.6zM456.704 567.808l-8.362667-8.533333c-10.069333-10.274133-101.444267 58.6752-159.300267 104.2432-11.025067-22.493867-47.0016-92.398933-69.12-92.398933-23.8592 0-12.731733 147.285333-12.731733 147.285333 0 51.746133 25.053867 77.9264 76.663467 77.9264 0 0 157.5936 12.561067 157.5936-12.970667 0-18.670933-61.166933-50.3808-92.535467-65.399467C396.731733 663.2448 467.3536 578.696533 456.704 567.808zM816.810667 305.322667c0-51.848533-25.053867-78.062933-76.629333-78.062933 0 0-157.559467-12.5952-157.559467 13.0048 0 18.705067 61.166933 50.449067 92.535467 65.501867-48.093867 54.715733-119.364267 139.537067-108.6464 150.4256l8.3968 8.533333c10.1376 10.308267 102.058667-58.914133 160.085333-104.448 10.990933 22.528 46.967467 92.603733 69.051733 92.603733C827.869867 452.881067 816.810667 305.322667 816.810667 305.322667z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)