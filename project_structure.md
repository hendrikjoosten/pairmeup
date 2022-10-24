## understanding the file in the repo

from [A Scalable Project Structure for Next.js](https://giancarlobuomprisco.com/next/a-scalable-nextjs-project-structure)


- src
  - core
  - components
  - lib
  - pages
    - api

### Core
The core layer is where we place everything unrelated to our domain, such as utilities, technical implementations, or API.

### Lib
I have to be honest: I do not know why I'm calling this lib. In Angular-land, it would be modules.


### Components
This folder is logically speaking on the same layer as lib.

Why not place them in the same folder, you say? To avoid excessive nesting, which can become nasty.

### Pages
If you know Next.js, you may not need an explanation for this. The folder pages is a Next-specific directory to place our routes or pages.

Next.js's router is file-system based: so, yes, no configurations. It's all driven by how we structure the pages in this folder.