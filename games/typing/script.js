const RANDOM_TEXT_URL = "http://api.quotable.io/random";
const text_display_elem = document.getElementById("text-dis");
const input_elem = document.getElementById("input");
const timer_elem = document.getElementById("timer");

input_elem.addEventListener("input", () => {
    const array_text = text_display_elem.querySelectorAll("span");
    const array_value = input_elem.value.split("");

    let correct = true;
    
    array_text.forEach((character_span, index) => {
        const character = array_value[index];
        if(character == null) {
            character_span.classList.remove("correct");
            character_span.classList.remove("incorrect");
            correct = false;
        }
        else if(character === character_span.innerText)
        {
            character_span.classList.add("correct");
            character_span.classList.remove("incorrect");
        }
        else
        {
            character_span.classList.remove("correct");
            character_span.classList.add("incorrect");
            correct = false;
        }
    });

    if(correct) 
    {
        alert("Your time was " + timer_elem.innerText + " seconds!");
        render_next_text();
    }
});

function get_random_text()
{
    return fetch(RANDOM_TEXT_URL).then(response => response.json()).then(data => data.content);
}

async function render_next_text()
{
    const text = await get_random_text();
    text_display_elem.innerText = "";
    text.split("").forEach(char => {
        const char_span = document.createElement("span");
        char_span.innerText = char;
        text_display_elem.appendChild(char_span);
    });
    input_elem.value = null;
    start_timer();
}

let start_time;

function start_timer()
{
    timer_elem.innerText = 0;
    start_time = new Date();
    setInterval(() => {
        timer.innerText = get_timer_time();
    }, 1000);
}

function get_timer_time()
{
    return Math.floor((new Date() - start_time) / 1000);
}

render_next_text();
