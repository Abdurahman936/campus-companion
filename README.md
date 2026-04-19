This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## ML Feature

### Inputs / Features

Each event in the dataset is described using 5 binary features like academic, social, sports, indoor and evening. 1 means yes and 0 means no. The user also picks their preference using the same 5 features. Both the user and each event are represented as vector.

### Model Used

The system uses cosine similarity, a technique from content-based filtering. This measures the angle between the user's preference vector and each event vector. The smaller the angle between them, the more similar they will be. This is inspired by the k nearest neighbours instead of rules.

### Output

The system scores every event against the users' preferences and gives us back the top 3 highest scoring matches. This is displayed with a percentage score and a visual bar. If a 100% score is present this means that the event perfectly matches every preference the user selected.

### Evaluation

The recommender was tested manually. Selecting academic and indoor correctly retured three academic indoor events which were guest lecture, cv workshop and study skills bootcamp which all scored 100%. Selecting social and evening preferences returned different events like we expected. Results were logical and consistent.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
