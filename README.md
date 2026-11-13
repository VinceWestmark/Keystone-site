# keystone-ms.com

The public website for Keystone Mission Solutions Corp. It's plain HTML and CSS with no build step, hosted on GitHub Pages.

## What's here

| File | Page |
| --- | --- |
| `index.html` | Home |
| `services.html` | Engineering services, customers and contracts |
| `partnerships.html` | Industry partnerships and business consulting |
| `careers.html` | Careers and open positions |
| `contact.html` | Contact |
| `404.html` | Shown for any address that doesn't exist |
| `contact-us.html` | Forwards the old GoDaddy contact address to `contact.html` |
| `assets/css/site.css` | All styles |
| `assets/js/site.js` | Builds the email links (see below) |
| `assets/img/` | Logos, hero photo, icons, link-preview image |
| `assets/fonts/` | Montserrat and Inter, served from this site (no Google requests) |
| `CNAME` | Tells GitHub Pages to serve the site at keystone-ms.com |

## Common edits

- **Change text:** open the page's `.html` file, find the words, and edit them.
- **Add or remove a job:** in `careers.html`, copy or delete one `<li>` block inside `<ul class="jobs">`, and update the job title and Gusto link.
- **Email links:** each one is written as `<a data-user="info" ...>`. The script adds `@keystone-ms.com` when the page loads, so the full address never appears in the HTML, where spam bots could harvest it. To add a new address, copy an existing link and change `data-user`.

## Turning on the Guam photos

Once the photos are approved for public release:

1. Add the two photos as `assets/img/guam-1.jpg` and `assets/img/guam-2.jpg`.
2. In `services.html`, find the `<!-- PHOTOS:` comment and delete that line along with the `END PHOTOS -->` line. Leave the `<figure>` block between them in place.

Don't add the photos to the repository before they're approved. The repository is public, so anything committed is visible to anyone, even if no page shows it.

## Security notes

- Every page sets a Content-Security-Policy that allows only this site's own files: no outside scripts, fonts, trackers, or forms.
- There are no cookies, no analytics, and no forms.
