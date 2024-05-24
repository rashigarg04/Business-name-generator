function generateRandomWords() {
    let rand = Math.random();
    let first, second, third;

    // Connect first
    if (rand < 0.33) {
        first = "Crazy";
    } else if (rand < 0.66) {
        first = "Amazing";
    } else {
        first = "Fire";
    }

    // Connect second
    if (rand < 0.33) {
        second = "Engine";
    } else if (rand < 0.66) {
        second = "Foods";
    } else {
        second = "Garments";
    }

    // Connect third
    if (rand < 0.33) {
        third = "Bros";
    } else if (rand < 0.66) {
        third = "Limited";
    } else {
        third = "Hub";
    }

    let result = `${first} ${second} ${third}`;
    document.getElementById('result').innerText = result;
    console.log(result);
}
