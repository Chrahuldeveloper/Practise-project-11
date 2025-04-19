const { cloudinary } = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dzri8i5oq",
  api_key: "813721166983997",
  api_secret: "cTKGyPIsCHXtrR3JamoUwKAD9IQ",
});

const uploadResult = await cloudinary.uploader
  .upload(
    "https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
    {
      public_id: "shoes",
    }
  )
  .catch((error) => {
    console.log(error);
  });

console.log(uploadResult);
