const express=require("express");
const bussinessRoutes = express.Router();

bussinessRoutes.post("/business-data",async(req,res)=>{
  try{
  const { name, location } = req.body;

  const result = {
    rating: (Math.random() * 2 + 3).toFixed(1),
    reviews: Math.floor(Math.random() * 200) + 1,
    headline: `Why ${name} is ${location} Sweetest Spot in 2025`
  };

  return res.status(200).json({
    message:"Data fetched successfully...",
    data:result
  });}
  catch(err){
     res.status(500).send(err.message);
  }
});

bussinessRoutes.get('/regenerate-headline', async (req, res) => {
  try{
     const { name, location } = req.query;
  const headlines = [
   `The Buzz Around ${name} in ${location} — Worth the Hype?`, 
  `Affordable & Trusted ${name} Services in ${location}`,
  `Looking for a Reliable ${name} in ${location}? We’re #1!`,
  `${name} Near You – Fast, Friendly & Affordable in ${location}`,
  `Discover Why ${name} Stands Out in ${location}`,
  `What Makes ${name} a Must-Try in ${location} This Year`,
  `Top Reasons ${location} Locals Love ${name}`,
  `Is ${name} ${location}’s Hidden Gem? Find Out`,
  `Why Everyone in ${location} Is Talking About ${name}`,
  `${name}: ${location}’s Favorite Pick in 2025`,
  `${location} Picks ${name} as a Go-To in 2025`,
  `Why You’ll Love ${name} in ${location} — Guaranteed`,
  `Schedule Your ${name} Consultation in ${location} Today!`
  ];

  const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)];
  res.status(200).json({ headline: randomHeadline });
}
catch(err){
  res.status(500).send(err.message);
}
});


module.exports=bussinessRoutes;