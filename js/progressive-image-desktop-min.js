window.addEventListener&&window.requestAnimationFrame&&document.getElementsByClassName&&window.addEventListener("load",function(){var e,t,n=document.getElementsByClassName("progressive replace");(window.addEventListener("scroll",r,!1),window.addEventListener("resize",r,!1),MutationObserver)&&new MutationObserver(function(){n.length!==e&&a()}).observe(document.body,{subtree:!0,childList:!0,attributes:!0,characterData:!0});document.addEventListener("load",i);var i=setTimeout(a,1e6);function r(){t=t||setTimeout(function(){t=null,a()},300)}function a(){n.length&&requestAnimationFrame(function(){for(var t,i,r,a=window.pageXOffset,o=a+window.innerWidth,d=0;d<n.length;)r=(i=a+(t=n[d].getBoundingClientRect()).left)+t.width,o>i&&a<r?(s(n[d]),n[d].classList.remove("replace")):d++;e=n.length})}function s(e){var t=e&&(e.getAttribute("data-href")||e.href);if(t){var n=new Image;e.dataset&&(n.srcset=e.dataset.srcset||"",n.sizes=e.dataset.sizes||""),n.src=t,n.className="reveal",n.complete?i():n.onload=i}function i(){requestAnimationFrame(function(){t===e.href&&(e.style.cursor="default",e.addEventListener("click",function(e){e.preventDefault()},!1));var i=e.querySelector&&e.querySelector("img.preview");e.insertBefore(n,i&&i.nextSibling).addEventListener("animationend",function(){i&&(n.alt=i.alt||"",e.removeChild(i)),n.classList.remove("reveal")})})}}},!1);