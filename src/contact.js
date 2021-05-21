import cafe from './images/postre2.jpg';

const contactText = '<p> Oaxaca, Mexico<br>Great place to live\n<br><strong>Phone:</strong> 951 - 647 - 7957<br><strong>Fax:</strong> 951 - 647 - 7957<br><strong>Email:</strong> getintocuh@camarellas.com<br></p>';

const contactSection = () => {
  const divContact = document.createElement('div');

  // Set H1
  const menuHeading = document.createElement('h1');
  menuHeading.innerText = "Tell us when you'll be here ";
  divContact.prepend(menuHeading);

  // Family Image
  const cafePicture = new Image();
  cafePicture.src = cafe;
  cafePicture.id = 'cafe';
  cafePicture.setAttribute('width', '300px');
  divContact.append(cafePicture);

  // Set P
  const contactParagraph = document.createElement('div');
  contactParagraph.innerHTML = contactText;
  divContact.append(contactParagraph);

  return divContact;
};

export default contactSection;