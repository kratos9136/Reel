

const reels = [
    {
        username: "kaushik_tiwari",
        likeCount: Math.floor(Math.random() * 10000),
        isLiked: false,
        caption: "Chilling vibes ✨",
        commentCount: 87,
        video: "https://www.pexels.com/download/video/4728120/",
        userProfile: "https://i.pinimg.com/736x/db/3c/b2/db3cb2600aafdc32eb246d69b45246f9.jpg",
        shareCount: 40,
        isFollowed: true
    },
    {
        username: "coding_guru",
        likeCount: Math.floor(Math.random() * 10000),
        isLiked: true,
        caption: "Java tips for beginners 💻",
        commentCount: 312,
        video: "https://www.pexels.com/download/video/3514521/",
        userProfile: "https://i.pinimg.com/1200x/9f/a0/af/9fa0af11303edab7b4fb3e44f3344d8f.jpg",
        shareCount: 120,
        isFollowed: false
    },
    {
        username: "travel_diaries",
        likeCount: Math.floor(Math.random() * 10000),
        isLiked: false,
        caption: "Beautiful sunset in Goa 🌅",
        commentCount: 210,
        video: "https://www.pexels.com/download/video/2795746/",
        userProfile: "https://i.pinimg.com/1200x/8d/94/34/8d943478fdfe607c3ccf0df623cd6ffd.jpg",
        shareCount: 90,
        isFollowed: true
    },
    {
        username: "foodlover",
        likeCount: Math.floor(Math.random() * 10000),
        isLiked: true,
        caption: "Tried this amazing pizza today! 🍕",
        commentCount: 150,
        video: "https://www.pexels.com/download/video/4761716/",
        userProfile: "https://i.pinimg.com/736x/9f/ae/19/9fae19c495d36c85a637c7158e7f6ce7.jpg",
        shareCount: 60,
        isFollowed: false
    },
    {
        username: "tech_updates",
        likeCount: Math.floor(Math.random() * 10000),
        isLiked: false,
        caption: "New smartphone launch 🔥",
        commentCount: 190,
        video: "https://www.pexels.com/download/video/4752905/",
        userProfile: "https://i.pinimg.com/originals/c3/f0/e3/c3f0e3a96659ea66c2d0c8ed3c74d566.gif",
        shareCount: 75,
        isFollowed: true
    },
    {
        username: "fitness_freak",
        likeCount: Math.floor(Math.random() * 10000),
        isLiked: true,
        caption: "Workout grind 💪",
        commentCount: 280,
        video: "https://www.pexels.com/download/video/7141501/",
        userProfile: "https://i.pinimg.com/1200x/f3/7b/b1/f37bb140f9625116d8711e5b81fe5c83.jpg",
        shareCount: 110,
        isFollowed: false
    },
    {
        username: "artist_world",
        likeCount: Math.floor(Math.random() * 10000),
        isLiked: false,
        caption: "New sketch completed 🎨",
        commentCount: 98,
        video: "https://www.pexels.com/download/video/3796274/",
        userProfile: "https://i.pinimg.com/1200x/b6/56/9e/b6569ecdd6dfabef48092f78d39bd58f.jpg",
        shareCount: 55,
        isFollowed: true
    },
    {
        username: "music_vibes",
        likeCount: Math.floor(Math.random() * 10000),
        isLiked: true,
        caption: "Feel the rhythm 🎵",
        commentCount: 330,
        video: "https://www.pexels.com/download/video/3189294/",
        userProfile: "https://i.pinimg.com/736x/01/52/55/015255146dd1ff09a7df91b2049322b4.jpg",
        shareCount: 140,
        isFollowed: true
    },
    {
        username: "funny_moments",
        likeCount: Math.floor(Math.random() * 10000),
        isLiked: false,
        caption: "This made my day 😂",
        commentCount: 520,
        video: "https://www.pexels.com/download/video/20185059/",
        userProfile: "https://i.pinimg.com/736x/43/51/a5/4351a52fdfc51d4703b11bda4f9acc4e.jpg",
        shareCount: 200,
        isFollowed: false
    },
    {
        username: "daily_quotes",
        likeCount: Math.floor(Math.random() * 10000),
        isLiked: true,
        caption: "Stay positive ✨",
        commentCount: 120,
        video: "https://www.pexels.com/download/video/6185623/",
        userProfile: "https://i.pinimg.com/originals/c3/c6/a0/c3c6a08ba4f7449e3c8ae68461e40357.gif",
        shareCount: 50,
        isFollowed: true
    }
];

var allReels = document.querySelector('.all-reels');

function addData() {
    var sum = ''

    reels.forEach(function (elem, idx) {
        sum = sum + `  <div class="reel">
                    <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom"> 
                        <div class="user">
                            <img src="${elem.userProfile}" alt="">
                            <h4>${elem.username}</h4>
                            <button id=${idx} class='follow'>${elem.isFollowed ? 'unFollow':'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                            <h4 class="like-icon icon"><i class="ri-heart-3-line"></i></h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                         <div class="share">
                            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                         <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
                            
                        </div>
                    </div>
                </div>`
    })


    allReels.innerHTML = sum

}

addData()

allReels.addEventListener('click', function (dets) {
    if (dets.target.className == 'like') {
        if (!reels[dets.target.id].isLiked) {
            reels[dets.target.id].likeCount++
            reels[dets.target.id].isLiked = true
        } else {
            reels[dets.target.id].likeCount--
            reels[dets.target.id].isLiked = false
        }
    }




    if (dets.target.className == 'follow') {     
        console.log();
           
        if (!reels[dets.target.id].isFollowed) {
            reels[dets.target.id].isFollowed = true
            
        }else{
            reels[dets.target.id].isFollowed = false
            
        }
        
     }
    addData()



})

