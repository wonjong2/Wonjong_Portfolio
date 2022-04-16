var workEl = document.getElementById("work-list");

// Array for gitHub URLs
const gitHubUrl = {
    "first-project": "https://github.com/levisgaragegroupinc/translation_app",
    "second-project": "https://github.com/wonjong2/Week6_Weather_Dashboard",
    "third-project": "https://github.com/wonjong2/Week5_Work_Day_Scheduler"
}

//  Added event listener 
workEl.addEventListener("click", handleClickEventOnWork);


function handleClickEventOnWork(event) {
    event.preventDefault();

    var eventEl = event.target;
    var url;

    // If a user click "[Go To GitHub  ]", then link to GitHub page
    if(eventEl.nodeName === "P") {
        url = gitHubUrl[event.target.id];
    }
    // Else link to the deployed web page
    else {
        url = eventEl.parentNode.parentNode.href;
    }

    // Open the url in a new tab
    window.open(url, '_blank').focus();
}