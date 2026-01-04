
import { QuizQuestion } from './types';

export const COLORS = {
  purple: '#5E239D',
  roseGold: '#E4B7A0',
  white: '#FFFFFF'
};

// SUBSTITUA O LINK ABAIXO PELO SEU LINK DA KIRVANO
export const KIRVANO_CHECKOUT_URL = "https://pay.kirvano.com/seu-link-aqui";

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Como você se sente ao cortar cabelo feminino?",
    options: ["Travo totalmente", "Me viro, mas com insegurança", "Tenho confiança, mas quero evoluir"]
  },
  {
    id: 2,
    question: "Você já fez curso específico de corte?",
    options: ["Nunca fiz", "Já fiz, mas achei complicado", "Sim, mas não consegui aplicar tudo"]
  },
  {
    id: 3,
    question: "Há quanto tempo você trabalha como cabeleireira?",
    options: ["Menos de 1 ano", "De 1 a 3 anos", "Mais de 3 anos"]
  },
  {
    id: 4,
    question: "Qual seu maior desafio no salão atualmente?",
    options: ["Perder clientes por falta de confiança", "Fazer cortes modernos", "Aumentar meu faturamento"]
  },
  {
    id: 5,
    question: "Você se vê tendo mais independência financeira com sua profissão?",
    options: ["Sim, mas não sei como chegar lá", "Não tenho certeza", "Sim, estou buscando isso agora"]
  }
];

export const TESTIMONIALS = [
  {
    name: "Ana Silva",
    role: "Cabeleireira há 5 anos",
    text: "O método da Lorena mudou meu jogo. Eu tinha pavor de Chanel, hoje é o corte que mais me traz lucro!",
    img: "https://picsum.photos/seed/stylist1/100/100"
  },
  {
    name: "Mariana Costa",
    role: "Dona de Salão",
    text: "Aumentei meu faturamento em 40% apenas aplicando os 5 pilares nos cortes das minhas clientes.",
    img: "https://picsum.photos/seed/stylist2/100/100"
  }
];
