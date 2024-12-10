# Pair Project

https://github.com/user-attachments/assets/6057d258-6c3f-4245-85af-46d791680740

## Description

This project is a React application built with TypeScript and Vite. It includes a simple user list component that fetches data from an API and allows for searching through the list.

## Project Structure

```
.gitignore
eslint.config.js
index.html
package.json
public/
README.md
src/
    App.css
    App.tsx
    assets/
    components/
        List.css
        List.tsx
    index.css
    main.tsx
    vite-env.d.ts
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd pair-project
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Application

To start the development server, run:

```sh
npm run dev
```

This will start the Vite development server and you can view the application in your browser at `http://localhost:3000`.

### Building the Application

To build the application for production, run:

```sh
npm run build
```

The built files will be output to the `dist` directory.

### Linting

To lint the code, run:

```sh
npm run lint
```

## Project Details

### Components

- `src/components/List.tsx`: This component fetches user data from an API and displays it in a list. It includes a search input to filter the users by name.
- `src/App.tsx`: The main application component that renders the `List` component.

### Styles

- `src/components/List.css`: Styles for the `List` component.
- `src/App.css`: Styles for the main application.
- `src/index.css`: Global styles for the application.

### Configuration

- `vite.config.ts`: Vite configuration file.
- `tsconfig.json`: TypeScript configuration file.
- `tsconfig.app.json`: TypeScript configuration for the application.
- `tsconfig.node.json`: TypeScript configuration for Node.js.
- `eslint.config.js`: ESLint configuration file.

## License

This project is licensed under the MIT License.
