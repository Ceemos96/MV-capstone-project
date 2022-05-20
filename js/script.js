const speakersDetails = [

  {
    name: 'Susan Blake',
    designation: 'Senior Energy Security Engineer at Harvard',
    description: 'An expert in energy management across all energy sources and an industry respected speaker',
    profileImage: './images/speakers/speaker-1.jpg',
    profileImageBg: './images/background-images/chess-bg.png',
  },

  {
    name: 'Tasha Kanoute',
    designation: 'Wind Energy Expert at Cornell',
    description: 'A professional in developing technologies to harness wind energy and other energy alternatives',
    profileImage: './images/speakers/speaker-2.jpg',
    profileImageBg: './images/background-images/chess-bg.png',
  },

  {
    name: 'Ella Green',
    designation: 'Director of Solar Studies at Oxford',
    description: 'An Industry respected Speaker on issues related to Solar Energy',
    profileImage: './images/speakers/speaker-3.jpg',
    profileImageBg: './images/background-images/chess-bg.png',
  },

  {
    name: 'Jennifer Sampson',
    designation: 'Senior Hydro-Energy speacialist in NYU',
    description: 'A seasoned professional and famous Hydro-Energy writer with a best selling book',
    profileImage: './images/speakers/speaker-4.jpg',
    profileImageBg: './images/background-images/chess-bg.png',
  },

  {
    name: 'Chris Waller',
    designation: 'Senior Energy Security Engineer at Harvard',
    description: 'An expert in energy management across all sources and an industry respected speaker',
    profileImage: './images/speakers/speaker-5.jpg',
    profileImageBg: './images/background-images/chess-bg.png',
  },

  {
    name: 'John Makalele',
    designation: 'Senior Energy Security Engineer at Harvard',
    description: 'An expert in energy management across all sources and an industry respected speaker',
    profileImage: './images/speakers/speaker-6.jpg',
    profileImageBg: './images/background-images/chess-bg.png',
  },
];

// dynamically add the speakers

const speakersSection = document.getElementById('speakers-section');

const speakerTitle = document.createElement('h3');
speakerTitle.id = 'speakers-title';
speakerTitle.classList.add('fw-bolder', 'mb-3');
speakerTitle.textContent = 'Featured Speakers';
speakersSection.appendChild(speakerTitle);

const rule = document.createElement('div');
rule.classList.add('rule');
speakersSection.appendChild(rule);

const speakersContainer = document.createElement('div');
speakersContainer.classList.add('container', 'd-flex', 'speaker-wrapper', 'my-5', 'justify-content-center');

for (let i = 0; i < speakersDetails.length; i += 1) {
  const speakerItem = document.createElement('div');
  speakerItem.classList.add('speaker-item', 'd-flex', 'col-sm-12', 'col-md-5', 'col-lg-5');

  const speakerProfileImage = document.createElement('div');
  speakerProfileImage.classList.add('speaker-image');

  const speakerImageBackground = document.createElement('img');
  speakerImageBackground.classList.add('speaker-image-background');
  speakerImageBackground.alt = 'image-bg';
  speakerImageBackground.src = './images/background-images/chess-bg.png';
  speakerProfileImage.appendChild(speakerImageBackground);

  const speakerImage = document.createElement('img');
  speakerImage.classList.add('speaker-pic');
  speakerImage.alt = 'image';
  speakerImage.src = speakersDetails[i].profileImage;
  speakerProfileImage.appendChild(speakerImage);

  speakerItem.appendChild(speakerProfileImage);

  const speakerText = document.createElement('div');
  speakerText.classList.add('speaker-text', 'py-3', 'px-3');

  const speakerName = document.createElement('p');
  speakerName.classList.add('speaker-name');
  speakerName.textContent = speakersDetails[i].name;
  speakerText.appendChild(speakerName);

  const speakerDesignation = document.createElement('p');
  speakerDesignation.classList.add('speaker-designation');
  speakerDesignation.textContent = speakersDetails[i].designation;
  speakerText.appendChild(speakerDesignation);

  const speakerDescription = document.createElement('p');
  speakerDescription.classList.add('speaker-desc');
  speakerDescription.textContent = speakersDetails[i].description;
  speakerText.appendChild(speakerDescription);

  speakerItem.appendChild(speakerText);

  speakersContainer.appendChild(speakerItem);

  speakersSection.appendChild(speakersContainer);
}