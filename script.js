let slide=1;

slideshow(slide);
 

 function velakia(n)
 {
    slideshow(slide += n);
 }

 function slideshow(n)
 {
    let i;
    let slides = document.getElementsByClassName("slide");

    if (n > slides.length)
    {
        slide = 1;
    }

    if ( n < 1)
    {
        slide =slides.length;
    }

    for (i=0; i <slides.length; i++)
    {
        slides[i].style.display="none";
    }
    slides[slide-1].style.display="block";

 }