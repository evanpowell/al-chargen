const { Router } = require('express');
const router = Router();

require('../../database/index');

const rulebook = require('../../database/queries/rulebook-queries');

router.get('/rulebook', async (req, res) => {
  const ancestriesLib = await rulebook.getAncestriesLib();
  const attributesLib = await rulebook.getAttributesLib();
  res.send({ ancestriesLib, attributesLib });
});

module.exports = router;