## Live Demo

[https://campuscompanion936.netlify.app/](https://campuscompanion936.netlify.app/)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ML Feature

### Inputs / Features

Each event in the dataset is described using 5 binary features like academic, social, sports, indoor and evening. 1 means yes and 0 means no. The user also picks their preference using the same 5 features. Both the user and each event are represented as vector.

### Model Used

The system uses cosine similarity, a technique from content-based filtering. This measures the angle between the user's preference vector and each event vector. The smaller the angle between them, the more similar they will be. This is inspired by the k nearest neighbours instead of rules.

### Output

The system scores every event against the users' preferences and gives us back the top 3 highest scoring matches. This is displayed with a percentage score and a visual bar. If a 100% score is present this means that the event perfectly matches every preference the user selected.

### Evaluation

The recommender was tested manually. Selecting academic and indoor correctly retured three academic indoor events which were guest lecture, cv workshop and study skills bootcamp which all scored 100%. Selecting social and evening preferences returned different events like we expected. Results were logical and consistent.
