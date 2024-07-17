/*
🎬 Video playlist UI Design like Skillshare With Vanilla JavaScript
👨🏻‍⚕️ By: Coding Design

You can do whatever you want with the code. However if you love my content, you can subscribed my YouTube Channel
🌎link: www.youtube.com/codingdesign
*/

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'جيش بشار الأسد يقومون بضرب وتعذيب مدني اعزل، بتاريخ: 11/7/2012 ',
        'name': 'video_1.mp4',
        'duration': '0:22',
    },
    {
        'id': 'a2',
        'title': 'أحد عناصر جيش بشار الأسد يقوم بإعدام رجل مدني ',
        'name': 'video_2.mp4',
        'duration': '2:45',
    },
    {
        'id': 'a3',
        'title': 'فارغ',
        'name': '',
        'duration': '24:49',
    },

    {
        'id': 'a4',
        'title': 'فارغ',
        'name': '',
        'duration': '3:59',
    },
    {
        'id': 'a5',
        'title': 'تعذيب المدنيين على يد ميليشيات نظام بشار الأسد وإجبارهم على تقليد اصوات الحيوانات',
        'name': 'video_5.mp4',
        'duration': '1:25',
    },
    {
        'id': 'a6',
        'title': 'جنود جيش بشار الأسد يقومون بقتل المدنيين وتصويرهم وشتمهم ',
        'name': 'video_6.mp4',
        'duration': '0:37',
    },
    {
        'id': 'a7',
        'title': 'إعدام المدنيين على يد جيش بشار الأسد وميليشياته في ريف حمص',
        'name': 'video_7.mp4',
        'duration': '0:29',
    },

    {
        'id': 'a8',
        'title': 'جيش نظام بشار الأسد يقوم بتعذيب المدنيين',
        'name': 'video_8.mp4',
        'duration': '2:39',
    },
    {
        'id': 'a9',
        'title': 'جيش بشار الأسد يقومون بقتل احد جنود الجيش الحر ويقومون بالرقص على جثته وشتمه ',
        'name': 'video_9.mp4',
        'duration': '1:07',
        
    },
    {   'id': 'a10',
        'title': 'جيش بشار الأسد وشبيحته يجردون رجل مدني من ملابسه ويقومون بتعذيبه',
        'name': 'video_10.mp4',
        'duration': '1:07'
    },    
    
    

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';
// adding a title 'ammar'
main_video_title.innerHTML = data[0].title
// 

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});

/*let data = [{
  'thumbnail':'imsges/Background-image-blue.jpg'
}]
 document.body.style.setProperty('--url','url(images/'+match_video.thumbnail+')');
 
 videos.forEach(selected_video =>{
   selected_video.onclick = () =>{
     
     docment.body.style.setProperty('--url', 'ur(images/'+match_video.thumbnail+')');
   }
 }); */

