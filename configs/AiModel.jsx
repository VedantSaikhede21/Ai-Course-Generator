const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const generationConfig = {
  temperature: 1.0,
  maxOutputTokens: 8192,
  topP: 0.95,
  topK: 64,
  responseMimeType: "application/json"
};

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export const GenerateCourseLayout_AI = model.startChat( {
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          { text: "Generate a course Tutorial on following details with feild as Course Name, Description, Along with Chapter Name, about, Duration "}
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: `'''json
{
  "course": {
    "name": "Intro to Web Development",
    "description": "A beginner-friendly course covering the basics of HTML, CSS, and JavaScript.",
    "chapters": [
      {
        "chapter_name": "HTML Fundamentals",
        "about": "Understanding the structure and basic tags of HTML5.",
        "duration": "2 hours"
      },
      {
        "chapter_name": "Styling with CSS",
        "about": "Learning selectors, the box model, and responsive design techniques.",
        "duration": "3 hours"
      },
      {
        "chapter_name": "JavaScript Basics",
        "about": "Variables, data types, functions, and DOM manipulation.",
        "duration": "4 hours"
      }
    ]
  }
}
'''

Generate a course tutorial on the following details and adhere strictly to the JSON format provided above.
`
          }
        ],
      }
    ]
  });

  // Now you can send a message to the chat session
  // Example: const result = await chatSession.sendMessage("Your course details here");
  
;