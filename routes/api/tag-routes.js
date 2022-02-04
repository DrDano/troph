const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findOne({
      where: { id: req.params.id },
      include: [{ model: Product }],
    })
    if (!tagData) {
      res.status(404).json({ message: "No tag found with that id" })
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create({
      tag_name: req.body.tag_name,
    })
    res.status(200).json(tagData)
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: { id: req.params.id },
    })
    if (!tagData) {
      res.status(404).json({ message: "Unable to update, no tag found with that id" })
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tag = await Tag.destroy({
      where: { id: req.params.id },
    })
    if (!tag) {
      res.status(404).json({ message: "Unable to delete, no tag found with that id" })
      return;
    }
    res.status(200).json(tag);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router;
