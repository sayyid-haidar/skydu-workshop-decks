const storiesContent = document.querySelector("#my-story .body");
const socialsMediaContent = document.querySelector("#find-me-in .content");

const stories = [
  {
    title: "Pergi ke pantai",
    image: "https://www.splitshire.com/wp-content/uploads/2017/05/SplitShire-141.jpg",
    paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ullam reiciendis ut molestiae inventore. Qui eveniet doloribus suscipit saepe? Dolor?"
  },
  {
    title: "Pergi ke pantai",
    image: "https://www.splitshire.com/wp-content/uploads/2017/05/SplitShire-141.jpg",
    paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ullam reiciendis ut molestiae inventore. Qui eveniet doloribus suscipit saepe? Dolor?"
  },
  {
    title: "Pergi ke pantai",
    image: "https://www.splitshire.com/wp-content/uploads/2017/05/SplitShire-141.jpg",
    paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ullam reiciendis ut molestiae inventore. Qui eveniet doloribus suscipit saepe? Dolor?"
  },
  {
    title: "Pergi ke pantai",
    image: "https://www.splitshire.com/wp-content/uploads/2017/05/SplitShire-141.jpg",
    paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ullam reiciendis ut molestiae inventore. Qui eveniet doloribus suscipit saepe? Dolor?"
  },
  {
    title: "Pergi ke pantai",
    image: "https://www.splitshire.com/wp-content/uploads/2017/05/SplitShire-141.jpg",
    paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ullam reiciendis ut molestiae inventore. Qui eveniet doloribus suscipit saepe? Dolor?"
  }
];

const socials = [
  {
    background: "#3b5998",
    icon: "fab fa-facebook-square",
    url: "#"
  },
  {
    background: "#00acee",
    icon: "fab fa-twitter-square",
    url: "#"
  },
  {
    background: "#dd2a7b",
    icon: "fab fa-instagram",
    url: "#"
  },
  {
    background: "#80604d",
    icon: "fab fa-medium-m",
    url: "#"
  }
];

function renderStoriesContent(image, title, paragraph) {
  storiesContent.insertAdjacentHTML(
    "afterbegin",
    `
      <div class="card">
        <div class="card-header">
            <img src="${image}">
        </div>
        <div class="card-body">
            <h1>${title}</h1>
            <p>${paragraph}</p>
        </div>
        </div>
    `
  );
}

function renderSocialsContent(background, icon, url) {
  socialsMediaContent.insertAdjacentHTML(
    "afterbegin",
    `
        <a href="${url}" style="background: ${background}"><i class="${icon}"></i></a>
    `
  );
}

stories.map(story =>
  renderStoriesContent(story.image, story.title, story.paragraph)
);

socials.map(social =>
  renderSocialsContent(social.background, social.icon, social.url)
);
