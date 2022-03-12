import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const card = document.createElement('div');
  const headlineElm = document.createElement('div');
  const author = document.createElement('div');
  const imgCon = document.createElement('div');
  const img  = document.createElement('img');
  const span = document.createElement('span');

  card.classList.add('card');
  headlineElm.classList.add('headline');
  author.classList.add('author');
  imgCon.classList.add('img-container');

  headlineElm.textContent = article.headline;
  img.src = article.authorPhoto;
  span.textContent = `By ${article.authorName}`;

  card.appendChild(headlineElm);
  card.appendChild(author);
  author.appendChild(imgCon);
  author.appendChild(span);
  imgCon.appendChild(img);

  return card;


}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const entryPoint = document.querySelector(selector);
  axios.get("http://localhost:5000/api/articles")
  .then(res => {
    console.log(res.data.articles.bootstrap);
      res.data.articles.bootstrap.forEach(article => {
        const bootCard = Card({headline: article.headline, authorName: article.authorName, authorPhoto: article.authorPhoto});
        entryPoint.appendChild(bootCard);
      });
      res.data.articles.javascript.forEach(article => {
        const bootCard = Card({headline: article.headline, authorName: article.authorName, authorPhoto: article.authorPhoto});
        entryPoint.appendChild(bootCard);
      });
      res.data.articles.jquery.forEach(article => {
        const bootCard = Card({headline: article.headline, authorName: article.authorName, authorPhoto: article.authorPhoto});
        entryPoint.appendChild(bootCard);
      });
      res.data.articles.node.forEach(article => {
        const bootCard = Card({headline: article.headline, authorName: article.authorName, authorPhoto: article.authorPhoto});
        entryPoint.appendChild(bootCard);
      });
      res.data.articles.technology.forEach(article => {
        const bootCard = Card({headline: article.headline, authorName: article.authorName, authorPhoto: article.authorPhoto});
        entryPoint.appendChild(bootCard);
    });
  
  });
}

export { Card, cardAppender }










// const newArray = []
//   const entryPoint = document.querySelector(selector);
//   axios.get("http://localhost:5000/api/articles")
//   .then(res => {
//     console.log(res.data.articles);
//     res.data.articles.bootstrap[0].forEach(element => {
//         const artCard = Card(element.headline, element.authorName, element.authorPhoto);
//         entryPoint.appendChild(artCard);
//       });
//     res.data.articles.javascript.forEach(element => {
//         const artCard = Card(element.headline, element.authorName, element.authorPhoto);
//         entryPoint.appendChild(artCard);
//       });
//     res.data.articles.jquery.forEach(element => {
//       const artCard = Card(element.headline, element.authorName, element.authorPhoto);
//       entryPoint.appendChild(artCard);
//       });
//     res.data.articles.node.forEach(element => {
//       const artCard = Card(element.headline, element.authorName, element.authorPhoto);
//       entryPoint.appendChild(artCard);
//       });
//     res.data.articles.technology.forEach(element => {
//       const artCard = Card(element.headline, element.authorName, element.authorPhoto);
//       entryPoint.appendChild(artCard);
//     });
//   })
//   .catch(err => {
//     console.error(err);
//   })