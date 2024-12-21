const mongoose = require('mongoose');

main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch(err => console.error(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const Book = mongoose.model('Book', bookSchema);

Book.findByIdAndUpdate("65eaffe8af0098720fda26be",{price:-500}).then((res)=>{
   console.log(res);
})
.catch((err)=>{
   console.log(err);
})
// let book1 = new Book({
//   title: "Mathematics XII",
//   author: "RD Sharma",
//   price: 1200,
// });

// book1.save()
//   .then((res) => {
//     console.log("New book saved:", res);
//   })
//   .catch((err) => {
//     console.error("Error saving book:", err);
//   });
