const experiencias = [
    {
        id: '1',
        title: 'Cena Gourmet en Restaurante Estrella Michelin',
        category: 'gastronomía',
        description: 'Disfruta de una experiencia culinaria única con menú degustación de 7 platos.',
        longDescription: 'Sumérgete en un viaje gastronómico inolvidable en nuestro restaurante galardonado con estrella Michelin. El chef ejecutivo ha preparado un menú degustación exclusivo que combina técnicas innovadoras con ingredientes de temporada de la más alta calidad.',
        price: 185,
        stock: 20,
        duration: '3 horas',
        location: 'Medellín, Colombia',
        img: 'https://images.unsplash.com/photo-1616671276441-2f2c277b8bf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwcmVzdGF1cmFudCUyMGRpbmluZ3xlbnwxfHx8fDE3NzA2MTg2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.9,
        reviews: 234,
        highlights: ['Menú degustación 7 platos', 'Maridaje de vinos premium', 'Chef ejecutivo', 'Ambiente exclusivo'],
        included: ['Menú completo', 'Maridaje de vinos', 'Servicio personalizado', 'Aparcacoches']
    },
    {
        id: '2',
        title: 'Cata de Vinos en Viñedo con Maridaje',
        category: 'gastronomía',
        description: 'Descubre vinos excepcionales en un viñedo con vistas espectaculares.',
        longDescription: 'Visita un viñedo boutique en La Rioja y participa en una cata guiada de 5 vinos premium. Aprende sobre el proceso de elaboración, recorre los viñedos y disfruta de un maridaje con productos locales mientras contemplas el atardecer.',
        price: 75,
        stock: 20,
        duration: '3 horas',
        location: 'Bogotá, Colombia',
        img: 'https://images.unsplash.com/photo-1687877954846-00876ced28bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwdGFzdGluZyUyMHZpbmV5YXJkfGVufDF8fHx8MTc3MDY5NTQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.8,
        reviews: 198,
        highlights: ['Cata de 5 vinos', 'Tour por viñedos', 'Maridaje gourmet', 'Sommelier experto'],
        included: ['Cata guiada', 'Maridaje', 'Tour bodega', 'Guía especializado', 'Copa de regalo']
    },
    {
        id: '3',
        title: 'Crucero al Atardecer con Cena',
        category: 'gastronomía',
        description: 'Navega por la costa mientras disfrutas de una cena gourmet.',
        longDescription: 'Embárcate en una experiencia romántica navegando por la costa mediterránea. Disfruta de una cena gourmet de tres platos preparada por nuestro chef a bordo mientras contemplas la puesta de sol y las luces de la ciudad desde el mar.',
        price: 140,
        stock: 20,
        duration: '3 horas',
        location: 'Cartagena, Colombia',
        img: 'https://images.unsplash.com/photo-1599922868695-afceda9c51be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjB5YWNodCUyMHNhaWxpbmd8ZW58MXx8fHwxNzcwNzI5MjI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.8,
        reviews: 167,
        highlights: ['Cena gourmet', 'Puesta de sol', 'Bebidas premium', 'Música en vivo'],
        included: ['Cena 3 platos', 'Bebidas ilimitadas', 'Música en vivo', 'Capitán experto', 'Aperitivos']
    },
    {
        id: '4',
        title: 'Parapente en Jericó',
        category: 'aventura',
        description: 'Vuela sobre las montañas más espectaculares con instructores profesionales.',
        longDescription: 'Experimenta la sensación de volar como un pájaro sobre los majestuosos Pirineos. Esta aventura de parapente biplaza te permitirá disfrutar de vistas panorámicas impresionantes mientras vuelas con un instructor certificado con más de 10 años de experiencia.',
        price: 120,
        stock: 20,
        duration: '2 horas',
        location: 'Jericó, Antioquia',
        img: 'https://images.unsplash.com/photo-1764022398343-f1bd1d845e17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBwYXJhZ2xpZGluZyUyMG1vdW50YWlufGVufDF8fHx8MTc3MDcyOTIyNXww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.8,
        reviews: 189,
        highlights: ['Vuelo biplaza', 'Instructor certificado', 'Vistas panorámicas', 'Fotos y vídeo incluidos'],
        included: ['Equipo completo', 'Seguro', 'Instructor profesional', 'Fotos y vídeos', 'Transporte al punto de despegue']
    },
    {
        id: '5',
        title: 'Buceo con Tortugas Marinas',
        category: 'aventura',
        description: 'Explora el fondo marino y nada junto a tortugas en su hábitat natural.',
        longDescription: 'Sumérgete en las cristalinas aguas del Mediterráneo y disfruta de una experiencia de buceo inolvidable. Nada junto a tortugas marinas, observa peces tropicales y descubre la belleza del ecosistema marino con guías expertos.',
        price: 110,
        stock: 20,
        duration: '3 horas',
        location: 'Isla Fuerte, Córdoba',
        img: 'https://images.unsplash.com/photo-1580128789542-d484253e94a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3ViYSUyMGRpdmluZyUyMG9jZWFufGVufDF8fHx8MTc3MDY4Mjg1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.9,
        reviews: 276,
        highlights: ['Buceo guiado', 'Tortugas marinas', 'Equipo incluido', 'Fotos submarinas'],
        included: ['Equipo completo', 'Instructor PADI', 'Seguro', 'Fotos digitales', 'Refrigerio']
    },
    {
        id: '6',
        title: 'Vuelo en Globo Aerostático al Amanecer',
        category: 'aventura',
        description: 'Sobrevuela paisajes mágicos y disfruta de un desayuno de celebración.',
        longDescription: 'Vive una experiencia mágica sobrevolando los campos de Castilla al amanecer. Disfruta de vistas de 360 grados desde más de 1000 metros de altura, seguido de un brindis con cava y un desayuno campestre tradicional.',
        price: 195,
        stock: 20,
        duration: '4 horas',
        location: 'Jardín, Antioquia',
        img: 'https://images.unsplash.com/photo-1507691640734-887fa7be3377?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBhaXIlMjBiYWxsb29uJTIwcmlkZXxlbnwxfHx8fDE3NzA3MjkyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 5.0,
        reviews: 423,
        highlights: ['Vuelo al amanecer', 'Piloto experto', 'Brindis con cava', 'Desayuno incluido'],
        included: ['Vuelo 1 hora', 'Seguro completo', 'Desayuno campestre', 'Brindis', 'Certificado de vuelo', 'Fotos']
    },
    {
        id: '7',
        title: 'Clase de Cocina Italiana con Chef Profesional',
        category: 'clases de cocina',
        description: 'Aprende a preparar pasta fresca y platos tradicionales italianos.',
        longDescription: 'Descubre los secretos de la cocina italiana de la mano de un chef con formación en Italia. En esta clase práctica aprenderás a hacer pasta fresca desde cero, preparar salsas tradicionales y crear platos auténticos que podrás replicar en casa.',
        price: 95,
        stock: 20,
        duration: '4 horas',
        location: 'Bogotá, Colombia',
        img: 'https://images.unsplash.com/photo-1758279745466-f5f4087a87d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwY2xhc3MlMjBraXRjaGVufGVufDF8fHx8MTc3MDcyMjUyMXww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.9,
        reviews: 312,
        highlights: ['Chef profesional', 'Pasta fresca casera', 'Recetas tradicionales', 'Degustación incluida'],
        included: ['Todos los ingredientes', 'Delantal y recetario', 'Comida completa', 'Vino italiano', 'Certificado']
    },
    {
        id: '8',
        title: 'Taller de Chocolatería Artesanal',
        category: 'clases de cocina',
        description: 'Crea tus propios bombones y aprende las técnicas de los maestros chocolateros.',
        longDescription: 'Adéntrate en el mundo del chocolate artesanal con este taller práctico. Aprende a templar chocolate, crear bombones rellenos, trufas y tabletas personalizadas. Te llevarás a casa tus creaciones y un kit para seguir practicando.',
        price: 65,
        stock: 20,
        duration: '3 horas',
        location: 'Bogotá, Colombia',
        img: 'https://images.unsplash.com/photo-1646082192921-272df4780996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBtYWtpbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzA3MjkyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.8,
        reviews: 145,
        highlights: ['Chocolatero profesional', 'Bombones artesanales', 'Técnicas de templado', 'Kit para casa'],
        included: ['Ingredientes premium', 'Recetario', 'Tus creaciones', 'Kit chocolate', 'Delantal']
    },
    {
        id: '9',
        title: 'Clase de Sushi y Cocina Japonesa',
        category: 'clases de cocina',
        description: 'Domina el arte del sushi con un chef especializado en cocina japonesa.',
        longDescription: 'Aprende las técnicas auténticas de preparación de sushi en esta clase magistral. Desde el correcto cocido del arroz hasta el corte perfecto del pescado, descubrirás todos los secretos de la cocina japonesa y prepararás varios tipos de rolls y nigiris.',
        price: 105,
        stock: 20,
        duration: '3.5 horas',
        location: 'Medellín, Colombia',
        img: 'https://images.unsplash.com/photo-1742968922797-f2fb3dd285e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMG1ha2luZyUyMGNsYXNzfGVufDF8fHx8MTc3MDY5NDEwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.9,
        reviews: 298,
        highlights: ['Chef japonés', 'Técnicas auténticas', 'Pescado fresco', 'Sake incluido'],
        included: ['Ingredientes frescos', 'Kit de sushi', 'Recetario', 'Degustación', 'Sake premium', 'Certificado']
    },
    {
        id: '10',
        title: 'Día Completo de Spa y Wellness',
        category: 'spa & wellness',
        description: 'Relájate con masajes, tratamientos faciales y acceso a todas las instalaciones.',
        longDescription: 'Regálate un día de relajación total en nuestro spa de lujo. Incluye masaje de 60 minutos, tratamiento facial personalizado, acceso ilimitado a piscinas termales, sauna, baño turco y zona de relajación con vistas panorámicas.',
        price: 150,
        stock: 20,
        duration: 'Día completo',
        location: 'Medellín, Colombia',
        img: 'https://images.unsplash.com/photo-1769011496342-2bd1ad232d8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NzA2MjgzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.7,
        reviews: 267,
        highlights: ['Masaje 60 min', 'Tratamiento facial', 'Piscinas termales', 'Almuerzo saludable'],
        included: ['Masaje completo', 'Facial personalizado', 'Acceso spa', 'Almuerzo', 'Albornoz y zapatillas']
    },
    {
        id: '11',
        title: 'Masaje Balinés con Aromaterapia',
        category: 'spa & wellness',
        description: 'Tratamiento relajante de 90 minutos con aceites esenciales.',
        longDescription: 'Experimenta la tradición ancestral del masaje balinés combinado con aromaterapia moderna. Este tratamiento de 90 minutos utiliza técnicas de presión profunda, estiramientos suaves y aceites esenciales para liberar tensiones y restaurar el equilibrio.',
        price: 89,
        stock: 20,
        duration: '90 minutos',
        location: 'Cartagena, Colombia',
        img: 'https://images.unsplash.com/photo-1737352777897-e22953991a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNzYWdlJTIwdGhlcmFweSUyMHNwYXxlbnwxfHx8fDE3NzA2NDc0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.9,
        reviews: 189,
        highlights: ['Masaje 90 min', 'Aceites esenciales', 'Terapeuta certificado', 'Ambiente relajante'],
        included: ['Masaje completo', 'Aromaterapia', 'Té de hierbas', 'Acceso a zona relax', 'Música ambiental']
    }
]

let error = false
export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error){
                reject('Ooops...tenemos un error. Intentalo más tarde')
            }else{
                resolve(experiencias)
            }
        }, 3000)
    })
}

export const getItem = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error){
                reject('Ooops...tenemos un error. Intentalo más tarde')
            }else{
                let prod = experiencias.find((prod)=> prod.id === id)
                resolve(prod)
            }
        }, 3000)
    })
}
