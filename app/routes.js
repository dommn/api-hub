//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Start folder specific routes

// current sprint, remember to add older sprint when adding a new folder!
router.use('/01', require('./views/01/_routes'));
router.use('/02', require('./views/02/_routes'));
