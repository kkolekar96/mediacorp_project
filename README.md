# Mediacorp Today

Article detail page.

----
## Introduction

This product is based on open-source twig template engine. <br />
Following are the tech stack
1. DDEV
2. Twig
3. SCSS
4. NodeJs

----
## Local Setup

1. UnZip the project folder
2. From console navigate to project directory and run following command. Before this command make sure local system should have     Docker, Docker-Compoase and Colima/Docker desktop
    ```
    $ ddev start
    ```
3. CCS are pre-compiled with the project. You can update the css by running following command.<br />
    To complie the SCSS
    ```
    $ npm run scss:compile
    ```
    To watch for changes in SCSS files and automatically compile
     ```
    $ npm run scss:compile
    ```

---
## Assumptions
1. The data in the sidebar for the "You Might Like" or "Trending" section has been updated because only four items are showing up in sidebar.json.
2. The "Read More in Singapore widget" not able to see in json data added static data.

---
## Highlights
1. Templates <br />
    Created separate twig file based on the components created.
2. Components <br />
   Created the small reusable Components like link, text, media and menu under template folder.
3. SCSS <br />
    Created the reusable style files like link,mixin,variables,media,breakpoint and layout.<br />
    Created separate file as per the components created.


---
## What can be improve
1. Create typography and serve from local server.
2. Component template Structure
3. Responsive design
4. For Read also currently using static data for the improvement data can be fetch from API

---
## Uncompleted components
1. Mobile burger menu
3. WhatsApp Banner (As i don't know what it is)
