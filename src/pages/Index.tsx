import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('bio');
  const [selectedConcert, setSelectedConcert] = useState<number | null>(null);

  const concerts = [
    {
      id: 1,
      title: 'Концерт Billy',
      date: '15 июня',
      time: '14:50',
      venue: 'Рязань, Почтовая',
      coordinates: { lat: 54.629393, lng: 39.741253 },
      price: 'Вход бесплатный',
      ageRating: '16+',
      description: 'Будет классно! Привезу новый альбом.'
    }
  ];
  const news = [
    {
      id: 1,
      title: 'Старт карьеры Billy',
      date: '21 августа',
      content: 'Игорь начал свой творческий путь под псевдонимом Billy. Новый звук из Рязани уже привлекает внимание.'
    },
    {
      id: 2,
      title: 'Работа над новым материалом',
      date: 'Недавно',
      content: 'Billy активно работает в студии над свежими треками. Следите за обновлениями!'
    }
  ];

  const music = [
    { id: 1, title: 'Ocean under my skin', type: 'Альбом', status: 'Скоро выйдет' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <nav className="relative z-10 border-b border-border/50 backdrop-blur-md bg-background/80">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gradient">BILLY</h1>
            <div className="flex gap-2">
              <Button
                variant={activeSection === 'bio' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('bio')}
                className="hover-glow"
              >
                <Icon name="User" size={18} className="mr-2" />
                Биография
              </Button>
              <Button
                variant={activeSection === 'concerts' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('concerts')}
                className="hover-glow"
              >
                <Icon name="Ticket" size={18} className="mr-2" />
                Концерты
              </Button>
              <Button
                variant={activeSection === 'news' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('news')}
                className="hover-glow"
              >
                <Icon name="Newspaper" size={18} className="mr-2" />
                Новости
              </Button>
              <Button
                variant={activeSection === 'music' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('music')}
                className="hover-glow"
              >
                <Icon name="Music" size={18} className="mr-2" />
                Музыка
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 container mx-auto px-6 py-12">
        {activeSection === 'bio' && (
          <div className="animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1">
                <h2 className="text-6xl font-bold mb-6 text-gradient">
                  BILLY
                </h2>
                <p className="text-2xl text-muted-foreground mb-4">
                  Игорь aka Billy
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Молодой артист из Рязани, начавший свой творческий путь 21 августа. 
                  Billy создает современную музыку, объединяющую энергию и эмоции. 
                  Каждый трек — это история, рассказанная через звук.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative overflow-hidden rounded-3xl animate-scale-in">
                  <img
                    src="https://cdn.poehali.dev/files/5352960338673996478.jpg"
                    alt="Billy"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 hover-glow animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Icon name="MapPin" size={40} className="text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">Рязань</h3>
                <p className="text-muted-foreground">Город, где началась история Billy</p>
              </Card>
              
              <Card className="p-8 bg-card/50 backdrop-blur border-secondary/20 hover-glow animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Icon name="Calendar" size={40} className="text-secondary mb-4" />
                <h3 className="text-2xl font-bold mb-2">21 августа</h3>
                <p className="text-muted-foreground">Старт музыкальной карьеры</p>
              </Card>
              
              <Card className="p-8 bg-card/50 backdrop-blur border-accent/20 hover-glow animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Icon name="Mic" size={40} className="text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-2">Артист</h3>
                <p className="text-muted-foreground">Создатель современной музыки</p>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'concerts' && (
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold mb-8 text-gradient">
              Концерты
            </h2>
            
            <div className="grid gap-6">
              {concerts.map((concert) => (
                <Card key={concert.id} className="p-8 bg-card/50 backdrop-blur border-primary/20 hover-glow">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-3xl font-bold">{concert.title}</h3>
                          <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-semibold">
                            {concert.ageRating}
                          </span>
                        </div>
                        <p className="text-lg text-muted-foreground mb-1">
                          <Icon name="Calendar" size={18} className="inline mr-2" />
                          {concert.date}
                        </p>
                        <p className="text-lg text-muted-foreground mb-1">
                          <Icon name="Clock" size={18} className="inline mr-2" />
                          {concert.time}
                        </p>
                        <p className="text-lg text-muted-foreground mb-1">
                          <Icon name="MapPin" size={18} className="inline mr-2" />
                          {concert.venue}
                        </p>
                        <p className="text-lg font-semibold text-accent mt-2">{concert.price}</p>
                      </div>
                    </div>
                    <Button
                      size="lg"
                      className="gradient-purple border-0 text-white hover-glow w-full"
                      onClick={() => setSelectedConcert(selectedConcert === concert.id ? null : concert.id)}
                    >
                      <Icon name="Ticket" size={20} className="mr-2" />
                      {selectedConcert === concert.id ? 'Скрыть информацию' : 'Подробнее'}
                    </Button>
                    {selectedConcert === concert.id && (
                      <div className="mt-4 space-y-4 animate-fade-in">
                        <div className="p-6 rounded-xl bg-primary/10">
                          <p className="text-lg text-muted-foreground">{concert.description}</p>
                        </div>
                        <div className="rounded-xl overflow-hidden border border-border/50">
                          <iframe
                            src={`https://yandex.ru/map-widget/v1/?ll=${concert.coordinates.lng}%2C${concert.coordinates.lat}&z=16&l=map&pt=${concert.coordinates.lng}%2C${concert.coordinates.lat}%2Cpm2rdm`}
                            width="100%"
                            height="400"
                            frameBorder="0"
                            allowFullScreen
                            className="w-full"
                          />
                        </div>
                        <Button
                          variant="outline"
                          size="lg"
                          className="w-full hover-glow"
                          onClick={() => window.open(`https://yandex.ru/maps/?pt=${concert.coordinates.lng},${concert.coordinates.lat}&z=16&l=map`, '_blank')}
                        >
                          <Icon name="MapPin" size={20} className="mr-2" />
                          Открыть в Яндекс.Картах
                        </Button>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'news' && (
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold mb-8 text-gradient">
              Новости
            </h2>
            
            <div className="grid gap-6">
              {news.map((item, index) => (
                <Card key={item.id} className="p-8 bg-card/50 backdrop-blur border-secondary/20 hover-glow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl gradient-sunset flex items-center justify-center flex-shrink-0">
                      <Icon name="Newspaper" size={32} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold">{item.title}</h3>
                        <span className="text-sm text-muted-foreground">• {item.date}</span>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
              
              <Card className="p-8 bg-card/50 backdrop-blur border-primary/20">
                <h3 className="text-2xl font-bold mb-6">Следите за Billy в соцсетях</h3>
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="hover-glow"
                    onClick={() => window.open('https://t.me/twoidiot_52', '_blank')}
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Telegram
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="hover-glow"
                    onClick={() => window.open('https://vk.com/billy_238', '_blank')}
                  >
                    <Icon name="Share2" size={20} className="mr-2" />
                    VK
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="hover-glow"
                    onClick={() => window.open('https://youtube.com/@billy-yea?si=9LViSIO2r6aMdB2', '_blank')}
                  >
                    <Icon name="Youtube" size={20} className="mr-2" />
                    YouTube
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'music' && (
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold mb-8 text-gradient">
              Музыка
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {music.map((item, index) => (
                <Card key={item.id} className="p-8 bg-card/50 backdrop-blur border-accent/20 hover-glow animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 rounded-2xl gradient-ocean flex items-center justify-center flex-shrink-0">
                      <Icon name="Music" size={40} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-4">{item.type}</p>
                      <div className="flex items-center gap-3">
                        <span className="px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="mt-8 p-8 bg-card/50 backdrop-blur border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Слушать Billy</h3>
              <p className="text-muted-foreground mb-6">
                Мои треки уже доступны на платформах
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover-glow"
                  onClick={() => window.open('https://vk.com/billy_238', '_blank')}
                >
                  <Icon name="Music" size={20} className="mr-2" />
                  VK Музыка
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover-glow"
                  onClick={() => window.open('https://youtube.com/@billy-yea?si=9LViSIO2r6aMdB2', '_blank')}
                >
                  <Icon name="Youtube" size={20} className="mr-2" />
                  YouTube
                </Button>
              </div>
            </Card>

            <Card className="mt-6 p-8 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur border-primary/30">
              <h3 className="text-2xl font-bold mb-4">Поддержать Billy</h3>
              <p className="text-muted-foreground mb-6">
                Ваша поддержка помогает создавать новую музыку
              </p>
              <div className="grid grid-cols-3 gap-4">
                <Button
                  size="lg"
                  className="gradient-purple border-0 text-white hover-glow flex flex-col h-auto py-6"
                >
                  <Icon name="Heart" size={28} className="mb-2" />
                  <span className="text-2xl font-bold">100₽</span>
                </Button>
                <Button
                  size="lg"
                  className="gradient-sunset border-0 text-white hover-glow flex flex-col h-auto py-6"
                >
                  <Icon name="Heart" size={28} className="mb-2" />
                  <span className="text-2xl font-bold">1000₽</span>
                </Button>
                <Button
                  size="lg"
                  className="gradient-ocean border-0 text-white hover-glow flex flex-col h-auto py-6"
                >
                  <Icon name="Heart" size={28} className="mb-2" />
                  <span className="text-2xl font-bold">2000₽</span>
                </Button>
              </div>
            </Card>
          </div>
        )}
      </main>

      <footer className="relative z-10 border-t border-border/50 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              © 2024 Billy. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover-glow">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover-glow">
                <Icon name="Music" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover-glow">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;