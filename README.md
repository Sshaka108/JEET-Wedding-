# Jeetendra’s wedding invitation

Start by double-clicking index.html after extracting the ZIP. Select English or हिन्दी to enter. The invitation works directly in a browser and uses plain HTML, CSS and JavaScript.

## Personalise the invitation

Open wedding-data.js in VS Code. On GitHub, you can also open the file and choose the pencil icon. Jeetendra is the supplied name. The bride, family names, city, venue, ceremonies and dates are examples. Confirm the Hindi spelling of the names before sharing.

| Change | Field |
| --- | --- |
| Names on the cover and invitation | groom and bride |
| City, opening blessing, invitation and host families | city, blessing, message and families |
| Venue name, address and exact Google Maps share link | venues |
| Ceremony name, start time, venue and description | events |
| Optional couple photo | Put the image inside assets and set photo to its relative path, e.g. assets/couple.jpg |
| Optional WhatsApp RSVP | Set rsvpNumber to the host's number including country code, digits only. An empty string hides the button. Guests send the message through WhatsApp. |
| Colours, borders and type sizes | style.css |
| Fixed labels, countdown, sharing and calendar logic | app.js |
| Main layout | index.html |

Each translated field takes an English string followed by a Hindi string. Preserve the quotes, commas and brackets. Leave id set to "wedding" on exactly one event. Its start time supplies the cover date, countdown and one-hour Google Calendar entry. For 7 pm in India on 14 February 2027, enter 2027-02-14T19:00:00+05:30. For an overseas wedding, change timezone and use the event date's correct UTC offset.

Duplicate an event or venue object to add another. Number venues from zero in list order. Set an event's venue to the corresponding number. Replace the demo city-level map with the venue's exact pin from Google Maps → Share → Copy link. The WhatsApp share button uses the published page address and is hidden when index.html is opened from your computer. Only publish photos, contacts and addresses the hosts want guests to see online.

## Publish with GitHub Pages from a web browser

1. Sign in to GitHub. Choose New repository, enter a name such as jeetendra-wedding and select Public for the free Pages option. Initialise it with a README and create the repository.
2. Extract the ZIP. In the repository choose Add file → Upload files. Drag index.html, style.css, app.js, wedding-data.js and the assets folder into the upload area. Keep the assets folder structure. The included README.md can replace the initial README if desired.
3. Choose Commit changes and commit to main. On the Code tab, confirm index.html is beside app.js at the top level, and assets/floral-seal.png is present.
4. Open Settings → Pages. Under Build and deployment, set Source to Deploy from a branch. Select main and /(root), then Save.
5. Check the Pages deployment in Actions. When it succeeds, open Settings → Pages → Visit site. For a project repository named jeetendra-wedding the usual address is https://YOUR-USERNAME.github.io/jeetendra-wedding/.
6. Test on your phone. Open both languages, check the wedding date, tap each venue link, and check the time in the calendar event. If you enabled RSVP, check the WhatsApp recipient. Share the Visit site address with guests.
7. To update the live invitation, edit wedding-data.js, commit to main and wait for the next Pages deployment. Refresh the live page.

If the site shows a 404, check the selected branch, the /(root) setting and the lowercase index.html filename. If the page opens without its design or artwork, check the filenames and folder structure including letter case. If the date or names disappear after editing, check the punctuation in wedding-data.js.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
