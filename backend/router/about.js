const express = require('express');
const router = express.Router();
const { saveAbout, getAbout, getsingleAbout, updateAbout, deleteAbout } = require('../controller/about'); // Corrected function name
const { checkQuery, checkBody } = require('../middleware/validators');
const {basicAuth  } = require('../middleware/basicauth');
const { checkSession } = require('../middleware/tokenManager');

router.post('/', // create About
   basicAuth ,
    checkBody(['image', 'description1', 'description2','resume','skills']),
    saveAbout,
    // checkSession
);

router.get('/', // get all About
   basicAuth ,
    // checkSession,
    getAbout
);

router.get('/getsingleAbout',
   basicAuth ,
    // checkSession,
    checkQuery(['_id']),
    getsingleAbout
);

router.put('/', // update About
   basicAuth ,
    // checkSession,
    checkBody(['_id', 'image', 'description1', 'description2','resume','skills']),
    updateAbout
);

router.delete('/', // delete About
   basicAuth ,
    // checkSession,
    checkQuery(['_id']),
    deleteAbout
);

module.exports = router;