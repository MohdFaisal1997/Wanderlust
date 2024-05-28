const mongoose = require("mongoose");
const review = require("./review");
const Schema = mongoose.Schema;

// const listingSchema = new Schema({
//     title: {
//         type: String,
//         require: true,
//     },
//     description: String,
//     image: {
//         url: {
//           type: String,
//           required: true,
//         },
//         filename: {
//           type: String,
//           required: true,
//         },
//       },
//     price: Number,
//     location: String,
//     country: String,
// });

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;

const listingSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: String,
    image: {
        url: {
          type: String,
        },
        filename: {
          type: String,
          required: true,
        },
      },
    price: Number,
    location: String,
    country: String,
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      }
    ],
    
});
    
    const Listing = mongoose.model("Listing", listingSchema);
    module.exports = Listing;

// module.exports = Listing;
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema = new Schema({
//     title: {
//         type: String,
//         require: true,
//     },
//     description: String,
//     image: {
//         type:String,
//         required:true,
//       },
//     price: Number,
//     location: String,
//     country: String,
// });

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema = new Schema({
//     title: {
//         type: String,
//         require: true,
//     },
//     description: String,
//     image: {
//         type:String,
//         required: true,
//       },
//     price: Number,
//     location: String,
//     country: String,
// });

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;