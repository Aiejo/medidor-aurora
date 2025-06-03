type seccion = {
  nombre: string;
  alias: string;
  preguntas: Array<{
    numero: number;
    texto: string;
    opciones: Array<string>;
  }>;
};

export const TOTAL_PREGUNTAS = 14;
export const CUESTIONARIO: Array<seccion> = [
  {
    nombre: "Diagnóstico",
    alias: "diagnostico",
    preguntas: [
      {
        numero: 1,
        texto:
          "¿El proyecto contempla cómo las acciones impactarán de forma distinta a hombres, mujeres y otras identidades?",
        opciones: [
          "No tiene en cuenta diferencias.",
          "Reconoce diferencias, pero no las analiza.",
          "Analiza e incorpora el enfoque diferencial.",
        ],
      },
      {
        numero: 2,
        texto:
          "¿Se han identificado y abordado barreras que podrían limitar la participación de mujeres en el proyecto?",
        opciones: [
          "No se identifican.",
          "Se reconocen sin medidas específicas.",
          "Se aplican estrategias concretas para superarlas.",
        ],
      },
      {
        numero: 3,
        texto:
          "¿Se ha reflexionado sobre cómo las desigualdades de género se cruzan con otras situaciones como etnia, edad, situación socioeconómica y discapacidad? ",
        opciones: [
          "No se considera.",
          "Se menciona sin aplicarse.",
          "Se analiza e integra en el diagnóstico y diseño.",
        ],
      },
    ],
  },
  {
    nombre: "Equipo de trabajo",
    alias: "equipo",
    preguntas: [
      {
        numero: 4,
        texto:
          "¿Se ha brindado capacitación al equipo del proyecto sobre equidad de género o transversalización del enfoque de género?",
        opciones: [
          "Sin formación.",
          "Parcial o reciente, sin aplicación.",
          "Formación aplicada, técnica y actitudinal",
        ],
      },
    ],
  },
  {
    nombre: "Diseño",
    alias: "diseno",
    preguntas: [
      {
        numero: 5,
        texto:
          "¿Los objetivos del proyecto incluyen metas para disminuir brechas de género?",
        opciones: [
          "No hay objetivos relacionados.",
          "Objetivos generales con implicaciones indirectas.",
          "Objetivos explícitos para reducir brechas.",
        ],
      },
      {
        numero: 6,
        texto:
          "¿Los datos utilizados en el proyecto están desagregados por sexo?",
        opciones: [
          "No hay datos desagregados.",
          "Algunos datos están desagregados.",
          "Datos desagregados y con análisis interpretativo.",
        ],
      },
      {
        numero: 7,
        texto:
          "¿Se incorporaron medidas contempladas en el protocolo para la prevención y atención a Violencias Basadas en Género (VBG)?",
        opciones: [
          "No se identifica el protocolo.",
          "Se aluden medidas pero no se conoce el protocolo.",
          "Se conoce y se implementa el protocolo.",
        ],
      },
    ],
  },
  {
    nombre: "Población participante",
    alias: "plobacion",
    preguntas: [
      {
        numero: 8,
        texto:
          "¿Se garantiza la participación de mujeres en espacios de consulta, planeación o toma de decisiones?",
        opciones: [
          "No se promueve la participación.",
          "Se realiza consulta sin incidencia en decisiones.",
          "Participación e incidencia en la toma de decisiones.",
        ],
      },
      {
        numero: 9,
        texto:
          "¿El proyecto incluye acciones afirmativas para los diferentes contextos de las mujeres?",
        opciones: [
          "No incluye acciones afirmativas.",
          "Algunas acciones simbólicas o indirectas.",
          "Se implementan acciones específicas y sostenidas.",
        ],
      },
    ],
  },
  {
    nombre: "Recursos asignados",
    alias: "recursos",
    preguntas: [
      {
        numero: 10,
        texto:
          "¿El proyecto contempla alguna de las líneas del trazador presupuestal de género?",
        opciones: [
          "No hay recursos asignados.",
          "Recursos mínimos o no trazables.",
          "Recursos clasificados en alguna de las líneas del trazador.",
        ],
      },
      {
        numero: 11,
        texto:
          "¿Se asignaron recursos específicos en el presupuesto para reducir desigualdades de género?",
        opciones: [
          "No hay asignación específica.",
          "Recursos generales o simbólicos.",
          "Presupuesto claro, trazable y con enfoque de género.",
        ],
      },
    ],
  },
  {
    nombre: "Indicadores y evaluación",
    alias: "indicadores",
    preguntas: [
      {
        numero: 12,
        texto:
          "¿Se han definido indicadores específicos para evaluar el impacto del enfoque de género de este proyecto?",
        opciones: [
          "No existen.",
          "Se plantean de forma general.",
          "Indicadores claros y diseñados con enfoque de género.",
        ],
      },
      {
        numero: 13,
        texto:
          "¿Se incluye una evaluación de cómo el proyecto contribuye a reducir las brechas de género?",
        opciones: [
          "No se contempla la evaluación.",
          "Evaluación general o parcial.",
          "Evaluación enfocada en género con análisis e impacto.",
        ],
      },
      {
        numero: 14,
        texto:
          "¿El proyecto contribuye a transformar imaginarios, estereotipos o normas de género?",
        opciones: [
          "Reproduce roles y estereotipos.",
          "Reconoce estereotipos.",
          "Los confronta activamente.",
        ],
      },
    ],
  },
];

