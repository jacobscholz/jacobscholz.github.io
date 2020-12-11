let posx = 400
let posy = 150

function setup()
{
  createCanvas(800, 300);
}

function draw()
{
    if (keyIsDown(LEFT_ARROW))
    {
      posx=posx-1;
    } 
    if (keyIsDown(DOWN_ARROW))
    {
      posy=posy+1;
    }
    if (keyIsDown(RIGHT_ARROW))
    {
      posx=posx+1;
    }
    if (keyIsDown(UP_ARROW))
    {
      posy=posy-1;
    }

    colorMode(HSB);
    stroke((2*frameCount) % 360, 50, 100);
    strokeWeight(25);
    line(posx, posy, posx, posy);
}
