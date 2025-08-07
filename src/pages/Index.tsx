import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const elements = document.querySelectorAll('.fade-in-up');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: 'Веб-разработка',
      description: 'Создание современных веб-приложений с использованием передовых технологий',
      icon: 'Code'
    },
    {
      title: 'Облачные решения',
      description: 'Масштабируемые и надежные облачные инфраструктуры для вашего бизнеса',
      icon: 'Cloud'
    },
    {
      title: 'Мобильные приложения',
      description: 'Кроссплатформенные мобильные решения для iOS и Android',
      icon: 'Smartphone'
    },
    {
      title: 'DevOps',
      description: 'Автоматизация процессов разработки и развертывания',
      icon: 'Settings'
    }
  ];

  const advantages = [
    {
      title: 'Современные технологии',
      description: 'Используем только проверенные и актуальные решения',
      icon: 'Zap'
    },
    {
      title: 'Быстрая разработка',
      description: 'Сокращаем время выхода продукта на рынок',
      icon: 'Clock'
    },
    {
      title: 'Полная поддержка',
      description: '24/7 техническая поддержка всех наших решений',
      icon: 'Shield'
    }
  ];

  const portfolio = [
    {
      title: 'E-commerce платформа',
      description: 'Высоконагруженная платформа для онлайн-торговли',
      tech: 'React, Node.js, MongoDB'
    },
    {
      title: 'Банковское приложение',
      description: 'Мобильное приложение с высоким уровнем безопасности',
      tech: 'React Native, TypeScript'
    },
    {
      title: 'CRM система',
      description: 'Система управления взаимоотношениями с клиентами',
      tech: 'Vue.js, Python, PostgreSQL'
    }
  ];

  const pricing = [
    {
      title: 'Стартап',
      price: '50 000 ₽',
      features: ['Landing page', 'Базовый дизайн', 'Мобильная версия', 'Поддержка 1 месяц'],
      popular: false
    },
    {
      title: 'Бизнес',
      price: '150 000 ₽',
      features: ['Веб-приложение', 'Индивидуальный дизайн', 'API интеграции', 'Поддержка 3 месяца'],
      popular: true
    },
    {
      title: 'Энтерпрайз',
      price: 'От 500 000 ₽',
      features: ['Комплексное решение', 'Микросервисная архитектура', 'DevOps настройка', 'Поддержка 12 месяцев'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">IT Solutions</div>
            <div className="hidden md:flex space-x-8">
              {['main', 'advantages', 'services', 'portfolio', 'pricing', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-foreground hover:text-primary transition-colors duration-200 capitalize"
                >
                  {section === 'main' ? 'Главная' : 
                   section === 'advantages' ? 'Преимущества' :
                   section === 'services' ? 'Услуги' :
                   section === 'portfolio' ? 'Портфолио' :
                   section === 'pricing' ? 'Прайс' : 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="main" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              IT SOLUTIONS
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Создаем инновационные технологические решения для развития вашего бизнеса
            </p>
            <div className="space-x-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('services')}
                className="text-lg px-8 py-4"
              >
                Наши услуги
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contacts')}
                className="text-lg px-8 py-4"
              >
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="fade-in-up text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши преимущества</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Почему клиенты выбирают именно нас для реализации своих IT-проектов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="fade-in-up text-center">
                <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name={advantage.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="fade-in-up text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр IT-услуг для развития вашего цифрового присутствия
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="fade-in-up">
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="fade-in-up text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Примеры успешно реализованных проектов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="fade-in-up">
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="text-sm text-primary font-medium">{project.tech}</div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="fade-in-up text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Прайс</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий тариф для вашего проекта
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className="fade-in-up">
                <Card className={`p-8 h-full relative ${
                  plan.popular ? 'border-primary shadow-xl scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                        Популярный
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.title}</h3>
                    <div className="text-3xl font-bold text-primary">{plan.price}</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground">
                        <Icon name="Check" size={16} className="text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Выбрать план
                  </Button>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="fade-in-up text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="fade-in-up space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground">info@itsolutions.dev</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Телефон</h3>
                  <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Адрес</h3>
                  <p className="text-muted-foreground">Москва, ул. Технологическая, 1</p>
                </div>
              </div>
            </div>
            <div className="fade-in-up">
              <Card className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Отправить сообщение</h3>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea 
                    placeholder="Ваше сообщение"
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="w-full">Отправить</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 IT Solutions. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;