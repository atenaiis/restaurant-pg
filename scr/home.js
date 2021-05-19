mport family from './img/postre1.jpeg';


const homeSection = () => {
  const homeText = "Camarella's is a place where you will find home made products using fresh and local products";
  const homesection = document.createElement('div');

  // Set H1
  const homeHeading = document.createElement('h1');
  homeHeading.innerText = "Camarella's";
  homesection.append(homeHeading);

  // Set P
  const homeParagraph = document.createElement('p');
  homeParagraph.innerText = homeText;
  homesection.append(homeParagraph);

  // Family Image
  const familyPicture = new Image();
  familyPicture.src = family;
  familyPicture.id = 'bakery';
  familyPicture.setAttribute('width', '300px');
  homesection.append(familyPicture);

  return homesection;
};


export default homeSection;