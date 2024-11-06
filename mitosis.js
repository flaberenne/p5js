

// Mitosis two moving circles - 2021
var cells = [];

function setup() {
    // put setup code here
    createCanvas(600, 400);
    cells.push(new Cell());
    cells.push(new Cell());
    slider = createSlider(-1, 1,0, 0.1);
render();
}



function draw() {
    // put drawing code here
    background(51);
    //  translate(100,200);
    //   fill(255);
	
    for (var i = 0; i < cells.length; i++) {
		cells[i].move();
        cells[i].show();
		cells[i].accel(slider.value());
	
		if (cells[i].pos.x >width -cells[i].r/2| cells[i].pos.x<0+cells[i].r/2)
		{
		cells[i].velocity.x=-cells[i].velocity.x;
		}	
		if(cells[i].pos.y>height -cells[i].r/2| cells[i].pos.y<0+cells[i].r/2)
		{
		cells[i].velocity.y=-cells[i].velocity.y;
		}	
		cells[i].pos.x=max(0,min(cells[i].pos.x,width));
		cells[i].pos.y=max(0,min(cells[i].pos.y,height));
		
		
    }


}

function mousePressed() {
    for (var i = 0; i < cells.length; i++) {
        if (cells[i].clicked(mouseX, mouseY)) {
            cells.push(cells[i].mitosis(cells[i]));
            cells.push(cells[i].mitosis(cells[i]));
        }

    }

}