// var sample =document.getElementById("sample_1");

// sample.className='yasin manka'
// sample.innerHTML="ysnnnnn"
// sample.textContent='yasin manka ne yapmaya calisiiyor';

// console.log(sample);




var content=$("#sample_1").html();

console.log(content);


$("#sample_1").html('we are here to see the changes let see what will happen together');




var text_content= $("#sample-text").text();
console.log(text_content);



var link = $("#link_element").attr("href" ,"https://www.udemy.com");

console.log(link);

// $("#click").hide();




 $("#change_image").click(function(){

    $("#image_1").attr("src","/DOM/js2.jpg")
    $("#change_image").hide();


 })

//  $("#empty_paragraf").empty();
// $("#empty_paragraf").hide();
$("#empty_paragraf").remove();


