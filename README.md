# Website for callum.co.uk

Quick and simple website for [callum.co.uk](https://callum.co.uk), built with [AstroJS](https://astro.build) and [Sanity.io](https://anity.io).

Feel free to fork this project or take code as you please.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                             |
| :---------------------- | :------------------------------------------------- |
| `npm install`           | Installs dependencies                              |
| `npm run dev`           | Starts Astro and Sanity Studio locally             |
| `npm run dev:astro`     | Starts Astro at `localhost:4322`                   |
| `npm run build`         | Build your production site to `./dist/`            |
| `npm run preview`       | Preview your build locally, before deploying       |
| `npm run astro ...`     | Run CLI commands like `astro add`, `astro preview` |
| `npm run studio:dev`    | Starts Sanity Studio at `localhost:3333`           |
| `npm run studio:build`  | Builds the standalone Sanity Studio                |
| `npm run studio:deploy` | Deploys the Studio directly to Sanity             |
| `npm run astro --help`  | Get help using the Astro CLI                       |

The site does not embed the Studio at `/studio`. Use `npm run dev` to start Astro at `localhost:4322` and Studio at `localhost:3333`. Keeping Astro off `localhost:4321` leaves that port available for the Sanity CLI login callback. Use `npm run studio:deploy` to publish the Studio to Sanity hosting at [callum.sanity.studio](https://callum.sanity.studio/).
