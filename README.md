# Multi-Step Dynamic User Form

## 🌟 Features Implemented

✅ **Form Structure**
- **Step 1:** Basic Details (Name, Date of Birth, Gender)
- **Step 2:** Contact Information (Email, Phone, Address)
- **Step 3:** Review and confirm information (Summary View)

✅ **Form Validation**
- Required fields validation
- Email format validation
- Phone number validation (10 digits)
- User-friendly error highlighting

✅ **Dynamic Navigation**
- "Next" and "Back" buttons for step navigation
- Users can edit data by returning to previous steps

✅ **State Management**
- Local state management using JavaScript objects
- Data persistence through `localStorage` (optional feature)

✅ **Responsiveness**
- Mobile-friendly, responsive design using CSS Flexbox
- Works seamlessly across different screen sizes

✅ **Progress Indicator**
- Visual stepper to show current step and progress

✅ **Smooth Transitions**
- Fade-in animation between steps

## 🛠️ Tech Stack
- HTML5
- CSS3 (Flexbox)
- Vanilla JavaScript
- TypeScript

---

## 🚀 Getting Started

### Prerequisites
- Modern browser (Chrome, Firefox, Edge)

### Running the Project Locally
1. Clone the repo:
    ```bash
    git clone https://github.com/venkateshdilipgarole/multistep-form.git
    ```
2. Navigate to the project folder:
    ```bash
    cd multistep-form
    ```
3. Open `index.html` in your browser or You can directly click on Go-live button :
    ```bash
    open index.html
    # OR manually open from your file explorer
    ```

---

## 📁 Project Structure
```
/multistep-form
├── index.html
├── styles.css
├── script.js
├── types.ts
└── design-decisions.md

```

---

## ✨ Design Decisions

### 1. **Framework-Free Implementation**
- Chose vanilla JS/TS to demonstrate understanding of core frontend skills without relying on frameworks.

### 2. **State Management & Persistence**
- State is managed using a `formData` object in JS.
- Data is stored in `localStorage` to persist user progress on refresh.

### 3. **Form Validation**
- HTML5 built-in validation is used for simplicity.
- Custom validation (phone number length, required fields) added for user-friendly experience.

### 4. **Responsiveness**
- CSS Flexbox ensures the form works across devices.
- Clean, simple layout for usability and clarity.

### 5. **Progress Indicator & Animation**
- A stepper shows current progress.
- Smooth fade-in animations enhance user experience.

---

## 🔮 Future Enhancements
- **React.js** + **TypeScript** for component-driven architecture
- Form libraries like **Formik** and **Yup** for advanced validation
- Backend API integration for saving form data
- Accessibility improvements (ARIA attributes, keyboard navigation)
- Add unit tests (Jest)

---



---

## 🤝 Contact
**Developed by:** Venkatesh Dilip Garole 

[LinkedIn](https://www.linkedin.com/in/venkatesh-dilip-garole-b61a0b25b/) | [GitHub](https://github.com/venkateshdilipgarole?tab=repositories)

---

