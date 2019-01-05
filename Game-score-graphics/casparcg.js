array={}

//This function is designed to update any information and get the animation ready to play
function update(arg) { //the key/value pairs configured in CasparCG client are passed here
 $(arg).find('componentData').each(function(i,j)
    {         
        array[$(j).attr("id")]=$(j).find("data").attr("value")
       
    });
    if (array["f0"] !== undefined) {
        $("#text-element").html(array["f0"]);
    }
    if (array["f1"] !== undefined) {
        $("#text-element2").html(array["f1"]);
    }
    if (array["f2"] !== undefined) {
        $(".blue").css('background-color',array["f2"]);
    }
    console.log(array["f3"])
    if (array["f3"] !== undefined) {
        $("body").get(0).style.setProperty("--scale", array["f3"]);
    }
}


function play(arg) {
    $(".blue").addClass("blueAdd")
    $(".text1").addClass("added2")
    $(".text2").addClass("added2")
    $(".blue-2").addClass("blueAdd-2")
    $(".text1-2").addClass("added2-2")
    $(".text2-2").addClass("added2-2")
}

function stop() {
    $(".blue").removeClass("blueAdd")
    $(".text1").removeClass("added2")
    $(".text2").removeClass("added2")
    $(".blue-2").removeClass("blueAdd-2")
    $(".text1-2").removeClass("added2-2")
    $(".text2-2").removeClass("added2-2")
}

function next() {

}