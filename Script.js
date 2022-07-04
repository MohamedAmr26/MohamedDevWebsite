window.onload = function(){
    var brandicon = document.getElementById("brandlogo");
    var body = document.getElementsByTagName("BODY")[0];
    var navbar = document.getElementsByClassName("navigationbar");
    var isScrolling

    function changeopacity(element, percent)
    {
        for (let i = 0; i < element.length; i++) {
            element[i].style.opacity = percent;
        }
    }

    window.onscroll = function(){
        if (document.documentElement.scrollTop > 50)
        {
            brandicon.style.opacity = "50%";
            changeopacity(navbar , "50%");
        }
        else
        {
            brandicon.style.opacity = "100%";
            changeopacity(navbar , "100%");
        }
    }

    window.addEventListener('scroll', function ( event ) {
    	window.clearTimeout( isScrolling );
    	isScrolling = setTimeout(function() {
            brandicon.style.opacity = "100%";
            changeopacity(navbar , "100%");
	    }, 66);
    }, false);
}