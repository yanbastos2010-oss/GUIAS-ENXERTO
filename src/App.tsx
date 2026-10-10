/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import {
  Check,
  ChevronDown,
  Gift,
  ShieldCheck,
  Star,
  X,
} from 'lucide-react';

const LEARN_ITEMS = [
  'Como deve ser feito o corte',
  'Como posicionar corretamente o garfo',
  'Como fazer o encaixe entre as partes',
  'Como observar o alinhamento',
  'Como realizar a amarração',
  'Como identificar erros comuns',
  'Como comparar o enxerto antes de finalizar',
];

const GRAFT_TYPES = [
  {
    name: 'Garfagem',
    tag: 'Método clássico',
    description: 'Fixação de um ramo com gemas diretamente sobre o porta-enxerto.',
  },
  {
    name: 'Borbulhia',
    tag: 'Alta precisão',
    description: 'Inserção de uma única gema (borbulha) sob a casca em corte T ou janela.',
  },
  {
    name: 'Encostia',
    tag: 'União segura',
    description: 'Aproximação e união de dois ramos vivos antes da separação final.',
  },
  {
    name: 'Enxerto de fenda cheia',
    tag: 'Mais utilizado',
    description: 'Fenda vertical no centro do cavalo para encaixe firme da cunha.',
  },
  {
    name: 'Enxerto de fenda lateral',
    tag: 'Preserva a copa',
    description: 'Corte inclinado na lateral do caule sem decapitar o porta-enxerto.',
  },
  {
    name: 'Enxerto inglês simples',
    tag: 'Mesma espessura',
    description: 'Cortes diagonais espelhados para alinhamento direto entre as partes.',
  },
  {
    name: 'Enxerto inglês complicado',
    tag: 'Máxima fixação',
    description: 'Corte em bisel com fenda interna (lingueta) que trava o enxerto no lugar.',
  },
];

const FRUIT_TREES = [
  { name: 'Laranja', image: '/frutas/laranja.webp' },
  { name: 'Limão', image: '/frutas/limao.webp' },
  { name: 'Jabuticaba', image: '/frutas/jabuticaba.webp' },
  { name: 'Manga', image: '/frutas/manga.webp' },
  { name: 'Goiaba', image: '/frutas/goiaba.webp' },
  { name: 'Tangerina', image: '/frutas/tangerina.webp' },
  { name: 'Abacate', image: '/frutas/abacate.webp' },
  { name: 'Acerola', image: '/frutas/acerola.webp' },
  { name: 'Pitanga', image: '/frutas/pitanga.webp' },
  { name: 'Uva', image: '/frutas/uva.webp' },
];

const BONUSES = [
  {
    title: 'Tabela de Compatibilidade de Enxertos',
    description:
      'Veja rapidamente quais frutíferas podem ser enxertadas entre si sem errar na combinação.',
    oldPrice: 'R$ 47,00',
  },
  {
    title: 'Guia de Cuidados Após o Enxerto',
    description:
      'Cuidados essenciais de proteção, rega e o momento certo de retirar a fita após o enxerto.',
    oldPrice: 'R$ 37,00',
  },
  {
    title: 'Checklist do Enxerto',
    description:
      'Lista rápida para conferir ferramentas, cortes, encaixe e amarração antes de finalizar.',
    oldPrice: 'R$ 27,00',
  },
];

const BASIC_FEATURES = [
  { text: '+100 Guias Visuais de Enxerto de Frutíferas', included: true },
  { text: 'Acesso Digital e Vitalício', included: true },
  { text: 'Garantia de 7 dias', included: true },
  { text: 'Bônus Exclusivos', included: false },
];

const COMPLETE_FEATURES = [
  '+100 Guias Visuais de Enxerto de Frutíferas',
  'Diferentes Tipos de Enxerto',
  'Guias para Diversas Frutíferas',
  'Acesso Digital e Vitalício',
  'Garantia de 7 dias',
  'Atualizações Mensais',
  'Suporte Prioritário',
  '🎁 BÔNUS: Tabela de Compatibilidade de Enxertos',
  '🎁 BÔNUS: Guia de Cuidados Após o Enxerto',
  '🎁 BÔNUS: Checklist do Enxerto',
];

