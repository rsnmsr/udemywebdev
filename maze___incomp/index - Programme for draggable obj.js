const {Engine,Runner,Render,World,Bodies,MouseConstraint,Mouse}=Matter;
const engine = Engine.create();
const {world} = engine;

const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 800,
        height: 600,
        showAngleIndicator: true,
    }
});

Render.run(render);

var runner = Runner.create();
Runner.run(runner, engine);

World.add(world, [
    // walls added as rectangles
    // The rectangele cord: center point (x,y) and width and height of rectangle
    Bodies.rectangle(400, 0, 800, 40, { isStatic: true }),
    Bodies.rectangle(400, 600, 800, 40, { isStatic: true }),
    Bodies.rectangle(800, 300, 40, 600, { isStatic: true }),
    Bodies.rectangle(0, 300, 40, 600, { isStatic: true })
]);

World.add(world,Bodies.rectangle(200,200,50,50,{isStatic:false}))

World.add(world, MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas),
    constraint: {
        stiffness: 0.2,
        render: {
            visible: false
        }
    }
}));


