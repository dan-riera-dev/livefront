# LiveFront Assessment
Netlify Deployed Link: https://livefront-assessment.netlify.app/

In this project, I initially started using GraphQL and Apollo Client to manage data fetching. However, I encountered limitations as I couldn't find an API that provided all the necessary data points, such as faction, affiliations, or character images. To overcome this, I transitioned to using REST APIs and focused on creating a minimalist concept. This approach allowed me to incorporate small, interactive elements, making the user experience more engaging and immersive.


![ScreenRecording2024-09-08at1 56 53PM-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/9232f1af-94a7-4be1-bca5-a110c6727157)

### Setup
- Clone repo `git@github.com:dan-riera-dev/livefront.git`
- Run `yarn`
- Run `yarn start` to start site
- Run `yarn test --coverage` to run test suite with coverage
- Use option `a` to run all tests

### Key points:

- Developed a unified color and spacing theme for consistent design and streamlined spacing across the app.
- Separated business logic from UI using reusable components for improved maintainability and scalability.
- Created a Character type to ensure type safety and reduce redundancy in data handling.
- Designed generalized error and loading screens for better user experience and code reuse.
- Handled API 404 errors by creating a custom function to detect broken image URLs and display a fallback image.

### A11y
- Enhanced accessibility with ARIA labels, roles, and tabIndex to support users with assistive technologies.
- Implemented reduced motion preferences to accommodate users with motion sensitivities.

### Improvement Opportunities

- Develop more comprehensive and robust test cases to ensure greater coverage and reliability.
- Implement lazy loading for images to optimize page performance and reduce initial load times.
- Further enhance accessibility features to provide an inclusive experience for all users.
- Reduce styling to be more concise and centralized, apply global styling where relevant.
  
### Known Issues
- The API returns a default placeholder image, which I replace with my own default image. This replacement causes a delay in image loading, as noted in point 2 of the Improvement Opportunities.

 ### Tested Browsers
  - Tested on Chrome, Safari, FireFox and mobile iOS and Android
   <img width="682" alt="Screenshot 2024-09-09 at 4 45 42 PM" src="https://github.com/user-attachments/assets/4a2a9d33-85da-4334-8899-bf04392a6097">


### Site Images
![ScreenRecording2024-09-09at12 59 19PM-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/a9c6938d-3a27-43a9-a487-31af4622bef0)

![ScreenRecording2024-09-09at12 28 33PM-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/74484229-dc1c-404a-b4cb-acbe5f8639ec)

### Mobile



https://github.com/user-attachments/assets/71f00fc8-91d7-413b-ae45-bcc506069444


### API 
- git@github.com:dan-riera-dev/livefront.git


