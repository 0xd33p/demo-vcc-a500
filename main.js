(function(){var els=document.querySelectorAll('.block:not(.block--hero) .block__title, .card, .feat, .steps li, .pack');
if(!('IntersectionObserver' in window)){return}
els.forEach(function(e){e.classList.add('reveal')});
var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{rootMargin:'0px 0px -8% 0px'});
els.forEach(function(e){io.observe(e)});})();
