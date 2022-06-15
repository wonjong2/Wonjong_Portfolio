var workEl = document.getElementById("work-list");

// Array for gitHub URLs
const gitHubUrl = {
    "first-project": "https://github.com/wonjong2/Bens_Diner",
    "second-project": "https://github.com/levisgaragegroupinc/translation_app",
    "third-project": "https://github.com/wonjong2/Tech_Blog_MVC",
    "fourth-project": "https://github.com/wonjong2/Week6_Weather_Dashboard",
    "fifth-project": "https://github.com/wonjong2/Week5_Work_Day_Scheduler"
}

//  Added event listener 
workEl.addEventListener("click", handleClickEventOnWork);


function handleClickEventOnWork(event) {
    event.preventDefault();

    var eventEl = event.target;
    var url;

    // If a user click "[Go To GitHub  ]", then link to GitHub page
    if (eventEl.nodeName === "P") {
        url = gitHubUrl[event.target.id];
    }
    // Else link to the deployed web page
    else {
        url = eventEl.href;
    }

    // Open the url in a new tab
    window.open(url, '_blank').focus();
}