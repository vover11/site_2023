document.addEventListener("DOMContentLoaded", function () {
    // Создаем движок Matter.js и его модули
    const { Engine, Render, World, Bodies } = Matter;

    // Создаем размеры холста
    const width = 800;
    const height = 600;

    // Создаем движок
    const engine = Engine.create();

    // Создаем отрисовщик
    const render = Render.create({
        element: document.querySelector('.text'),
        engine: engine,
        options: {
            width: width,
            height: height,
            wireframes: false
        }
    });

    // Создаем границы холста
    const ground = Bodies.rectangle(width / 2, height + 50, width + 100, 100, { isStatic: true });
    const leftWall = Bodies.rectangle(-50, height / 2, 100, height, { isStatic: true });
    const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height, { isStatic: true });
    World.add(engine.world, [ground, leftWall, rightWall]);

    // Создаем массив слов
    const words = ["Hello", "world", "Matter.js", "is", "awesome", "Let's", "use", "it!"];

    // Создаем тела для каждого слова
    const bodies = words.map((word, index) => {
        return Bodies.rectangle(
            Math.random() * width, // x-координата случайна
            -100 - (index * 50),   // y-координата отрицательная, чтобы слова падали сверху
            100,                   // ширина слова
            20,                    // высота слова
            {
                label: word,         // метка тела будет соответствовать слову
                restitution: 0.5,    // коэффициент упругости
                friction: 0.1,       // коэффициент трения
                density: 0.01,       // плотность
            }
        );
    });

    // Добавляем тела в мир
    World.add(engine.world, bodies);

    // Запускаем движок и отрисовщик
    Engine.run(engine);
    Render.run(render);
});