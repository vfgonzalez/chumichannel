const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/chumichanneldb",
  {
    // useMongoClient: true
  }
);

const sliderSeed =[
    {
        imagelink: './images/Slider/drone.jpg',
        title: 'Travel',
        subtitle: 'Follow us through our journies around the world.',
    },
]

const postSeed =[
    {
        videourl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/hChMLUoQKy0?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        description: 'Trip Recap to Mexico City',
        title: 'CDMX 2018',
        image: 'http://lorempixel.com/output/nature-q-c-640-480-8.jpg'
    },
    {
        videourl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/OyHqqyLsdoA?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        description: 'Cancun, Tulum, Xelha, and Isla Mujeres, at Villa Del Palmar',
        title: 'Cancun 2018',
        image: 'http://lorempixel.com/output/nature-q-c-640-480-8.jpg'
    },
    {
        videourl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/KjuoLO8edVw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        description: 'Trip Recap to Mexico City',
        title: 'CDMX 2018',
        image: 'http://lorempixel.com/output/nature-q-c-640-480-8.jpg'
    },
]

const adminSeed=[
    {
        username: "hello@chumichannel.com",
        password: "testadmin"

    }
]



db.Slider
  .remove({})
  .then(() => db.Slider.collection.insertMany(sliderSeed))
  .then(data => {
    console.log(data.insertedIds.length + " sliders inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Post
  .remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.insertedIds.length + " Posts inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Admin
  .remove({})
  .then(() => db.Admin.collection.insertMany(adminSeed))
  .then(data => {
    console.log(data.insertedIds.length + " Admins inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });