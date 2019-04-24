const express = require("express");
const Bounty = require("../models/bounty");

const getBounties = async (req, res, next) => {
  try {
    const bounties = await Bounty.find();
    return res.status(200).send(bounties);
  } catch (err) {
    res.status(500);
    next(err);
  }
};

const getBountyById = async (req, res, next) => {
  try {
    const bounties = await Bounty.findOne({ _id: req.params._id });
    return res.status(200).send(bounties);
  } catch (err) {
    res.status(500);
    next(err);
  }
};

const postBounty = async (req, res, next) => {
  try {
    const newBounty = new Bounty(req.body);
    const bounty = await newBounty.save(newBounty);
    return res.status(200).send(bounty);
  } catch (err) {
    res.status(500);
    next(err);
  }
};

const editBounty = async (req, res, next) => {
  try {
    const updatedBounty = await Bounty.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      { new: true }
    );
    return res.status(200).send(updatedBounty);
  } catch (err) {
    res.status(500);
    next(err);
  }
};

const deleteBounty = async (req, res, next) => {
  try {
    const bounty = await Bounty.findOneAndRemove({ _id: req.params._id });
    return res.status(200).send(bounty);
  } catch (err) {
    res.status(500);
    next(err);
  }
};

module.exports = {
  getBounties,
  getBountyById,
  postBounty,
  editBounty,
  deleteBounty
};
