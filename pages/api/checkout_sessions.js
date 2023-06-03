const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// console.log("HI");
// console.log(process.env.STRIPE_SECRET_KEY);
export default async function handler(req, res, temp) {
  // console.log(req)
  console.log(req);
  console.log("REQ")
  console.log(req.body);
  // return;
  if (req.method === 'POST') {
    try {
      // console.log(req.body)
      // console.log("THAT WAS IT")
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: "price_1MyR97AdgijnbcJyhqr6L0rs",
            quantity: 1,
          },
        ],

        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: true },
        custom_fields: [
          {
            "key": "engraving",
            "label": { "type": "custom", "custom": "Personalized engraving" },
            "type": "text",
          },
        ],
        payment_intent_data:{
          metadata:{
             "Youtube": req.body.youtube,
             "Voice": req.body.voice
          }
      }
  

      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
  return {
    
  }
}

