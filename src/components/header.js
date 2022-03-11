const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //


  const headerD = document.createElement('div');
  const dateElm = document.createElement('span');
  const titleElm = document.createElement('h1');
  const tempElm = document.createElement('span');

  headerD.classList.add('header');
  dateElm.classList.add('date');
  tempElm.classList.add('temp');

  dateElm.textContent = date;
  titleElm.textContent = title;
  tempElm.textContent = temp;

  headerD.appendChild(dateElm);
  headerD.appendChild(titleElm);
  headerD.appendChild(tempElm);

  return headerD

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const entryPoint = document.querySelector(selector);

  const headerCard = Header('Title is Here', 'July 27', '78 degrees');
  entryPoint.appendChild(headerCard)
}

export { Header, headerAppender }