const FAQ_ITEMS = [
  {
    question: 'O material é físico?',
    answer: 'Não. O material é 100% digital.',
  },
  {
    question: 'Como vou receber?',
    answer: 'Após a confirmação do pagamento, você receberá acesso ao material digital.',
  },
  {
    question: 'Serve para quem nunca fez enxerto?',
    answer:
      'Sim. Os guias foram organizados de forma visual e simples para facilitar a compreensão de quem está começando.',
  },
  {
    question: 'Quais tipos de enxerto aparecem no material?',
    answer:
      'O acervo possui referências de garfagem, borbulhia, encostia, enxertos de fenda, enxerto inglês e outros métodos.',
  },
  {
    question: 'Posso acessar pelo celular?',
    answer: 'Sim. Você pode consultar o material pelo celular, tablet ou computador.',
  },
  {
    question: 'Preciso imprimir?',
    answer: 'Não. Você pode utilizar os guias diretamente na tela do seu aparelho.',
  },
  {
    question: 'O pagamento é mensal?',
    answer: 'Não. O pagamento é feito apenas uma vez.',
  },
];

const CAROUSEL_SLOTS = [1, 2, 3, 4, 5, 6];

export default function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  const todayFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date());

  const scrollToPlans = () => {
    const el = document.getElementById('planos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1F2937] flex flex-col">
      {/* ================= BARRA DE URGÊNCIA ================= */}
      <div className="w-full bg-[#DC2626] text-white py-2.5 px-4 text-center">
        <p className="font-bold text-xs sm:text-sm tracking-wide uppercase">
          OFERTA ESPECIAL VÁLIDA SOMENTE HOJE — {todayFormatted}
        </p>
      </div>

      <main className="flex-1 bg-[#FFFFFF]">
        {/* ================= HERO ================= */}
        <section className="bg-[#FFFFFF] pt-10 pb-14 sm:pt-16 sm:pb-20 px-5 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-extrabold text-[28px] sm:text-4xl md:text-[44px] leading-[1.18] tracking-tight text-[#000000] max-w-3xl mx-auto text-balance">
              +100 Guias Visuais de Enxerto de Frutíferas
            </h1>

            <p className="font-normal text-base sm:text-lg md:text-[19px] leading-relaxed text-[#374151] max-w-2xl mx-auto mt-4 sm:mt-5 text-balance">
              Aprenda a fazer enxertos em frutíferas com referências visuais simples para consultar
              cada corte, encaixe, alinhamento e amarração.
            </p>

            {/* Mockup do Produto (Otimizado com WebP responsivo) */}
            <div className="mt-8 sm:mt-10 max-w-3xl mx-auto">
              <picture>
                <source media="(max-width: 640px)" srcSet="/mockup-produto-sm.webp" type="image/webp" />
                <source srcSet="/mockup-produto.webp" type="image/webp" />
                <img
                  src="/mockup-produto.webp"
                  alt="+100 Guias Visuais de Enxerto de Frutíferas"
                  width={1448}
                  height={1086}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  draggable={false}
                  className="w-full h-auto rounded-lg block mx-auto pointer-events-none select-none"
                />
              </picture>
            </div>

            <div className="mt-8 sm:mt-10">
              <button
                type="button"
                onClick={scrollToPlans}
                className="w-full sm:w-auto min-w-[280px] sm:min-w-[320px] bg-[#15803D] hover:bg-[#166534] active:scale-[0.99] text-white font-bold text-base sm:text-lg py-4 px-8 rounded-xl shadow-[0_4px_14px_rgba(21,128,61,0.22)] transition-all duration-150 cursor-pointer"
              >
                QUERO ACESSAR AGORA
              </button>
            </div>
          </div>
        </section>

        {/* ================= SEÇÃO DEMONSTRATIVA ================= */}
        <section className="bg-[#FFFFFF] py-12 sm:py-16 overflow-hidden">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 mb-8 sm:mb-10">
            <h2 className="font-bold text-2xl sm:text-3xl text-[#000000] tracking-tight uppercase text-center">
              Veja alguns guias que você vai receber
            </h2>
          </div>

          {/* Carrossel contínuo infinito sem setas */}
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee gap-4 sm:gap-5 px-2">
              {[...CAROUSEL_SLOTS, ...CAROUSEL_SLOTS].map((slot, index) => (
                <div
                  key={`${slot}-${index}`}
                  className="w-[240px] sm:w-[270px] md:w-[290px] shrink-0"
                >
                  <div className="w-full aspect-[3/4] rounded-xl bg-[#FFFFFF] border border-[#E2E8E3] flex items-center justify-center p-4 transition-colors hover:border-[#15803D]/40">
                    <span className="font-medium text-xs sm:text-sm text-[#667085] text-center select-none">
                      [COLOQUE AQUI O GUIA]
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SEÇÃO CONTEÚDO 1: IDENTIFICAR VISUALMENTE ================= */}
        <section className="bg-[#FFFFFF] py-12 sm:py-16 px-5 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-2xl sm:text-3xl text-[#000000] tracking-tight uppercase text-center text-balance">
              O que você vai aprender a identificar visualmente
            </h2>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
              {LEARN_ITEMS.map((item, idx) => (
                <div
                  key={item}
                  className={`flex items-center gap-3.5 p-4 sm:px-5 sm:py-4 rounded-xl bg-[#FFFFFF] border border-[#E2E8E3] ${
                    idx === LEARN_ITEMS.length - 1
                      ? 'md:col-span-2 md:max-w-md md:mx-auto md:w-full'
                      : ''
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-[#DCFCE7] flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-[#15803D] stroke-[2.75]" />
                  </span>
                  <span className="font-medium text-sm sm:text-base text-[#1F2937]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SEÇÃO CONTEÚDO 2: TIPOS DE ENXERTO ================= */}
        <section className="bg-[#FFFFFF] py-12 sm:py-16 px-5 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-2xl sm:text-3xl text-[#000000] tracking-tight uppercase text-center text-balance">
              Tipos de enxerto presentes no material
            </h2>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {GRAFT_TYPES.map((type, idx) => (
                <div
                  key={type.name}
                  className={`group relative bg-[#FFFFFF] border border-[#E2E8E3] hover:border-[#15803D] rounded-2xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-150 flex items-start gap-4 ${
                    idx === GRAFT_TYPES.length - 1
                      ? 'sm:col-span-2 sm:max-w-md sm:mx-auto sm:w-full'
                      : ''
                  }`}
                >
                  <div className="w-11 h-11 rounded-xl bg-[#15803D] text-white font-extrabold text-sm sm:text-base flex items-center justify-center shrink-0 tabular-nums shadow-[0_4px_10px_rgba(21,128,61,0.2)]">
                    {String(idx + 1).padStart(2, '0')}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-bold text-base sm:text-lg text-[#000000] leading-snug">
                        {type.name}
                      </h3>
                      <span className="inline-flex items-center bg-[#F0FDF4] text-[#15803D] border border-[#15803D]/15 font-semibold text-[11px] uppercase tracking-wide px-2.5 py-0.5 rounded-full">
                        {type.tag}
                      </span>
                    </div>
                    <p className="font-normal text-sm text-[#667085] mt-1.5 leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SEÇÃO CONTEÚDO 3: DIFERENTES FRUTÍFERAS ================= */}
        <section className="bg-[#FFFFFF] py-12 sm:py-16 px-5 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-2xl sm:text-3xl text-[#000000] tracking-tight uppercase text-center text-balance">
              Guias para diferentes frutíferas
            </h2>

            <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
              {FRUIT_TREES.map((fruit) => (
                <div
                  key={fruit.name}
                  className="flex items-center gap-3 rounded-xl px-3.5 py-3.5 sm:px-4 sm:py-4 border bg-[#FFFFFF] border-[#E2E8E3]"
                >
                  <img
                    src={fruit.image}
                    alt={fruit.name}
                    width={32}
                    height={32}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="w-8 h-8 rounded-lg object-contain shrink-0 pointer-events-none select-none"
                  />
                  <span className="text-sm sm:text-base leading-tight font-semibold text-[#1F2937]">
                    {fruit.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex justify-center">
              <span className="inline-flex items-center justify-center bg-[#15803D] text-white font-normal text-sm sm:text-base px-6 py-2.5 rounded-full">
                E outras frutíferas...
              </span>
            </div>
          </div>
        </section>

        {/* ================= SEÇÃO DE BÔNUS ================= */}
        <section className="bg-[#FFFFFF] py-12 sm:py-16 px-5 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-2xl sm:text-3xl text-[#000000] tracking-tight uppercase text-center">
              Bônus Exclusivos
            </h2>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-4 sm:gap-5">
              {BONUSES.map((bonus) => (
                <div
                  key={bonus.title}
                  className="group relative bg-[#FFFFFF] border border-[#E2E8E3] hover:border-[#15803D] rounded-2xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-150 flex items-start gap-4"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#15803D] text-white font-extrabold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-[0_4px_10px_rgba(21,128,61,0.2)]">
                    <Gift className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-base sm:text-lg text-[#000000] leading-snug">
                      {bonus.title}
                    </h3>

                    <p className="font-normal text-sm text-[#667085] mt-1.5 leading-relaxed">
                      {bonus.description}
                    </p>

                    <div className="mt-3 flex items-center gap-2.5">
                      <span className="text-xs sm:text-sm font-medium text-[#667085]">
                        De{' '}
                        <span className="line-through text-[#DC2626] font-semibold">
                          {bonus.oldPrice}
                        </span>
                      </span>
                      <span className="inline-flex items-center bg-[#DCFCE7] text-[#15803D] font-extrabold text-xs uppercase tracking-wider px-2.5 py-1 rounded-md">
                        HOJE: GRÁTIS
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Card Total em Bônus */}
            <div className="mt-8 sm:mt-10 max-w-xl mx-auto bg-[#FFFFFF] border border-[#E2E8E3] rounded-2xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] text-center">
              <p className="font-bold text-sm sm:text-base tracking-wider uppercase text-[#000000]">
                TOTAL EM BÔNUS
              </p>
              <p className="font-bold text-lg sm:text-xl text-[#DC2626] line-through mt-2 tabular-nums">
                De R$111
              </p>
              <p className="font-extrabold text-2xl sm:text-4xl text-[#15803D] uppercase mt-1 tracking-tight">
                HOJE: GRÁTIS
              </p>
            </div>
          </div>
        </section>

        {/* ================= SEÇÃO PLANOS ================= */}
        <section id="planos" className="bg-[#FFFFFF] py-14 sm:py-20 px-5 sm:px-6 scroll-mt-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-2xl sm:text-3xl text-[#000000] tracking-tight uppercase text-center">
              Escolha seu Plano
            </h2>

            <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* PLANO BÁSICO */}
              <div className="bg-[#FFFFFF] border border-[#E2E8E3] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="text-center">
                    <h3 className="font-bold text-xl sm:text-2xl text-[#000000] uppercase">
                      PLANO BÁSICO
                    </h3>
                    <div className="font-extrabold text-4xl sm:text-5xl text-[#000000] mt-4 tabular-nums">
                      R$ 10
                    </div>
                    <span className="block font-semibold text-xs tracking-wider uppercase text-[#667085] mt-2">
                      PAGAMENTO ÚNICO
                    </span>
                  </div>

                  <ul className="mt-8 space-y-4">
                    {BASIC_FEATURES.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#15803D] stroke-[2.75] shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#DC2626] stroke-[2.75] shrink-0 mt-0.5" />
                        )}
                        <span className="text-base sm:text-lg font-normal text-[#1F2937] leading-snug">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => setIsUpsellOpen(true)}
                    className="w-full inline-flex items-center justify-center font-bold text-base sm:text-lg text-[#15803D] bg-[#FFFFFF] hover:bg-[#F0FDF4] border-2 border-[#15803D] py-4 px-6 rounded-xl transition-colors duration-150 cursor-pointer"
                  >
                    QUERO O PLANO BÁSICO
                  </button>
                </div>
              </div>

              {/* PLANO COMPLETO */}
              <div className="bg-[#FFFFFF] border-2 border-[#15803D] rounded-2xl p-6 sm:p-8 pt-9 sm:pt-10 shadow-[0_8px_28px_rgba(21,128,61,0.08)] flex flex-col justify-between relative">
                {/* Selo centralizado no topo, sobre o contorno */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1.5 bg-[#15803D] text-white font-semibold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full whitespace-nowrap shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    MAIS ESCOLHIDO
                  </span>
                </div>

                <div>
                  <div className="text-center">
                    <h3 className="font-bold text-xl sm:text-2xl text-[#000000] uppercase">
                      PLANO COMPLETO
                    </h3>
                    <div className="font-extrabold text-5xl sm:text-6xl text-[#15803D] mt-4 tabular-nums leading-none">
                      R$ 27
                    </div>
                    <span className="block font-semibold text-xs tracking-wider uppercase text-[#667085] mt-2.5">
                      PAGAMENTO ÚNICO
                    </span>
                  </div>

                  <ul className="mt-8 space-y-4">
                    {COMPLETE_FEATURES.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#15803D] stroke-[2.75] shrink-0 mt-0.5" />
                        <span className="text-base sm:text-lg font-normal text-[#1F2937] leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <a
                    href="https://ggcheckout.app/checkout/v5/Ucarba0kAFKYfGnBX3Sb"
                    className="w-full inline-flex items-center justify-center font-bold text-base sm:text-lg text-white bg-[#15803D] hover:bg-[#166534] active:scale-[0.99] py-4 px-6 rounded-xl shadow-[0_4px_14px_rgba(21,128,61,0.22)] transition-all duration-150"
                  >
                    QUERO O PLANO COMPLETO
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SEÇÃO GARANTIA ================= */}
        <section className="bg-[#FFFFFF] py-12 sm:py-16 px-5 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#FFFFFF] border border-[#E2E8E3] rounded-2xl p-6 sm:p-8 text-center">
              <div className="flex justify-center mb-3">
                <ShieldCheck className="w-12 h-12 sm:w-14 sm:h-14 text-[#15803D] stroke-[1.8]" />
              </div>

              <h2 className="font-bold text-xl sm:text-2xl text-[#000000] uppercase">
                Você tem 7 dias de garantia
              </h2>

              <div className="font-normal text-sm sm:text-base text-[#667085] mt-3 space-y-2 leading-relaxed max-w-xl mx-auto">
                <p>Depois de acessar o material, você terá 7 dias para avaliar sua compra.</p>
                <p>
                  Caso o produto não seja o que esperava, basta solicitar o reembolso dentro do
                  período de garantia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SEÇÃO FAQ ================= */}
        <section className="bg-[#FFFFFF] py-12 sm:py-16 px-5 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-bold text-2xl sm:text-3xl text-[#000000] tracking-tight uppercase text-center">
              Perguntas frequentes
            </h2>

            <div className="mt-8 sm:mt-10 space-y-3">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={item.question}
                    className="bg-[#FFFFFF] border border-[#E2E8E3] rounded-xl overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-sm sm:text-base text-[#000000] hover:bg-[#F8FAF8] transition-colors cursor-pointer"
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#15803D] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-200 ease-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="font-normal text-sm sm:text-base text-[#667085] px-5 pb-4 pt-1 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* ================= RODAPÉ ================= */}
      <footer className="bg-[#FFFFFF] py-8 px-5 text-center">
        <p className="font-normal text-xs sm:text-sm text-[#667085]">
          © 2026 • Todos os direitos reservados
        </p>
      </footer>

      {/* ================= POPUP UPSELL (PLANO COMPLETO POR R$ 19,90) ================= */}
      {isUpsellOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setIsUpsellOpen(false)}
        >
          <div
            className="bg-[#FFFFFF] border border-[#E2E8E3] rounded-2xl max-w-md w-full p-6 sm:p-8 text-center relative shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsUpsellOpen(false)}
              aria-label="Fechar"
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-[#667085] hover:text-[#000000] hover:bg-[#F8FAF8] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block bg-[#DCFCE7] text-[#15803D] font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
              OFERTA ESPECIAL ÚNICA
            </span>

            <h3 className="font-bold text-xl sm:text-2xl text-[#000000] uppercase mt-3">
              Leve o Plano Completo com Desconto!
            </h3>

            <p className="font-normal text-sm sm:text-base text-[#374151] mt-2.5 leading-relaxed">
              Aproveite para liberar o <strong>Plano Completo</strong> + todos os{' '}
              <strong>3 Bônus Exclusivos</strong> por um valor promocional agora:
            </p>

            <div className="my-6 py-4 px-4 rounded-xl bg-[#F8FAF8] border border-[#E2E8E3]">
              <span className="block text-xs sm:text-sm text-[#667085]">
                De <span className="line-through text-[#DC2626] font-semibold">R$ 27</span> por
                apenas:
              </span>
              <div className="font-extrabold text-4xl sm:text-5xl text-[#15803D] mt-1 tabular-nums">
                R$ 19,90
              </div>
              <span className="block font-semibold text-[11px] tracking-wider uppercase text-[#667085] mt-1">
                PAGAMENTO ÚNICO
              </span>
            </div>

            <a
              href="https://ggcheckout.app/checkout/v5/GI0bO4dvJGVV09gyOh78"
              className="w-full inline-flex items-center justify-center font-bold text-base sm:text-lg text-white bg-[#15803D] hover:bg-[#166534] active:scale-[0.99] py-4 px-5 rounded-xl shadow-[0_4px_14px_rgba(21,128,61,0.22)] transition-all duration-150"
            >
              SIM, QUERO O PLANO COMPLETO!
            </a>

            <a
              href="https://ggcheckout.app/checkout/v5/YokbQZMEqz19MiUTuu40"
              className="mt-3 w-full inline-flex items-center justify-center font-medium text-sm sm:text-base text-[#667085] hover:text-[#1F2937] bg-transparent hover:bg-[#F8FAF8] border border-black/15 py-3.5 px-5 rounded-xl transition-colors"
            >
              Não, prefiro o plano básico
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
