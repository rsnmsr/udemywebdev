const {Engine,Runner,Render,World,Bodies}=Matter;
const engine = Engine.create();
const {world} = engine;

const cells=3;
const width=600;
const height=600;

const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes:false,
        width,
        height,
        showAngleIndicator: true,
    }
});

Render.run(render);

var runner = Runner.create();
Runner.run(runner, engine);

World.add(world, [
    // walls added as rectangles
    // The rectangele cord: center point (x,y) and width and height of rectangle
    Bodies.rectangle(width/2, 0, width, 40, { isStatic: true }),
    Bodies.rectangle(width/2, height, width, 40, { isStatic: true }),
    Bodies.rectangle(width, height/2, 40, height, { isStatic: true }),
    Bodies.rectangle(0, height/2, 40, height, { isStatic: true })
]);

World.add(world,Bodies.rectangle(200,200,50,50,{isStatic:false}))

const grid=Array(cells).fill(null).map(()=>Array(cells).fill(false));
const verticals=Array(cells).fill(null).map(()=>Array(cells-1).fill(false));
const horizontal=Array(cells-1).fill(null).map(()=>Array(cells).fill(false));

const rowStart=Math.floor(Math.random()*cells);
const columnStart=Math.floor(Math.random()*cells);

const stepThroughCell=(row,column)=>{

    // if the [row,column] is visited,return

    // Mark the cell as visited

    // Assemble randomlly ordered list of neighours

    // For each neighbours :

    // See if neighbour is out of bounds

    // If we have visited that neighbour,continue to bext neighbour

    // Remove a wall from either a horizontal array or vertical array

    // Visit the next cell
}

stepThroughCell(rowStart,columnStart);