import { GoogleGenerativeAI } from '@google/generative-ai';

export const generateRecipe = async (ingredients, mealType, dietary) => {
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  if (!API_KEY) {
    throw new Error('Gemini API Key is missing. Please add VITE_GEMINI_API_KEY to your .env file.');
  }

  const genAI = new GoogleGenerativeAI(API_KEY);

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    let prompt = `You are an expert chef. Please create a delicious recipe based on the following:
Ingredients available: ${ingredients}
`;

    if (mealType !== 'Any') {
      prompt += `Meal Type: ${mealType}\n`;
    }

    if (dietary !== 'None') {
      prompt += `Dietary Restrictions: ${dietary}\n`;
    }

    prompt += `
Please format the recipe clearly using Markdown with the following structure:
# [Recipe Name]
*A brief, appetizing description.*

## ⏱️ Prep & Cook Time
- Prep: ...
- Cook: ...
- Total: ...

## 🥗 Ingredients
- (List all ingredients with estimated measurements, including standard pantry items if needed to make it taste good)

## 🍳 Instructions
1. ...
2. ...

## 💡 Chef's Tips
- (Add a pro tip or substitution suggestion)
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating recipe:', error);
    throw new Error(`Failed to generate recipe: ${error.message}`);
  }
};
