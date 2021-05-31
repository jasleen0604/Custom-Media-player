
let apiKey = "AIzaSyC7S9v7Zzj3ledY0cM5uv2N-9rppC8yM5Y";
let ytChannelID = "UC7rNzgC2fEBVpb-q_acpsmw";

async function getContent(apikey, channelID) {
  let response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&order=date&channelId=${channelID}&key=${apikey}`)
  let data = await response.json()
  console.log(data);
  getVideos(data, channelID);
}

function getVideos(data, channelID) {
  for (let idx = 0; idx < data.items.length; idx++) {
    // console.log(idx);
    let currItem = data.items[idx];
    let currVideoId = currItem.id.videoId;
    // let currVideoLink = ytlink + currVideoId;
    // console.log(currVideoLink);
    console.log(currVideoId);
    // let videoElem = document.createElement("div");
    // videoElem.innerHTML = `<iframe frameborder="0" allowfullscreen width="320" height="240" src="http://www.youtube.com/embed/${currVideoId}?rel=0&showinfo=0&autohide=1&modestbranding=1">
    // </iframe>`;

    let videoElem = document.querySelector(".channel-1 .all-videos");
    videoElem.innerHTML = `<div class="video-container">
                    <div class="video-frame"><iframe src="http://www.youtube.com/embed/${currVideoId}?rel=0&showinfo=0&autohide=1&modestbranding=1" frameborder="0"></iframe></div>
                    <div class="video-title"></div>
                    </div>`
    videosDiv.appendChild(videoElem);
  }
  console.log("------------------------------------------------");
}
getContent(apiKey, ytChannelID);
        //getContent(apiKey, "UCJskGeByzRRSvmOyZOz61ig");
        //getContent(apiKey, "UCJqx8MM4gDPDy8TqVVlPyLw");
