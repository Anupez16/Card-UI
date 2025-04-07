const users = [
    {
      name: "Alice Johnson",
      title: "Frontend Developer",
      location: "San Francisco, CA",
      profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
      followers: 1200,
      following: 300,
      posts: 150
    },
    {
      name: "Bob Smith",
      title: "Product Manager",
      location: "New York, NY",
      profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
      followers: 980,
      following: 410,
      posts: 200
    },
    {
      name: "Carla Mendes",
      title: "UX Designer",
      location: "Austin, TX",
      profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
      followers: 2200,
      following: 180,
      posts: 340
    },
    {
      name: "Daniel Lee",
      title: "Data Scientist",
      location: "Seattle, WA",
      profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
      followers: 3100,
      following: 290,
      posts: 95
    },
    {
      name: "Elena Gomez",
      title: "Backend Developer",
      location: "Chicago, IL",
      profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
      followers: 1700,
      following: 260,
      posts: 132
    },
    {
      name: "Franklin Park",
      title: "DevOps Engineer",
      location: "Denver, CO",
      profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
      followers: 1100,
      following: 210,
      posts: 178
    },
    {
      name: "Grace Lee",
      title: "AI Researcher",
      location: "Boston, MA",
      profileImage: "https://randomuser.me/api/portraits/women/7.jpg",
      followers: 4500,
      following: 300,
      posts: 230
    },
    {
      name: "Henry Adams",
      title: "Cloud Architect",
      location: "Los Angeles, CA",
      profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
      followers: 880,
      following: 140,
      posts: 102
    },
    {
      name: "Isha Verma",
      title: "ML Engineer",
      location: "Bangalore, India",
      profileImage: "https://randomuser.me/api/portraits/women/9.jpg",
      followers: 3200,
      following: 510,
      posts: 412
    },
    {
      name: "James O'Neil",
      title: "Cybersecurity Analyst",
      location: "London, UK",
      profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
      followers: 600,
      following: 80,
      posts: 76
    }
  ];
  
  
  const container = document.getElementById("card-container");
  
  // Dynamically generate cards
  users.forEach(user => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `
      <div class="card">
        <div class="img">
          <img src="${user.profileImage}" alt="${user.name}" />
        </div>
        <div class="text">
          <h4>${user.name}</h4>
          <h5>${user.title}</h5>
          <h6>${user.location}</h6>
        </div>
        <div class="icons">
          <div class="icon1">
            <i class="ri-camera-fill"></i>
            <h5>${user.posts}</h5>
          </div>
          <div class="icon1">
            <i class="ri-heart-fill"></i>
            <h5>${user.followers}</h5>
          </div>
          <div class="icon1">
            <i class="ri-user-fill"></i>
            <h5>${user.following}</h5>
          </div>
        </div>
        <div class="button">
          <button>Follow</button>
        </div>
      </div>
    `;
    container.appendChild(slide);
  });
  
  // ✅ Initialize Swiper AFTER cards are added
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  
  