import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("GEMINI_API_KEY is not set.");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

async function main() {
  try {
    console.log("Generating image...");
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: 'A wide aerial landscape photography featuring a baroque palace with formal gardens on the left, a winding river in the middle, a historic abbey on the right, a town with a church spire, and power plant cooling towers in the far distance under a sunny sky. High quality, realistic, beautiful lighting.',
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9"
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64Data = part.inlineData.data;
        const publicDir = path.join(process.cwd(), 'public');
        if (!fs.existsSync(publicDir)) {
          fs.mkdirSync(publicDir);
        }
        fs.writeFileSync(path.join(publicDir, 'hero-bg.png'), Buffer.from(base64Data, 'base64'));
        console.log('Image saved to public/hero-bg.png');
        return;
      }
    }
    console.log("No image data found in response.");
  } catch (error) {
    console.error("Error generating image:", error);
  }
}

main();
