var titles = [
  "@",
  "@h",
  "@hu",
  "@huy",
  "@huyp",
  "@huyph",
  "@huypha",
  "@huypham",
  "@huypham i",
  "@huypham is",
  "@huypham is m",
  "@huypham is me",
];

function changeTitle() {
  var index = 0;

  setInterval(function () {
    document.title = titles[index];
    index = (index + 1) % titles.length;
  }, 1000);
}

changeTitle();
