let flag = 0;
function spanevent()
{
    flag++;
    let a = document.getElementById("myspan");
    if(flag%2!=0)
    {
        a.style.display = "block";
        a.style.zIndex = "1000";
        a.style.width = "50%";
        a.style.borderTopRightRadius="100px"
        a.style.borderBottomRightRadius="100px"
        // a.style.marginTop = "20%";
    }
    else 
    {
        a.style.display = "none";
        a.style.borderTopRightRadius="0px"
        a.style.borderBottomRightRadius="0px"
    }
    
}

// function bodyFunction()
// {
//     if(flag2forbody %2 != 0)
//     {
//         let bodyevent = document.getElementById("myspan");
//         // bodyevent.style.display = "none";
//     }
// }

function hideMenuWhenClicked(e)
{
    if(flag>0)
    {
        flag++;
        var tag = e.target;
        var li = tag.parentNode;
        var ul = li.parentNode;
        var innerdiv = ul.parentNode;
        innerdiv.style.display = "none";
    }
    
}


function doBindings()
{
    var typed = new Typed(".auto-input-text", {
        strings: ["MERN Stack Developer", "Wordpress Developer", "Jekyll Developer", "React Developer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    })
}
window.onload = doBindings;