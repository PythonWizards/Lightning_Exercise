// This is not meant for future NSS student consumption.  It is the innerworkings of doing everything possible to avoid hard coding.
const slideThatWeAreCurrentlyOn = document.querySelectorAll('#slides .slide');

const getData = () => {
  fetch('./data/factory.json')
    .then(
      (r = response => {
        if (response.status !== 200) {
          console.log(
            'Looks like there was a problem. Status Code: ' + response.status
          );
          return;
        }
        response.json().then(
          (r = data => {
            console.log(data);
            dom(data)
          })
        );
      })
    )
    .catch(function(err) {
      console.log('Fetch Error', err);
    });
}

getData()


const dom = data => {
    slideThatWeAreCurrentlyOn.forEach(r => {
        console.log(r.title)
        r.innerHtml = `
        <h1>${data.title}</h1>
        `
    })
}