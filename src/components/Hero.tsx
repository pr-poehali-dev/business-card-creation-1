import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
            <Icon name="UserCheck" size={48} className="text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Людмила
          </h1>
          <h2 className="text-2xl font-light mb-6 text-purple-200">
            Клин Менеджер
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-300 leading-relaxed">
            Помогаю компаниям создавать безупречную чистоту и порядок.
            Профессиональный подход, современные технологии и внимание к
            деталям.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
          >
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Связаться со мной
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-400 text-purple-200 hover:bg-purple-800 px-8 py-3"
          >
            <Icon name="Download" size={20} className="mr-2" />
            Мои услуги
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Icon
              name="Clock"
              size={32}
              className="mx-auto mb-4 text-purple-300"
            />
            <h3 className="text-xl font-semibold mb-2">Пунктуальность</h3>
            <p className="text-gray-300">
              Всегда приезжаю вовремя и выполняю работу в срок
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Icon
              name="Shield"
              size={32}
              className="mx-auto mb-4 text-purple-300"
            />
            <h3 className="text-xl font-semibold mb-2">Надежность</h3>
            <p className="text-gray-300">
              Гарантия качества и полная ответственность за результат
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Icon
              name="Star"
              size={32}
              className="mx-auto mb-4 text-purple-300"
            />
            <h3 className="text-xl font-semibold mb-2">Качество</h3>
            <p className="text-gray-300">
              Использую только профессиональные средства и оборудование
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
