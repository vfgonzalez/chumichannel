// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// API Index
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

const router = require("express").Router();
// const resourceRoutes = require("./resourceroute");
// const cohortRoutes = require("./cohortroute");
// const userRoutes = require("./userroute");

// // Resource routes
// router.use("/resources", resourceRoutes);
// router.use("/cohorts", cohortRoutes);
// router.use("/users", userRoutes);



// const router = require("express").Router();
// const resourceController = require("../../controllers/resourceController");

// // Matches with "/api/resource"
// router.route("/")
//   .get(resourceController.findAll)
//   .post(resourceController.create);

// // Matches with "/api/resources/:id"
// router.route("/:id")
//   .post(resourceController.castVote)

// // Matches with "/api/resources/:category"
// router.route("/:category")
//   .get(resourceController.findByCategory)

// // Matches with "/api/resources/:title"
// router.route("/:title")
//     .delete(resourceController.remove);

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// Cohort API Routes
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------


// const cohortController = require("../../controllers/cohortController");

// // Matches with "/api/cohort"
// router.route("/")
//   .get(cohortController.findAll)
//   .post(cohortController.create);

// // Matches with "/api/cohort/:id"
// router
//   .route("/:id")
//   .get(cohortController.findById)
//   .put(cohortController.update)
//   .delete(cohortController.remove);

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// Cohort API Routes
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

// const cohortController = require("../../controllers/cohortController");

// // Matches with "/api/cohort"
// router.route("/")
//   .get(cohortController.findAll)
//   .post(cohortController.create);

// // Matches with "/api/cohort/:id"
// router
//   .route("/:id")
//   .get(cohortController.findById)
//   .put(cohortController.update)
//   .delete(cohortController.remove);


module.exports = router;