const Link = require("../models/link");

exports.create = async (req, res) => {
  try {
    const link = await new Link({ ...req.body, postedBy: req.user._id }).save();
    console.log("link => ", link);
    res.json(link);
  } catch (error) {
    console.log(error);
  }
};

exports.links = async (req, res) => {
  try {
    const all = await Link.find()
      .populate("postedBy", "_id name")
      .sort({ createdAt: -1 })
      .limit(500);
    res.json(all);
  } catch (error) {
    console.log(error);
  }
};

exports.viewCount = async (req, res) => {
  try {
    const link = await Link.findByIdAndUpdate(
      req.params.linkId,
      { $inc: { views: 1 } },
      {
        new: true,
      }
    );
    console.log(" link View ", link);
    res.json({ ok: true });
  } catch (error) {
    console.log(error);
  }
};

exports.like = async (req, res) => {
  try {
    const link = await Link.findByIdAndUpdate(
      req.body.linkId,
      {
        $addToSet: { likes: req.user._id },
      },
      {
        new: true,
      }
    );
    res.json(link);
  } catch (error) {
    console.log(error);
  }
};

exports.unlike = async (req, res) => {
  try {
    const link = await Link.findByIdAndUpdate(
      req.body.linkId,
      {
        $pull: { likes: req.user._id },
      },
      {
        new: true,
      }
    );
    res.json(link);
  } catch (error) {
    console.log(error);
  }
};

exports.read = async (req, res) => {};

exports.update = async (req, res) => {};

exports.linkDelete = async (req, res) => {
  try {
    const link = await Link.findById(req.params.linkId).select("postedBy");
    if (link.postedBy._id.toString() === req.user._id.toString()) {
      const deleted = await Link.findByIdAndRemove(req.params.linkId);
      res.json(deleted);
    }
  } catch (error) {
    console.log(error);
  }
};
