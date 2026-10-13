/**
 * Hotel Loanda - Vanilla JavaScript Behavior & Multilingual Engine
 * Supports seamless bilingual switching (Portuguese <-> English)
 */

const TRANSLATIONS = {
  pt: {
    // Navigation
    nav_hotel: 'O Hotel',
    nav_rooms: 'Quartos',
    nav_amenities: 'Comodidades',
    nav_experiences: 'Comodidades',
    nav_dining: 'Gastronomia',
    nav_brunch: 'Brunch',
    nav_location: 'Localização',
    nav_book_btn: 'Reservar Estadia',

    // Hero
    hero_eyebrow: 'A SUA ESTADIA EM LUANDA',
    hero_title: 'O prazer de se sentir<br>em casa.',
    hero_desc: 'Longe da rotina, perto do que realmente importa. Descubra um espaço onde o acolhimento é natural, o conforto está em cada detalhe e Luanda ganha um significado mais pessoal.',
    hero_link: '<span>Descubra o Hotel</span> <span class="hero-discover-arrow" aria-hidden="true">↗</span>',

    // Quickbar
    qb_checkin: 'CHECK-IN',
    qb_checkout: 'CHECK-OUT',
    qb_guests: 'HÓSPEDES',
    qb_room_type: 'TIPO DE QUARTO',
    qb_all_rooms: 'Qualquer quarto',
    qb_btn: 'VER DISPONIBILIDADE →',
    guest_1: '1 hóspede',
    guest_2: '2 hóspedes',
    guest_3: '3 hóspedes',
    guest_4: '4 hóspedes',

    // The Essence
    essence_eyebrow: 'Hospitalidade Genuína',
    essence_title: 'A Alma do Loanda',
    essence_quote: '“Há lugares onde nos sentimos bem. E há aqueles onde nos sentimos em casa.”',
    essence_p1: 'No Hotel Loanda, acreditamos que uma boa estadia começa com a sensação de estar no lugar certo. Um espaço onde o conforto se encontra com a hospitalidade, onde cada detalhe convida a ficar e onde Luanda se sente um pouco mais próxima.',
    essence_stat_chambers: 'Quartos & Suites',
    essence_stat_central: 'Localização Central',
    essence_stat_service: 'Atendimento',
    essence_stat_service_sub: 'Personalizado',
    essence_caption: 'Restaurante 1576 & Áreas de Convívio do Hotel Loanda',
    essence_hours: 'Hotel Loanda · Luanda, Angola',

    // Rooms Section
    rooms_eyebrow: 'Acomodações',
    rooms_title: 'Os Nossos Quartos & Suites',
    rooms_subtitle: 'Espaços concebidos para proporcionar o mais elevado descanso, equipados com comodidades modernas e acabamentos de requinte.',
    max_prefix: 'Máx.',
    rate_ind: 'INDIVIDUAL',
    rate_dup: 'DUPLO',

    // Room 1: Executive
    room1_title: 'Executive',
    room1_desc: 'Quarto executivo com todas as comodidades essenciais para uma estadia confortável e produtiva.',

    // Room 2: Premium
    room2_title: 'Premium',
    room2_desc: 'Quarto premium com acabamentos superiores e vista privilegiada para o hotel.',

    // Room 3: Premium Superior
    room3_title: 'Premium Superior',
    room3_desc: 'Quarto premium com acabamentos de excelência, luz natural e vistas privilegiadas sobre a cidade.',

    // Room 4: Suite Executive Kitchenette
    room4_title: 'Suite Executive Kitchenette',
    room4_desc: 'Suite executiva com kitchenette totalmente equipada para estadias prolongadas.',

    // Room 5: Suite Premium Kitchenette
    room5_title: 'Suite Premium Kitchenette',
    room5_desc: 'Suite premium com kitchenette e espaços amplos para máximo conforto.',

    // Room 6: Suite Master Kitchenette
    room6_title: 'Suite Master Kitchenette',
    room6_desc: 'A nossa suite mais exclusiva, com kitchenette de luxo e o mais alto nível de conforto e privacidade.',

    // Amenities / Comodidades
    amenities_eyebrow: 'Serviços & Conforto',
    amenities_title: 'Comodidades do Hotel Loanda',
    amenities_subtitle: 'Pensadas para garantir o máximo conforto, tranquilidade e conveniência durante a sua estadia em Luanda.',
    
    amenity_wifi_title: 'Wi-Fi Gratuito',
    amenity_wifi_desc: 'Conexão de alta velocidade com cobertura total em todos os quartos, suites e áreas públicas.',
    
    amenity_ac_title: 'Ar Condicionado',
    amenity_ac_desc: 'Climatização individual regulável em todas as unidades para o seu bem-estar e conforto térmico.',
    
    amenity_restaurant_title: 'Restaurante',
    amenity_restaurant_desc: 'Restaurante 1576 com pequeno-almoço executivo, pratos tradicionais e brunch ao domingo.',
    
    amenity_reception_title: 'Receção 24h',
    amenity_reception_desc: 'Atendimento personalizado, check-in e assistência contínua a qualquer hora do dia ou da noite.',
    
    amenity_parking_title: 'Estacionamento',
    amenity_parking_desc: 'Parqueamento privativo e seguro no local para comodidade e facilidade de acesso.',
    
    amenity_roomservice_title: 'Serviço de Quartos',
    amenity_roomservice_desc: 'Refeições ligeiras, bebidas e pequenos-almoços entregues com discrição no seu quarto.',
    
    amenity_bar_title: 'Bar Hotel',
    amenity_bar_desc: 'Snack Bar descontraído para café de especialidade, refeições rápidas e carta de cocktails.',
    
    amenity_security_title: 'Segurança 24h',
    amenity_security_desc: 'Monitorização contínua e equipa de vigilância profissional para a sua total tranquilidade.',

    // Dining
    dining_eyebrow: 'Gastronomia & Restaurante',
    dining_title: 'Uma experiência para saborear.',
    dining_intro: 'O nosso restaurante convida-o a descobrir uma experiência gastronómica que combina os sabores angolanos com a diversidade da cozinha internacional. Num ambiente acolhedor, cada refeição é uma oportunidade para desfrutar de boa comida, partilhar momentos e descobrir novos sabores.',
    dining_item1_title: 'Buffet & À La Carte',
    dining_item1_desc: 'Diferentes formas de desfrutar de cada refeição, com opções para diferentes gostos e momentos do dia.',
    dining_item2_title: 'Pequeno-almoço, Almoço & Jantar',
    dining_item2_desc: 'Uma proposta gastronómica para começar o dia, fazer uma pausa ou terminar a noite à mesa.',
    dining_item3_title: 'Hotel Bar',
    dining_item3_desc: 'Um espaço para relaxar, desfrutar de uma bebida e partilhar bons momentos num ambiente acolhedor.',
    dining_hours_breakfast: 'Pequeno-Almoço: 07:00 – 10:30',
    dining_hours_dinner: 'Almoço & Jantar: 12:30 – 22:30',
    dining_hours_bar: 'Bar & Terrace: 10:00 – 23:30',
    dining_venue_tag: 'Restaurante 1576 · Luanda',
    dining_btn: 'Reservar Mesa',
    dining_menu_link: 'Consultar Carta do Restaurante →',

    // Sunday Brunch Dedicated Section
    brunch_eyebrow: 'Tradição dos Domingos em Luanda',
    brunch_title: 'Brunch de Domingo no Hotel Loanda',
    brunch_desc: 'Os domingos ganham outro sabor no Hotel Loanda. Reúna a família e os amigos à volta de uma mesa que celebra a diversidade gastronómica, com sabores da cozinha angolana e internacional, numa experiência pensada para partilhar, saborear e desfrutar sem pressa.',
    brunch_btn: 'Reservar Mesa para o Brunch',
    brunch_info_btn: 'Informações & Reservas de Grupo →',
    brunch_wa_label: 'Reservas WhatsApp',
    footer_hours_title: 'Horários',

    // Location
    loc_eyebrow: 'Localização Privilegiada',
    loc_title: 'Localização Estratégica e Serena',
    loc_subtitle: 'Fácil acesso aos principais pontos da cidade e centros de negócios, mantendo o ambiente de refúgio e repouso.',
    loc_trail_1_title: 'Acesso Rápido a Centros de Negócios',
    loc_trail_1_desc: 'Principais vias de circulação e zonas comerciais',
    loc_trail_1_dist: '10 min',
    loc_trail_2_title: 'Aeroporto Internacional',
    loc_trail_2_desc: 'Serviço de transfer disponível sob marcação',
    loc_trail_2_dist: '20 min',
    loc_trail_3_title: 'Restaurantes e Pontos de Lazer',
    loc_trail_3_desc: 'Zona envolvente com opções culturais e de lazer',
    loc_trail_3_dist: '5-15 min',
    loc_box_title: 'Visite o Hotel Loanda',
    loc_box_addr_label: 'Endereço:',
    loc_box_addr_val: '[Endereço do Hotel Loanda — Luanda, Angola]',
    loc_box_transfer_label: 'Estacionamento & Transfer:',
    loc_box_transfer_val: 'Estacionamento privativo e seguro para hóspedes. Assistência de transfer para o aeroporto mediante reserva.',
    loc_box_btn: 'Pedir Informações de Chegada',

    // CTA
    cta_eyebrow: 'O Seu Refúgio de Conforto',
    cta_title: 'Reserve a Sua Estadia no Hotel Loanda',
    cta_desc: 'Descubra a combinação ideal entre sofisticação, comodidade e acolhimento caloroso. Garanta a sua tarifa com reserva directa.',
    cta_book_btn: 'Reservar Agora',
    cta_compare_btn: 'Ver Todos os Quartos',

    // Modal
    modal_eyebrow: 'Reserva Directa',
    modal_title: 'Reserve a Sua Estadia no Hotel Loanda',
    modal_desc: 'Indique as suas datas e o quarto pretendido. A nossa equipa entrará em contacto para confirmar a disponibilidade.',
    modal_label_checkin: 'Data de Check-in',
    modal_label_checkout: 'Data de Check-out',
    modal_label_guests: 'Número de Hóspedes',
    modal_label_room: 'Quarto Escolhido',
    modal_label_name: 'Nome Completo',
    modal_label_email: 'Endereço de E-mail',
    modal_label_notes: 'Pedidos Especiais / Observações (Opcional)',
    modal_placeholder_name: 'Ex: João Silva',
    modal_placeholder_email: 'Ex: joao@exemplo.com',
    modal_placeholder_notes: 'Hora prevista de chegada, transfer, preferências...',
    modal_btn_submit: 'Enviar Pedido de Reserva',
    modal_notice: 'Sem custos imediatos. Confirmação personalizada enviada pela recepção.',

    // Footer
    footer_tagline: 'Hotel boutique de luxo rústico em Angola, combinando elegância contemporânea, conforto e calor humano.',
    footer_nav_title: 'Navegação',
    footer_hours_title: 'Horários de Atendimento',
    footer_contact_title: 'Contactos Directos',
    footer_checkin: 'Check-in: a partir das 14:00',
    footer_checkout: 'Check-out: até às 12:00',
    footer_breakfast: 'Pequeno-Almoço: 07:00 – 10:30',
    footer_rights: '© 2026 Hotel Loanda. Todos os direitos reservados. Rustic Soul & Modern Luxury.'
  },
  en: {
    // Navigation
    nav_hotel: 'The Hotel',
    nav_rooms: 'Rooms',
    nav_amenities: 'Amenities',
    nav_experiences: 'Amenities',
    nav_dining: 'Dining',
    nav_brunch: 'Brunch',
    nav_location: 'Location',
    nav_book_btn: 'Book Your Stay',

    // Hero
    hero_eyebrow: 'YOUR STAY IN LUANDA',
    hero_title: 'The pleasure of feeling<br>at home.',
    hero_desc: 'Far from routine, close to what truly matters. Discover a space where warmth comes naturally, comfort lives in every detail, and Luanda takes on a more personal meaning.',
    hero_link: '<span>Discover the Hotel</span> <span class="hero-discover-arrow" aria-hidden="true">↗</span>',

    // Quickbar
    qb_checkin: 'CHECK-IN',
    qb_checkout: 'CHECK-OUT',
    qb_guests: 'GUESTS',
    qb_room_type: 'ROOM TYPE',
    qb_all_rooms: 'Any room',
    qb_btn: 'CHECK AVAILABILITY →',
    guest_1: '1 Guest',
    guest_2: '2 Guests',
    guest_3: '3 Guests',
    guest_4: '4 Guests',

    // The Essence
    essence_eyebrow: 'Genuine Hospitality',
    essence_title: 'The Soul of Loanda',
    essence_quote: '“There are places where we feel good. And there are those where we feel at home.”',
    essence_p1: 'At Hotel Loanda, we believe that a great stay begins with the feeling of being in the right place. A space where comfort meets genuine hospitality, where every detail invites you to stay, and where Luanda feels a little closer.',
    essence_stat_chambers: 'Rooms & Suites',
    essence_stat_central: 'Prime Location',
    essence_stat_service: 'Dedicated',
    essence_stat_service_sub: 'Hospitality',
    essence_caption: 'Restaurante 1576 & Lounge Spaces at Hotel Loanda',
    essence_hours: 'Hotel Loanda · Luanda, Angola',

    // Rooms Section
    rooms_eyebrow: 'Accommodations',
    rooms_title: 'Our Rooms & Suites',
    rooms_subtitle: 'Spaces thoughtfully crafted for restful stays, appointed with modern amenities and refined finishes.',
    max_prefix: 'Max.',
    rate_ind: 'SINGLE',
    rate_dup: 'DOUBLE',

    // Room 1: Executive
    room1_title: 'Executive',
    room1_desc: 'Executive room with all essential amenities for a comfortable and productive stay.',

    // Room 2: Premium
    room2_title: 'Premium',
    room2_desc: 'Premium room with superior finishes and privileged views of the hotel.',

    // Room 3: Premium Superior
    room3_title: 'Premium Superior',
    room3_desc: 'Premium room with superior finishes, abundant natural light, and privileged city views.',

    // Room 4: Suite Executive Kitchenette
    room4_title: 'Suite Executive Kitchenette',
    room4_desc: 'Executive suite with fully equipped kitchenette for extended stays.',

    // Room 5: Suite Premium Kitchenette
    room5_title: 'Suite Premium Kitchenette',
    room5_desc: 'Premium suite with kitchenette and spacious living areas for maximum comfort.',

    // Room 6: Suite Master Kitchenette
    room6_title: 'Suite Master Kitchenette',
    room6_desc: 'Our most exclusive suite, with luxury kitchenette and the highest level of comfort and privacy.',

    // Amenities / Comodidades
    amenities_eyebrow: 'Services & Comfort',
    amenities_title: 'Hotel Loanda Amenities',
    amenities_subtitle: 'Thoughtfully provided to ensure maximum comfort, peace of mind, and convenience during your stay in Luanda.',
    
    amenity_wifi_title: 'Free High-Speed Wi-Fi',
    amenity_wifi_desc: 'Fast and reliable internet connectivity available across all guest rooms, suites, and common areas.',
    
    amenity_ac_title: 'Air Conditioning',
    amenity_ac_desc: 'Individually adjustable climate control in every room and suite for your ideal thermal comfort.',
    
    amenity_restaurant_title: 'Restaurant',
    amenity_restaurant_desc: 'Restaurante 1576 serving executive breakfast, local and international gastronomy, and Sunday brunch.',
    
    amenity_reception_title: '24-Hour Reception',
    amenity_reception_desc: 'Round-the-clock dedicated front desk assistance, welcoming service, and check-in support.',
    
    amenity_parking_title: 'Private Parking',
    amenity_parking_desc: 'Secure on-site guest parking facility offering peace of mind and effortless building access.',
    
    amenity_roomservice_title: 'Room Service',
    amenity_roomservice_desc: 'Selected dishes, beverages, and breakfast delivered to the quiet privacy of your accommodation.',
    
    amenity_bar_title: 'Hotel Bar',
    amenity_bar_desc: 'Casual Snack Bar atmosphere for specialty coffee, signature cocktails, and light gourmet bites.',
    
    amenity_security_title: '24-Hour Security',
    amenity_security_desc: 'Continuous surveillance and dedicated professional security personnel for total peace of mind.',

    // Dining
    dining_eyebrow: 'Gastronomy & Restaurant',
    dining_title: 'An experience to savor.',
    dining_intro: 'Our restaurant invites you to discover a gastronomic experience that blends Angolan flavors with the diversity of international cuisine. In a welcoming ambiance, every meal is an opportunity to enjoy fine food, share memorable moments, and explore new flavors.',
    dining_item1_title: 'Buffet & À La Carte',
    dining_item1_desc: 'Different ways to experience each meal, with thoughtfully curated options for various tastes and times of day.',
    dining_item2_title: 'Breakfast, Lunch & Dinner',
    dining_item2_desc: 'A gastronomic journey to begin the morning, take a satisfying break, or conclude the evening at the table.',
    dining_item3_title: 'Hotel Bar',
    dining_item3_desc: 'A relaxed setting to unwind, sip a refreshing drink, and share great moments in an inviting atmosphere.',
    dining_hours_breakfast: 'Breakfast: 07:00 – 10:30',
    dining_hours_dinner: 'Lunch & Dinner: 12:30 – 22:30',
    dining_hours_bar: 'Bar & Terrace: 10:00 – 23:30',
    dining_venue_tag: 'Restaurante 1576 · Luanda',
    dining_btn: 'Reserve a Table',
    dining_menu_link: 'Explore Restaurant Menu →',

    // Sunday Brunch Dedicated Section
    brunch_eyebrow: 'Luanda’s Sunday Tradition',
    brunch_title: 'Sunday Brunch at Hotel Loanda',
    brunch_desc: 'Sundays take on another flavor at Hotel Loanda. Gather family and friends around a table that celebrates culinary diversity, with the finest Angolan and international gastronomy, in an experience designed for sharing, savoring, and enjoying without haste.',
    brunch_btn: 'Book Sunday Brunch Table',
    brunch_info_btn: 'Group Inquiries & Information →',
    brunch_wa_label: 'WhatsApp Bookings',
    footer_hours_title: 'Service Hours',

    // Location
    loc_eyebrow: 'Prime Location',
    loc_title: 'Strategically Located & Serene',
    loc_subtitle: 'Easy connectivity to prime commercial hubs and transport while preserving a quiet retreat atmosphere.',
    loc_trail_1_title: 'Fast Access to Business Districts',
    loc_trail_1_desc: 'Direct routes to commercial and banking avenues',
    loc_trail_1_dist: '10 min',
    loc_trail_2_title: 'International Airport',
    loc_trail_2_desc: 'Private airport transfer available upon booking',
    loc_trail_2_dist: '20 min',
    loc_trail_3_title: 'Dining & Cultural Centers',
    loc_trail_3_desc: 'Nearby cultural and entertainment spots',
    loc_trail_3_dist: '5-15 min',
    loc_box_title: 'Visiting Hotel Loanda',
    loc_box_addr_label: 'Address:',
    loc_box_addr_val: '[Hotel Loanda Address — Luanda, Angola]',
    loc_box_transfer_label: 'Parking & Transfers:',
    loc_box_transfer_val: 'Secure on-site guest parking. Private airport transfer assistance available on request.',
    loc_box_btn: 'Request Arrival Directions',

    // CTA
    cta_eyebrow: 'Your Comfort Sanctuary',
    cta_title: 'Reserve Your Stay at Hotel Loanda',
    cta_desc: 'Experience the harmonious blend of modern luxury, understated elegance, and authentic hospitality.',
    cta_book_btn: 'Book Your Stay',
    cta_compare_btn: 'View All Rooms',

    // Modal
    modal_eyebrow: 'Direct Reservation',
    modal_title: 'Reserve Your Stay at Hotel Loanda',
    modal_desc: 'Select your preferred dates and room type. Our team will promptly review and confirm availability.',
    modal_label_checkin: 'Check-in Date',
    modal_label_checkout: 'Check-out Date',
    modal_label_guests: 'Number of Guests',
    modal_label_room: 'Selected Room',
    modal_label_name: 'Full Name',
    modal_label_email: 'Email Address',
    modal_label_notes: 'Special Requests / Notes (Optional)',
    modal_placeholder_name: 'e.g. John Doe',
    modal_placeholder_email: 'e.g. john@example.com',
    modal_placeholder_notes: 'Estimated arrival time, airport transfer, preferences...',
    modal_btn_submit: 'Send Reservation Request',
    modal_notice: 'No immediate charge. Personalized confirmation sent by the front desk.',

    // Footer
    footer_tagline: 'Rustic luxury boutique hotel in Angola, blending contemporary sophistication, comfort, and warm hospitality.',
    footer_nav_title: 'Navigation',
    footer_hours_title: 'Front Desk Hours',
    footer_contact_title: 'Direct Inquiries',
    footer_checkin: 'Check-in: from 14:00',
    footer_checkout: 'Check-out: until 12:00',
    footer_breakfast: 'Breakfast: 07:00 – 10:30',
    footer_rights: '© 2026 Hotel Loanda. All rights reserved. Rustic Soul & Modern Luxury.'
  }
};

