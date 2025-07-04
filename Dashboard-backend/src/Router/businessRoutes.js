const express=require("express");
const bussinessRoutes = express.Router();

bussinessRoutes.post("/business-data",async(req,res)=>{
  const { name, location } = req.body;

  const result = {
    googleRating: (Math.random() * 2 + 3).toFixed(1),
    reviewCount: Math.floor(Math.random() * 200) + 1,
    headline: `Top-rated ${name} in ${location} - Book Now!`
  };

  res.json(result);
});

bussinessRoutes.get('/regenerate-headline', (req, res) => {
     const { name, location } = req.body;
  const headlines = [
   `Top-Rated ${name} in ${location} – Book Now!`,
    `Affordable & Trusted ${name} Services in ${location}`,
    `Looking for a Reliable ${name} in ${location}? We’re #1!`,
    `${name} Near You – Fast, Friendly & Affordable in ${location}`,
    `Trusted by Thousands – ${name} Services in ${location}`,
    `Voted Best ${name} in ${location} – See Why!`,
    `Grow Your Business with Our ${name} Solutions in ${location}`,
    `Serving ${location} with Quality ${name} Services Since 2020`,
    `The ${name} ${location} Trusts Most – Get a Free Quote!`,
    `Schedule Your ${name} Consultation in ${location} Today!`
  ];

  const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)];
  res.json({ headline: randomHeadline });
});


module.exports=bussinessRoutes;