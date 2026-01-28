# React Principles and Concepts Used in This Portfolio Project

This document outlines all React principles, concepts, and patterns used in this portfolio project, along with where they are applied. Use this as a learning guide to understand React development.

---

## Table of Contents

1. [Component Architecture](#component-architecture)
2. [React Hooks](#react-hooks)
3. [React Router](#react-router)
4. [Context API](#context-api)
5. [Custom Hooks](#custom-hooks)
6. [State Management](#state-management)
7. [Event Handling](#event-handling)
8. [Conditional Rendering](#conditional-rendering)
9. [Lists and Keys](#lists-and-keys)
10. [Props and Component Composition](#props-and-component-composition)
11. [Form Handling](#form-handling)
12. [Styling Approaches](#styling-approaches)
13. [Performance Optimization](#performance-optimization)

---

## Component Architecture

### Functional Components
**Concept**: Modern React uses functional components instead of class components.

**Applied in**:
- All components in `src/components/` (ProfileCard, Navigation, ServiceCard, etc.)
- All pages in `src/pages/` (Home, About, Resume, Portfolio, Blog, Quotes, Contact)
- Example: `src/components/ProfileCard.jsx` - Simple functional component

### Component Composition
**Concept**: Building complex UIs by combining smaller, reusable components.

**Applied in**:
- `src/App.jsx` - Composes Navigation, ThemeToggle, and Route components
- `src/pages/About.jsx` - Composes ProfileCard, AboutSection, and ServicesSection
- `src/components/ServicesSection.jsx` - Uses ServiceCard components
- `src/components/ProfileCard.jsx` - Uses InfoItem components

### Component Separation (Pages vs Components)
**Concept**: Separating page-level components from reusable UI components.

**Structure**:
- `src/pages/` - Page-level components (Home, About, Resume, etc.)
- `src/components/` - Reusable UI components (ProfileCard, ServiceCard, etc.)

---

## React Hooks

### useState Hook
**Concept**: Manages component state in functional components.

**Applied in**:
- `src/components/ServiceCard.jsx` - Tracks hover state
  ```jsx
  const [isHovered, setIsHovered] = useState(false);
  ```

- `src/components/Navigation.jsx` - Tracks hovered navigation item
  ```jsx
  const [hoveredItem, setHoveredItem] = useState(null);
  ```

- `src/pages/Contact.jsx` - Manages form data and submission state
  ```jsx
  const [formData, setFormData] = useState({ name: '', email: '', ... });
  const [isSubmitting, setIsSubmitting] = useState(false);
  ```

- `src/pages/Blog.jsx` - Tracks selected category filter
  ```jsx
  const [selectedCategory, setSelectedCategory] = useState('all');
  ```

- `src/pages/Quotes.jsx` - Tracks selected quote category
- `src/pages/Portfolio.jsx` - Tracks hover state for project cards
- `src/contexts/ThemeContext.jsx` - Manages theme state with lazy initialization
  ```jsx
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });
  ```

### useEffect Hook
**Concept**: Handles side effects (API calls, subscriptions, DOM manipulation) in functional components.

**Applied in**:
- `src/contexts/ThemeContext.jsx` - Syncs theme with localStorage and DOM
  ```jsx
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  ```

### useContext Hook
**Concept**: Accesses context values without prop drilling.

**Applied in**:
- `src/hooks/useThemeStyles.js` - Accesses theme from ThemeContext
  ```jsx
  const { theme } = useTheme();
  ```

- `src/components/ThemeToggle.jsx` - Accesses theme and toggleTheme function
  ```jsx
  const { theme, toggleTheme } = useTheme();
  ```

### Custom Hook Pattern
**Concept**: Creating reusable hooks to encapsulate logic.

**Applied in**:
- `src/hooks/useThemeStyles.js` - Custom hook that returns theme-aware styles
  ```jsx
  export const useThemeStyles = () => {
    const { theme } = useTheme();
    // Returns styles object based on theme
  };
  ```

- `src/contexts/ThemeContext.jsx` - Custom hook `useTheme()` for accessing theme context
  ```jsx
  export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
  };
  ```

---

## React Router

### BrowserRouter
**Concept**: Provides routing functionality for single-page applications.

**Applied in**:
- `src/App.jsx` - Wraps the entire app
  ```jsx
  <Router>
    <AppContent />
  </Router>
  ```

### Routes and Route
**Concept**: Defines route paths and their corresponding components.

**Applied in**:
- `src/App.jsx` - Defines all application routes
  ```jsx
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/resume" element={<ResumePage />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/quotes" element={<Quotes />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  ```

### Link Component
**Concept**: Client-side navigation without page reload.

**Applied in**:
- `src/components/Navigation.jsx` - Navigation links
  ```jsx
  <Link to={item.path} style={getLinkStyle(item.path)}>
    {item.name}
  </Link>
  ```

### useLocation Hook
**Concept**: Gets current location object for conditional styling/logic.

**Applied in**:
- `src/components/Navigation.jsx` - Highlights active navigation link
  ```jsx
  const location = useLocation();
  const isActive = location.pathname === path;
  ```

---

## Context API

### createContext
**Concept**: Creates a context for sharing data across component tree.

**Applied in**:
- `src/contexts/ThemeContext.jsx`
  ```jsx
  const ThemeContext = createContext();
  ```

### Context.Provider
**Concept**: Provides context value to child components.

**Applied in**:
- `src/contexts/ThemeContext.jsx` - ThemeProvider component
  ```jsx
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
    {children}
  </ThemeContext.Provider>
  ```

- `src/App.jsx` - Wraps app with ThemeProvider
  ```jsx
  <ThemeProvider>
    <Router>
      <AppContent />
    </Router>
  </ThemeProvider>
  ```

### useContext
**Concept**: Consumes context values in components.

**Applied in**:
- `src/hooks/useThemeStyles.js` - Accesses theme context
- `src/components/ThemeToggle.jsx` - Accesses theme context

---

## State Management

### Local Component State
**Concept**: State managed within a single component using useState.

**Applied in**:
- Form state in `src/pages/Contact.jsx`
- Filter state in `src/pages/Blog.jsx` and `src/pages/Quotes.jsx`
- Hover states in various components

### Global State with Context
**Concept**: Shared state across multiple components using Context API.

**Applied in**:
- Theme state in `src/contexts/ThemeContext.jsx` - Shared across all components

### State Lifting
**Concept**: Moving state up to a common ancestor component.

**Example**: Theme state is lifted to ThemeProvider, accessible by all children

### State Persistence
**Concept**: Saving state to localStorage for persistence across sessions.

**Applied in**:
- `src/contexts/ThemeContext.jsx` - Theme preference saved to localStorage
  ```jsx
  localStorage.setItem('theme', theme);
  const savedTheme = localStorage.getItem('theme');
  ```

---

## Event Handling

### onClick Events
**Concept**: Handling click interactions.

**Applied in**:
- `src/components/ThemeToggle.jsx` - Theme toggle button
  ```jsx
  <button onClick={toggleTheme}>
  ```

- `src/pages/Blog.jsx` - Category filter buttons
  ```jsx
  <button onClick={() => setSelectedCategory(category.id)}>
  ```

- `src/pages/Contact.jsx` - Form submission and WhatsApp button
  ```jsx
  <form onSubmit={handleSubmit}>
  <button onClick={handleWhatsApp}>
  ```

### onMouseEnter/onMouseLeave Events
**Concept**: Handling hover interactions.

**Applied in**:
- `src/components/ServiceCard.jsx` - Card hover effects
  ```jsx
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  ```

- `src/components/Navigation.jsx` - Navigation link hover
- `src/pages/Portfolio.jsx` - Project card hover effects

### onChange Events
**Concept**: Handling input field changes.

**Applied in**:
- `src/pages/Contact.jsx` - Form input handling
  ```jsx
  <input onChange={handleChange} />
  ```

### onFocus/onBlur Events
**Concept**: Handling input focus states.

**Applied in**:
- `src/pages/Contact.jsx` - Input focus styling
  ```jsx
  onFocus={(e) => { e.target.style.borderColor = '#eab308'; }}
  onBlur={(e) => { e.target.style.borderColor = '#27272a'; }}
  ```

### Event Object (e)
**Concept**: Accessing event properties and preventing default behavior.

**Applied in**:
- `src/pages/Contact.jsx` - Form submission
  ```jsx
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents form default submission
  };
  ```

---

## Conditional Rendering

### Ternary Operators
**Concept**: Rendering different content based on conditions.

**Applied in**:
- `src/components/ThemeToggle.jsx` - Different icons for dark/light mode
  ```jsx
  {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
  ```

- `src/pages/Blog.jsx` - Conditional rendering of filtered blogs
  ```jsx
  {filteredBlogs.length > 0 ? (
    <div>...</div>
  ) : (
    <p>No blogs found</p>
  )}
  ```

- `src/pages/Contact.jsx` - Success message display
  ```jsx
  {submitStatus === 'success' && (
    <div>Email client opened!</div>
  )}
  ```

### Logical AND (&&)
**Concept**: Conditionally rendering elements.

**Applied in**:
- `src/pages/Contact.jsx` - Conditional success message
- `src/pages/Portfolio.jsx` - Conditional "Coming Soon" badge
  ```jsx
  {isUpcoming && (
    <div>Coming Soon</div>
  )}
  ```

### Conditional Styles
**Concept**: Applying different styles based on state.

**Applied in**:
- `src/components/Navigation.jsx` - Active link styling
  ```jsx
  color: isActive || isHovered ? '#eab308' : styles.navLink.color
  ```

- `src/components/ServiceCard.jsx` - Hover state styling
  ```jsx
  backgroundColor: isHovered ? '#27272a' : '#18181b'
  ```

---

## Lists and Keys

### Array.map()
**Concept**: Rendering lists of components from arrays.

**Applied in**:
- `src/components/Navigation.jsx` - Rendering navigation items
  ```jsx
  {navItems.map((item) => (
    <li key={item.name}>
      <Link to={item.path}>{item.name}</Link>
    </li>
  ))}
  ```

- `src/components/ServicesSection.jsx` - Rendering service cards
  ```jsx
  {services.map((service, index) => (
    <ServiceCard key={index} {...service} />
  ))}
  ```

- `src/components/Resume.jsx` - Rendering experiences, skills, projects
- `src/pages/Blog.jsx` - Rendering blog cards
- `src/pages/Quotes.jsx` - Rendering quote cards
- `src/pages/Portfolio.jsx` - Rendering project cards

### Keys
**Concept**: Unique identifiers for list items (required by React).

**Applied in**:
- All `.map()` calls use `key` prop
- Examples: `key={index}`, `key={item.id}`, `key={item.name}`

---

## Props and Component Composition

### Props Passing
**Concept**: Passing data from parent to child components.

**Applied in**:
- `src/components/ServiceCard.jsx` - Receives icon, title, description
  ```jsx
  const ServiceCard = ({ icon, title, description }) => {
  ```

- `src/components/InfoItem.jsx` - Receives icon, label, value
  ```jsx
  const InfoItem = ({ icon, label, value }) => {
  ```

### Destructuring Props
**Concept**: Extracting props using destructuring syntax.

**Applied in**:
- All components use destructured props
- Example: `const ServiceCard = ({ icon, title, description }) => {`

### Children Prop
**Concept**: Passing components/elements as children.

**Applied in**:
- `src/contexts/ThemeContext.jsx` - ThemeProvider uses children
  ```jsx
  <ThemeProvider>
    {children}
  </ThemeProvider>
  ```

---

## Form Handling

### Controlled Components
**Concept**: Form inputs controlled by React state.

**Applied in**:
- `src/pages/Contact.jsx` - All form inputs are controlled
  ```jsx
  <input
    value={formData.name}
    onChange={handleChange}
    name="name"
  />
  ```

### Form State Management
**Concept**: Managing multiple form fields in a single state object.

**Applied in**:
- `src/pages/Contact.jsx`
  ```jsx
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });
  ```

### Dynamic Property Updates
**Concept**: Updating nested object properties in state.

**Applied in**:
- `src/pages/Contact.jsx` - handleChange function
  ```jsx
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  ```

### Form Validation
**Concept**: Validating form inputs before submission.

**Applied in**:
- `src/pages/Contact.jsx` - Required fields using HTML5 validation
  ```jsx
  <input required />
  <textarea required />
  ```

### Form Submission
**Concept**: Handling form submission and preventing default behavior.

**Applied in**:
- `src/pages/Contact.jsx` - handleSubmit function
  ```jsx
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission
  };
  ```

---

## Styling Approaches

### Inline Styles
**Concept**: Styling components using JavaScript objects.

**Applied in**:
- All components use inline styles via style objects
- `src/hooks/useThemeStyles.js` - Centralized style definitions
- Dynamic styles based on theme and state

### CSS Modules / External CSS
**Concept**: Using separate CSS files for styling.

**Applied in**:
- `src/assets/css/ProfileCard.css` - ProfileCard styles
- `src/assets/css/InfoItem.css` - InfoItem styles
- Theme-aware CSS using `[data-theme="light"]` selectors

### Conditional Styling
**Concept**: Applying styles based on component state or props.

**Applied in**:
- `src/components/ServiceCard.jsx` - Hover state styles
- `src/components/Navigation.jsx` - Active link styles
- `src/hooks/useThemeStyles.js` - Theme-based styles

### Style Objects
**Concept**: Defining styles as JavaScript objects.

**Applied in**:
- `src/hooks/useThemeStyles.js` - Centralized style definitions
- All components use style objects for inline styling

---

## Performance Optimization

### Lazy State Initialization
**Concept**: Initializing state with a function to avoid expensive computations on every render.

**Applied in**:
- `src/contexts/ThemeContext.jsx`
  ```jsx
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });
  ```

### Functional State Updates
**Concept**: Using functional updates when new state depends on previous state.

**Applied in**:
- `src/contexts/ThemeContext.jsx`
  ```jsx
  setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  ```

### Dependency Arrays in useEffect
**Concept**: Controlling when effects run by specifying dependencies.

**Applied in**:
- `src/contexts/ThemeContext.jsx`
  ```jsx
  useEffect(() => {
    // Effect code
  }, [theme]); // Only runs when theme changes
  ```

---

## Additional React Patterns

### Error Boundaries (Concept)
**Concept**: Catching errors in child components (not implemented but good to know).

### Component Reusability
**Applied in**:
- `src/components/ServiceCard.jsx` - Reused for different services
- `src/components/InfoItem.jsx` - Reused for different info types
- `src/components/ProfileCard.jsx` - Reused across all pages

### Separation of Concerns
**Concept**: Separating logic, presentation, and data.

**Structure**:
- `src/components/` - Presentation components
- `src/pages/` - Page-level components
- `src/contexts/` - State management
- `src/hooks/` - Reusable logic

### Single Responsibility Principle
**Concept**: Each component has a single, well-defined purpose.

**Examples**:
- `ProfileCard` - Displays profile information
- `Navigation` - Handles navigation
- `ThemeToggle` - Toggles theme
- `ServiceCard` - Displays a single service

---

## File Structure and Organization

```
src/
├── components/          # Reusable UI components
├── pages/              # Page-level components
├── contexts/           # Context providers
├── hooks/              # Custom hooks
├── assets/
│   ├── css/           # CSS files
│   └── images/        # Image assets
├── App.jsx            # Main app component with routing
└── main.jsx           # Entry point
```

---

## Key Learning Points

1. **Component-Based Architecture**: Everything is a component, promoting reusability
2. **Hooks Over Classes**: Modern React uses hooks for state and side effects
3. **Context for Global State**: Use Context API for shared state (like theme)
4. **Custom Hooks**: Encapsulate reusable logic in custom hooks
5. **React Router**: Client-side routing without page reloads
6. **Controlled Components**: Forms controlled by React state
7. **Conditional Rendering**: Use ternary operators and logical operators
8. **Lists and Keys**: Always provide keys when rendering lists
9. **Event Handling**: Use event handlers for user interactions
10. **State Management**: Choose between local state and global state (Context)

---

## Recommended Study Path

1. Start with `src/components/ProfileCard.jsx` - Simple component with props
2. Study `src/components/Navigation.jsx` - Hooks, routing, event handling
3. Examine `src/pages/Contact.jsx` - Form handling and state management
4. Review `src/contexts/ThemeContext.jsx` - Context API implementation
5. Analyze `src/hooks/useThemeStyles.js` - Custom hook pattern
6. Explore `src/App.jsx` - Routing and component composition
7. Study `src/pages/Blog.jsx` - Complex state, filtering, conditional rendering

---

## Resources for Further Learning

- [React Official Documentation](https://react.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [React Hooks Documentation](https://react.dev/reference/react)
- [Context API Guide](https://react.dev/learn/passing-data-deeply-with-context)

---

**Note**: This project uses React 19.2.0 and React Router DOM. Make sure you're familiar with the latest React patterns and best practices.
