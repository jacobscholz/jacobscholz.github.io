let palette = 0;

function setup()
{
  createCanvas(600, 400);
}

function draw()
{
  if (mouseIsPressed)
  {
    if (palette === 0)
    {
      if (mouseButton === LEFT)
      {
        fill(255,0,0);
      } 
      else if (mouseButton === RIGHT)
      {
        fill(0,255,0);
      }
      else if (mouseButton === CENTER)
      {
        fill(0,0,255);
      }
      ellipse(mouseX, mouseY, 20, 20);
    }


    if (palette === 1)
    {
      if (mouseButton === LEFT)
      {
        fill(255,255,0);
      } 
      else if (mouseButton === RIGHT)
      {
        fill(0,255,255);
      }
      else if (mouseButton === CENTER)
      {
        fill(255,0,255);
      }
      ellipse(mouseX, mouseY, 20, 20);
    }


    if (palette === 2)
    {
      if (mouseButton === LEFT)
      {
        fill(255);
      } 
      else if (mouseButton === RIGHT)
      {
        fill(127);
      }
      else if (mouseButton === CENTER)
      {
        fill(0);
      }
      ellipse(mouseX, mouseY, 20, 20);
    }
  }
}

function keyPressed()
{
  if (keyCode === LEFT_ARROW)
  {
    palette = 0;
  } 
  else if (keyCode === DOWN_ARROW)
  {
    palette = 1;
  }
  else if (keyCode === RIGHT_ARROW)
  {
    palette = 2;
  }
}