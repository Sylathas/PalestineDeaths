function Start() {
    getSampleText();
};

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    getSampleText();
}
async function getSampleText() {
    this.document.getElementById('start').style.display = 'none';
    this.document.getElementById('victim').style.display = 'inline';
    let victims = await fetch('nomi.txt')
        .then((response) => response.text())
        .then((text) => {
            return text;
        });
    this.document.getElementById('victims').innerHTML = victims;
    let lines = victims.split("\n");
    let i = 0;
    while (lines[i]) {
        this.document.getElementById('victim').innerHTML = lines[i];
        await this.timeout(document.getElementById("delayInput").value * 1000);
        i++;
        if (!lines[i]) {
            i = 0;
        }
    }
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function changeView() {
    if (this.document.getElementById('victim').style.display === 'none') {
        this.document.getElementById('victim').style.display = 'inline';
        this.document.getElementById('victimsNum').style.display = 'inline';
        this.document.getElementById('delay').style.display = 'inline';
        this.document.getElementById('victims').style.display = 'none';
        this.document.getElementById('listCheck').innerHTML = 'list';
        this.document.getElementById('listCheck').style.color = 'red';
    } else {
        this.document.getElementById('victim').style.display = 'none';
        this.document.getElementById('victimsNum').style.display = 'none';
        this.document.getElementById('delay').style.display = 'none';
        this.document.getElementById('victims').style.display = 'inline';
        this.document.getElementById('listCheck').innerHTML = 'Back to count';
        this.document.getElementById('listCheck').style.color = 'white';
    }
}