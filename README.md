# myportfolio

Single-page portfolio landing page: a hero section with a background video, a sidebar/navbar menu with smooth-scroll anchor links, and an info section built from a reusable data-driven component.

> Learning project built in February 2021 while practicing styled-components and building a landing page with reusable, data-driven React components. Kept public as part of my learning history.

## What it does

`Home` renders `Sidebar`, `Navbar`, `HeroSection` and `InfoSection`. `HeroSection` autoplays a local background video and shows a name/title headline. `InfoSection` is a generic component that takes its content (heading, description, image, button label, styling flags) as props from `src/components/InfoSection/Data.js`, so new sections can be added by adding more data objects. `Sidebar` is a toggleable slide-out menu with anchor links (About, Discover, Services, Contact) built with `react-scroll` for smooth scrolling. All visual styling is done with `styled-components` (the `*Elements.js` files per component).

## Tech Stack

- React 17 / React DOM 17
- styled-components 5.2
- react-router-dom 5.2, react-scroll, react-icons
- Create React App (`react-scripts` 4.0.2)

## Running Locally

```
yarn install
yarn start        # http://localhost:3000
```

- `yarn build` — production build into `build/`
- `yarn test` — runs the CRA test runner

## What I practiced

- CSS-in-JS component styling with styled-components
- Building data-driven, reusable section components (props-based content)
- Toggleable sidebar state and smooth-scroll navigation
- Structuring a React project by component/feature folders
