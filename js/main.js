//The user will click a button to get an suggested activity.
//get api key
//get date
//get user input in a varibale


//fetch request from api

//willl get response from boredom api -> object
//process the response json object, needs to be an json object
//do a task with response (activity and type)
//display activity and type

//api: https://bored-api.appbrewery.com/random


document.querySelector('button').addEventListener('click', getActivity)

function getActivity() {

//api was blocked from the browser. Fixed the URL by sending the request through a CORS proxy (api.allorigins.win) so the browser accepts the response.
//info on cors here https://httptoolkit.com/blog/cors-proxies/?utm_source=chatgpt.com
    fetch('https://api.allorigins.win/raw?url=https://bored-api.appbrewery.com/random')
        .then(res => res.json())
        .then(res => {
            console.log(res)


            document.querySelector('h2').innerText = res.activity
            document.querySelector('h3').innerText = res.type
        })

        .catch(err => {
            console.log(`error ${err}`)
        });

}


