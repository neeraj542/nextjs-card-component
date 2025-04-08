# Next.js Card Component

This project is a simple Next.js component built for displaying a customizable card, with options like badges, icons, and media. It's designed to be easy to integrate into any Next.js application.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Getting Started

To get started with this project, follow the installation steps below. The instructions are split for **Windows** and **MacOS**. Make sure you have **Node.js** installed on your system before proceeding.

---

## Prerequisites

Before you start, ensure that you have the following installed:

- **Node.js** (v14.x or above) - You can download it from [here](https://nodejs.org/)
- **npm** (comes with Node.js, but you can check by running `npm -v` in the terminal)

---

## Installation

### **For Windows**

1. **Clone the Repository**
   Open your terminal (Command Prompt or PowerShell) and run:

   ```bash
   git clone https://github.com/51xDeveloper/nextjs-card-component.git
   cd nextjs-card-component
   ```

2. **Install Dependencies**
   Run the following command to install the project dependencies:

   ```bash
   npm install
   ```

3. **Run the Development Server**
   After the dependencies are installed, you can start the development server with the following command:

   ```bash
   npm run dev
   ```

   This will start the app, and you can view it by visiting [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build and Export (for Static Deployment)**
   If you want to build and export the app as static files (for deployment, e.g., on GitHub Pages):

   ```bash
   npm run build
   npm run export
   ```

### **For MacOS**

1. **Clone the Repository**
   Open your terminal and run:

   ```bash
   git clone https://github.com/51xDeveloper/nextjs-card-component.git
   cd nextjs-card-component
   ```

2. **Install Dependencies**
   Install the necessary dependencies using npm:

   ```bash
   npm install
   ```

3. **Run the Development Server**
   To start the development server, run:

   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) in your browser to view the app.

4. **Build and Export (for Static Deployment)**
   If you need to export your app as static files for deployment:

   ```bash
   npm run build
   npm run export
   ```

---

## Usage

After following the installation steps above, you can start using the component within your Next.js application.

The **CarbonPermitCard** component can be used like this:

```jsx
import CarbonPermitCard from './path-to-component';

const YourPage = () => {
  return (
    <div>
      <CarbonPermitCard />
    </div>
  );
};

export default YourPage;
```

For customization, you can modify the card's properties such as image URLs, card content, badges, etc. Refer to the code inside `CarbonPermitCard.js` for more details on how to customize.

---

## Contributing

Contributions are always welcome! If you find any issues or have suggestions, feel free to open an issue or submit a pull request. Please ensure that your code follows the coding style used in the repository.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---