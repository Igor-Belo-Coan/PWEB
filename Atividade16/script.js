function carregarCurso() {
    const select = document.getElementById('cursos');
    const cursoSelecionado = select.options[select.selectedIndex].value;

    if (cursoSelecionado === "") return;

    const confirmacao = window.confirm(`Você deseja abrir a janela contendo informações sobre o curso de ${cursoSelecionado}?`);

    if (confirmacao) {
        let infoCurso = "";

        switch (cursoSelecionado) {

            case "Análise e Desenvolvimento de Sistemas":
                duracao = "Duração/ Semestre: 6 semestres";
                tipo = "Tipo de curso: Curso Superior de Tecnologia Presencial";
                turno = "Turno: Manhã / Noite";
                infoCurso =
                    "Cria, projeta, desenvolve e configura programas, softwares e sistemas para inúmeras empresas. Faz auditoria de sistemas para avaliar possíveis erros e falhas. Além disso, o tecnólogo em Análise e Desenvolvimento de Sistemas está apto a prestar consultoria e desenvolver pesquisas.";
                break;

            case "Eletrônica Automotiva":
                duracao = "Duração/ Semestre: 6 semestres";
                tipo = "Tipo de curso: Curso Superior de Tecnologia Presencial";
                turno = "Turno: Tarde";
                infoCurso =
                    "Desenvolve módulos eletrônicos, para, por exemplo, o controle de motores. Monitora o desempenho dos conjuntos de componentes eletrônicos durante um teste de rodagem. Projeta e programa os equipamentos eletrônicos de um veículo e os sistemas de conforto e conveniência (como sensores que auxiliam o motorista a estacionar). Também pode atuar como consultor técnico e em treinamento para equipes de concessionárias e oficinas, estando apto a coordenar equipes nas áreas de produção, manutenção e testes de veículos de passeio, de carga e de transporte coletivo. Nos últimos anos, o mercado de trabalho em manutenção de veículos aumentou devido ao crescimento da frota no País.";
                break;

            case "Fabricação Mecânica":
                duracao = "Duração/ Semestre: 6 semestres";
                tipo = "Tipo de curso: Curso Superior de Tecnologia Presencial";
                turno = "Turno: Manhã / Noite";
                infoCurso =
                    "Atua no segmento de fabricação, envolvendo usinagem, conformação, soldagem, montagem e outros processos mecânicos. Planeja, controla e gerencia diversos processos, como desenvolvimento e melhoria de produtos. Na gestão de projetos, alia competências das áreas de gestão, qualidade e controle ambiental. A multidisciplinaridade é o principal atrativo do curso, o que torna o tecnólogo em Fabricação Mecânica um profissional de fácil adaptação e boa empregabilidade. É capaz de atuar em empresas de diversos segmentos da indústria.";
                break;

            case "Gestão da Qualidade":
                duracao = "Duração/ Semestre: 6 semestres";
                tipo = "Tipo de curso: Curso Superior de Tecnologia Presencial";
                turno = "Turno: Manhã";
                infoCurso =
                    "Planeja, implementa e audita sistemas de gestão da qualidade e produtividade. Realiza mapeamento de processos organizacionais segundo indicadores de qualidade e produtividade. Elabora e analisa documentação e relatórios de qualidade, considerando normas de qualidade estabelecidas. Desenvolve avaliação sistemática dos procedimentos, práticas e rotinas internas e externas de uma organização. Mobiliza pessoas para agir com qualidade em todas as atividades corporativas. Gerencia e mantém o fluxo de informação e comunicação na empresa. Dissemina a cultura da qualidade e produtividade. Capacita pessoas em procedimentos e rotinas destinados a minimizar a produção fora de conformidade. Elabora ferramentas para minimizar a incidência de falhas. Elabora e gerencia estratégias para obtenção de certificações. Desenvolve programa de avaliação de performance produtiva organizacional considerando aspectos quantitativos e qualitativos. Avalia e emite parecer técnico em sua área de formação.";
                break;

            case "Logística":
                duracao = "Duração/ Semestre: 6 semestres";
                tipo = "Tipo de curso: Curso Superior de Tecnologia Presencial";
                turno = "Turno: Tarde";
                infoCurso =
                    "Gerencia o fluxo de produtos ou pessoas em uma empresa. Cuida da aquisição, do recebimento, da armazenagem, da distribuição e do transporte de produtos, bem como do controle e processamento de pedidos. Determina, por exemplo, a quantidade e o tipo de veículos necessários para uma entrega. Planeja a organização e a ordem dos produtos dentro de caminhões ou contêineres. \nMonta o roteiro de entrega dos produtos. Define o melhor local para se fazer um estoque. Pode atuar ainda na ordenação do fluxo de atendimento ao público em hospitais e postos de serviço. Em indústrias e fábricas, determina a disposição de equipamentos e setores de produção de modo a melhorar a produtividade e evitar desperdício e retrabalho. \nPrecisa saber trabalhar em equipe e ter alguma familiaridade com informática, pois no dia a dia do trabalho terá de usar programas específicos da área. Em geral, inicia a carreira em funções de armazenagem, estocagem e inventário de produtos. Todas as empresas, grandes e pequenas, precisam ter um profissional de Logística, uma vez que essa área é fundamental para redução de custos.";
                break;

            case "Manufatura Avançada":
                duracao = "Duração/ Semestre: 6 semestres";
                tipo = "Tipo de curso: Curso Superior de Tecnologia Presencial";
                turno = "Turno: Manhã";
                infoCurso =
                    "Atua como um integrador de tecnologia. Além de projetar e desenvolver projetos de manufatura, o profissional é responsável por agregar novas tecnologias voltadas para a Indústria 4.0. Oferece informações tecnológicas relacionadas às principais técnicas de produção empregadas na indústria mundial, tais como materiais e processos de fabricação, realidade aumentada e virtual, Internet das Coisas, Big Data, entre outros. É responsável por identificar dispositivos e ferramentas disponíveis no mercado. Como empreendedor, pode abrir sua própria consultoria ou empresa. Pode ainda atuar em pesquisas.";
                break;

            case "Polímeros":
                duracao = "Duração/ Semestre: 6 semestres";
                tipo = "Tipo de curso: Curso Superior de Tecnologia Presencial";
                turno = "Turno: Noite";
                infoCurso =
                    "Trabalha na fabricação dos polímeros. Avalia as características químicas, físicas e mecânicas dos plásticos, tendo em vista suas possíveis aplicações (peças para automóveis, materiais de construção, medicina etc.). É também responsável pelo monitoramento da qualidade e dos processos de reciclagem envolvidos e pela identificação e acompanhamento das variáveis relevantes, inclusive aquelas que se referem ao meio ambiente. Atualmente a maioria dos materiais empregados na indústria (cerâmicos, metálicos, etc.) estão sendo substituídos por plásticos, o que aumenta a procura por esse profissional. Outro campo promissor é o desenvolvimento de novos materiais polímeros, como os compósitos, compostos formados pela inserção de fibras naturais, como a de coco ou sisal, ou até mesmo vidro. Estas fibras melhoram as propriedades mecânicas desses materiais.";
                break;

            case "Processos Metalúrgicos":
                duracao = "Duração/ Semestre: 6 semestres";
                tipo = "Tipo de curso: Curso Superior de Tecnologia Presencial";
                turno = "Turno: Manhã";
                infoCurso =
                    "Trabalha com produtos básicos de metais: aço, ferro fundido, alumínio e suas ligas, cobre, bronze, latão e níquel e suas ligas. Avalia e seleciona equipamentos e processos mais adequados na produção metalúrgica de modo a otimizar a produtividade. Atua tanto no planejamento como na área operacional de indústrias siderúrgicas e metalúrgicas, podendo supervisionar ou coordenar os processos de fabricação de produtos metálicos, como carcaça de automóvel. Pode ainda trabalhar em laboratórios de materiais das indústrias metalúrgicas ou indústrias mecânicas, que analisam toda a matéria prima recebida ou produtos vendidos.";
                break;

            case "Projetos Mecânicos":
                duracao = "Duração/ Semestre: 6 semestres";
                tipo = "Tipo de curso: Curso Superior de Tecnologia Presencial";
                turno = "Turno: Manhã / Noite";
                infoCurso =
                    "Desenvolve equipamentos para a indústria mecânica, especialmente máquinas de transporte, como esteiras, elevadores e pontes rolantes para movimentação de cargas. Elabora o projeto mecânico, desde a concepção até a especificação final, inclusive, de fornecedores. Pode atuar também na produção, acompanhando o planejamento e o processo de fabricação, bem como na assistência técnica e nas vendas.";
                break;

            case "Sistemas Biomédicos":
                duracao = "Duração/ Semestre: 6 semestres";
                tipo = "Tipo de curso: Curso Superior de Tecnologia Presencial";
                turno = "Turno: Manhã";
                infoCurso =
                    "Planeja, implanta, gerencia e mantém equipamentos clínicos e médico-hospitalares, como respirador artificial, monitores, desfibrilador etc. O tecnólogo é responsável, por exemplo, por checar os equipamentos que serão utilizados durante um procedimento médico. Também pode compor a equipe que atuará durante uma cirurgia. Supervisiona e coordena equipes de manutenção. Assessora a aquisição de equipamentos, orientando quanto às especificações técnicas; executa a instalação e fornece treinamento para os usuários dos aparelhos. Nos fabricantes dos equipamentos médico-hospitalares, está apto para atuar na elaboração de projetos de produtos e na assistência técnica. Pode trabalhar ainda como vendedor técnico. A área de equipamentos médicos é ampla no Brasil, com poucos profissionais e mercado de trabalho promissor.";
                break;

            default:
                duracao = "Duração: Informações não disponíveis.";
                tipo = "Tipo de Curso: Informações não disponíveis.";
                turno = "Turno: Informações não disponíveis.";
                infoCurso = "Sobre: Informações não disponíveis.";
        }


        const janelaCurso = window.open("", "Informações do Curso", "width=600,height=300");
        janelaCurso.document.write(
            `
            <html>
            <head>
                <title>Informações do Curso</title>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <style>
                    body {
                    font-family: Arial, Helvetica, sans-serif;
                    background - color: #f4f4f4;
                    padding: 20px;
                    }
                    
                    h1 {
                    font - size: 20px;
                    color: #007BFF;
                    border - bottom: 2px solid #007BFF;
                    padding - bottom: 10px;
                    margin - bottom: 15px;
                    text - align: left;
                    }
                    
                    p {
                    font - size: 16px;
                    text - align: left;
                    line - height: 1.5;
                    }
                </style>
            </head>
            <body>
                <h1>${cursoSelecionado}</h1>
                <p>${duracao}</p> 
                <p>${tipo}</p>  
                <p>${turno}</p>
                <p>${infoCurso}</p>
            </body>
            </html>
            `
        );
        
    }
}
