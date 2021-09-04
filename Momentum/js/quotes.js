const quotes = [
  {
    quote: "세상은 느끼는 자에겐 비극이지만, 생각하는 자에겐 희극이다.",
    author: "호레이스 월폴",
  },
  {
    quote:
      "창조적인 삶을 살기 위해 우리는 잘못되는 것에 대한 두려움을 버려야 한다.",
    author: "조셉 칠턴 피어스",
  },
  {
    quote:
      "모두가 세상을 변화시키려고 생각하지만, 정작 스스로 변하겠다고 생각하는 사람은 없다.",
    author: "레프 톨스토이",
  },
  {
    quote: "나는 믿음을 존중하지만 우리를 가르치는 것은 의구심이다.",
    author: "윌슨 미즈너",
  },
  {
    quote:
      "인간과 동물은 미미한 차이가 있을 뿐이고, 대부분의 인간은 그 차이조차 없다.",
    author: "공자",
  },
  {
    quote:
      "실수하며 보낸 인생은 아무 것도 하지 않고 보낸 인생보다 훨씬 존경스러울 뿐 아니라 훨씬 더 유용하다.",
    author: "조지 버나드 쇼",
  },
  {
    quote: "하늘은 용기 있는 자의 편이다.",
    author: "베르길리우스",
  },
  {
    quote: "그것을 증명한 사람을 믿으라. 전문가를 믿으라.",
    author: "베르길리우스",
  },
  {
    quote:
      "최선을 다하고 있다라고 말해봤자 소용없다. 필요한 일을 함에 있어서는 반드시 성공해야 한다.",
    author: "윈스턴 처칠",
  },
  {
    quote: "목표에 도달했을 때 돌아서지 마라.",
    author: "퍼블릴리어스 사이러스",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;
