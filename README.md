# LiveFront Assessment

In this project, I initially started using GraphQL and Apollo Client to manage data fetching. However, I encountered limitations as I couldn't find an API that provided all the necessary data points, such as faction, affiliations, or character images. To overcome this, I transitioned to using REST APIs and focused on creating a minimalist concept. This approach allowed me to incorporate small, interactive elements, making the user experience more engaging and immersive.

### Key points:

- Developed a unified color and spacing theme for consistent design and streamlined spacing across the app.
- Separated business logic from UI using reusable components for improved maintainability and scalability.
- Created a Character type to ensure type safety and reduce redundancy in data handling.
- Designed generalized error and loading screens for better user experience and code reuse.
- Enhanced accessibility with ARIA labels, roles, and tabIndex to support users with assistive technologies.
- Implemented reduced motion preferences to accommodate users with motion sensitivities.
- Handled API 404 errors by creating a custom function to detect broken image URLs and display a fallback image.

### Improvement Opportunities

- Develop more comprehensive and robust test cases to ensure greater coverage and reliability.
- Implement lazy loading for images to optimize page performance and reduce initial load times.
- Further enhance accessibility features to provide an inclusive experience for all users.
