import cuidadorIdosos from "@/assets/servicos/cuidador-de-idosos.jpg";
import acompanhamentoSaude from "@/assets/servicos/acompanhamento-de-saude.jpg";
import cuidadorAdultos from "@/assets/servicos/cuidador-para-adultos.jpg";
import acompanhamentoViagem from "@/assets/servicos/acompanhamento-em-viagem.jpg";
import alzheimerParkinson from "@/assets/servicos/alzheimer-parkinson.jpg";
import acompanhanteHospitalar from "@/assets/servicos/acompanhante-hospitalar.jpg";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  headline: string;
  summary: string;
  /** Direct answer paragraph, written for AI search engines and featured snippets. */
  definition: string;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  forWhom: string[];
  includes: string[];
  differentials: string[];
  steps: ServiceStep[];
  faqs: ServiceFaq[];
}

const process: ServiceStep[] = [
  {
    title: "Conversa inicial",
    description:
      "Entendemos a rotina, o quadro clínico e as expectativas da família em uma conversa reservada, sem compromisso.",
  },
  {
    title: "Avaliação de enfermagem",
    description:
      "Um enfermeiro avalia o assistido e o ambiente, define riscos, necessidades e a escala adequada de cuidado.",
  },
  {
    title: "Curadoria do profissional",
    description:
      "Selecionamos o cuidador compatível com a história, o ritmo e a personalidade de quem será cuidado.",
  },
  {
    title: "Supervisão contínua",
    description:
      "Acompanhamento permanente de enfermagem, relatórios periódicos e canal direto com a família.",
  },
];

