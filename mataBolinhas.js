var pts = 0;

$(document).ready
(
    
    function()
    {
        document.querySelector(".pts").innerHTML = Math.round(pts);
        nasceBolinha();

        $("button").click
        (
            function()
            {
                $(".bolinha").remove();
                pts=0;
                document.querySelector(".pts").innerHTML = Math.round(pts);
                nasceBolinha();
            }
        )

        
        // Não funciona
        
    }

)

function nasceBolinha()
{
    let indoX = true;
    let indoY = true;

    var y = (Math.random()* 700)  + 40;
    var x = (Math.random()* 1000)  + 40;
    
    function updateX()
    {
        let RNG = Math.random()*10;
        if (indoX && (x < 1000 || RNG < 5))
        {
            x++;   
        }
        else{
            indoX = false;
        }

        if (!indoX && x > 40)
        {
            x--;
        }
        else
        {
            indoX = true;
        }
    }
    function updateY()
    {
        let RNG = Math.random()*10;

        if (indoY && (y < 700 || (y < 700 || RNG < 5)))
        {
            y++;   
        }
        else{
            indoY = false;
        }

        if (!indoY && y > 40)
        {
            y--;
        }
        else
        {
            indoY = true;
        }
    }

    
    var cores = ["blue","green","white","aqua","yellow","purple","violet","rgba(39, 227, 89)","rgba(165, 171, 242)","rgba(235, 54, 72)","rgba(255, 173, 153)"]
    let cor = Math.round(Math.random()*10);
    
    /*
        switch(Math.round(Math.random()*10))
        {
            case 1: cor= "blue"; ; break;
            case 2: cor = "green"; break;
            case 3: cor = "saddlebrown"; break;
            case 4: cor = "aqua"; break;
            case 5: cor = "yellow"; break;
            case 6: cor = "purple"; break;
            case 7: cor = "violet"; break;
            case 8: cor = "seagreen"; break;
            case 9: cor = "slateblue"; break;
            case 10: cor = "gold"; break;

        }
    */

    var bola = $("<div class = 'bolinha'></div>");

    bola.css("top",y);
    bola.css("left",x);
    bola.css("background-color",cores[cor]);

    $("p").append(bola);

    /*$(".bolinha").click
    (
        function()
        {
            $(".bolinha").fadeOut();
        }
    )*/


    $(".bolinha").bind("click",
            function()
            {
                pts= pts + 1; 


                $(this).remove();
                nasceBolinha();
                document.querySelector(".pts").innerHTML = Math.round(pts);
            }
    )

    setInterval
    (
        function()
        {
            updateX();
            bola.css("left",x);
            updateY();
            bola.css("top", y);
            
        }
    ,15)
}

function nasceBolinha2(x, y)
{
    $(".bolinha").fadeOut();

    x++;
    y++;
    
    var cores = ["blue","green","white","aqua","yellow","purple","violet","rgba(39, 227, 89)","rgba(165, 171, 242)","rgba(235, 54, 72)","rgba(255, 173, 153)"]
    let cor = Math.round(Math.random()*10);
    
    

    var bola = $("<div class = 'bolinha'></div>");

    bola.css("top",y);
    bola.css("left",x);
    bola.css("background-color",cores[cor]);

    $("p").append(bola);

    

    $(".bolinha").bind("click",
            function()
            {
                pts= pts + 1; // Problemas


                $(this).remove();
                nasceBolinha();
                document.querySelector(".pts").innerHTML = Math.round(pts);
            }
    )
}
