import {
  Home,
  Stethoscope,
  Activity,
  Plane,
  UserCheck,
  Brain,
  HeartPulse,
  ClipboardList,
  Users,
  MapPin,
  type LucideIcon,
} from "lucide-react";

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  category: "assistencial" | "clinico" | "rotina";
  categoryLabel: string;
  icon: LucideIcon;
  title: string;            // usado em cards e navegação
  h1: string;               // H1 da subpágina, com palavra-chave principal
  keyword: string;          // palavra-chave principal
  metaTitle: string;
  metaDescription: string;
  hero: string;             // frase de apresentação curta
  whatIs: string;           // O que é o serviço
  indicatedFor: string[];   // Para quem é indicado
  realSituations: string[]; // Situações reais em que é necessário
  howItWorks: string[];     // Como funciona no dia a dia
  benefits: string[];       // Benefícios para o idoso e para a família
  guidance: string;         // Orientações humanas
  whenToSeekHelp: string;   // Quando buscar ajuda profissional
  faqs: ServiceFAQ[];       // Q&A para AEO
  related: string[];        // slugs de páginas relacionadas
}

export const services: ServiceData[] = [
  {
    slug: "cuidador-de-idosos-em-sao-paulo",
    category: "assistencial",
    categoryLabel: "Serviços assistenciais",
    icon: UserCheck,
    title: "Cuidador de Idosos em São Paulo",
    h1: "Cuidador de Idosos em São Paulo com Coordenação de Enfermagem",
    keyword: "cuidador de idosos em São Paulo",
    metaTitle: "Cuidador de Idosos em São Paulo | Aegis Care",
    metaDescription:
      "Cuidador de idosos em São Paulo com profissionais selecionados, coordenação de enfermagem e plano personalizado. Atendimento domiciliar 24h na Capital.",
    hero:
      "Cuidado domiciliar humanizado para idosos na Capital de São Paulo, com profissionais selecionados e coordenação clínica contínua.",
    whatIs:
      "O serviço de cuidador de idosos em São Paulo da Aegis Care oferece acompanhamento presencial no domicílio para pessoas idosas que precisam de apoio nas atividades do dia a dia. Cada profissional é selecionado por critérios técnicos e humanos, com supervisão de enfermagem em tempo integral.",
    indicatedFor: [
      "Idosos que vivem sozinhos e precisam de companhia e segurança",
      "Pessoas com mobilidade reduzida ou risco de queda",
      "Idosos em recuperação após internação hospitalar",
      "Famílias que buscam apoio contínuo, diurno, noturno ou 24 horas",
    ],
    realSituations: [
      "Alta hospitalar recente com necessidade de acompanhamento próximo",
      "Familiar principal precisa se ausentar por trabalho ou viagem",
      "Idoso começou a esquecer horários de remédio ou refeições",
      "Aumento de quedas, tonturas ou desorientação em casa",
    ],
    howItWorks: [
      "Avaliação inicial com a família para entender rotina, história e necessidades",
      "Escolha do profissional mais adequado ao perfil do idoso",
      "Definição de escala (12h, 24h, plantão ou período determinado)",
      "Acompanhamento contínuo com registros diários e supervisão de enfermagem",
    ],
    benefits: [
      "Segurança e presença atenta em casa",
      "Redução de riscos de queda, esquecimento de medicação e desidratação",
      "Preservação da autonomia e da dignidade do idoso",
      "Tranquilidade para a família, com comunicação clara e frequente",
    ],
    guidance:
      "O ideal é iniciar o acompanhamento antes de uma crise: quando surgem os primeiros sinais de dificuldade em cuidar sozinho de si. A presença de um cuidador não substitui a família, ela protege o vínculo e o tempo de qualidade entre todos.",
    whenToSeekHelp:
      "Procure um cuidador profissional quando o idoso apresentar risco de queda recorrente, esquecimentos importantes, sinais de confusão, dificuldade com higiene ou alimentação, ou quando a família estiver sobrecarregada com o cuidado diário.",
    faqs: [
      {
        question: "Quanto custa um cuidador de idosos em São Paulo?",
        answer:
          "O valor depende da escala (12h, 24h ou plantão), do perfil de cuidado e da localização dentro da Capital. Fazemos uma avaliação gratuita antes de apresentar um plano personalizado.",
      },
      {
        question: "O cuidador realiza procedimentos de enfermagem?",
        answer:
          "O cuidador oferece apoio às atividades diárias, medicação por via oral conforme prescrição e observação de sinais. Procedimentos clínicos são conduzidos pela coordenação de enfermagem, quando indicados.",
      },
      {
        question: "Quais regiões de São Paulo vocês atendem?",
        answer:
          "Atendemos toda a Capital de São Paulo, com equipe própria e cuidadores selecionados para cada região.",
      },
    ],
    related: [
      "cuidado-domiciliar",
      "cuidados-para-alzheimer-em-casa",
      "cuidador-pos-avc",
    ],
  },
  {
    slug: "cuidador-de-adultos-com-limitacoes",
    category: "assistencial",
    categoryLabel: "Serviços assistenciais",
    icon: Users,
    title: "Cuidador de Adultos com Limitações",
    h1: "Cuidador para Adultos com Limitações Físicas ou Cognitivas",
    keyword: "cuidador para adultos com limitações",
    metaTitle: "Cuidador para Adultos com Limitações | Aegis Care SP",
    metaDescription:
      "Cuidador para adultos com limitações físicas, motoras ou cognitivas em São Paulo. Apoio à mobilidade, higiene e rotina com supervisão de enfermagem.",
    hero:
      "Assistência dedicada a adultos com limitações temporárias ou permanentes, com respeito à autonomia e ao ritmo de cada pessoa.",
    whatIs:
      "Atendimento domiciliar voltado a adultos que, por doença, sequela ou condição neurológica, apresentam limitações físicas, motoras ou cognitivas. O cuidador oferece suporte estruturado às atividades diárias, com acompanhamento clínico coordenado.",
    indicatedFor: [
      "Adultos em reabilitação após acidentes ou cirurgias",
      "Pessoas com doenças crônicas ou neurológicas",
      "Pacientes em recuperação de longo prazo em casa",
      "Adultos com dificuldade permanente de locomoção",
    ],
    realSituations: [
      "Retorno para casa após internação prolongada",
      "Necessidade de apoio contínuo em higiene, banho e transferências",
      "Dificuldade para manter rotina de medicação e refeições",
      "Familiar cuidador precisa de revezamento para preservar sua saúde",
    ],
    howItWorks: [
      "Entrevista com a família e leitura do quadro clínico",
      "Definição do perfil ideal de cuidador para a rotina do paciente",
      "Escala ajustada à realidade da casa (diurno, noturno, 24h)",
      "Registros e comunicação contínua com a coordenação de enfermagem",
    ],
    benefits: [
      "Recuperação mais segura em ambiente familiar",
      "Manutenção da rotina e do sono do paciente",
      "Prevenção de complicações associadas ao repouso prolongado",
      "Alívio da sobrecarga da família cuidadora",
    ],
    guidance:
      "Quanto mais cedo o cuidado profissional é iniciado, menor o desgaste da família e maior a preservação da autonomia do paciente. Comece pelo essencial: sono, higiene, alimentação e medicação.",
    whenToSeekHelp:
      "Busque um cuidador profissional quando o adulto precisar de apoio para mobilizar-se, para higiene íntima, para alimentar-se ou quando a família não conseguir manter a rotina de cuidado com segurança.",
    faqs: [
      {
        question: "Qual a diferença entre cuidador e técnico de enfermagem?",
        answer:
          "O cuidador acompanha as atividades da vida diária. Procedimentos técnicos são de responsabilidade da enfermagem, que na Aegis Care coordena e supervisiona todo o atendimento.",
      },
      {
        question: "É possível ter cuidador só à noite?",
        answer:
          "Sim. Oferecemos escalas noturnas, diurnas, 12h e 24h, ajustadas à necessidade do paciente e da família.",
      },
    ],
    related: [
      "cuidador-pos-avc",
      "cuidado-domiciliar",
      "acompanhamento-de-saude",
    ],
  },
  {
    slug: "cuidador-pos-avc",
    category: "assistencial",
    categoryLabel: "Serviços assistenciais",
    icon: HeartPulse,
    title: "Cuidador Pós-AVC",
    h1: "Cuidador Pós-AVC em Casa: Recuperação com Segurança",
    keyword: "cuidador pós AVC",
    metaTitle: "Cuidador Pós-AVC em Casa | Aegis Care São Paulo",
    metaDescription:
      "Cuidador pós-AVC em domicílio na Capital de SP. Suporte à reabilitação, mobilização segura, medicação e coordenação de enfermagem 24h.",
    hero:
      "Acompanhamento estruturado para quem retorna para casa após um AVC, respeitando o tempo de reabilitação e a rotina da família.",
    whatIs:
      "Serviço especializado no cuidado domiciliar de pessoas que sofreram Acidente Vascular Cerebral. Reúne cuidadores treinados em mobilização segura e coordenação de enfermagem para acompanhar a evolução funcional do paciente em casa.",
    indicatedFor: [
      "Pacientes recém-recebidos alta após AVC isquêmico ou hemorrágico",
      "Pessoas com hemiplegia, afasia ou disfagia",
      "Pacientes em programa de reabilitação motora e cognitiva",
      "Famílias que precisam adaptar a casa e a rotina ao novo quadro",
    ],
    realSituations: [
      "Primeira semana em casa após alta hospitalar",
      "Necessidade de apoio para transferências entre cama, cadeira e banho",
      "Dificuldade de deglutição exigindo atenção às refeições",
      "Rotina de fisioterapia e fonoaudiologia domiciliar em andamento",
    ],
    howItWorks: [
      "Leitura do relatório de alta e do plano terapêutico",
      "Definição de rotinas seguras de posicionamento e mobilização",
      "Apoio integrado ao trabalho de fisioterapeutas e fonoaudiólogos",
      "Supervisão de enfermagem com registros diários da evolução",
    ],
    benefits: [
      "Redução do risco de novas quedas e complicações",
      "Melhor adesão ao plano de reabilitação",
      "Ambiente domiciliar mais seguro e organizado",
      "Apoio emocional para paciente e família em uma fase delicada",
    ],
    guidance:
      "Nas primeiras semanas após o AVC, cada gesto conta: posicionar bem, hidratar, respeitar o cansaço e manter os horários dos remédios. Um cuidador treinado transforma esses detalhes em rotina segura.",
    whenToSeekHelp:
      "Contrate cuidado profissional pós-AVC assim que houver previsão de alta, especialmente quando o paciente apresentar sequelas motoras, de fala ou de deglutição, ou quando a família não puder oferecer presença contínua.",
    faqs: [
      {
        question: "O cuidador pós-AVC substitui o fisioterapeuta?",
        answer:
          "Não. O cuidador apoia o dia a dia e reforça as orientações da equipe de reabilitação, garantindo continuidade entre as sessões.",
      },
      {
        question: "Quanto tempo dura o acompanhamento pós-AVC em casa?",
        answer:
          "Depende da evolução do paciente. Em geral, os primeiros três a seis meses são os mais críticos e concentram a maior demanda de cuidado.",
      },
    ],
    related: [
      "cuidados-para-alzheimer-em-casa",
      "acompanhamento-de-saude",
      "cuidado-domiciliar",
    ],
  },
  {
    slug: "cuidados-para-alzheimer-em-casa",
    category: "clinico",
    categoryLabel: "Serviços clínicos e complexos",
    icon: Brain,
    title: "Cuidados para Alzheimer em Casa",
    h1: "Cuidados para Alzheimer em Casa com Cuidador 24h",
    keyword: "cuidador para Alzheimer",
    metaTitle: "Cuidados para Alzheimer em Casa | Cuidador 24h | Aegis Care",
    metaDescription:
      "Cuidador para Alzheimer em domicílio na Capital de SP. Rotinas estruturadas, segurança, estimulação cognitiva e coordenação de enfermagem 24h.",
    hero:
      "Cuidado especializado para conviver com o Alzheimer em casa, com rotina previsível, segurança e afeto.",
    whatIs:
      "Acompanhamento domiciliar dedicado a pessoas com Doença de Alzheimer em qualquer fase. O cuidador é treinado para lidar com alterações de memória, agitação e desorientação, sempre com suporte da coordenação de enfermagem.",
    indicatedFor: [
      "Idosos com diagnóstico recente de Alzheimer",
      "Pacientes em fase moderada com desorientação e agitação",
      "Pessoas em fase avançada, com dependência total",
      "Famílias cuidadoras em risco de esgotamento",
    ],
    realSituations: [
      "Idoso começou a se perder dentro de casa ou na rua",
      "Trocas de dia e noite, agitação no fim da tarde (sundowning)",
      "Recusa alimentar e dificuldade de manter medicação em dia",
      "Familiar principal já não consegue dormir por preocupação",
    ],
    howItWorks: [
      "Mapeamento da fase da doença e dos gatilhos de agitação",
      "Construção de uma rotina previsível e ambiente seguro",
      "Estimulação cognitiva leve integrada ao cotidiano",
      "Apoio contínuo à família nas decisões de cuidado",
    ],
    benefits: [
      "Menos episódios de agitação e ansiedade",
      "Ambiente adaptado para reduzir riscos de fuga e queda",
      "Preservação da identidade e das preferências do idoso",
      "Descanso e segurança para a família cuidadora",
    ],
    guidance:
      "No Alzheimer, o que mais protege é a previsibilidade: mesmo horário para acordar, comer, tomar remédio e descansar. Um cuidador treinado sustenta essa rotina com paciência e presença.",
    whenToSeekHelp:
      "Busque cuidado profissional ao primeiro episódio de fuga, ao surgimento de agitação noturna, quando houver quedas, recusa alimentar ou quando o familiar cuidador estiver exausto.",
    faqs: [
      {
        question: "Alzheimer em fase inicial já precisa de cuidador?",
        answer:
          "Depende do contexto. Muitas famílias começam com algumas horas por dia para apoio à rotina, e ampliam conforme a doença evolui.",
      },
      {
        question: "O cuidador ajuda com a agitação do fim da tarde?",
        answer:
          "Sim. Trabalhamos com estratégias não medicamentosas, ajustes de ambiente e presença atenta para reduzir a agitação típica desse período.",
      },
    ],
    related: [
      "cuidados-para-demencia",
      "cuidados-para-parkinson",
      "cuidador-de-idosos-em-sao-paulo",
    ],
  },
  {
    slug: "cuidados-para-parkinson",
    category: "clinico",
    categoryLabel: "Serviços clínicos e complexos",
    icon: Activity,
    title: "Cuidados para Parkinson",
    h1: "Cuidados para Parkinson em Casa: Rotina, Segurança e Movimento",
    keyword: "cuidador para Parkinson",
    metaTitle: "Cuidados para Parkinson em Casa | Aegis Care SP",
    metaDescription:
      "Cuidador para Parkinson em domicílio: apoio à mobilidade, prevenção de quedas, medicação e coordenação de enfermagem em São Paulo.",
    hero:
      "Cuidado atento para conviver com o Parkinson em casa, com foco em mobilidade segura e qualidade de vida.",
    whatIs:
      "Serviço domiciliar dedicado a pessoas com Doença de Parkinson. O cuidador é orientado sobre rigidez, tremor, bradicinesia e risco de queda, apoiando as atividades diárias com técnica e paciência.",
    indicatedFor: [
      "Pacientes com Parkinson em qualquer estágio",
      "Pessoas com episódios frequentes de freezing e quedas",
      "Idosos com rigidez importante ao levantar-se",
      "Famílias que buscam apoio para adaptação da casa",
    ],
    realSituations: [
      "Aumento das quedas dentro de casa",
      "Dificuldade para se levantar da cama ou da poltrona",
      "Alterações no horário e no efeito dos medicamentos",
      "Cansaço da família com o ritmo lento da rotina",
    ],
    howItWorks: [
      "Avaliação da fase da doença e dos horários de melhor mobilidade",
      "Rotina alinhada ao efeito dos medicamentos (janelas de mobilidade)",
      "Técnicas seguras de transferência e prevenção de quedas",
      "Comunicação com a equipe médica e de reabilitação",
    ],
    benefits: [
      "Menos quedas e mais confiança para andar em casa",
      "Melhor adesão aos horários da medicação",
      "Rotina compatível com o ritmo do paciente",
      "Ambiente domiciliar organizado para autonomia máxima",
    ],
    guidance:
      "No Parkinson, tempo é tudo: respeitar a janela do remédio, aquecer o corpo antes de andar e organizar o caminho da casa evita a maior parte das quedas.",
    whenToSeekHelp:
      "Contrate um cuidador quando houver quedas repetidas, dificuldade de levantar-se sozinho, engasgos, oscilações importantes de mobilidade ou sobrecarga da família.",
    faqs: [
      {
        question: "O cuidador ajuda com os exercícios do fisioterapeuta?",
        answer:
          "Sim. O cuidador reforça no dia a dia as orientações do fisioterapeuta, dentro do que é seguro e prescrito.",
      },
      {
        question: "Parkinson exige cuidador 24h?",
        answer:
          "Nem sempre. Muitas famílias começam com escala parcial e ampliam conforme a doença avança ou o risco de queda aumenta.",
      },
    ],
    related: [
      "cuidados-para-alzheimer-em-casa",
      "cuidados-para-demencia",
      "acompanhamento-de-saude",
    ],
  },
  {
    slug: "cuidados-para-demencia",
    category: "clinico",
    categoryLabel: "Serviços clínicos e complexos",
    icon: Brain,
    title: "Cuidados para Demência",
    h1: "Cuidados para Demência em Casa com Rotina e Coordenação Clínica",
    keyword: "cuidador para demência",
    metaTitle: "Cuidados para Demência em Casa | Aegis Care SP",
    metaDescription:
      "Cuidador domiciliar para demência em São Paulo. Rotina estruturada, ambiente seguro e coordenação de enfermagem para toda a família.",
    hero:
      "Cuidado especializado para diferentes tipos de demência, com foco em segurança, dignidade e vínculo.",
    whatIs:
      "Acompanhamento domiciliar para idosos com demência vascular, frontotemporal, por corpos de Lewy e outras. O cuidador é preparado para lidar com alterações de comportamento, memória e comunicação, sempre com apoio da enfermagem.",
    indicatedFor: [
      "Idosos com diagnóstico de demência em qualquer estágio",
      "Pacientes com alterações importantes de comportamento",
      "Idosos com risco de fuga, quedas ou desorientação",
      "Famílias que precisam de suporte prolongado no domicílio",
    ],
    realSituations: [
      "Idoso não reconhece familiares em determinados momentos do dia",
      "Aumento da agitação, insônia ou agressividade",
      "Dificuldade crescente com alimentação e higiene",
      "Necessidade de reorganizar completamente a rotina da casa",
    ],
    howItWorks: [
      "Leitura do diagnóstico e das particularidades do quadro",
      "Adaptação do ambiente para reduzir estímulos e riscos",
      "Rotina estruturada com âncoras (refeições, banho, descanso)",
      "Registros diários e revisão periódica com a coordenação clínica",
    ],
    benefits: [
      "Menos episódios de crise comportamental",
      "Sono e alimentação mais estáveis",
      "Preservação da identidade e das preferências do idoso",
      "Segurança e alívio para a família",
    ],
    guidance:
      "Na demência, a rotina é tratamento. Ambiente organizado, luz suave à noite, ritmo tranquilo e presença atenta protegem mais do que qualquer improviso.",
    whenToSeekHelp:
      "Procure ajuda profissional quando houver risco de fuga, quedas frequentes, agitação difícil de contornar, recusa alimentar ou exaustão do familiar cuidador.",
    faqs: [
      {
        question: "Demência e Alzheimer são a mesma coisa?",
        answer:
          "Alzheimer é o tipo mais comum de demência, mas existem outros. O plano de cuidado é ajustado para cada quadro.",
      },
      {
        question: "É seguro manter o idoso com demência em casa?",
        answer:
          "Na maioria dos casos, sim, desde que a casa esteja adaptada e haja um cuidador preparado, com supervisão clínica.",
      },
    ],
    related: [
      "cuidados-para-alzheimer-em-casa",
      "cuidados-para-parkinson",
      "cuidado-domiciliar",
    ],
  },
  {
    slug: "acompanhamento-em-viagens",
    category: "rotina",
    categoryLabel: "Serviços de rotina e suporte",
    icon: Plane,
    title: "Acompanhamento em Viagens",
    h1: "Acompanhante em Viagem para Idoso com Segurança e Cuidado",
    keyword: "acompanhante em viagem idoso",
    metaTitle: "Acompanhante em Viagem para Idoso | Aegis Care",
    metaDescription:
      "Acompanhante em viagem para idoso: cuidador treinado para viagens nacionais em família, com apoio à medicação, rotina e mobilidade.",
    hero:
      "Viagens em família com o suporte de um cuidador preparado, para que o idoso viva a experiência com tranquilidade.",
    whatIs:
      "Serviço em que um cuidador da Aegis Care viaja junto com a família, oferecendo apoio contínuo ao idoso durante o deslocamento, a hospedagem e os passeios.",
    indicatedFor: [
      "Idosos com mobilidade reduzida que desejam viajar em família",
      "Pessoas em uso contínuo de medicação",
      "Idosos com demência leve a moderada estáveis",
      "Famílias que querem aproveitar a viagem sem sobrecarga de cuidado",
    ],
    realSituations: [
      "Viagem em família com idoso que precisa de apoio para andar",
      "Roteiro com muitos deslocamentos e passeios",
      "Necessidade de manter horários rigorosos de medicação",
      "Hospedagem em local desconhecido, com risco de desorientação",
    ],
    howItWorks: [
      "Reunião de planejamento com a família e leitura do roteiro",
      "Escolha do cuidador com perfil compatível para a viagem",
      "Preparação de medicação, documentos e itens essenciais",
      "Acompanhamento presencial durante toda a viagem",
    ],
    benefits: [
      "Segurança em deslocamentos e hospedagens",
      "Rotina de medicação e sono preservada",
      "Família mais leve para curtir os momentos importantes",
      "Idoso participando ativamente da viagem, no seu ritmo",
    ],
    guidance:
      "Uma boa viagem com idoso é planejada com calma: ritmo mais lento, pausas frequentes, hidratação e horários de remédio inegociáveis. O cuidador organiza tudo isso em segundo plano.",
    whenToSeekHelp:
      "Considere um acompanhante profissional sempre que o roteiro exigir muitos deslocamentos, quando o idoso tiver mobilidade reduzida, medicação contínua ou risco de desorientação em ambientes novos.",
    faqs: [
      {
        question: "Vocês fazem viagens internacionais?",
        answer:
          "No momento, atendemos viagens nacionais em família, com toda a estrutura e coordenação da Aegis Care.",
      },
      {
        question: "Como funciona a hospedagem do cuidador?",
        answer:
          "A hospedagem e o transporte do cuidador são organizados junto com o planejamento da viagem e alinhados com a família.",
      },
    ],
    related: [
      "acompanhamento-em-consultas",
      "cuidado-domiciliar",
      "acompanhamento-de-saude",
    ],
  },
  {
    slug: "acompanhamento-em-consultas",
    category: "rotina",
    categoryLabel: "Serviços de rotina e suporte",
    icon: ClipboardList,
    title: "Acompanhamento em Consultas",
    h1: "Acompanhamento em Consultas Médicas para Idosos em SP",
    keyword: "acompanhante em consultas médicas idoso",
    metaTitle: "Acompanhamento em Consultas Médicas | Aegis Care SP",
    metaDescription:
      "Acompanhante em consultas médicas para idosos em São Paulo: transporte assistido, registro de orientações e comunicação com a família.",
    hero:
      "Acompanhamento profissional em consultas e exames, para que nenhuma orientação médica se perca no caminho.",
    whatIs:
      "Serviço em que um cuidador acompanha o idoso a consultas médicas, exames e procedimentos ambulatoriais na Capital de São Paulo, registrando orientações e apoiando o deslocamento.",
    indicatedFor: [
      "Idosos que moram sozinhos ou longe dos filhos",
      "Pacientes com múltiplas consultas e exames por mês",
      "Idosos com dificuldade de compreender ou lembrar orientações",
      "Famílias que não conseguem acompanhar todas as consultas",
    ],
    realSituations: [
      "Consulta com especialista em outro bairro da cidade",
      "Retorno pós-cirúrgico com muitas orientações",
      "Exame que exige preparo e jejum",
      "Necessidade de repassar a conduta médica para vários familiares",
    ],
    howItWorks: [
      "Alinhamento prévio da agenda e do trajeto",
      "Acompanhamento presencial durante toda a consulta",
      "Registro escrito das orientações e prescrições",
      "Comunicação clara com a família após o atendimento",
    ],
    benefits: [
      "Segurança em deslocamentos urbanos",
      "Melhor compreensão e adesão ao tratamento",
      "Comunicação organizada entre médico, idoso e família",
      "Tempo poupado para filhos e familiares",
    ],
    guidance:
      "Uma boa consulta começa antes: reunir exames, listar dúvidas e chegar com calma. Um acompanhante experiente garante que nada disso se perca.",
    whenToSeekHelp:
      "Considere o serviço quando o idoso tiver consultas frequentes, dificuldades de memória, mobilidade reduzida ou quando a família não puder estar presente em todos os atendimentos.",
    faqs: [
      {
        question: "O acompanhante pode transportar o idoso?",
        answer:
          "O acompanhamento é presencial durante o trajeto e a consulta. O transporte é combinado conforme o caso (carro da família, aplicativo ou serviço especializado).",
      },
      {
        question: "É possível acompanhar exames com preparo?",
        answer:
          "Sim. Organizamos o preparo com antecedência e acompanhamos o idoso durante todo o procedimento.",
      },
    ],
    related: [
      "acompanhamento-de-saude",
      "cuidado-domiciliar",
      "cuidador-de-idosos-em-sao-paulo",
    ],
  },
  {
    slug: "cuidado-domiciliar",
    category: "rotina",
    categoryLabel: "Serviços de rotina e suporte",
    icon: Home,
    title: "Cuidado Domiciliar",
    h1: "Cuidado Domiciliar Premium para Idosos em São Paulo",
    keyword: "cuidado domiciliar para idosos",
    metaTitle: "Cuidado Domiciliar para Idosos em SP | Aegis Care",
    metaDescription:
      "Cuidado domiciliar para idosos em São Paulo com cuidadores selecionados, coordenação de enfermagem 24h e plano individualizado para cada família.",
    hero:
      "Cuidado organizado dentro do lar, com plano individualizado, cuidadores selecionados e coordenação clínica contínua.",
    whatIs:
      "O cuidado domiciliar da Aegis Care reúne cuidador, coordenação de enfermagem e plano personalizado em um único serviço, dentro da casa do paciente. É uma alternativa acolhedora à casa de repouso, respeitando a rotina e a história da família.",
    indicatedFor: [
      "Idosos que desejam envelhecer em casa com segurança",
      "Famílias que preferem cuidado personalizado ao invés de instituição",
      "Pacientes com doenças crônicas que precisam de acompanhamento contínuo",
      "Famílias com rotinas complexas que precisam de apoio estruturado",
    ],
    realSituations: [
      "Idoso decidiu não morar em casa de repouso",
      "Família reorganizando a rotina após diagnóstico importante",
      "Necessidade de escala 24h dentro do domicílio",
      "Cuidador informal atual não está mais dando conta",
    ],
    howItWorks: [
      "Avaliação inicial gratuita com a família",
      "Construção de um plano individualizado de cuidado",
      "Seleção do cuidador e definição da escala",
      "Supervisão de enfermagem contínua, com registros e visitas técnicas",
    ],
    benefits: [
      "Conforto e vínculo preservados dentro de casa",
      "Cuidado adaptado à história e às preferências do idoso",
      "Comunicação transparente e frequente com a família",
      "Segurança clínica com coordenação de enfermagem 24h",
    ],
    guidance:
      "O cuidado domiciliar bem estruturado começa por uma boa conversa: entender a rotina, as memórias e os medos da família. Só depois vem a escala, o cuidador e os processos.",
    whenToSeekHelp:
      "Considere o cuidado domiciliar profissional quando a rotina de cuidado começar a comprometer o sono, o trabalho ou a saúde da família, ou quando o idoso não estiver mais seguro sozinho em casa.",
    faqs: [
      {
        question: "Qual a diferença entre cuidado domiciliar e home care?",
        answer:
          "Home care costuma envolver procedimentos técnicos de enfermagem e terapias no domicílio. O cuidado domiciliar da Aegis Care é focado em cuidador e coordenação clínica, sem procedimentos técnicos avançados.",
      },
      {
        question: "É melhor que uma casa de repouso?",
        answer:
          "Para muitas famílias, sim: preserva o vínculo, a rotina e a identidade do idoso. A decisão sempre é individual.",
      },
    ],
    related: [
      "cuidador-de-idosos-em-sao-paulo",
      "acompanhamento-de-saude",
      "cuidados-para-alzheimer-em-casa",
    ],
  },
  {
    slug: "acompanhamento-de-saude",
    category: "rotina",
    categoryLabel: "Serviços de rotina e suporte",
    icon: Stethoscope,
    title: "Acompanhamento de Saúde",
    h1: "Acompanhamento de Saúde para Idosos em Casa",
    keyword: "acompanhamento de saúde para idosos",
    metaTitle: "Acompanhamento de Saúde para Idosos | Aegis Care",
    metaDescription:
      "Acompanhamento de saúde para idosos em domicílio: apoio à medicação, sinais vitais, rotina e comunicação com a família em São Paulo.",
    hero:
      "Monitoramento diário do bem-estar do idoso em casa, com registros claros e comunicação constante com a família.",
    whatIs:
      "Serviço de acompanhamento contínuo do estado de saúde do idoso no domicílio, com apoio à medicação, observação de sinais, registros diários e comunicação regular com a família e a coordenação de enfermagem.",
    indicatedFor: [
      "Idosos com múltiplas medicações diárias",
      "Pessoas com doenças crônicas em acompanhamento médico",
      "Famílias que moram longe e precisam de informações regulares",
      "Idosos em fase estável, mas com risco de descompensação",
    ],
    realSituations: [
      "Idoso já esqueceu medicação mais de uma vez no mês",
      "Sono, apetite ou humor começaram a mudar",
      "Vários médicos envolvidos e nenhuma visão de conjunto",
      "Família distante precisa de relatos frequentes e organizados",
    ],
    howItWorks: [
      "Estruturação do plano de medicação e rotina",
      "Observação diária de sinais e comportamento",
      "Registros compartilhados com a família e com a enfermagem",
      "Alertas rápidos quando algo foge do padrão",
    ],
    benefits: [
      "Mais controle sobre doenças crônicas",
      "Detecção precoce de mudanças de saúde",
      "Menos internações evitáveis",
      "Tranquilidade para a família, mesmo à distância",
    ],
    guidance:
      "Acompanhar saúde no dia a dia é mais do que medir pressão: é notar quando o idoso comeu menos, dormiu pior ou reclamou de uma dor nova. Registro contínuo transforma esses sinais em cuidado real.",
    whenToSeekHelp:
      "Contrate o acompanhamento de saúde profissional quando houver múltiplas medicações, doenças crônicas descompensando com frequência, ou quando a família precisar de olhar técnico contínuo dentro de casa.",
    faqs: [
      {
        question: "Vocês substituem o médico de confiança da família?",
        answer:
          "Não. Trabalhamos em complemento à equipe médica, organizando o cuidado do dia a dia e comunicando o que for relevante.",
      },
      {
        question: "É possível receber relatórios semanais?",
        answer:
          "Sim. Combinamos com a família a periodicidade e o formato dos relatórios, de acordo com a necessidade.",
      },
    ],
    related: [
      "cuidado-domiciliar",
      "cuidador-de-idosos-em-sao-paulo",
      "acompanhamento-em-consultas",
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

export const getRelatedServices = (slugs: string[]) =>
  slugs.map((s) => getServiceBySlug(s)).filter((s): s is ServiceData => Boolean(s));

export const serviceCategories = [
  { id: "assistencial", label: "Serviços assistenciais" },
  { id: "clinico", label: "Serviços clínicos e complexos" },
  { id: "rotina", label: "Serviços de rotina e suporte" },
] as const;
