import React, { useEffect } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { useState } from 'react'
import { API_KEY, value_converter } from '../../data'

const PlayVideo = ({videoId}) => {

const[apiData,setApiData] = useState(null);
const fetchVideoData = async()=>{
  const videoDetails_url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
  await fetch(videoDetails_url).then(res=>res.json()).then(data=> setApiData(data.items[0]))
}
useEffect(()=>{
  fetchVideoData();
}, [])

  return (
    <div className='play-video'>
      {/*<video src={video1} controls autoPlay muted></video>*/}
      <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
      <div className="play-video-info">
        <p>{apiData?value_converter(apiData.statistics.viewCount):"16K"} &bull; 4 days ago</p>
        <div>
          <span><img src={like} alt="" />425</span>
          <span><img src={dislike} alt="" />0</span>
          <span><img src={share} alt="" />share</span>
          <span><img src={save} alt="" />save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>Great</p>
          <span>1M Subscribers</span>
        </div>
        <div>
          <button>Subscribe</button>
        </div>
        </div>
        <div className="vid-description">
          <p>Channel that makes learning easy</p>
          <p>Subscribe Great to watch more videos on web development</p>
          <hr />
          <h4>430 comments</h4>
          <div className="comment">
            <img src={user_profile} alt="" />
          </div>
          
          <h3>Abscondita Akinyi <span>16 hours ago</span></h3>
          <p>Thank you so much it was really it is a great channel to learn web development.</p>
          <div className="comment-action">
            <img src={like} alt="" />
            <span>500</span>
            <img src={dislike} alt="" />
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
          </div>
          <h3>Sandra Nasike <span>3 days ago</span></h3>
          <p>Thank you so much it was really helpful.</p>
          <div className="comment-action">
            <img src={like} alt="" />
            <span>300</span>
            <img src={dislike} alt="" />
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
          </div>
          <h3>Chris Maiyo <span>4 days ago</span></h3>
          <p>it made my work really easy.</p>
          <div className="comment-action">
            <img src={like} alt="" />
            <span>256</span>
            <img src={dislike} alt="" />
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
          </div>
          <h3>Ellon Mordecai <span>4 days ago</span></h3>
          <p>I loved every part it is a great channel to learn web development.</p>
          <div className="comment-action">
            <img src={like} alt="" />
            <span>323</span>
            <img src={dislike} alt="" />
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
          </div>
          <h3>Benard Kogola <span>4 days ago</span></h3>
          <p>Thank you so much it was really it is a great channel to learn web development.</p>
          <div className="comment-action">
            <img src={like} alt="" />
            <span>550</span>
            <img src={dislike} alt="" />
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
          </div>
          <h3>Beatrice Ogolla <span>4 days ago</span></h3>
          <p>Thank you web development made easy.</p>
          <div className="comment-action">
            <img src={like} alt="" />
            <span>600</span>
            <img src={dislike} alt="" />
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
          </div>
          <h3>Debby Kogola <span>5 days ago</span></h3>
          <p>Thank you so much i enjoyed the video it was really it is a great channel to learn web development.</p>
          <div className="comment-action">
            <img src={like} alt="" />
            <span>525</span>
            <img src={dislike} alt="" />
          </div>
        </div>
      

    </div>
  )
}

export default PlayVideo