import * as tweetRepository from "../data/tweet.js";

export function getTweets(req, res) {
  const username = req.query.username;
  const data = username
    ? tweetRepository.getAllByUsername(username)
    : tweetRepository.getAll();
  res.status(200).json(data);
}

export function getTweet(req, res, next) {
  const id = req.param.id;
  const tweet = tweetRepository.getById(id);
  if (tweet) {
    res.status.json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
}
