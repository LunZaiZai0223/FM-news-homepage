# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)

## Overview

### Screenshot

![Screenshot 2023-03-20 at 22-31-05 React App](https://user-images.githubusercontent.com/77038018/226372151-de6e34ba-cf7a-4234-aa0b-33959c218fd7.png)
![Screenshot 2023-03-20 at 22-31-14 React App](https://user-images.githubusercontent.com/77038018/226372167-cf7214dc-048d-4a5a-a201-1f372574e149.png)

### Links

- Solution URL: [reop](https://github.com/LunZaiZai0223/FM-news-homepage)
- Live Site URL: [demo](https://lunzaizai0223.github.io/FM-news-homepage/)

```
const overlayRootEle: HTMLDivElement = document.getElementById(
  'overlay-root'
) as HTMLDivElement;

// ...
return (createPortal(
    <div className={`${s.overlay} ${isOverlayActive ? s.active : ''}`}></div>,
    overlayRootEle //-> insert in html element
  )
)
// ...
```
