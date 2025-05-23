
⚛️ React Common Components
A lightweight, customizable library of reusable layout components (Header, Footer, and Sidebar) for building React applications faster and cleaner.

Created with ❤️ by Rahul Chaurasia.

📦 Installation

npm install react-common-components
# or
yarn add react-common-components
🧩 Available Components
1️⃣ Header
Displays a styled header with a customizable title and background color.

import { Header } from 'react-common-components';

<Header title="My App" backgroundColor="#ffffff" />;
Prop	Type	Default	Description
title	string	'Default Header'	Text shown in the header
backgroundColor	string	'#f5f5f5'	Background color of header

2️⃣ Footer
Renders a footer bar with customizable text and background color.

import { Footer } from 'react-common-components';

<Footer text="© 2025 My Company" backgroundColor="#dddddd" />;
Prop	Type	Default	Description
text	string	'Default Footer'	Footer text
backgroundColor	string	'#e0e0e0'	Footer background color

3️⃣ Sidebar
Renders a vertical list of navigation items with custom background.

import { Sidebar } from 'react-common-components';

<Sidebar items={['Home', 'About', 'Contact']} backgroundColor="#eeeeee" />;
Prop	Type	Default	Description
items	string[]	['Home', 'About']	Menu items for the sidebar
backgroundColor	string	'#f0f0f0'	Sidebar background color


🧪 Example Usage
You can test the components in any React app:

npx create-react-app my-app
cd my-app
npm install react-common-components
Then use it in App.tsx:

import React from 'react';
import { Header, Footer, Sidebar } from 'react-common-components';

function App() {
  return (
    <>
      <Header title="Welcome to My App" backgroundColor="#e3f2fd" />
      <Sidebar items={['Dashboard', 'Profile', 'Settings']} backgroundColor="#f5f5f5" />
      <Footer text="© 2025 Rahul Chaurasia" backgroundColor="#eeeeee" />
    </>
  );
}

export default App;