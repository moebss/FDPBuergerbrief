import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.warn("GEMINI_API_KEY is not set.");
}

const ai = new GoogleGenAI({ apiKey: apiKey || "" });

export async function draftCitizenLetter(
  name: string,
  topic: string,
  info: string,
  kommune: string
): Promise<string> {
  try {
    const prompt = `Du bist ein professioneller Assistent für Bürgeranliegen im Rhein-Erft-Kreis.
Erstelle einen formellen, höflichen und gut strukturierten Bürgerbrief an den Kommunalpolitiker Alexander Rheindorf.
Der Brief kommt von: ${name || "[Name des Bürgers]"}
Kommune: ${kommune}
Thema: ${topic}
Zusätzliche Infos: ${info}

Nutze die Google Suche, um aktuelle Fakten oder lokale Gegebenheiten in ${kommune} (Rhein-Erft-Kreis) zum Thema "${topic}" einzubeziehen, falls relevant.
Halte den Brief prägnant und lösungsorientiert.`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    return response.text || "Es konnte kein Entwurf generiert werden.";
  } catch (error) {
    console.error("Error drafting letter:", error);
    return "Fehler bei der Generierung des Entwurfs.";
  }
}

export async function editImageWithPrompt(
  base64Image: string,
  mimeType: string,
  prompt: string
): Promise<string | null> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image",
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image,
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType || "image/png"};base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error editing image:", error);
    return null;
  }
}

export async function generateHeroImage(): Promise<string | null> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image",
      contents: {
        parts: [
          {
            text: "A wide aerial landscape photography of Rhein-Erft-Kreis featuring a baroque palace with formal gardens on the left, a winding river in the middle, a historic abbey on the right, a town with a church spire, and power plant cooling towers in the far distance under a sunny sky. High quality, realistic, beautiful lighting.",
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
        },
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType || "image/png"};base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating hero image:", error);
    return null;
  }
}
