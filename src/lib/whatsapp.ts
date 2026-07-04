// Central WhatsApp integration: phone, questions and message builder.

export const WHATSAPP_PHONE = "5511920067183";

export type WhatsAppAnswers = {
  timing: string;
  condition: string;
  regime: string;
  investment: string;
  regionConcern: string;
};

export const WHATSAPP_QUESTIONS = {
  timing: {
    label: "Para quando sua família necessita do serviço de cuidador?",
    short: "Quando precisam do cuidador",
    options: [
      "Preciso de atendimento imediato",
      "Nos próximos 7 dias",
      "Nos próximos 30 dias",
      "Estou apenas pesquisando opções",
    ],
  },
  condition: {
    label: "Qual é a condição atual do seu familiar?",
    short: "Condição do familiar",
    options: [
      "Precisa de companhia, supervisão e auxílio nas atividades do dia a dia",
      "Necessita de ajuda com banho, alimentação, medicações e mobilidade",
      "Possui diagnóstico de Alzheimer, Parkinson ou outra condição neurológica",
      "Está em recuperação de cirurgia ou pós-operatório",
      "Gostaria de uma reunião para entender a melhor opção",
    ],
  },
  regime: {
    label: "Qual regime de atendimento melhor atende à necessidade da sua família?",
    short: "Regime de atendimento",
    options: [
      "Plantões flexíveis (4, 6 ou 8 horas)",
      "Cuidador 12 horas",
      "Cuidador 24 horas",
      "Atendimento aos finais de semana",
      "Ainda preciso de orientação para definir",
    ],
  },
  investment: {
    label:
      "Os serviços especializados da Aegis Care possuem investimentos a partir de R$ 3.180 mensais, podendo variar conforme a complexidade e a carga horária do atendimento. Este investimento está alinhado ao planejamento da sua família?",
    short: "Planejamento de investimento",
    options: [
      "Sim, está dentro do nosso planejamento",
      "Sim, dependendo da necessidade do meu familiar",
      "Gostaria de entender as opções disponíveis",
      "Procuro alternativas com menor investimento",
    ],
  },
  regionConcern: {
    label:
      "Em qual região de São Paulo será realizado o atendimento e qual é a principal preocupação da sua família neste momento?",
    short: "Região e principal preocupação",
  },
} as const;

export const buildWhatsAppMessage = (a: WhatsAppAnswers): string => {
  return [
    "Olá, Aegis Care! Gostaria de conversar sobre o atendimento à minha família.",
    "",
    `• ${WHATSAPP_QUESTIONS.timing.short}: ${a.timing}`,
    `• ${WHATSAPP_QUESTIONS.condition.short}: ${a.condition}`,
    `• ${WHATSAPP_QUESTIONS.regime.short}: ${a.regime}`,
    `• ${WHATSAPP_QUESTIONS.investment.short}: ${a.investment}`,
    `• ${WHATSAPP_QUESTIONS.regionConcern.short}: ${a.regionConcern}`,
  ].join("\n");
};

export const buildWhatsAppUrl = (message: string): string =>
  `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
    message,
  )}&type=phone_number&app_absent=0`;
