const byId = id => document.getElementById(id);
const ceremony = wedding.events.find(event => event.id === "wedding");
let language = 0;
const translated = pair => pair[language] || pair[0];
const t = (english, hindi) => translated([english, hindi]);
const names = () => [translated(wedding.groom), translated(wedding.bride)].join(t(" & ", " और "));
function formatDate(start, options) {
  return new Intl.DateTimeFormat(t("en-IN", "hi-IN"), {timeZone: wedding.timezone, ...options}).format(new Date(start));
}
function write(id, value) { byId(id).textContent = value; }
function element(tag, value) {
  const node = document.createElement(tag);
  node.textContent = value;
  return node;
}
function renderEvents() {
  const rows = wedding.events.slice().sort((a,b) => Date.parse(a.start) - Date.parse(b.start)).map(event => {
    const row = document.createElement("article");
    row.className = "row";
    const when = element("time", formatDate(event.start,{weekday:"short",day:"numeric",month:"long"}));
    when.dateTime = event.start;
    when.append(document.createElement("br"),formatDate(event.start,{hour:"numeric",minute:"2-digit",timeZoneName:"short"}));
    const detail = document.createElement("div");
    const venueLink = element("a", translated(wedding.venues[event.venue].name));
    venueLink.href = "#place-" + event.venue;
    detail.append(element("h3",translated(event.name)),element("p",translated(event.note)),venueLink);
    row.append(when,detail);
    return row;
  });
  byId("rows").replaceChildren(...rows);
  byId("places").replaceChildren(...wedding.venues.map((venue,index) => {
    const box = document.createElement("article");
    box.id = "place-" + index;
    box.className = "place";
    const link = element("a",t("Open in Google Maps ↗","गूगल मैप्स पर देखें ↗"));
    link.href = venue.map;
    link.target = "_blank";
    link.rel = "noopener";
    box.append(element("h3",translated(venue.name)),element("p",translated(venue.address)),link);
    return box;
  }));
}
function countdown() {
  const seconds = Math.max(0,Math.floor((Date.parse(ceremony.start)-Date.now())/1000));
  const days = Math.floor(seconds/86400), hours = Math.floor(seconds/3600)%24, minutes = Math.floor(seconds/60)%60;
  write("count",seconds ? t(days+" days · "+hours+" hrs · "+minutes+" min · "+seconds%60+" sec",days+" दिन · "+hours+" घंटे · "+minutes+" मिनट · "+seconds%60+" सेकंड") : t("Our wedding day has arrived","विवाह की शुभ घड़ी आ गई है"));
}
function render(lang) {
  language = lang;
  document.documentElement.lang = t("en","hi");
  document.title = names() + t(" | Wedding invitation"," | विवाह निमंत्रण");
  const initials = [wedding.groom,wedding.bride].map(pair => pair[0].trim()[0]).join(" · ");
  write("monogram",initials); write("initials",initials);
  write("navEvents",t("Ceremonies","समारोह")); write("navVenues",t("Venues","स्थल"));
  write("language",t("हिन्दी","English"));
  write("inviteLabel",t("Together with our families","अपने परिवारों के साथ"));
  write("title",names()); write("date",formatDate(ceremony.start,{dateStyle:"full"})); write("city",translated(wedding.city));
  write("letterLabel",t("From our families","हमारे परिवारों की ओर से"));
  write("familyTitle",t("A personal invitation","स्नेहिल आमंत्रण"));
  write("message",translated(wedding.message)); write("family",translated(wedding.families));
  write("eventsTitle",t("The wedding ceremonies","विवाह के कार्यक्रम")); write("venuesTitle",t("Venues & directions","समारोह स्थल और मार्ग"));
  write("closing",names()); write("calendar",t("Add to Google Calendar","गूगल कैलेंडर में जोड़ें"));
  const start = new Date(ceremony.start);
  const stamp = date => date.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,"");
  const venue = wedding.venues[ceremony.venue];
  const params = new URLSearchParams({action:"TEMPLATE",text:names()+" · "+translated(ceremony.name),dates:stamp(start)+"/"+stamp(new Date(+start+3600000)),location:translated(venue.name)+", "+translated(venue.address),ctz:wedding.timezone});
  byId("calendar").href = "https://calendar.google.com/calendar/render?"+params;
  const phone = wedding.rsvpNumber.trim();
  byId("rsvp").hidden = !phone;
  if (phone) {
    write("rsvp",t("RSVP on WhatsApp","व्हाट्सऐप पर जवाब दें"));
    byId("rsvp").href = "https://wa.me/"+phone+"?text="+encodeURIComponent(t("Namaste! I’d like to RSVP for ","नमस्ते! मैं इस विवाह में अपनी उपस्थिति की सूचना देना चाहता/चाहती हूँ। ")+names());
  }
  if (/^https?:$/.test(location.protocol)) {
    byId("share").hidden = false; write("share",t("Share invitation","निमंत्रण साझा करें"));
    byId("share").href = "https://wa.me/?text="+encodeURIComponent(document.title+"\n"+location.href.split("#")[0]);
  }
  if (wedding.photo) {byId("photo").src=wedding.photo;byId("photo").alt=names();byId("photo").hidden=false;}
  renderEvents(); countdown();
}
write("blessing",wedding.blessing[0]);
byId("names").replaceChildren(document.createTextNode(wedding.groom[0]),element("span","&"),document.createTextNode(wedding.bride[0]));
write("coverDate",formatDate(ceremony.start,{day:"numeric",month:"long",year:"numeric"})+" · "+wedding.city[0]);
document.querySelectorAll("[data-lang]").forEach(button => button.addEventListener("click",() => {
  render(Number(button.dataset.lang));
  byId("cover").hidden=true; byId("inside").hidden=false;
  byId("title").focus({preventScroll:true});window.scrollTo(0,0);
}));
byId("language").addEventListener("click",()=>render(1-language));
setInterval(()=>{if(!byId("inside").hidden) countdown();},1000);