export const services: Service[] = [
  {
    slug: "cuidador-de-idosos",
    name: "Cuidador de Idosos em Domicílio",
    shortName: "Cuidador de Idosos",
    eyebrow: "Cuidado domiciliar",
    headline: "Envelhecer em casa, com segurança e sem perder a própria rotina.",
    summary:
      "Cuidador de idosos em domicílio com avaliação de enfermagem, planos de 4h, 6h, 8h, 12h e 24h, além de escalas flexíveis e supervisão contínua na capital de São Paulo.",
    definition:
      "O serviço de cuidador de idosos em domicílio da Aegis Care oferece um profissional treinado dentro da casa do assistido para apoiar higiene, alimentação, mobilidade, rotina de medicamentos e companhia, sempre sob supervisão de enfermagem. O atendimento é organizado em planos de 4h, 6h, 8h, 12h e 24h, além de escalas flexíveis, com plano de cuidado individual definido após avaliação clínica presencial.",
    image: cuidadorIdosos,
    imageAlt: "Cuidadora profissional acolhendo idosa em sala de estar residencial",
    metaTitle: "Cuidador de Idosos em Domicílio | Aegis Care São Paulo",
    metaDescription:
      "Cuidador de idosos em domicílio em São Paulo, com avaliação de enfermagem, planos de 4h, 6h, 8h, 12h e 24h, além de escalas flexíveis e supervisão contínua. Solicite um orçamento.",
    keywords:
      "cuidador de idosos, cuidador de idosos em domicílio, home care para idosos, agência de cuidadores São Paulo, cuidador 24 horas, cuidador 12 horas, cuidador 6 horas, plano de cuidador flexível, cuidado domiciliar de idosos de alto padrão",
    forWhom: [
      "Idosos que desejam permanecer em casa com segurança",
      "Famílias que precisam de apoio diurno, noturno ou integral",
      "Pessoas em recuperação de quedas, internações ou cirurgias",
      "Filhos que moram longe e precisam de relatórios confiáveis",
    ],
    includes: [
      "Apoio na higiene pessoal, banho e vestuário",
      "Auxílio na alimentação e hidratação ao longo do dia",
      "Rotina de medicamentos conforme prescrição médica",
      "Estímulo à mobilidade e prevenção de quedas",
      "Companhia, conversa e atividades significativas",
      "Registro diário e relatório periódico para a família",
    ],
    differentials: [
      "Avaliação conduzida por enfermeiro antes do início",
      "Curadoria pessoal de cada profissional",
      "Plano de substituição imediata em faltas",
      "Comunicação direta e discreta com a família",
    ],
    steps: process,
    faqs: [
      {
        question: "Quanto custa um cuidador de idosos em São Paulo?",
        answer:
          "O valor depende da escala e da complexidade do cuidado. Na Aegis Care, o investimento começa em R$ 3.180 por mês e é definido após a avaliação de enfermagem, sem custo para a família.",
      },
      {
        question: "Qual a diferença entre cuidador e técnico de enfermagem?",
        answer:
          "O cuidador apoia as atividades de vida diária, como higiene, alimentação, mobilidade e companhia. Procedimentos técnicos, como curativos complexos e medicação injetável, são atribuição da enfermagem. A Aegis Care indica o perfil adequado após a avaliação.",
      },
      {
        question: "É possível contratar cuidador apenas para o período noturno?",
        answer:
          "Sim. Trabalhamos com planos de 4h, 6h, 8h, 12h e 24h, além de escalas flexíveis, incluindo plantões noturnos, finais de semana e diárias.",
      },
      {
        question: "Em quanto tempo o cuidador começa a atender?",
        answer:
          "Na maioria dos casos, o atendimento é iniciado entre 24 e 72 horas após a avaliação de enfermagem.",
      },
    ],
  },
  {
    slug: "acompanhamento-de-saude",
    name: "Acompanhamento de Saúde e Medicação",
    shortName: "Acompanhamento de Saúde",
    eyebrow: "Monitoramento clínico",
    headline: "Uma rotina de saúde organizada, observada e comunicada com clareza.",
    summary:
      "Monitoramento diário de sinais, controle da rotina de medicamentos e relatórios objetivos para a família e para a equipe médica.",
    definition:
      "O acompanhamento de saúde domiciliar da Aegis Care consiste no monitoramento diário do assistido em casa, com verificação de sinais vitais, controle da rotina de medicamentos prescritos, observação de sintomas, organização de consultas e envio de relatórios periódicos para a família e para o médico responsável. Todo o serviço é supervisionado por enfermeiro.",
    image: acompanhamentoSaude,
    imageAlt: "Profissional de enfermagem verificando pressão arterial de idoso em casa",
    metaTitle: "Acompanhamento de Saúde em Casa | Aegis Care",
    metaDescription:
      "Monitoramento de sinais vitais, controle de medicamentos e relatórios clínicos em domicílio, com supervisão de enfermagem. Fale com a Aegis Care.",
    keywords:
      "acompanhamento de saúde domiciliar, controle de medicamentos idoso, monitoramento de sinais vitais em casa, enfermagem domiciliar São Paulo",
    forWhom: [
      "Idosos com doenças crônicas como diabetes e hipertensão",
      "Pacientes com prescrição médica complexa",
      "Famílias que precisam de registro confiável da evolução",
      "Pessoas em pós-operatório ou alta hospitalar recente",
    ],
    includes: [
      "Verificação de pressão, glicemia, temperatura e saturação",
      "Organização e conferência da rotina de medicamentos",
      "Observação de sintomas e sinais de alerta",
      "Preparo e acompanhamento de consultas e exames",
      "Relatórios periódicos para a família e para o médico",
      "Orientação à família sobre a rotina de cuidado",
    ],
    differentials: [
      "Supervisão permanente de enfermagem",
      "Protocolo claro de comunicação em intercorrências",
      "Registros padronizados e verificáveis",
      "Integração com o médico assistente da família",
    ],
    steps: process,
    faqs: [
      {
        question: "O acompanhamento substitui o médico?",
        answer:
          "Não. O serviço organiza, observa e registra a rotina de saúde em casa, apoiando as decisões do médico assistente, que segue responsável pelo tratamento.",
      },
      {
        question: "A família recebe relatórios?",
        answer:
          "Sim. Enviamos relatórios periódicos com sinais vitais, adesão à medicação, intercorrências e observações relevantes.",
      },
      {
        question: "Quem supervisiona o profissional em casa?",
        answer:
          "Um enfermeiro da Aegis Care acompanha o caso, revisa os registros e ajusta o plano de cuidado sempre que necessário.",
      },
    ],
  },
  {
    slug: "cuidados-alzheimer-parkinson",
    name: "Cuidados em Alzheimer e Parkinson",
    shortName: "Alzheimer e Parkinson",
    eyebrow: "Cuidado especializado",
    headline: "Rotina previsível, estímulo adequado e proteção contra riscos.",
    summary:
      "Cuidadores preparados para demências e doença de Parkinson, com rotina estruturada, estímulo cognitivo e prevenção de quedas.",
    definition:
      "O cuidado domiciliar em Alzheimer e Parkinson da Aegis Care reúne profissionais preparados para lidar com perda de memória, alterações de comportamento, rigidez, tremor e instabilidade de marcha. O trabalho se apoia em rotina previsível, comunicação adaptada, estímulo cognitivo, apoio à mobilidade segura e orientação à família, com supervisão de enfermagem.",
    image: alzheimerParkinson,
    imageAlt: "Cuidadora realizando atividade de estímulo cognitivo com idosa à mesa",
    metaTitle: "Cuidador para Alzheimer e Parkinson | Aegis Care",
    metaDescription:
      "Cuidado domiciliar especializado em Alzheimer e Parkinson: rotina estruturada, estímulo cognitivo e prevenção de quedas em São Paulo.",
    keywords:
      "cuidador para Alzheimer, cuidador para Parkinson, cuidado domiciliar demência, home care Alzheimer São Paulo, prevenção de quedas idoso",
    forWhom: [
      "Idosos com diagnóstico de Alzheimer ou outra demência",
      "Pessoas com doença de Parkinson em qualquer estágio",
      "Famílias esgotadas pela sobrecarga do cuidado diário",
      "Casas que precisam de adaptação e rotina segura",
    ],
    includes: [
      "Rotina diária estruturada e previsível",
      "Estímulo cognitivo e atividades de memória",
      "Apoio à marcha, transferências e prevenção de quedas",
      "Manejo respeitoso de agitação e confusão",
      "Auxílio na alimentação com atenção à deglutição",
      "Orientação prática à família sobre comunicação",
    ],
    differentials: [
      "Profissionais treinados em demência e parkinsonismo",
      "Plano de cuidado revisado conforme a evolução",
      "Atenção à segurança do ambiente doméstico",
      "Apoio emocional à família cuidadora",
    ],
    steps: process,
    faqs: [
      {
        question: "O cuidador sabe lidar com agitação e agressividade?",
        answer:
          "Sim. Os profissionais são orientados a usar comunicação calma, validação e redirecionamento, evitando confronto e contenção desnecessária.",
      },
      {
        question: "Vocês ajudam a adaptar a casa?",
        answer:
          "Na avaliação de enfermagem, indicamos ajustes simples de iluminação, tapetes, barras de apoio e circulação para reduzir o risco de quedas.",
      },
      {
        question: "O serviço atende estágios avançados da doença?",
        answer:
          "Sim. A escala e o perfil do profissional são definidos conforme o grau de dependência identificado na avaliação.",
      },
    ],
  },
  {
    slug: "cuidador-para-adultos",
    name: "Cuidador para Adultos",
    shortName: "Cuidador para Adultos",
    eyebrow: "Apoio à autonomia",
    headline: "Recuperar a independência sem abrir mão do apoio necessário.",
    summary:
      "Assistência domiciliar para adultos com limitação temporária ou permanente, em pós-operatório, reabilitação ou condição neurológica.",
    definition:
      "O serviço de cuidador para adultos da Aegis Care atende pessoas com limitação física ou cognitiva temporária ou permanente, incluindo pós-operatório, sequelas de AVC, doenças neurológicas e reabilitação. O profissional apoia mobilidade, higiene, alimentação e rotina terapêutica, com foco em recuperar autonomia e preservar a privacidade do assistido.",
    image: cuidadorAdultos,
    imageAlt: "Cuidadora apoiando adulto com mobilidade reduzida em corredor residencial",
    metaTitle: "Cuidador para Adultos em Domicílio | Aegis Care",
    metaDescription:
      "Cuidador para adultos em pós-operatório, reabilitação ou condição neurológica, com apoio à mobilidade e rotina terapêutica em São Paulo.",
    keywords:
      "cuidador para adultos, cuidador pós-operatório, cuidado domiciliar AVC, home care adulto São Paulo, assistência domiciliar reabilitação",
    forWhom: [
      "Adultos em recuperação de cirurgia ou internação",
      "Pessoas com sequelas de AVC ou doenças neurológicas",
      "Pacientes em reabilitação motora domiciliar",
      "Famílias que precisam de apoio em período determinado",
    ],
    includes: [
      "Apoio à mobilidade, transferências e uso de órteses",
      "Higiene pessoal com respeito à privacidade",
      "Auxílio na alimentação e hidratação",
      "Suporte à rotina de fisioterapia e exercícios prescritos",
      "Acompanhamento a consultas e sessões terapêuticas",
      "Registro da evolução e comunicação com a família",
    ],
    differentials: [
      "Foco em reconquista de independência",
      "Profissional compatível com o perfil do assistido",
      "Escalas flexíveis para períodos de transição",
      "Supervisão de enfermagem durante todo o contrato",
    ],
    steps: process,
    faqs: [
      {
        question: "É possível contratar por período curto?",
        answer:
          "Sim. Atendemos contratos temporários, comuns em pós-operatório e reabilitação, com prazo definido junto à família.",
      },
      {
        question: "O cuidador acompanha sessões de fisioterapia?",
        answer:
          "Sim. O profissional apoia a rotina orientada pelo fisioterapeuta e pode acompanhar o assistido às sessões.",
      },
      {
        question: "Existe período de experiência?",
        answer:
          "Sim. Os primeiros dias servem para ajustar o encaixe entre profissional e família, com troca imediata caso necessário.",
      },
    ],
  },
  {
    slug: "acompanhante-hospitalar",
    name: "Acompanhante Hospitalar",
    shortName: "Acompanhante Hospitalar",
    eyebrow: "Presença na internação",
    headline: "Ninguém deveria atravessar uma internação sozinho.",
    summary:
      "Acompanhante profissional durante internações e exames, com presença contínua, observação atenta e comunicação constante com a família.",
    definition:
      "O serviço de acompanhante hospitalar da Aegis Care coloca um profissional treinado ao lado do paciente durante a internação, em plantões de 6, 12 ou 24 horas. O acompanhante apoia conforto, higiene, alimentação assistida e mobilização, observa mudanças no quadro, faz a ponte com a equipe assistencial do hospital e mantém a família informada.",
    image: acompanhanteHospitalar,
    imageAlt: "Acompanhante profissional ao lado de paciente idosa em quarto hospitalar",
    metaTitle: "Acompanhante Hospitalar 24 Horas | Aegis Care",
    metaDescription:
      "Acompanhante hospitalar profissional em plantões de 6, 12 ou 24 horas, com observação atenta e comunicação constante com a família.",
    keywords:
      "acompanhante hospitalar, acompanhante hospitalar 24 horas, acompanhante para internação São Paulo, cuidador em hospital",
    forWhom: [
      "Pacientes internados sem familiar disponível",
      "Idosos com risco de confusão durante a internação",
      "Famílias que precisam revezar plantões noturnos",
      "Pacientes em exames e procedimentos de longa duração",
    ],
    includes: [
      "Presença contínua durante o plantão contratado",
      "Apoio à higiene, conforto e alimentação assistida",
      "Mobilização no leito conforme orientação da equipe",
      "Observação de sinais de alerta e comunicação imediata",
      "Ponte organizada com a equipe do hospital",
      "Atualizações regulares para a família",
    ],
    differentials: [
      "Profissionais habituados ao ambiente hospitalar",
      "Cobertura de plantões noturnos e finais de semana",
      "Postura discreta diante da equipe assistencial",
      "Transição planejada do hospital para casa",
    ],
    steps: process,
    faqs: [
      {
        question: "O acompanhante realiza procedimentos de enfermagem?",
        answer:
          "Não. Procedimentos são de responsabilidade da equipe do hospital. O acompanhante apoia conforto, observação e comunicação.",
      },
      {
        question: "É possível contratar em caráter urgente?",
        answer:
          "Sim. Sempre que há disponibilidade de escala, conseguimos iniciar o plantão no mesmo dia.",
      },
      {
        question: "Vocês atendem em qualquer hospital de São Paulo?",
        answer:
          "Atendemos hospitais da capital, respeitando as regras internas de acompanhantes de cada instituição.",
      },
    ],
  },
  {
    slug: "acompanhamento-em-viagem",
    name: "Acompanhamento em Viagem",
    shortName: "Acompanhamento em Viagem",
    eyebrow: "Cuidado em movimento",
    headline: "A vida continua, e as viagens também.",
    summary:
      "Cuidador acompanhando a família em viagens nacionais, com rotina de medicamentos, mobilidade assistida e suporte durante todo o deslocamento.",
    definition:
      "O acompanhamento em viagem da Aegis Care disponibiliza um cuidador treinado para viajar com o assistido e a família, cuidando da rotina de medicamentos, mobilidade, higiene e conforto durante o deslocamento e a estadia. O planejamento inclui checagem de documentos, medicações, necessidades de acessibilidade e contatos de referência no destino.",
    image: acompanhamentoViagem,
    imageAlt: "Cuidadora acompanhando idosa em cadeira de rodas em saguão de aeroporto",
    metaTitle: "Cuidador Acompanhante de Viagem | Aegis Care",
    metaDescription:
      "Cuidador para acompanhar idosos em viagens nacionais, com rotina de medicamentos, mobilidade assistida e suporte na estadia.",
    keywords:
      "acompanhante de viagem para idoso, cuidador para viagem, acompanhamento em viagem São Paulo, cuidador de idosos em viagem",
    forWhom: [
      "Famílias que viajam com um idoso dependente",
      "Idosos com mobilidade reduzida em deslocamentos",
      "Viagens de férias, eventos familiares ou tratamento",
      "Famílias que querem descansar sem abrir mão do cuidado",
    ],
    includes: [
      "Planejamento prévio da rotina e das medicações",
      "Apoio no embarque, desembarque e traslados",
      "Mobilidade assistida e prevenção de quedas",
      "Higiene, alimentação e conforto durante a estadia",
      "Atenção a sinais de cansaço e desidratação",
      "Contato permanente com a família durante a viagem",
    ],
    differentials: [
      "Profissionais experientes em deslocamentos longos",
      "Checklist clínico antes da partida",
      "Discrição total em ambientes públicos e hotéis",
      "Cobertura combinada por dia ou por período",
    ],
    steps: process,
    faqs: [
      {
        question: "Vocês atendem viagens internacionais?",
        answer:
          "Nosso serviço padrão cobre viagens nacionais. Casos internacionais são avaliados individualmente, conforme prazo e documentação.",
      },
      {
        question: "Como funciona a cobrança em viagem?",
        answer:
          "O valor considera o período integral de acompanhamento, além de hospedagem e deslocamento do profissional, sempre acordados antes da partida.",
      },
      {
        question: "Com quanta antecedência devo solicitar?",
        answer:
          "Recomendamos ao menos duas semanas, para planejar medicações, acessibilidade e a escala do profissional.",
      },
    ],
  },
];

export const getServiceBySlug = (slug?: string) =>
  services.find((service) => service.slug === slug);
