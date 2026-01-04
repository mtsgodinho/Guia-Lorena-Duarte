
import { GoogleGenAI, Type } from "@google/genai";
import { QuizAnswer } from "./types";

export async function generatePersonalizedAnalysis(answers: QuizAnswer[]) {
  // Inicializamos o cliente apenas dentro da função para evitar erro de 'process is not defined' no topo do arquivo
  const apiKey = process.env.API_KEY || "";
  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
    Como uma especialista em faturamento para cabeleireiras (Lorena Duarte), escreva uma análise curta e altamente persuasiva para uma aluna em potencial.
    As respostas dela no quiz foram:
    ${answers.map(a => `- ${a.answer}`).join('\n')}

    Objetivo: Identificar a dor dela e mostrar como o "Método 5 Pilares" resolve isso especificamente. 
    Seja empática, autoritária e encorajadora. Use no máximo 3 parágrafos curtos.
    Termine com uma frase de impacto sobre faturamento de alta performance.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Com base nas suas respostas, você está no momento ideal para aplicar o método da cabeleireira Lorena Duarte, especialista em faturamento de alta performance. Seu método, criado a partir de 10 anos de experiência, ensina como cortar qualquer tipo de cabelo feminino com uma só técnica, baseada em 5 pilares simples e poderosos.";
  }
}
