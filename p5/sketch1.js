function setup()
{
  createCanvas(600, 400);
}
  
function draw()
{
  if (mouseIsPressed)
  {
    if (mouseButton === LEFT)
    {
      fill(255);
    } 
    else if (mouseButton === RIGHT)
    {
      fill(0);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }
}