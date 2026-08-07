ASN EASY MULTI-MEMBER CARDS

IMAGE NAMING
-------------
Put all cards inside the "cards" folder.

For each member use exactly:

member001-front.png
member001-back.png

member002-front.png
member002-back.png

member003-front.png
member003-back.png

...etc.

ADDING A MEMBER
----------------
1. Upload the two images into the cards folder.
2. Open script.js.
3. Add the member and password inside MEMBERS.

Example:

const MEMBERS = {
  member001: "ASN2026",
  member002: "ASN002",
  member003: "ASN003",
};

LINKS
-----
Member 001:
YOUR-GITHUB-PAGES-LINK/?member=member001

Member 002:
YOUR-GITHUB-PAGES-LINK/?member=member002

Member 003:
YOUR-GITHUB-PAGES-LINK/?member=member003

IMPORTANT
---------
The password is a simple client-side gate, not strong security.
The image files are publicly reachable by direct URL.
