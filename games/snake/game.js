import { update as update_snake, draw as draw_snake, SNAKE_SPEED, get_snake_head, snake_intersection } from "./snake.js";
import { update as update_food, draw as draw_food } from "./food.js"
import { outside_grid } from "./grid.js"

let last_render_time = 0;
let game_over = false;
const game_board = document.getElementById("game-board")

function main(current_time)
{
    if(game_over)
    {
        if(confirm("You lost, press ok to restart!"))
        {
            window.location = "/games/snake/snake.html";
        }
        return;
    }

    window.requestAnimationFrame(main);
    const seconds_since_last_render = (current_time - last_render_time) / 1000;
    if(seconds_since_last_render < 1 / SNAKE_SPEED) return;

    last_render_time = current_time;

    update();
    draw();
}

window.requestAnimationFrame(main);

function update()
{
    update_snake();
    update_food();
    check_death();
}

function draw()
{
    game_board.innerHTML = "";
    draw_snake(game_board);
    draw_food(game_board)
}

function check_death()
{
    game_over = outside_grid(get_snake_head()) || snake_intersection();
}