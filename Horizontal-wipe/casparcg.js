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
        $(".bars").css('background-color',array["f2"]);
    }
}


function play(arg) {
    $(".bars").addClass("added")
    $(".text1").addClass("added2")
    $(".text2").addClass("added2")
}

function stop() {
    $(".bars").removeClass("added")
    $(".text1").removeClass("added2")
    $(".text2").removeClass("added2")
}

function next() {

}