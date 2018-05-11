// This is not meant for future NSS student consumption.  It is the innerworkings of doing everything possible to avoid hard coding.
const Title = document.getElementsByClassName('main_title')[0];
const Content = document.getElementsByClassName('main_content')[0];

// axios Plugin method
axios.get('./data/factory.json')
.then(r = response => {
  console.log(response.data.slide1);
  dom(response)
})
.catch(function(error) {
  console.log(error);
});

// function that prints to First title slide
const dom = response => {
  const lazy = response.data.slide1
  console.log(lazy);
  Title.innerHTML = `
    ${lazy.title}
  `;
  Content.innerHTML = `
    ${lazy.content}
  `;
};

// native Fetch API method
// const getData = () => {
//   fetch('./data/factory.json')
//     .then(
//       (r = response => {
//         if (response.status !== 200) {
//           console.log(
//             'Looks like there was a problem. Status Code: ' + response.status
//           );
//           return;
//         }
//         response.json().then(
//           (r = data => {
//             console.log(data);
//             dom(data)
//           })
//         );
//       })
//     )
//     .catch(function(err) {
//       console.log('Fetch Error', err);
//     });
// }
// getData()