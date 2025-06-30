import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь со мной</h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Готова обсудить ваши потребности и предложить лучшее решение
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Контактная информация
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <Icon name="Phone" size={20} />
                    </div>
                    <div>
                      <div className="font-medium">Телефон</div>
                      <div className="text-purple-200">+7 (999) 123-45-67</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <Icon name="Mail" size={20} />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-purple-200">
                        anna.cleaning@email.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <Icon name="MapPin" size={20} />
                    </div>
                    <div>
                      <div className="font-medium">Район работы</div>
                      <div className="text-purple-200">
                        Москва и Московская область
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <Icon name="Clock" size={20} />
                    </div>
                    <div>
                      <div className="font-medium">Режим работы</div>
                      <div className="text-purple-200">Пн-Вс: 8:00 - 20:00</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Icon name="Zap" size={20} className="mr-2 text-yellow-400" />
                  Быстрый ответ
                </h4>
                <p className="text-purple-200 text-sm">
                  Отвечаю на все запросы в течение 2 часов. Бесплатная
                  консультация и расчет стоимости.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6">Оставить заявку</h3>

              <form className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    className="bg-white/10 border-white/20 text-white placeholder:text-purple-200"
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    className="bg-white/10 border-white/20 text-white placeholder:text-purple-200"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Email (необязательно)"
                    className="bg-white/10 border-white/20 text-white placeholder:text-purple-200"
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Опишите объект и тип уборки"
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder:text-purple-200"
                  />
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
