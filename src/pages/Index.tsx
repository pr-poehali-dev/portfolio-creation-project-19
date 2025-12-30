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
      title: 'Яндекс Календарь',
      type: 'B2B / B2C Product',
      problem: 'Низкая удовлетворённость пользователей (SUPER-Q: 3.5) и длинные сценарии создания событий',
      solution: 'Discovery через CustDev → приоритизация болей → редизайн UX создания событий и улучшение онбординга',
      results: [
        { metric: 'SUPER-Q', value: '3.5 → 4.0', icon: 'TrendingUp' },
        { metric: 'Retention', value: '+10%', icon: 'Users' },
        { metric: 'Time-to-action', value: '120 → 35 сек', icon: 'Zap' }
      ],
      tools: ['CustDev', 'JTBD', 'Prototype', 'A/B тесты', 'SQL']
    },
    {
      title: 'OSKELLY',
      type: 'FashionTech iOS',
      problem: 'Низкая конверсия в покупку и высокий процент отменённых заказов',
      solution: 'Внедрение BNPL, one-click payments, автоматизация процессов через глубокий анализ CJM',
      results: [
        { metric: 'Revenue', value: '+10%', icon: 'DollarSign' },
        { metric: 'Conversion Rate', value: '+5%', icon: 'Target' },
        { metric: 'AOV', value: '70k → 120k ₽', icon: 'ShoppingCart' }
      ],
      tools: ['CJM', 'Amplitude', 'Power BI', 'Mixpanel']
    },
    {
      title: 'Ингосстрах × Авито',
      type: 'Fintech MVP',
      problem: 'Отсутствие доверия к онлайн-сделкам без встречи',
      solution: 'Разработка MVP «Безопасная сделка» через Customer Development и тестирование гипотез',
      results: [
        { metric: 'Транзакции', value: '+12%', icon: 'Activity' },
        { metric: 'Споры', value: '−15%', icon: 'Shield' },
        { metric: 'PMF', value: 'Подтверждён', icon: 'CheckCircle' }
      ],
      tools: ['CustDev', 'Figma', 'User Interviews', 'Risk Analysis']
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
            <div className="inline-block mb-4">
              <Badge className="bg-violet-600/20 text-violet-300 border-violet-500/50 px-4 py-1 text-sm">
                Product Manager
              </Badge>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
              Данила Зинин
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
              Превращаю пользовательские боли в измеримые результаты через{' '}
              <span className="text-violet-400 font-semibold">Discovery</span> и{' '}
              <span className="text-fuchsia-400 font-semibold">CustDev</span>
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
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="User" className="text-violet-400" size={28} />
                  <CardTitle className="text-3xl text-white">Подход к Product Management</CardTitle>
                </div>
                <CardDescription className="text-slate-300 text-lg">
                  Data-driven подход с фокусом на глубокое понимание пользователя
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-slate-800/50 p-6 rounded-lg border border-violet-500/20 hover:border-violet-500/50 transition-all duration-200 hover:scale-105">
                    <Icon name="Search" className="text-violet-400 mb-3" size={32} />
                    <h3 className="text-xl font-semibold text-white mb-2">Discovery</h3>
                    <p className="text-slate-400">Глубокий CustDev для выявления реальных болей пользователей</p>
                  </div>
                  
                  <div className="bg-slate-800/50 p-6 rounded-lg border border-fuchsia-500/20 hover:border-fuchsia-500/50 transition-all duration-200 hover:scale-105">
                    <Icon name="Target" className="text-fuchsia-400 mb-3" size={32} />
                    <h3 className="text-xl font-semibold text-white mb-2">Гипотезы</h3>
                    <p className="text-slate-400">Быстрые итерации и A/B-тесты для валидации решений</p>
                  </div>
                  
                  <div className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-200 hover:scale-105">
                    <Icon name="TrendingUp" className="text-cyan-400 mb-3" size={32} />
                    <h3 className="text-xl font-semibold text-white mb-2">Impact</h3>
                    <p className="text-slate-400">Измеримые результаты через метрики и аналитику</p>
                  </div>
                </div>
                
                <Separator className="bg-violet-500/30" />
                
                <div className="space-y-3 text-slate-300">
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-violet-400 mt-1 flex-shrink-0" size={20} />
                    <p>Опыт &gt;2 лет в Product Management в BigTech и финтехе</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-violet-400 mt-1 flex-shrink-0" size={20} />
                    <p>Запуск продуктов с нуля и улучшение существующих метрик</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-violet-400 mt-1 flex-shrink-0" size={20} />
                    <p>Работа с кросс-функциональными командами: разработка, дизайн, аналитика</p>
                  </div>
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

          <div className="max-w-6xl mx-auto space-y-8">
            {cases.map((caseItem, index) => (
              <Card 
                key={index}
                className="bg-slate-900/50 border-violet-500/30 backdrop-blur-sm hover:border-violet-500/60 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-2">
                    <div>
                      <CardTitle className="text-2xl lg:text-3xl text-white mb-2">
                        {caseItem.title}
                      </CardTitle>
                      <Badge className="bg-fuchsia-600/20 text-fuchsia-300 border-fuchsia-500/50">
                        {caseItem.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-violet-400 mb-2 uppercase tracking-wide">
                          Проблема
                        </h4>
                        <p className="text-slate-300">{caseItem.problem}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-fuchsia-400 mb-2 uppercase tracking-wide">
                          Решение
                        </h4>
                        <p className="text-slate-300">{caseItem.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wide">
                          Инструменты
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {caseItem.tools.map((tool, i) => (
                            <Badge key={i} variant="outline" className="border-slate-600 text-slate-300">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-4 uppercase tracking-wide">
                        Результаты
                      </h4>
                      <div className="space-y-3">
                        {caseItem.results.map((result, i) => (
                          <div 
                            key={i}
                            className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 hover:border-green-500/50 transition-all"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <Icon name={result.icon as any} className="text-green-400" size={24} />
                                <span className="text-slate-400">{result.metric}</span>
                              </div>
                              <span className="text-xl font-bold text-green-400">{result.value}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                    className="bg-white text-violet-900 hover:bg-slate-100 shadow-lg transition-transform duration-200 hover:scale-105"
                    onClick={() => window.location.href = 'mailto:danila.zinin@example.com'}
                  >
                    <Icon name="Mail" className="mr-2" size={20} />
                    danila.zinin@example.com
                  </Button>
                  
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 transition-transform duration-200 hover:scale-105"
                    onClick={() => window.open('https://t.me/dvzinin', '_blank')}
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Telegram
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