array={}

//This function is designed to update any information and get the animation ready to play
function update(arg) { //the key/value pairs configured in CasparCG client are passed here
 $(arg).find('componentData').each(function(i,j)
    {         
        array[$(j).attr("id")]=$(j).find("data").attr("value")
       
    });
    if (array["f0"] !== undefined) {
        $("#text-element").html(array["f0"]);
        $("#svg-text").html(array["f0"]);
    }
    if (array["f1"] !== undefined) {
        $("#text-element2").html(array["f1"]);
    }
    if (array["f2"] !== undefined) {
        $("body").get(0).style.setProperty("--back-color", array["f2"]);
    }
    console.log(array["f3"])
    if (array["f3"] !== undefined) {
        $("body").get(0).style.setProperty("--scale", array["f3"]);
    }   
}


function play(arg) {
    $(".top-move").addClass("top-added")
    $(".bottom-text").addClass("bottom-text-added")

}


function stop() {
    $(".top-move").removeClass("top-added")
    $(".bottom-text").removeClass("bottom-text-added")
}

function next() {

}