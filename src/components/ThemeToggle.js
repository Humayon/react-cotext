import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// class ThemeToggle extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { toggleTheme } = this.context;
//     return (
//       <React.Fragment>
//         <button onClick={toggleTheme}>Toggle Theme</button>
//       </React.Fragment>
//     );
//   }
// }

// export default ThemeToggle;

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <React.Fragment>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </React.Fragment>
  );
};

export default ThemeToggle;
