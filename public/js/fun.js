var slider = 1;
function showimage(n)
{
    change_image(slider += n);
}
function change_image(n)
{
    var image = document.getElementsByClassName("slides");
    if(n> image.length )
    {
        slider =1;
    }
    if(n<1)
    {
        slider = image.length;
    }
    for(var i = 0;i < image.length; i++)
    {
        image[i].style.display = "none";
    }
    image[slider -1].style.display = "block";
}