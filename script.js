let contentGridElement = document.getElementById('contentGrid');

let jsonDatabase = [
  {
    "name" : "Keah Brown",
    "job" : "Writer",
    "significance" : "Is the author of the 2019 book \"The Pretty One: On Life, Pop Culture, Disability and Other Reasons to Fall in Love With Me,\" pens essays about her cerebral palsy and the mental battle that sometimes comes with her condition.",
    "quote" : " \"Body positivity means that I embrace every bump, scar, and bruise I have even when it feels impossible. It means celebrating every other body too—bodies of color, disabled bodies, non-binary bodies, LGBTQ+ bodies, and not just the bodies with a little chub that are still acceptable. Body positivity means celebration in the face of a world that doesn’t recognize the beauty in bodies like mine.\" ",
    "picture_url" : "https://keahbrown.com/wp-content/uploads/2021/03/keahbrownsittingsmiling.jpeg",
    "color" : "#ce93d8"
  },

  {
    "name" : "Mik Zazon",
    "job" : "Content Creator",
    "significance" : "She is a TikTok star who urges followeers to show up exactly as they are. She’s the queen of posting (and embracing) cellulite, tummy rolls, and hip dips, not to mention side-by-side, self-love-centric comparisons of herself and other influencers wearing the same outfit to show that all bodies are beautiful.",
    "quote" : " \"It’s like we are living in a marathon being told there is a finish line just up ahead after losing the weight, but once we get there they tell us to run a different direction. And it never stops.⁣ Because there is no finish line up ahead.⁣ The finish line is your body right now, this very second, however it chooses to show up because your body is the least interesting thing about you.⁣\" ",
    "picture_url" : "https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/105533785_879854915868588_6252905995864905132_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=9267fe&_nc_ohc=5grawXrIjJ0AX8jmiJB&_nc_ht=scontent-lga3-2.xx&oh=00_AT_TNFZsUYrby29jGq2zbROz7UksT-XfcqVyxBzNiX1ILQ&oe=6294B25B",
    "color" : "#ce93d8"
  },

  {
    "name" : "Iskra Lawrence",
    "job" : "Model",
    "significance" : "She shares real talk on her social pages, promoting self-love and body acceptance. In one post, she reveals her struggles in fashion and how she’s risen above the scrutiny.",
    "quote" : " \“All I found was failure (because you can’t change who you are), emptiness (because my time and energy was being used up trying to achieve something completely self-absorbed and shallow sacrificing doing things I loved) and unhappiness (because no restrictive diet or abusive exercise feels good)\”.",
    "picture_url" : "https://www.hellomagazine.com/imagenes/fashion/hfm/2019010866175/iskra-lawrence-new-interview-cover-star-hfm/0-312-624/iskra-lawrence-cover-new-z.jpg",
    "color" : "#ce93d8"
  },

  {
    "name" : "Lizzo",
    "job" : "Singer",
    "significance" : "She has become one of the reigning queens of the topic. In the intro to her song \“My Skin\” on her 2015 album Big Grrrl Small World, for example, she discusses how learning to love one’s body is a challenge every person — specifically every woman — goes through.",
    "quote" : "\"Learning to love yourself and like learning to love your body is like that whole. Journey that I feel like every person. But more specifically women, have to go through. So I feel like doing this is a good way to kinda break through. And kinda seal the last chapter of the \"learning to love\" and just loving.\"",
    "picture_url" : "https://media1.popsugar-assets.com/files/thumbor/8OS_Siqq_Ovm0Mt-5OysQt1amEM/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/09/24/636/n/1922729/tmp_uGXPh4_5be74baada75f19e_VO1120_Cover.jpg",
    "color" : "#ce93d8"
  },

  {
    "name" : "Mama Cāx",
    "job" : "(Role) Model",
    "significance" : "She is an advocate known for her work to make the fashion industry more inclusive for differently abled women and women of color. After being diagnosed with cancer at the age of 14, Mama Cāx was able to keep her life at the expense of losing her right leg.",
    "quote" : "\“I want to empower other women with disabilities to know and feel like they matter–and that there is someone out there trying to pave the way for them.\"",
    "picture_url" : "https://www.refinery29.com/images/9076986.jpg?format=webp&width=680&height=1020&quality=85",
    "color" : "#ce93d8"
  },

  {
    "name" : "Winnie Harlow",
    "job" : "Model",
    "significance" : "She made a huge splash in the fashion world. Harlow has a skin condition called vitiligo, where parts of her skin experience depigmentation, but she didn't let this stop her from slaying the modeling scene. She has significant success while inspiring others along the way. Harlow frequently appears in ad campaigns and runway shows.",
    "quote" : "\"I am happy with my skin, and I'm proud of my skin, which is why I wear it so boldly. But if a job wanted me to, say, try a smoky eye and cover the vitiligo around my eye, I wouldn't have a problem with that.\"",
    "picture_url" : "https://media1.popsugar-assets.com/files/thumbor/HI-YiKSprLyleHGgxD_SZE3PXPY/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2022/03/01/095/n/1922153/eae855e9621ec5a0ba3f37.96315177_Winnie_CaySk.jpg",
    "color" : "#ce93d8"
  },

  // {
  //   "name" : "",
  //   "job" : "",
  //   "significance" : "",
  //   "quote" : "",
  //   "picture_url" : "",
  //   "color" : "#ce93d8"
  // },

];

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

function createElementProper(incomingJSON) {

  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['color'];
  newContentElement.classList.add('contentItem');

  let newContentHeading = document.createElement("H3");
  newContentHeading.innerText = incomingJSON['name'];
  newContentElement.appendChild(newContentHeading);

  let newContentJob = document.createElement("H4");
  newContentJob.innerText = "Occupation: " + incomingJSON['job'];
  newContentElement.appendChild(newContentJob);

  let newContentSignificance = document.createElement("H4");
  newContentSignificance.innerText = "Significance: " + incomingJSON['significance'];
  newContentElement.appendChild(newContentSignificance);

  let newContentQuote = document.createElement("H4");
  newContentQuote.innerText = "Quote: " + incomingJSON['quote'];
  newContentElement.appendChild(newContentQuote);

  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  contentGridElement.appendChild(newContentElement);
}
