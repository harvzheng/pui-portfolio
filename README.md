## Overview
This is a *beta* portfolio site built using [react.js](https://reactjs.org/), [next.js](https://nextjs.org/), [chakra ui](https://chakra-ui.com/), and [tailwind css](https://tailwindcss.com/). The site was built for the final project for 05-430: Programming Usable Interfaces at Carnegie Mellon University.

**Please note**: the site does not have all the pages due to time constraints. However, a "dummy" page of each possible type of page is included, such as:
* The homepage
* A project type aggregation page (e.g. "UX Projects")
* The about page
* A project page

### React.js primer
As I'm assuming not many people have previous experience with React.js, I wrote a primer to try to describe a little bit of how React works.

I decided to use React.js with Next.js because they offer a fast way of deploying a static site. React offers the ability to create something called "components," which are basically a reusable class that can be visually displayed, like a template. These are stored in `./components`. This allows for faster generation of new pages than using something like plain HTML, CSS and JavaScript. 

In terms of how pages are rendered, React has a lot of pre-built UI elements that can be custom-styled or used as-is. Instead of elements like `<div>`, we might have something like `<Flex>`, and React can then render that as a `<div>` with `display: flex` later. 

Pages are stored in `./pages`. How the code is structured should look familiar, although the elements may not be as familiar.

## Video

## Links

[**Figma Prototype**](https://www.figma.com/file/ExdwwhIeajd0w5HvY8laB7/PUI-S22?node-id=114%3A2)
[**Live Site**](https://pui-portfolio-e1027.web.app/)

## Description

The purpose of the website is to showcase both UX projects and web development projects I've worked on in the past. My current portfolio feels very generic, so I wanted to try to do something that conveyed my personality a little better, as well as make it memorable to someone who might visit it. This portfolio should convey a few things: my project experience, links to my resume, and a little bit about myself. I tried to make it interesting by incorporating slower animations to signify a sunset at an ocean. I don't want people to rush through the portfolio, but rather take their time and explore my projects or even just my "blob" animations. As I want this to be seen by recruiters in both the HCI space and the software space, I wanted to push myself in both areas to create something that used both skillsets. By catering on both the visual and the programming sides, hopefully people will spend more time on the site.

## Using my website

* Hover "blobs" (the background shapes on images) for an animation
* Click on images to get to projects
* Click on buttons on left menu to navigate between pages
* Shrink the browser window to see how it's responsive

## External libraries

I used quite a few external libraries for this project, including:
* [react.js](https://reactjs.org/) and [next.js](https://nextjs.org/): I used this because I wanted to gain more experience in a popular javascript framework, and use something that could create more pages more easily in the future than plain HTML/CSS. By using this popular framework, a number of libraries are available to help with animations or UI components, making future development a little easier.
* [react-spring](https://react-spring.io/): I used this for the "blob" animations. I chose to use this for a more natural animation look (e.g. easing in and out like with physics, rather than a linear graph). It adds a cool animation to the site.
* [react-wavify](https://github.com/woofers/react-wavify): I wanted an animation, and this was one of the first libraries I found. I used it on my homepage to create an "ocean" effect. It makes my homepage, in addition to the gradient hero, look like a sunset, and as you descend into my site you descend into the ocean.
* [react-photo-view](https://react-photo-view.vercel.app/en-US): I wanted a way to create photo galleries that could also be zoomed in. This library can do that, and is prominently featured in the sample project `/ux/happy-pawz`. It adds the ability to inspect images in more detail.
* [tailwindcss](https://tailwindcss.com/): I needed small margins on a lot of my pages, as well as to make a lot of components more responsive. I used this with Flexboxes to orient components better for mobile, and then used classes that used media queries to space components out for a larger screen. This made smaller edits a lot easier, especially turning `flex-direction` from column to row and vice versa.
* [chakra-ui](https://chakra-ui.com/): I originally intended on using Material UI, but I wanted to try a UI framework I haven't used before. The UI kit made it easier to use components that I didn't have to develop from scratch myself, and can be seen in things like the footer or the side nav.
* [font-awesome icons](https://fontawesome.com/icons): Font Awesome has good social media icons. I chose to use them on my footer instead of text.

## Iteration from HW7

My HW7 prototype was significantly simpler than my final, as I was taking a lot of design inspiration from my current portfolio. It was a lot of white and black, with one accent color that was being used as a border. As I thought more about how I wanted to use animations and how I wanted to convey my personality in my portfolio, I developed a rough design for a new set of pages. The rest I experimented with as I developed the site.

## Major challenges

Obviously, using React with so many libraries was quite a challenge. My biggest challenge came from animating the blobs, where I wanted to imitate [this demo](https://tympanus.net/Development/OrganicShapeAnimations/), but took several libraries (a lot of deprecated libraries) and hours to figure out. In the end, I managed to get the hang of react-spring enough to create the animation, and get the hang of React enough to finish the site. Using Chakra UI was also challenging at first, as I wasn't sure how to use a lot of their components to begin with, but adding tailwindcss helped a lot with turning the components responsive, and adding spacing where I thought it was needed.