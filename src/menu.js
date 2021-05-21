const menuSection = () => {
  // Set new Div
  const divMenu = document.createElement('div');

  // Set H1
  const menuHeading = document.createElement('h1');
  menuHeading.innerText = 'This is our Menu';
  divMenu.prepend(menuHeading);

  const divFlex = document.createElement('div');
  divFlex.id = 'div-flex';

  const breakfast = document.createElement('ul');
  let ulContent = '<h2> Desserts </h2><li>Granola bars ... ($50)</li><li>Banana Bread ... ($25)</li><li>Strawberry Cheessecake ... ($22)</li><li>Mango Mousse ... ($32)</li>';
  breakfast.innerHTML = ulContent;
  divFlex.append(breakfast);

  const daily = document.createElement('ul');
  ulContent = '<h2> Preserves</h2><li>Jam ... ($18)</li><li>Peppers ... ($25)</li><li>Eggnog ... ($35)</li><li>Mezcal with citrus touch ... ($55)</li>';
  daily.innerHTML = ulContent;
  divFlex.append(daily);

  divMenu.append(divFlex);

  return divMenu;
};


export default menuSection;