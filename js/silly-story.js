// VARIABLE DECLARATIONS

let customName = document.getElementById("customname");
let randomize = document.querySelector(".randomize");
let story = document.querySelector(".story");

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

let insertX = ['Donald Trump', 'Jackie Chan', 'Santa Claus'];
let insertY = ['Area 51', 'Death Valley', 'Aruba'];
let insertZ = ['spontaneously combusted', 'rapidly sublimated', 'evaporated instantly'];
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function result() {
    let newStory = storyText;

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    if (customName.value !== "") {
        newStory = newStory.replace('Bob', customName.value);
    }

    if (document.getElementById("metric").checked) {
        let weight = Math.round(300 * 0.453592);
        newStory = newStory.replace('300 pounds', weight + ' kg');

        let temp = Math.round((94 - 32) * 5 / 9);
        newStory = newStory.replace('94 fahrenheit', temp + ' Celsius');
    }

    story.textContent = newStory;
    story.style.visibility = "visible";
}

// EVENT LISTENERS

randomize.addEventListener("click", result);
