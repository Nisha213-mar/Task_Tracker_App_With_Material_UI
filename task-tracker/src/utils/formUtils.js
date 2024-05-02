// formUtils.js

// Mock function to simulate form submission
export const submitFormData = (formData) => {
    return new Promise((resolve, reject) => {
      // Simulate a delay to mimic an asynchronous operation
      setTimeout(() => {
        // Log the form data to the console (you would replace this with actual form submission logic)
        console.log('Form data submitted:', formData);
        // Resolve the promise to indicate successful form submission
        resolve();
      }, 1000); // Simulate a 1 second delay
    });
  };
  