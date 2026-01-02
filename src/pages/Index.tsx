import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cases = [
    {
      company: 'Яндекс Календарь',
      role: 'Product Manager',
      stage: 'B2B/B2C · Growth',
      problem: 'Низкая удовлетворённость (SUPER-Q: 3.5). Сложный поиск точки входа в расписание коллег',
      solutions: [
        'Проанализировал 500+ сессий пользователей, выявил 3 критические боли',
        'Редизайн UX создания событий: сократил шаги с 5 до 2',
        'A/B-тест новых сценариев на 15% аудитории перед полным запуском',
        'Создал интересные календари, увеличив конверсию в добавление первого события на 3 п.п.',
        'Внедрил to-do задачи в календарь, что повысило Retention на 10%'
      ],
      myRole: 'UX-исследование, приоритизация фич, работа с дизайном и разработкой, метрики качества',
      results: [
        { metric: 'SUPER-Q', value: '3.5 → 4.0', icon: 'Star', description: '+14% удовлетворённость' },
        { metric: 'Retention D7', value: '+10%', icon: 'Users', description: 'возвраты пользователей' },
        { metric: 'Time-to-action', value: '120 → 35 сек', icon: 'Zap', description: 'создание события' }
      ],
      tools: ['CustDev', 'JTBD', 'A/B тесты', 'SQL', 'Amplitude'],
      image: 'https://cdn.poehali.dev/files/telegram-cloud-document-2-5460749418749789918.jpg'
    },
    {
      company: 'OSKELLY',
      role: 'Product Manager',
      stage: 'FashionTech iOS · Monetization',
      problem: 'Низкая конверсия в покупку (CR < 2%) и 18% отменённых заказов',
      solutions: [
        'Построил CJM, нашёл 2 точки оттока: оплата и доставка',
        'Внедрил BNPL и one-click payments, упростил чекаут на 60%',
        'Внедрил новый хэлпдеск сервис в компании',
        'Создал автоматическую систему очистки устаревших лотов, снизив отмены заказов на 4 п.п. (сохранено 25% заказов)',
        'Сократил average response time поддержки с 20 до 10 минут через поиск по телефону и быстрые переходы в админке'
      ],
      myRole: 'CJM-анализ, гипотезы по монетизации, приоритизация интеграций, метрики Revenue',
      results: [
        { metric: 'Revenue', value: '+10%', icon: 'DollarSign', description: 'рост выручки' },
        { metric: 'CR', value: '+5 п.п.', icon: 'Target', description: 'конверсия в покупку' },
        { metric: 'AOV', value: '70k → 120k ₽', icon: 'TrendingUp', description: 'средний чек' }
      ],
      tools: ['CJM', 'Power BI', 'Mixpanel', 'Figma'],
      image: 'https://cdn.poehali.dev/files/telegram-cloud-photo-size-2-5310283512097667045-y.jpg'
    },
    {
      company: 'Ингосстрах × Авито',
      role: 'Product Manager',
      stage: 'Fintech MVP · 0 → 1',
      problem: 'Отсутствие доверия к онлайн-сделкам между частными лицами',
      solutions: [
        'Провёл CustDev с 40+ пользователями для выявления барьеров доверия',
        'Разработал концепцию MVP «Безопасная сделка» с эскроу-механикой',
        'Приоритизировал функции по модели RICE, сократил scope на 40%'
      ],
      myRole: 'Discovery, формирование метрик успеха, UX-сценарии, координация с партнёром (Ингосстрах)',
      results: [
        { metric: 'Транзакции', value: '+12%', icon: 'TrendingUp', description: 'рост безопасных сделок' },
        { metric: 'Споры', value: '−15%', icon: 'Shield', description: 'снижение конфликтов' },
        { metric: 'PMF', value: 'Подтверждён', icon: 'CheckCircle2', description: 'через user interviews' }
      ],
      tools: ['CustDev', 'RICE', 'Figma', 'SQL']
    }
  ];

  const skills = [
    {
      category: 'Product',
      items: ['Discovery', 'JTBD', 'CustDev', 'Roadmap', 'A/B Testing', 'PMF Validation'],
      icon: 'Lightbulb'
    },
    {
      category: 'UX',
      items: ['CJM', 'UX Research', 'Prototyping', 'User Interviews', 'Usability Testing'],
      icon: 'Users'
    },
    {
      category: 'Analytics',
      items: ['SQL', 'Power BI', 'Amplitude', 'Mixpanel', 'Metrics Design'],
      icon: 'BarChart3'
    },
    {
      category: 'Tools',
      items: ['Jira', 'Confluence', 'Figma', 'Miro', 'Notion'],
      icon: 'Wrench'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 animate-pulse" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        
        <div className={`relative container mx-auto px-4 py-20 lg:py-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full blur-2xl opacity-30 animate-pulse" />
                <img 
                  src="https://cdn.poehali.dev/files/telegram-peer-photo-size-4-3863002670058022861-1-0-0.jpg"
                  alt="Данила Зинин"
                  className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-violet-500/50 shadow-2xl shadow-violet-500/50"
                />
              </div>
            </div>
            
            <div className="inline-block mb-4">
              <Badge className="bg-violet-600/20 text-violet-300 border-violet-500/50 px-4 py-1 text-sm">
                Product Manager
              </Badge>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
              Данила Зинин
            </h1>
            
            <p className="text-2xl lg:text-3xl font-semibold mb-8 leading-relaxed bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              От идеи до метрик: продукты, которыми пользуются миллионы
            </p>
            
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              Опыт в B2B/B2C, e-commerce, fintech • Фокус на рост метрик и глубокое понимание пользователя
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-lg shadow-violet-500/50 transition-transform duration-200 hover:scale-105"
                onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Rocket" className="mr-2" size={20} />
                Посмотреть кейсы
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-violet-500 text-violet-300 hover:bg-violet-600/20 transition-transform duration-200 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Mail" className="mr-2" size={20} />
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-900/50 border-violet-500/30 backdrop-blur-sm animate-fade-in">
              <CardHeader>
                <div className="text-center mb-2">
                  <CardTitle className="text-3xl lg:text-4xl font-bold text-white mb-3">
                    Как я создаю продукты, которые растут
                  </CardTitle>
                </div>
                <CardDescription className="text-slate-300 text-lg text-center max-w-2xl mx-auto">
                  От CustDev до роста метрик: пользователь → данные → impact
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-slate-800/50 to-violet-900/20 p-6 rounded-lg border border-violet-500/30 hover:border-violet-500/70 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/20">
                    <Icon name="Search" className="text-violet-400 mb-4" size={36} />
                    <h3 className="text-xl font-bold text-white mb-3">Нахожу точки роста</h3>
                    <p className="text-slate-300 leading-relaxed">CustDev, CJM и анализ данных для поиска реальных болей и возможностей продукта</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-slate-800/50 to-fuchsia-900/20 p-6 rounded-lg border border-fuchsia-500/30 hover:border-fuchsia-500/70 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-fuchsia-500/20">
                    <Icon name="Zap" className="text-fuchsia-400 mb-4" size={36} />
                    <h3 className="text-xl font-bold text-white mb-3">Проверяю быстро</h3>
                    <p className="text-slate-300 leading-relaxed">MVP и A/B-тесты для валидации гипотез без лишних затрат ресурсов</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-slate-800/50 to-cyan-900/20 p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-500/70 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                    <Icon name="TrendingUp" className="text-cyan-400 mb-4" size={36} />
                    <h3 className="text-xl font-bold text-white mb-3">Добиваюсь роста</h3>
                    <p className="text-slate-300 leading-relaxed">CR, Retention, Revenue, Time-to-Value — измеримый бизнес-результат</p>
                  </div>
                </div>
                
                <Separator className="bg-violet-500/30" />
                
                <div className="bg-slate-800/30 p-6 rounded-lg border border-violet-500/20">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-violet-400 mb-1">2+ года</div>
                      <p className="text-slate-400 text-sm">BigTech, fintech, e-commerce</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-fuchsia-400 mb-1">0→1</div>
                      <p className="text-slate-400 text-sm">Запуск продуктов с нуля</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-cyan-400 mb-1">Cross-func</div>
                      <p className="text-slate-400 text-sm">Dev × Design × Analytics</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center pt-4">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-lg shadow-violet-500/50 transition-all duration-200 hover:scale-105"
                    onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Icon name="BarChart3" className="mr-2" size={20} />
                    Посмотреть кейсы с цифрами
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Кейсы с измеримыми результатами
            </h2>
            <p className="text-xl text-slate-400">
              От проблемы до impact через Discovery и метрики
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-10">
            {cases.map((caseItem, index) => (
              <Card 
                key={index}
                className="bg-slate-900/50 border-violet-500/30 backdrop-blur-sm hover:border-violet-500/60 transition-all duration-300 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border-b border-violet-500/20">
                  <div className="space-y-3">
                    <div>
                      <CardTitle className="text-2xl lg:text-3xl font-bold text-white mb-2">
                        {caseItem.company}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 items-center">
                        <Badge className="bg-violet-600/20 text-violet-300 border-violet-500/50">
                          {caseItem.role}
                        </Badge>
                        <Badge className="bg-fuchsia-600/20 text-fuchsia-300 border-fuchsia-500/50">
                          {caseItem.stage}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 lg:p-8 space-y-6">
                  {caseItem.image && (
                    <div className="rounded-lg overflow-hidden border border-violet-500/30">
                      <img 
                        src={caseItem.image} 
                        alt={caseItem.company}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}
                  
                  <div>
                    <h4 className="text-sm font-bold text-red-400 mb-2 uppercase tracking-wide flex items-center gap-2">
                      <Icon name="AlertCircle" size={16} />
                      Проблема
                    </h4>
                    <p className="text-slate-200 text-lg">{caseItem.problem}</p>
                  </div>
                  
                  <Separator className="bg-violet-500/20" />
                  
                  <div>
                    <h4 className="text-sm font-bold text-cyan-400 mb-3 uppercase tracking-wide flex items-center gap-2">
                      <Icon name="Lightbulb" size={16} />
                      Решение
                    </h4>
                    <ul className="space-y-2">
                      {caseItem.solutions.map((solution, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                          <Icon name="ArrowRight" className="text-cyan-400 mt-1 flex-shrink-0" size={18} />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-violet-900/20 p-4 rounded-lg border border-violet-500/30">
                    <h4 className="text-sm font-bold text-violet-300 mb-2 uppercase tracking-wide flex items-center gap-2">
                      <Icon name="User" size={16} />
                      Мой вклад как PM
                    </h4>
                    <p className="text-slate-300 leading-relaxed">{caseItem.myRole}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-green-400 mb-4 uppercase tracking-wide flex items-center gap-2">
                      <Icon name="BarChart3" size={16} />
                      Impact
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {caseItem.results.map((result, i) => (
                        <div 
                          key={i}
                          className="bg-gradient-to-br from-slate-800/50 to-green-900/10 p-5 rounded-lg border border-green-500/30 hover:border-green-500/60 transition-all hover:scale-105"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name={result.icon as any} className="text-green-400" size={20} />
                            <span className="text-slate-400 text-sm font-semibold">{result.metric}</span>
                          </div>
                          <div className="text-2xl font-bold text-green-400 mb-1">{result.value}</div>
                          <p className="text-slate-500 text-xs">{result.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      <span className="text-slate-500 text-sm">Инструменты:</span>
                      {caseItem.tools.map((tool, i) => (
                        <Badge key={i} variant="outline" className="border-slate-600 text-slate-400 text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Visual Section */}
      <section className="py-20 relative bg-slate-950/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Продукты, над которыми я работал
            </h2>
            <p className="text-xl text-slate-400">
              Реальные решения с измеримым результатом
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-900/50 border-violet-500/30 backdrop-blur-sm hover:border-violet-500/60 transition-all hover:scale-105 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-red-900/30 to-orange-900/30 flex items-center justify-center border-b border-violet-500/20">
                <div className="text-center p-6">
                  <Icon name="Calendar" className="mx-auto mb-3 text-violet-400" size={48} />
                  <p className="text-white font-semibold text-lg">Яндекс Календарь</p>
                  <p className="text-slate-400 text-sm">B2B/B2C Product</p>
                </div>
              </div>
              <CardContent className="p-4">
                <h4 className="text-white font-semibold mb-2">UX Redesign</h4>
                <p className="text-slate-400 text-sm mb-3">Упрощение создания событий: с 5 шагов до 2, сокращение времени на 70%</p>
                <Badge className="bg-green-600/20 text-green-300 border-green-500/50 text-xs">
                  SUPER-Q 3.5 → 4.0
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-violet-500/30 backdrop-blur-sm hover:border-violet-500/60 transition-all hover:scale-105 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-pink-900/30 to-purple-900/30 flex items-center justify-center border-b border-violet-500/20">
                <div className="text-center p-6">
                  <Icon name="ShoppingBag" className="mx-auto mb-3 text-violet-400" size={48} />
                  <p className="text-white font-semibold text-lg">OSKELLY</p>
                  <p className="text-slate-400 text-sm">FashionTech iOS</p>
                </div>
              </div>
              <CardContent className="p-4">
                <h4 className="text-white font-semibold mb-2">Monetization Growth</h4>
                <p className="text-slate-400 text-sm mb-3">BNPL, one-click payments — упрощение чекаута для роста конверсии</p>
                <Badge className="bg-green-600/20 text-green-300 border-green-500/50 text-xs">
                  AOV 70k → 120k ₽
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-violet-500/30 backdrop-blur-sm hover:border-violet-500/60 transition-all hover:scale-105 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-900/30 to-purple-900/30 flex items-center justify-center border-b border-violet-500/20">
                <div className="text-center p-6">
                  <Icon name="Shield" className="mx-auto mb-3 text-violet-400" size={48} />
                  <p className="text-white font-semibold text-lg">Безопасная сделка</p>
                  <p className="text-slate-400 text-sm">Ингосстрах × Авито</p>
                </div>
              </div>
              <CardContent className="p-4">
                <h4 className="text-white font-semibold mb-2">Fintech MVP</h4>
                <p className="text-slate-400 text-sm mb-3">Эскроу-механика для защиты онлайн-сделок между частными лицами</p>
                <Badge className="bg-green-600/20 text-green-300 border-green-500/50 text-xs">
                  +12% транзакций
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Навыки и инструменты
            </h2>
            <p className="text-xl text-slate-400">
              Технологический стек современного PM
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <Card 
                key={index}
                className="bg-slate-900/50 border-violet-500/30 backdrop-blur-sm hover:border-violet-500/60 transition-all duration-200 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-white">
                    <Icon name={skillGroup.icon as any} className="text-violet-400" size={28} />
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, i) => (
                      <Badge 
                        key={i}
                        className="bg-slate-800/50 text-slate-200 border-slate-600 hover:border-violet-500 transition-all px-3 py-1"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
              Образование
            </h2>
            
            <div className="space-y-4">
              <Card className="bg-slate-900/50 border-violet-500/30 backdrop-blur-sm hover:border-violet-500/60 transition-all duration-200 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Award" className="text-violet-400 mt-1 flex-shrink-0" size={32} />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">Яндекс Практикум</h3>
                      <p className="text-slate-300 mb-2">Product Manager</p>
                      <p className="text-slate-400 text-sm">Полный курс по продуктовому менеджменту</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-900/50 border-violet-500/30 backdrop-blur-sm hover:border-violet-500/60 transition-all duration-200 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="GraduationCap" className="text-fuchsia-400 mt-1 flex-shrink-0" size={32} />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">Высшее образование</h3>
                      <p className="text-slate-300 mb-2">Управление цифровым продуктом</p>
                      <p className="text-slate-400 text-sm">МГУ / ВШЭ • Digital Product Management</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-violet-900/50 to-fuchsia-900/50 border-violet-500/50 backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <Icon name="MessageCircle" className="text-violet-300 mx-auto mb-6" size={48} />
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Готов обсудить ваш продукт
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  Открыт к предложениям по позициям Middle/Junior+ PM в BigTech и финтехе
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-xl shadow-cyan-500/50 transition-all duration-200 hover:scale-110 font-semibold"
                    onClick={() => window.open('https://t.me/dvzinin', '_blank')}
                  >
                    <Icon name="Send" className="mr-2" size={22} />
                    Написать в Telegram
                  </Button>
                  
                  <Button 
                    size="lg"
                    className="bg-white text-violet-900 hover:bg-slate-100 shadow-lg transition-transform duration-200 hover:scale-105"
                    onClick={() => window.location.href = 'mailto:danila.zinin@list.ru'}
                  >
                    <Icon name="Mail" className="mr-2" size={20} />
                    Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-violet-500/20">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>© 2024 Данила Зинин • Product Manager</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;