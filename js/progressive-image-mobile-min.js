window.addEventListener&&window.requestAnimationFrame&&document.getElementsByClassName&&window.addEventListener("load",function(){var e,t,n=document.getElementsByClassName("progressive replace");(console.log(n),window.addEventListener("scroll",o,!1),window.addEventListener("resize",o,!1),MutationObserver)&&new MutationObserver(function(){n.length!==e&&r()}).observe(document.body,{subtree:!0,childList:!0,attributes:!0,characterData:!0});document.addEventListener("load",i);var i=setTimeout(r,1e3);function o(){t=t||setTimeout(function(){t=null,r()},300)}function r(){console.log("working"),n.length&&requestAnimationFrame(function(){for(var t,i,o=window.pageYOffset,r=o+window.innerHeight,s=0;s<n.length;)o<(i=o+(t=n[s].getBoundingClientRect()).top)+t.height&&r>i?(a(n[s]),n[s].classList.remove("replace")):s++;e=n.length})}function a(e){console.log("loading");var t=e&&(e.getAttribute("data-href")||e.href);if(t){var n=new Image;e.dataset&&(n.srcset=e.dataset.srcset||"",n.sizes=e.dataset.sizes||""),n.src=t,n.className="reveal",n.complete?i():n.onload=i}function i(){requestAnimationFrame(function(){t===e.href&&(e.style.cursor="default",e.addEventListener("click",function(e){e.preventDefault()},!1));var i=e.querySelector&&e.querySelector("img.preview");e.insertBefore(n,i&&i.nextSibling).addEventListener("animationend",function(){i&&(n.alt=i.alt||"",e.removeChild(i)),n.classList.remove("reveal")})})}}},!1);