document.getElementById("mySelect").onchange = function () {
  console.log("changed");

     var selectField =document.getElementById("mySelect");
      var selectedOption=selectField.options.selectedIndex;
      var selectedValue=selectField.options[selectedOption];
      document.getElementById("selected_level").innerHTML=selectedValue.innerHTML;
     console.log(selectedOption );

};
