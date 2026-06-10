import { GeminiProvider } from "./providers/Gemini";
import { AIProvider } from "./providers/types";
import { SupportedModels } from "./models";

export default class CreateAIClient {
  private token: string;
  private provider: AIProvider;
  private currentModel: SupportedModels = "gemini-flash-lite-3-1"; // Default Model

  constructor(token: string, providerName: "gemini" | "openai") {
    if (!token) {
      throw new Error("API Token is required.");
    }
    this.token = token;

    if (providerName == "gemini") {
      this.provider = new GeminiProvider(token);
    } else {
      throw new Error("Provider not yet implemented.");
    }
  }

  public setModel(model: SupportedModels): void {
    this.currentModel = model;
    console.log(`Current Model: ${model}`);
  }

  public getModel(): SupportedModels {
    return this.currentModel;
  }

  public async generate(prompt: string): Promise<string> {
    return await this.provider.generate(prompt, this.currentModel);
  }
}
