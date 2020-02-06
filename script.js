function cal(){
  coordinates = document.getElementById("coordinates")
  error = document.getElementById("error")
  x1 = coordinates.elements["x1"].value
  x2 = coordinates.elements["x2"].value
  y1 = coordinates.elements["y1"].value
  y2 = coordinates.elements["y2"].value
  slopeError = error.elements["slope"].value
  yError = error.elements["yIntercept"].value
  slope = (y2-y1)/(x2-x1)
  yIntercept = y2-slope*x2
  if (Math.abs(slope) > 10000 || Math.abs(slope) < 0.00001){
    slope = slope.toExponential()
  }
  if (Math.abs(yIntercept) > 1000 || Math.abs(yIntercept) < 0.00001){
    yIntercept = yIntercept.toExponential()
  }
  document.getElementById("outEquation").innerHTML = "Equation: <br>Y = " + String(slope) + "*x + " + String(yIntercept);
  if (slopeError != "") {
    slopeError = Number(slopeError)
    percent = Math.round(((slope-slopeError)/slopeError)*100, 4)
    document.getElementById("outSlopeError").innerHTML = "Slope Percent Error: <br>" + String(percent) + "%";
  }
  if (yError != "") {
    yError = Number(yError)
    percent = Math.round(((yIntercept-yError)/yError)*100, 4)
    document.getElementById("outYError").innerHTML = "Y-Intercept Percent Error: <br>" + String(percent) + "%";
  }
}

function res(){
  document.getElementById("outEquation").innerHTML = "";
  document.getElementById("outYError").innerHTML = "";
  document.getElementById("outSlopeError").innerHTML = "";
  inputs = document.getElementsByClassName("clear")
  for (var i = 0; i < inputs.length; i += 1) {
    inputs.item(i).value = ""
  }
}
