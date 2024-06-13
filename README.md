# React + TypeScript + Vite + Twin

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules and added twin.macro styling.

<div style="width:35%; margin: auto; display: flex; align-items: center; gap: 2em;">

![](/public/vite.svg)
![](/src/assets/react.svg)
![](/src/assets/twin.svg)

</div>

If you want to know more about twin.macro, visit
[Ben Rogerson's twin.macro setup](https://github.com/ben-rogerson/twin.macro?tab=readme-ov-file). From here you can get insight on how to use twin to get the maximum out of it. Of course, if you need more insight, you can just checkout the web, or I drop another peice, maybe.

If you do not want any hassle setting it up yourself, you can just clone the repo

```
degit https://github.com/Franklivania/vite-twin.git
```

It should scaffold and you know what to do from there.

To run locally, you do

```
npm run dev
```

And that's that.

## Setting Up

If you want to read extensively on setting up, visit my [Medium article](https://medium.com/@Franklivania/setting-up-twin-macro-with-vite-react-7f804c0be644), or my [Dev.to article](https://dev.to/franklivania/setting-up-twinmacro-with-vite-react-18na). They are both the same thing and would provide you insight on how to set up your own project.

## What should I change.

The core things you would change in your project are your `tsconfig.json`, `main.tsx`, `App.tsx`, `vite.config.ts`.

Others, you would need to create them according to the guidelines.

### Example usage

*This is for a custom search bar component*

```
import tw from "twin.macro"
import styled from "@emotion/styled"
import { SearchBarTypes } from "../../types"
import { Icon } from "@iconify/react"

type searchWidth = {
  size: SearchBarTypes["size"]
}
const searchWidth = {
  small: tw`w-8 h-8 rounded-full`,
  medium: tw`w-40 h-8 rounded-full`,
  large: tw`w-56 h-8 rounded-full`
}

type colorView = {
  color: SearchBarTypes["color"]
}
const colorView = {
  brown: tw`border-2 border-brown-600 text-white-60`,
  green: tw`border-2 border-green-800 text-black-60`
}

type DisplayProps = {
  size: SearchBarTypes["size"];
  color: SearchBarTypes["color"];
  isGreen?: boolean;
}

const SearchContainer = styled.span(({size, color, isGreen}: DisplayProps) => [
  tw`w-max relative bg-transparent flex items-center gap-1 p-0.5 overflow-hidden`,
  searchWidth[size],
  colorView[color],
  isGreen ? colorView.green : colorView.brown,
])

export default function SearchBar({size, color, isGreen, ...props}: SearchBarTypes) {
  return (
    <SearchContainer 
      size={size} color={color}
      {...props}
      isGreen={isGreen}
    >
      <input 
        type="search" 
        name="search" 
        id="search"
        placeholder="Search"
        tw="w-full bg-transparent hocus:(border-none) placeholder:(font-bienvenido text-right ml-auto hidden md:(flex))"
      />
      {isGreen ? (
        <span tw="ml-auto bg-green-800 p-1.5 rounded-full my-0.5">
          <Icon icon="mingcute:search-fill"  width={16} height={16} color="#ffffff" />
        </span>
      ): (
        <span tw="ml-auto bg-brown-600 p-1.5 rounded-full my-0.5">
          <Icon icon="mingcute:search-fill" width={16} height={16} color="#ffffff" />
        </span>
      )}
    </SearchContainer>
  )
}
```

So, you can use this to text the flexibility. Remember to store dependencies, and declare types, as it is typescript.

Don't forget to leave a ⭐. I appreciate.

Cheers and happy coding. 🍻 & 💖