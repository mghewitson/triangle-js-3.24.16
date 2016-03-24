$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    var notTriangle;
    var isosceles;
    var equilateral;
    var scalene = false;

    if (side1 + side2 == side3 && side1 + side2 < side3) {
      notTriangle = true;
    }
    if (side1 === side2)
      isosceles = true; {
}
    if (side1 == side2 && side2 == side3){
    equilateral = true; }

    if (equilateral && notTriangle && isosceles) false
      scalene = true;
  

    if (notTriangle = true) {
      $("#outputNt").show("#noTri");
    }

    if (isosceles = true) {
      $("#outputIso").show("#isoTri");
    }

    if (equilateral = true) {
      $("#outputEqu").show("#equTri");
    }

    if (scalene = true) {
      $("#outputSca").show("#scaTri");
    }


    event.preventDefault();
  });
});
