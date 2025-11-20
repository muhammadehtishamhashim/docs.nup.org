# National University of Pakistan Documentation

This is a [Next.js](https://nextjs.org) documentation site powered by [Nextra](https://nextra.site).

## Getting Started

### Installation

First, install the dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

Build the site and generate the search index:

```bash
npm run build
```

This will:
1. Build the Next.js application
2. Run the `postbuild` script to generate Pagefind search index

### Starting Production Server

After building, start the production server:

```bash
npm start
```

## Project Structure

```
src/app/
├── _meta.js              # Root-level navigation configuration
├── page.mdx              # Home page
├── layout.js             # Root layout with Nextra theme
└── semester-1/           # Semester 1 documentation
    ├── _meta.js          # Semester 1 navigation
    ├── intro-to-programming/
    │   └── page.mdx
    ├── basic-grammar/
    │   └── page.mdx
    └── calculus/
        └── page.mdx
```

## Adding New Pages

1. Create a new folder in the appropriate directory (e.g., `src/app/semester-1/new-topic/`)
2. Add a `page.mdx` file inside the folder
3. Update the `_meta.js` file in the parent directory to include the new page

Example `_meta.js`:
```js
export default {
  "intro-to-programming": "Intro to Programming Fundamentals",
  "basic-grammar": "Basic Grammar",
  "new-topic": "New Topic Title"
}
```

## Search

Search is powered by [Pagefind](https://pagefind.app/). The search index is automatically generated during the build process.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Nextra Documentation](https://nextra.site)
- [Pagefind Documentation](https://pagefind.app/docs/)

## Deploy on Vercel

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
