import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">О себе</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Более 5 лет опыта в сфере клининга. Превращаю беспорядок в
              идеальную чистоту.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-8 mb-8">
                <Icon name="Award" size={48} className="text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Профессиональный подход
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Каждый объект — это уникальная задача. Провожу предварительную
                  оценку, составляю план работ и использую индивидуальный подход
                  к каждому клиенту.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    150+
                  </div>
                  <div className="text-gray-600">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    5+
                  </div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Icon name="Home" size={24} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Жилые помещения
                  </h4>
                  <p className="text-gray-600">
                    Квартиры, дома, коттеджи. Регулярная и генеральная уборка.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Icon name="Building" size={24} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Офисы</h4>
                  <p className="text-gray-600">
                    Поддержание чистоты в рабочих пространствах и офисных
                    зданиях.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Icon name="Sparkles" size={24} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Специальная уборка
                  </h4>
                  <p className="text-gray-600">
                    После ремонта, генеральная уборка, подготовка к
                    мероприятиям.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
