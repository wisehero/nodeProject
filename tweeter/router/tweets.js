import express from "express";
import "express-async-errors";
import * as tweetController from "../controller/tweet";

const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
router.get("/", tweetController.getTweets);
// GET /tweets/:id
router.get(":/id", (req, res, next) => {
  const id = req.param.id;
  const tweet = tweetRepository.getById(id);
  if (tweet) {
    res.status.json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
});
// POST /tweets

router.post("/", (req, res, next) => {
  const { text, name, username } = req.body;
  const tweet = tweetRepository.create(text, name, username);
  res.status(201).json(tweet);
});
// PUT /tweets/:id
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweetRepository.update(id, text);
  if (tweet) {
    tweet.text = text;
    res.status(200).json();
  } else {
    res.status(404);
  }
});
// DELETE /tweets/:id
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  tweetRepository.remove(id);
  res.sendStatus(204);
});

export default router;
