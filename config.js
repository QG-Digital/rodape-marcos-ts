const CONFIG = {
    contact: {
        whatsappNumber: "5543996349824",
        email: "comercial@rodapespremium.com.br",
        phone: "(43) 99634-9824",
        location: "Londrina - PR, Brasil",
        googleMapsLink: "https://www.google.com/maps/place/Londrina,+PR",
        defaultWhatsappMessage: "Olá! Vi o site da Rodapés Premium e gostaria de mais informações."
    },
    social: {
        instagram: "https://instagram.com/rodapesfabrica",
        facebook: "https://facebook.com/rodapesfabrica"
    },
    hero: {
        videoUrl: "https://videos.pexels.com/video-files/853877/853877-hd_1920_1080_25fps.mp4", 
        title: "Fábrica de Rodapés Premium para o seu Negócio.",
        subtitle: "Soluções em Poliestireno para Lojistas, Construtoras e Arquitetos. Qualidade, escala e logística para todo o Brasil."
    },
    differentials: {
        title: "Parceria de Confiança, Produto de Qualidade.",
        subtitle: "Oferecemos mais que rodapés. Entregamos soluções que impulsionam o seu negócio.",
        items: [
            { icon: "factory", title: "Produção Própria", description: "Controle total de qualidade e preços competitivos direto da fonte." },
            { icon: "award", title: "Qualidade Superior", description: "Material nobre que garante zero reclamações e a satisfação do seu cliente." },
            { icon: "truck", title: "Logística Nacional", description: "Entregamos com agilidade e segurança em todo o território brasileiro." },
            { icon: "users", title: "Suporte ao Parceiro", description: "Apoio técnico e comercial para ajudar sua equipe a vender mais e melhor." }
        ]
    },
    products: {
        title: "Nossa Linha Completa de Modelos",
        subtitle: "Designs versáteis e especificações técnicas precisas para qualquer tipo de projeto.",
        items: [
            { id:"1", name: "RP-70 Clean", height: "7 cm", material: "Poliestireno", image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", gallery: ["https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"] },
            { id:"2", name: "RP-100 Classic", height: "10 cm", material: "Poliestireno", image: "https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", gallery: ["https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"] },
            { id:"3", name: "RP-150 Premium", height: "15 cm", material: "PVC Expandido", image: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", gallery: ["https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/6585614/pexels-photo-6585614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"] },
            { id:"4", name: "RP-200 Executive", height: "20 cm", material: "PVC Expandido", image: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", gallery: ["https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"] },
            { id:"5", name: "RP-80 Modern", height: "8 cm", material: "Poliestireno", image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", gallery: ["https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"] },
            { id:"6", name: "RP-120 Bold", height: "12 cm", material: "Poliestireno", image: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", gallery: ["https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"] },
            { id:"7", name: "RP-180 Max", height: "18 cm", material: "PVC Expandido", image: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", gallery: ["https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/6585614/pexels-photo-6585614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"] },
            { id:"8", name: "RP-50 Slim", height: "5 cm", material: "Poliestireno", image: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", gallery: ["https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"] }
        ]
    },
    materials: {
        title: "Tecnologia e Vantagens dos Materiais",
        subtitle: "Entenda por que nossos produtos são a escolha técnica ideal para projetos de alta performance.",
        items: [
            { id: "poliestireno", name: "Poliestireno (PS)", description: "Também conhecido como EPS, é um material 100% reciclável, leve e extremamente resistente à umidade e pragas.", properties: ["100% à prova d'água", "Não empena e não mofa", "Imune a cupins e outras pragas", "Excelente acabamento para pintura", "Material ecológico e sustentável"] },
            { id: "pvc", name: "PVC Expandido", description: "Leve, com ótima relação custo-benefício e superfície lisa. Versátil para diversos tipos de acabamento e ambientes.", properties: ["Resistente à umidade", "Bom isolamento térmico e acústico", "Fácil de cortar e instalar", "Superfície uniforme para pintura", "Não propaga chamas"] }
        ]
    },
    factory: {
        title: "Nossa Estrutura Industrial",
        text: "<p>Com uma linha de produção moderna e automatizada, temos capacidade para atender grandes demandas com agilidade, mantendo um rigoroso controle de qualidade em cada etapa do processo.</p><p>Investimos em tecnologia de ponta para garantir um produto final com acabamento perfeito, medidas precisas e a durabilidade que nossos parceiros comerciais exigem. Nosso amplo estoque nos permite uma logística eficiente para todo o Brasil.</p>",
        images: [
            "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            "https://images.pexels.com/photos/1108102/pexels-photo-1108102.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        ]
    },
    contactSection: {
        title: "Vamos Fazer Bons Negócios Juntos?",
        subtitle: "Seja um revendedor ou solicite um orçamento para seu projeto. Nossa equipe comercial está à sua disposição."
    },
    footer: {
        tagline: "Qualidade de fábrica para o seu sucesso.",
        copyright: `© ${new Date().getFullYear()} Rodapés Premium.`,
        developer: { text: "Desenvolvido por Felipe Insdejejczak", url: "https://qg-digital.github.io/institucional/" }
    }
};

const ICONS = {
    factory: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/></svg>`,
    award: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
    truck: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
    users: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    info: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
    whatsapp: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>`,
    mail: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    mapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
    facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
};