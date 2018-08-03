# React for Designers
![](https://cl.ly/0Q093L3s2Q27/download/react-promo.jpg)
React is the most popular javascript framework. It’s component-based, similar to how you use Components in [Figma](https://www.figma.com/?ref=designcode) in order to reuse the elements in powerful ways. This in turn allows for better collaboration between teammates. With this course, you'll learn how to build and animate your site from scratch. Create highly customizable components for your design system. Full video tutorials:
https://designcode.io/react

## Course Downloads
- [Intro to React](https://github.com/MengTo/my-react-app/tree/f095062888caa9f09a454507ee4b51e0760cf024)
- [Basic Styling in CSS](https://github.com/MengTo/my-react-app/tree/25acf94655e10cf6a7b2b503df49d291dcef5cc3)
- [Adaptive Layouts with CSS Grid](https://github.com/MengTo/my-react-app/tree/ad4d5eec229d7a72ad53d3f0b8f5a3e52b3a86bc)
- [Interactions and Animations](https://github.com/MengTo/my-react-app/tree/7c6f0948754fe8e876212b6c84474ed4a69da207)
- [SVG Animation](https://github.com/MengTo/my-react-app/tree/adaba5ab5339dcf97a5aead4a5dea173a7b629fd)
- [Components and Props](https://github.com/MengTo/my-react-app/tree/f8cecaf15638e633cfc70248a6590206bae08ac0)
- [States and Events](https://github.com/MengTo/my-react-app/tree/6795aeb92155de1046e44255fdc988663ff18b14)
- [Styled Components](https://github.com/MengTo/my-react-app/tree/555833defc42f63db1e64c7893cdf0923be88943)
- [Static Data with JSON](https://github.com/MengTo/my-react-app/tree/6777553e4293a34072d40a2c8913357c982cffb0)
- [GraphQL with Contentful](https://github.com/MengTo/my-react-app/tree/e9e674ba40f91faf929d219f5c680114e9e0881e)
- [Publish to Netlify](https://github.com/MengTo/my-react-app/tree/e9e674ba40f91faf929d219f5c680114e9e0881e)
- [Payments with Stripe](https://github.com/MengTo/my-react-app/tree/87ccfa1431301313511e29875f5c8a2221caed36)

## Install Gatsby and Node

Make sure that you have the Gatsby installed and [Node](https://nodejs.org/en/download/)</a>:
```sh
npm install --global gatsby-cli
```

## Install Libraries
```sh
npm install
```

## Known Issues
### Permission Issue Installing Gatsby
If you have issues installing Gatsby, please use sudo in front.
```sh
sudo npm install --global gatsby-cli
```

### Image issue in In Basic Styling in CSS
You may get an error when you call the local image. The easiest solution is to put the image online using [CloudApp](http://getcloudapp.com).
```css
background: url('https://cl.ly/3k1F152x261C/download/wallpaper3.jpg');
```

Or, you can try installing this library.
```sh
npm install --save url-loader
```

Or, you can also put the images inside `/static/images` or `/public/images` instead of `/src/images`. Link the images like this:
```css
background: url('../../static/images/wallpaper3.jpg');
```

### GraphQL giving an error
Make sure to restart your local environment by doing **Control + C** in the Terminal, and then `gatsby develop`.