let currentLang = 'pt';

document.addEventListener('DOMContentLoaded', () => {
  // Check saved language or default to 'pt'
  const savedLang = localStorage.getItem('hotel_loanda_lang') || 'pt';
  setLanguage(savedLang);

  initLanguageSwitcher();
  initHeaderScroll();
  initMobileNavigation();
  initNavigationScrollspy();
  initReservationModal();
  initScrollReveals();
  initDateDefaults();
});

/**
 * Multilingual Engine
 */
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('hotel_loanda_lang', lang);
  document.documentElement.lang = lang;

  const dict = TRANSLATIONS[lang];

  // Update text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update HTML elements (like quotes with spans)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Update active state in switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('is-active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('is-active');
      btn.setAttribute('aria-pressed', 'false');
    }
  });

  // Update document title
  if (lang === 'pt') {
    document.title = 'Hotel Loanda — O prazer de se sentir em casa';
  } else {
    document.title = 'Hotel Loanda — The pleasure of feeling at home';
  }

  // Update WhatsApp direct links based on active language
  const waDining = document.querySelector('[data-whatsapp-dining]');
  const waBrunch = document.querySelector('[data-whatsapp-brunch]');
  const waDiningMenu = document.querySelector('[data-whatsapp-dining-menu]');
  const waBrunchGroup = document.querySelector('[data-whatsapp-brunch-group]');

  if (lang === 'en') {
    if (waDining) {
      waDining.href = 'https://wa.me/244942521179?text=' + encodeURIComponent('Hello! I would like to reserve a table at Restaurante 1576 at Hotel Loanda.');
      waDining.setAttribute('aria-label', 'Reserve a Table at Restaurante 1576 via WhatsApp (+244 942 521 179)');
    }
    if (waBrunch) {
      waBrunch.href = 'https://wa.me/244942521179?text=' + encodeURIComponent('Hello! I would like to reserve a table for Sunday Brunch at Hotel Loanda.');
      waBrunch.setAttribute('aria-label', 'Reserve Sunday Brunch Table via WhatsApp (+244 942 521 179)');
    }
    if (waDiningMenu) {
      waDiningMenu.href = 'https://wa.me/244942521179?text=' + encodeURIComponent('Hello! I would like to explore the menu of Restaurante 1576 at Hotel Loanda.');
    }
    if (waBrunchGroup) {
      waBrunchGroup.href = 'https://wa.me/244942521179?text=' + encodeURIComponent('Hello! I would like information and group reservations for Sunday Brunch at Hotel Loanda.');
    }
  } else {
    if (waDining) {
      waDining.href = 'https://wa.me/244942521179?text=' + encodeURIComponent('Olá, gostaria de reservar uma mesa no Restaurante 1576 do Hotel Loanda.');
      waDining.setAttribute('aria-label', 'Reservar Mesa no Restaurante 1576 via WhatsApp (+244 942 521 179)');
    }
    if (waBrunch) {
      waBrunch.href = 'https://wa.me/244942521179?text=' + encodeURIComponent('Olá, gostaria de reservar uma mesa para o Brunch de Domingo no Hotel Loanda.');
      waBrunch.setAttribute('aria-label', 'Reservar Mesa para o Brunch via WhatsApp (+244 942 521 179)');
    }
    if (waDiningMenu) {
      waDiningMenu.href = 'https://wa.me/244942521179?text=' + encodeURIComponent('Olá, gostaria de consultar a carta do Restaurante 1576 no Hotel Loanda.');
    }
    if (waBrunchGroup) {
      waBrunchGroup.href = 'https://wa.me/244942521179?text=' + encodeURIComponent('Olá, gostaria de informações e fazer uma reserva de grupo para o Brunch de Domingo no Hotel Loanda.');
    }
  }

  syncDateDisplays();
}

function initLanguageSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-lang');
      if (selected && selected !== currentLang) {
        setLanguage(selected);
      }
    });
  });
}

/**
 * 1. Header scroll elevation effect
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 2. Mobile navigation toggle & drawer
 */
function initMobileNavigation() {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const header = document.querySelector('.site-header');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const closeButtons = document.querySelectorAll('[data-close-drawer]');

  if (!toggle || !drawer) return;

  const openDrawer = () => {
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    toggle.classList.add('is-active');
    toggle.setAttribute('aria-expanded', 'true');
    if (header) header.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    toggle.classList.remove('is-active');
    toggle.setAttribute('aria-expanded', 'false');
    if (header) header.classList.remove('menu-open');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('is-open');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', closeDrawer);
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });

  // Auto-close if resized to desktop viewport
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1140 && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });
}

/**
 * Navigation Scrollspy: Highlights active link based on current viewport section
 */
function initNavigationScrollspy() {
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = Array.from(document.querySelectorAll('section[id]'));
  if (!sections.length || !navLinks.length) return;

  let ticking = false;

  const updateActiveLink = () => {
    const scrollPos = window.scrollY + 120; // Offset for header clearance

    // Find the current section
    let currentSectionId = '';
    for (let i = sections.length - 1; i >= 0; i--) {
      const sec = sections[i];
      if (sec.offsetTop <= scrollPos) {
        currentSectionId = sec.getAttribute('id');
        break;
      }
    }

    if (!currentSectionId && sections.length > 0) {
      currentSectionId = sections[0].getAttribute('id');
    }

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${currentSectionId}`) {
        link.classList.add('is-active');
        link.setAttribute('aria-current', 'true');
      } else if (href && href.startsWith('#')) {
        link.classList.remove('is-active');
        link.removeAttribute('aria-current');
      }
    });

    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateActiveLink);
      ticking = true;
    }
  }, { passive: true });

  updateActiveLink();
}

/**
 * 3. Interactive Reservation Inquiry Modal & Quick-bar
 */
function initReservationModal() {
  const modal = document.getElementById('reservation-modal');
  const openButtons = document.querySelectorAll('[data-open-modal="reservation"]');
  const closeButtons = document.querySelectorAll('[data-close-modal="reservation"]');
  const modalForm = document.getElementById('reservation-form');
  const modalFeedback = document.getElementById('reservation-feedback');
  const quickbarForm = document.getElementById('quickbar-form');

  if (!modal) return;

  const openModal = (prefillRoom = '') => {
    modal.classList.add('is-visible');
    document.body.style.overflow = 'hidden';

    if (prefillRoom && modalForm) {
      const roomSelect = modalForm.querySelector('#modal-room-type');
      if (roomSelect) {
        // Find best match or set value
        for (let i = 0; i < roomSelect.options.length; i++) {
          if (roomSelect.options[i].value === prefillRoom || roomSelect.options[i].textContent.includes(prefillRoom)) {
            roomSelect.selectedIndex = i;
            break;
          }
        }
      }
    }
  };

  const closeModal = () => {
    modal.classList.remove('is-visible');
    document.body.style.overflow = '';
    if (modalFeedback) {
      modalFeedback.classList.remove('is-shown');
    }
  };

  // Attach event delegation for dynamically and statically rendered buttons
  document.addEventListener('click', (e) => {
    const openBtn = e.target.closest('[data-open-modal="reservation"]');
    if (openBtn) {
      e.preventDefault();
      const room = openBtn.getAttribute('data-room') || '';
      openModal(room);
    }

    const closeBtn = e.target.closest('[data-close-modal="reservation"]');
    if (closeBtn) {
      e.preventDefault();
      closeModal();
    }
  });

  // Close when clicking modal backdrop
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // ESC key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-visible')) {
      closeModal();
    }
  });

  // Quickbar form submission forwards to modal
  if (quickbarForm) {
    quickbarForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const checkin = document.getElementById('qb-checkin')?.value;
      const checkout = document.getElementById('qb-checkout')?.value;
      const guests = document.getElementById('qb-guests')?.value;
      const roomType = document.getElementById('qb-room')?.value;

      if (modalForm) {
        if (checkin) modalForm.querySelector('#modal-checkin').value = checkin;
        if (checkout) modalForm.querySelector('#modal-checkout').value = checkout;
        if (guests) modalForm.querySelector('#modal-guests').value = guests;
        if (roomType && roomType !== 'All Rooms' && roomType !== 'Todos os Quartos') {
          const sel = modalForm.querySelector('#modal-room-type');
          if (sel) sel.value = roomType;
        }
      }

      openModal(roomType);
    });
  }

  // Handle modal reservation submission
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = modalForm.querySelector('#modal-name')?.value.trim();
      const email = modalForm.querySelector('#modal-email')?.value.trim();
      const chosenRoom = modalForm.querySelector('#modal-room-type')?.value || 'Quarto';

      if (!name || !email) return;

      const submitBtn = modalForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = currentLang === 'pt' ? 'A processar...' : 'Processing...';
      }

      setTimeout(() => {
        if (modalFeedback) {
          modalFeedback.classList.add('is-shown');
          const isPt = currentLang === 'pt';
          modalFeedback.innerHTML = `
            <h4 style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--color-accent-olive); margin-bottom: 0.5rem;">
              ${isPt ? 'Pedido de Reserva Recebido' : 'Reservation Inquiry Received'}
            </h4>
            <p style="font-size: 0.9rem; color: var(--color-text-body); margin-bottom: 0.75rem;">
              ${isPt 
                ? `Obrigado, <strong>${escapeHtml(name)}</strong>. A nossa recepção no Hotel Loanda recebeu o seu pedido para <em>${escapeHtml(chosenRoom)}</em>.`
                : `Thank you, <strong>${escapeHtml(name)}</strong>. Our front desk at Hotel Loanda has received your inquiry for <em>${escapeHtml(chosenRoom)}</em>.`
              }
            </p>
            <p style="font-size: 0.8125rem; color: var(--color-text-light);">
              ${isPt
                ? `Entraremos em contacto através de <strong>${escapeHtml(email)}</strong> no prazo de 4 horas com a confirmação de disponibilidade.`
                : `We will confirm room availability and details to <strong>${escapeHtml(email)}</strong> within 4 hours.`
              }
            </p>
            ${chosenRoom.includes('Restaurante') || chosenRoom.includes('Brunch')
              ? `<div style="margin-top: 1.15rem; padding-top: 0.85rem; border-top: 1px dashed var(--color-border); text-align: center;">
                  <a href="https://wa.me/244942521179?text=${encodeURIComponent(isPt ? `Olá! Enviei um pedido de reserva para ${chosenRoom} em nome de ${name}.` : `Hello! I sent a reservation inquiry for ${chosenRoom} under name ${name}.`)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="display: inline-flex; padding: 0.65rem 1.25rem; font-size: 0.8125rem;">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.66 20.15 9.3 19.8 8.1 19.14L7.81 18.97L4.69 19.79L5.52 16.75L5.33 16.45C4.6 15.28 4.21 13.62 4.21 11.91C4.21 7.37 7.9 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.68C7.02 10.88 7.9 12.03 8.02 12.19C8.14 12.35 9.74 14.83 12.2 15.89C12.79 16.14 13.24 16.3 13.6 16.41C14.19 16.6 14.73 16.57 15.16 16.51C15.64 16.44 16.63 15.91 16.84 15.33C17.05 14.74 17.05 14.24 16.98 14.13C16.92 14.02 16.76 13.96 16.51 13.84C16.27 13.71 15.08 13.13 14.86 13.05C14.64 12.97 14.48 12.93 14.31 13.17C14.15 13.42 13.68 13.96 13.54 14.13C13.4 14.29 13.26 14.31 13.01 14.19C12.77 14.06 11.98 13.81 11.05 12.98C10.32 12.33 9.83 11.53 9.69 11.28C9.55 11.04 9.67 10.9 9.8 10.78C9.91 10.67 10.05 10.49 10.19 10.33C10.33 10.17 10.38 10.05 10.47 9.88C10.56 9.72 10.51 9.57 10.45 9.45C10.39 9.33 9.91 8.15 9.71 7.67C9.51 7.2 9.31 7.26 9.15 7.25C9 7.25 8.81 7.25 8.63 7.25L8.53 7.33Z"/></svg>
                    ${isPt ? 'Confirmar Reserva de Imediato via WhatsApp (+244 942 521 179)' : 'Confirm Table Immediately on WhatsApp (+244 942 521 179)'}
                  </a>
                </div>`
              : ''}
            `;
        }

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = currentLang === 'pt' ? 'Pedido Enviado' : 'Inquiry Sent';
        }

        modalForm.reset();
        initDateDefaults();
      }, 500);
    });
  }
}

/**
 * 4. IntersectionObserver for subtle scroll reveals
 */
function initScrollReveals() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal-item').forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -30px 0px'
  });

  document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
}

/**
 * 5. Helper to initialize default dates (Today & +3 days)
 */
function initDateDefaults() {
  const today = new Date();
  const future = new Date(today);
  future.setDate(future.getDate() + 3);

  const formatDate = (d) => d.toISOString().split('T')[0];

  const qbIn = document.getElementById('qb-checkin');
  const qbOut = document.getElementById('qb-checkout');
  const modalIn = document.getElementById('modal-checkin');
  const modalOut = document.getElementById('modal-checkout');

  const todayStr = formatDate(today);
  const futureStr = formatDate(future);

  if (qbIn && !qbIn.value) qbIn.value = todayStr;
  if (qbOut && !qbOut.value) qbOut.value = futureStr;
  if (modalIn && !modalIn.value) modalIn.value = todayStr;
  if (modalOut && !modalOut.value) modalOut.value = futureStr;

  if (qbIn) {
    qbIn.addEventListener('input', syncDateDisplays);
    qbIn.addEventListener('change', syncDateDisplays);
  }
  if (qbOut) {
    qbOut.addEventListener('input', syncDateDisplays);
    qbOut.addEventListener('change', syncDateDisplays);
  }

  syncDateDisplays();
}

function syncDateDisplays() {
  const monthsPt = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
  const monthsEn = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  const formatDisplay = (isoStr) => {
    if (!isoStr) return '';
    const parts = isoStr.split('-');
    if (parts.length !== 3) return isoStr;
    const year = parts[0];
    const monthIndex = parseInt(parts[1], 10) - 1;
    const day = parts[2];
    const mStr = (currentLang === 'pt' ? monthsPt : monthsEn)[monthIndex] || parts[1];
    return `${day} ${mStr} ${year}`;
  };

  const qbIn = document.getElementById('qb-checkin');
  const qbOut = document.getElementById('qb-checkout');
  const dispIn = document.getElementById('qb-checkin-display');
  const dispOut = document.getElementById('qb-checkout-display');

  if (dispIn && qbIn) dispIn.textContent = formatDisplay(qbIn.value);
  if (dispOut && qbOut) dispOut.textContent = formatDisplay(qbOut.value);
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
