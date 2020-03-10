const menuToggler = () => {
  const toggler = document.querySelector('.menu__toggler');
  const menu    = document.querySelector('.menu');

  /*
   * Toggles on and off the 'active' class on the menu
   * and the toggler button.
   */
  toggler.addEventListener('click', () => {
    toggler.classList.toggle('active');
    menu.classList.toggle('active');
  });
};

const menuSelector = () => {
  const url = window.location.href
  const final = url.substr(url.lastIndexOf('/') + 1);
  const arr = ['#', 'projects', 'about', 'avi', 'articles', 'contact'];

  // const checker = value => {
  //   !url.some(element => value.includes(element));
  // }
  // const currentUrl = arr.filter(checker)
  let urlPath;
  arr.forEach(path => {
    if (final.indexOf(path) >= 0) {
      urlPath = path;
    };
  });
  if (urlPath === undefined) {
    const item = document.getElementById("item-home");
    item.classList.add('selected');
  } else {
    const item = document.getElementById(`item-${urlPath}`);
    item.classList.add('selected');
  }

}

export { menuToggler, menuSelector };
