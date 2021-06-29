
for (var i = 1; i <101 ; i++) {
  if (i % 4 == 0) {
    document.write("buzz" + " , " );
  }
  if (i % 6 == 0) {
    document.write("lop" + " , " );
  }
  if (i%4!=0 && i%6!=0) {
    document.write(i);
  }
  document.write("</br>");
}
  document.write("</br>");
  document.write("</br>");
  document.write("</br>");
  document.write("</br>");

function divisible_en(num,divisor) {
  if (num % divisor == 0){
    return true;
  }
  else {
    return false;
  }
  }

for (var i = 1; i < 100; i++) {
  if (divisible_en (i,4)){
      document.write("buzz" + " , " );
    }
  if (divisible_en(i,6)) {
    document.write ("lop" + " , ");
  }
  if (!divisible_en (i,4) && !divisible_en (i,6)) {
    document.write(i);
  }
  document.write("</br>");
  }

  document.write("</br>");
  document.write("</br>");
  document.write("</br>");
  document.write("</br>");

  var divisible = false;

  for (var i = 1; i < 101 ; i++) {
    divisible = false;
    if(i%4==0){
      divisible = true;
      document.write("buzz , ");
    }
    if (i%6==0){
      divisible = true;
      document.write("top , ");
    }
    if(!divisible){
      divisible = true;
      document.write(i," , ");
    }
    document.write("</br>");
  }
