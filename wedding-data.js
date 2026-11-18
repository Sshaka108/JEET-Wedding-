// Edit this file first. Each pair contains [English, Hindi].
// Jeetendra is the supplied name. All other personal details below are examples.
const wedding = {
  groom: ["Jeetendra", "जीतेन्द्र"],
  bride: ["Ananya", "अनन्या"],
  timezone: "Asia/Kolkata",
  city: ["Jaipur, Rajasthan", "जयपुर, राजस्थान"],
  blessing: ["॥ Shree Ganeshaya Namah ॥", "॥ श्री गणेशाय नमः ॥"],
  message: [
    "With the blessings of our elders, we invite you to share in our wedding. Come early for the haldi, stay late for the music, and be beside us as we take our seven vows.",
    "बड़ों के आशीर्वाद से हम आपको अपने विवाह में सादर आमंत्रित करते हैं। हल्दी के रंग, संगीत की महफ़िल और सात फेरों की इस खुशी में हमारे साथ शामिल हों।"
  ],
  families: ["The Sharma & Verma families", "शर्मा एवं वर्मा परिवार"],
  photo: "", // Optional, e.g. "assets/couple.jpg"
  rsvpNumber: "", // Optional WhatsApp number with country code, digits only.
  venues: [
    {name:["The Garden Courtyard","उद्यान प्रांगण"],address:["Jaipur, Rajasthan","जयपुर, राजस्थान"],map:"https://www.google.com/maps/search/?api=1&query=Jaipur+Rajasthan"}
  ],
  // The countdown and cover use the event whose id is "wedding".
  // venue: 0 means the first venue above. Dates include the local UTC offset.
  events: [
    {id:"haldi",name:["Haldi","हल्दी"],start:"2027-02-13T10:00:00+05:30",venue:0,note:["A morning of turmeric, marigolds and family songs. Wear a little yellow.","हल्दी, गेंदे के फूल और मंगल गीत। पीले रंग में पधारें।"]},
    {id:"sangeet",name:["Mehndi & Sangeet","मेहंदी और संगीत"],start:"2027-02-13T17:30:00+05:30",venue:0,note:["Henna in the courtyard, followed by dancing under the lights.","आँगन में मेहंदी और फिर रोशनी के बीच नाच-गाने की शाम।"]},
    {id:"wedding",name:["Wedding & Pheras","शुभ विवाह एवं फेरे"],start:"2027-02-14T19:00:00+05:30",venue:0,note:["Join us for the varmala and seven vows, followed by dinner with both families.","वरमाला और सात फेरों के बाद दोनों परिवारों के साथ रात्रिभोज में शामिल हों।"]}
  ]
};
