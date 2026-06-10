import { AIProvider } from "./types";

export class GeminiProvider implements AIProvider {
  constructor(private token: string) {}

  public async generate(prompt: string, model: string): Promise<string> {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${this.token}`,
      {
        method: "POST",
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
      },
    );
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  }
}
