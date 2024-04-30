

# React List Map

React List Map is a simple React component for displaying a list of items on a map.

## Features

- **Dynamic Markers:** Display markers on a map for each item in the list.
- **Customizable:** Customize the appearance and behavior of the map and markers.
- **Interactive:** Users can interact with the map, zoom in/out, and click on markers for more information.
- **Easy Integration:** Integrate the component into your React projects with ease.

## Installation

To use React List Map in your React project, follow these steps:

1. Install the package via npm or yarn:

   ```
   npm install @paulfranckdencausse/react-list-map
   ```

   or

   ```
   yarn add @paulfranckdencausse/react-list-map
   ```

2. Import the component into your React application:

   ```jsx
   import React from 'react';
   import { ListMap } from '@paulfranckdencausse/react-list-map';

   function App() {
     return (
       <div>
         <ListMap items={data} />
       </div>
     );
   }

   export default App;
   ```

3. Pass the list of items as props:

   ```jsx
   const data = [
     { id: 1, name: 'Location A', latitude: 40.7128, longitude: -74.006 },
     { id: 2, name: 'Location B', latitude: 34.0522, longitude: -118.2437 },
     { id: 3, name: 'Location C', latitude: 51.5074, longitude: -0.1278 },
     // Add more items as needed
   ];
   ```

4. Enjoy using the React List Map component in your project!

## Props

The `ListMap` component accepts the following props:

- `items`: An array of objects representing the items to be displayed on the map. Each object should contain `id`, `name`, `latitude`, and `longitude` properties.

## Example

Here's an example of how you can use the React List Map component in your project:

```jsx
import React from 'react';
import { ListMap } from '@paulfranckdencausse/react-list-map';

const data = [
  { id: 1, name: 'Location A', latitude: 40.7128, longitude: -74.006 },
  { id: 2, name: 'Location B', latitude: 34.0522, longitude: -118.2437 },
  { id: 3, name: 'Location C', latitude: 51.5074, longitude: -0.1278 },
  // Add more items as needed
];

function App() {
  return (
    <div>
      <ListMap items={data} />
    </div>
  );
}

export default App;
```

## Contributing

Contributions to React List Map are welcome! If you find any bugs or would like to suggest new features, please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License. For more information, see the [LICENSE](LICENSE) file.

---

Feel free to customize this README to include any additional information specific to your project.
