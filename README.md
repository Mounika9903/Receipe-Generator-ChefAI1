# 👨‍🍳 ChefAI - AI Recipe Generator

ChefAI is a modern web application built with **React** and **Vite** that uses the power of **Google Gemini AI** to generate personalized, delicious recipes based on the ingredients you have on hand, your preferred meal type, and any dietary restrictions!

## ✨ Features

- **Ingredient-Based Suggestions**: Simply type in what you have in your fridge or pantry.
- **Meal Type Selection**: Choose whether you want Breakfast, Lunch, Dinner, or a Snack.
- **Dietary Restrictions**: Accommodates various diets (e.g., Vegan, Gluten-Free, Keto, etc.).
- **AI-Powered**: Uses Google's advanced `gemini-2.5-flash` model to act as your personal expert chef.
- **Beautiful Formatting**: Recipes are neatly formatted with prep times, clear ingredients lists, step-by-step instructions, and chef's tips.

## 🚀 Tech Stack

- **Frontend**: React.js, Vite
- **AI Integration**: Google Generative AI (`@google/generative-ai`)

## 🛠️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- A Google Gemini API Key

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd "Receipe GEnerator- ChefAI"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   - Create a `.env` file in the root of the project.
   - Add your Google Gemini API key:
     ```env
     VITE_GEMINI_API_KEY=your_api_key_here
     ```
   *(Note: Ensure `.env` is added to your `.gitignore` to prevent leaking your API key!)*

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the app:**
   Navigate to `http://localhost:5173` in your browser.

## ⚠️ Security Note
Never push your actual API keys to a public GitHub repository. Ensure your API key is kept secure and that your `.env` file is never committed to version control.

## 🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📝 License
This project is licensed under the MIT License.
