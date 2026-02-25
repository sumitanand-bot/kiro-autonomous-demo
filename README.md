# kiro-autonomous-demo

## Frontend Styling Conventions

The frontend uses Tailwind CSS for styling with a consistent dark orange color scheme throughout the UI components.

### Color Scheme

The application uses a dark orange theme for primary interactive and highlighted elements:

| Element Type | Tailwind Class | Description |
|-------------|----------------|-------------|
| Background | `bg-orange-100` | Used for highlighted content areas and message containers |
| Text | `text-orange-800` | Used for primary content text within highlighted areas |
| Border | `border-orange-700` | Used for borders on interactive elements |

### Component Examples

**API Response Display (HelloWorld.jsx)**:
- Message container uses `bg-orange-100` for a subtle dark orange background
- Message text uses `text-orange-800` for strong readability against the orange background
- Loading spinner uses `border-orange-500` for visual feedback

### Design Principles

1. **Consistency**: Use the dark orange palette (`orange-100`, `orange-700`, `orange-800`) for all primary UI elements
2. **Accessibility**: Dark orange provides good contrast for readability
3. **Hierarchy**: Use lighter shades (`orange-100`) for backgrounds and darker shades (`orange-800`) for text