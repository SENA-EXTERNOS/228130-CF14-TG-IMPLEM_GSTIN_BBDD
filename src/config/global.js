export default {
  global: {
    componenteFormativo: 'Estructura de las bases de datos NoSQL',
    descripcionCurso:
      'El componente estructura de las bases de datos NoSQL, aborda cada de bases de datos implementados bajo el enfoque de no relacionales; se aborda cada una de las temáticas por medio de la instalación de una base de datos no relacional como lo es Mongodb. Además, se fundamentan las diferentes consultas y operaciones en una base de datos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Bases de datos NoSQL (no relacional)',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Gestores de BD NoSQL',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tipos de BD NoSQL',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Procedimientos y funciones almacenadas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'CRUD en MongoDB',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'CRUD en MongoDB',
      referencia:
        'Díaz, A. (2019). <em>Introducción a las bases de datos NoSQL: comparativa MongoDB vs Cassandra.</em> [Trabajo de grado, Universidad de Álcala Escuela técnica superior].',
      tipo: 'Trabajo de grado',
      link:
        'https://ebuah.uah.es/dspace/bitstream/handle/10017/38612/TFG_Diaz_Moreno_2019.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: 'CRUD en MongoDB',
      referencia:
        'Graterol, Y. (2018). <em>Cómo funcionan los índices en MongoDB</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=DJ5Wnkn5w0g',
    },
    {
      tema: 'CRUD en MongoDB',
      referencia:
        'Medina, J. (2021). <em>Curso MongoDB - 1 Introducción [video].</em> YouTube. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=SUtH1LGfa8o&list=PLvimn1Ins-43y_9RNEo4JIFdpA5SJCYey',
    },
    {
      tema: 'Gestores de BD NoSQL',
      referencia:
        'Narváez, M., Grefa, P., Caisa, M. & Guisñan, P. (2020). Análisis de Desempeño entre MONGODB y COUCHDB utilizando Norma ISO/IEC 25000. <em>Revista Perspectivas, 2 (2), p. 13-20.</em> .',
      tipo: 'Artículo',
      link: 'https://doi.org/10.47187/perspectivas.vol2iss2.pp13-20.2020',
    },
  ],
  glosario: [
    {
      termino: 'Cassandra',
      significado:
        'es una base de datos NoSQL distribuida de tipo clave-valor con gran escalabilidad usada para almacenar grandes cantidades de datos.',
    },
    {
      termino: '<em>Hbase</em>',
      significado:
        'es una base de datos de código abierto distribuida y no relacional que ejecuta sobre HDFS. Proporciona tolerancia a fallos y capacidad para almacenar grandes cantidades de datos dispersos.',
    },
    {
      termino: 'Índice',
      significado:
        'se implementan para brindar una eficiencia durante la ejecución de las diferentes consultas que son activadas desde el cliente.',
    },
    {
      termino: '<em>JSON</em>',
      significado:
        'es un formato de texto sencillo para el intercambio de datos. Se trata de un subconjunto de la notación literal de objetos de <em>JavaScript</em>, aunque, debido a su amplia adopción como alternativa a XML se considera desde el año 2019 un formato independiente del lenguaje.',
    },
    {
      termino: 'MongoDB',
      significado:
        'base de datos NoSQL orientada a documentos que usa <em>JSON</em> para el esquema de datos.',
    },
    {
      termino: 'NoSQL',
      significado:
        'es un modelo de base de datos desarrollado para responder a la necesidad de almacenar datos no estructurados.',
    },
    {
      termino: 'Paquete',
      significado:
        'tienen un papel importante que es de agrupar funciones y procedimientos de forma lógica.',
    },
    {
      termino: 'Redis',
      significado:
        'significa <em>remote dictionary server</em>; es una base de datos de clave-valor gestionado en código abierto. Se caracteriza por sus grandes capacidades básicas y los casos de uso funcionales.',
    },
    {
      termino: '<em>Trigger</em>',
      significado:
        'llamados también disparadores son una pieza fundamental donde permite ejecutar la lógica por parte del servidor del cliente después de que ocurra un evento en la base de datos.',
    },
    {
      termino: 'XML',
      significado:
        'sigla en inglés de <em>extensible markup language</em>, traducido como “lenguaje de marcado extensible” o “lenguaje de marcas extensible”, es un metalenguaje que permite definir lenguajes de marcas, desarrollado por el <em>World Wide Web Consortium</em> (W3C) utilizado para almacenar datos en forma legible.',
    },
  ],
  referencias: [
    {
      referencia:
        'Lasluisa, K., Gaibor, M., Baldeón, P. & Toasa, R. (2020). Evaluación del desempeño en tiempos de respuesta para bases de datos SQL, NoSQL y NewSQL. <em>RISTI: Revista Ibérica de Sistemas en Tecnologías de Información.</em> (37), p. 28-40. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_proquest_journals_2472669226',
    },
    {
      referencia:
        'Macarrón, P. (2021). <em>Tipos de bases de datos no relacionales.</em> Certia.',
      link: 'https://www.certia.net/tipos-de-bases-de-datos-no-relacionales/',
    },
    {
      referencia:
        'Makris, A., Tserpes, K., Spiliopoulos, G., Zissis, D. & Anagnostopoulos, D. (2021). MongoDB Vs PostgreSQL: Un estudio comparativo sobre aspectos de rendimiento. <em>Geoinformática</em>, 25(2), p. 243-268. ',
      link: 'https://doi.org/10.1007/s10707-020-00407-w',
    },
    {
      referencia:
        'Marrero, L., Olsowy, V., Thomas, P., Delía, L., Tesone, F., Fernández, J. & Pesado, P. (2019). Un estudio comparativo de bases de datos relacionales y bases de datos NoSQL. <em>XXV Congreso Argentino de Ciencias de la Computación (CACIC)</em>Universidad Nacional de Río Cuarto, Córdoba.',
      link: 'http://sedici.unlp.edu.ar/handle/10915/91403',
    },
    {
      referencia:
        'Microsoft. (2022). <em>Fundamentos de la normalización de base de datos.</em> Microsoft.',
      link:
        'https://learn.microsoft.com/es-es/office/troubleshoot/access/database-normalization-description',
    },
    {
      referencia:
        'Migani, S., Vera, C. & Lund, M.  (2018). NoSQL: modelos de datos y sistemas de gestión de bases de datos. <em>XX Workshop de Investigadores en Ciencias de la Computación</em>, p. 225-228.',
      link: 'http://sedici.unlp.edu.ar/handle/10915/67258',
    },
    {
      referencia:
        'MongoDB. (S.F). <em>Activadores de base de datos.</em> MongoDB.',
      link:
        'https://www-mongodb-com.translate.goog/docs/atlas/app-services/triggers/database-triggers/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es-419&_x_tr_pto=sc',
    },
    {
      referencia: 'MongoDB. (S.F). <em>Validate.</em> MongoDB.',
      link: 'https://www.mongodb.com/docs/v5.3/reference/command/validate/',
    },
    {
      referencia:
        'Sánchez, A., Durán, M., González, A. & Ballesteros, J. (2020) ScraCOVID-19: Plataforma informativa de contenido digital mediante Scraping y almacenamiento NoSQL. <em>Inge Cuc,</em> 16(1), p. 229-237. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_eea040fa8ae3499095e3b1dc42bd06d8',
    },
    {
      referencia:
        'Treviño, M., Esquivel, G., Quirós, R., & Víquez, L. (2019). Una comparación de rendimiento entre bases de datos NoSQL: MongoDB y ArangoDB. <em>Tecnología En Marcha, 32</em> (9), p. 5-15.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_dialnet_primary_oai_dialnet_unirioja_es_ART0001391869',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
