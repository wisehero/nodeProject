let tweets = [
  {
    id: "1",
    text: "dreamCoder fighting",
    createdAt: Date.now().toString(),
    name: "Bob",
    username: "bob",
    url:
      "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
  {
    id: "2",
    text: "dreamCoder fighting",
    createdAt: Date.now().toString(),
    name: "Ellie",
    username: "ellie",
  },
];

export function getAll() {
  return tweets;
}

export function getAllByUsername(username) {
  return tweets.filter((tweet) => tweet.username === username);
}

export function getById(id) {
  return tweets.find((t) => tweet.id === id);
}

export function createdTweet(text, name, username) {
  const tweet = {
    id: Data.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  return tweet;
}

export function update(id, text) {
  const tweeet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}

export function remove(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
}
