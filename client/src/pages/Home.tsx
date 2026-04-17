import { Button } from "@/components/ui/button";
import { Mail, Phone, Facebook, MessageCircle } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Conectividad",
      description: "Soluciones de conectividad de clase empresarial para mantener tu negocio conectado 24/7",
      icon: "🌐",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/K1G1kFKapuuddGg1rItsK0/sandbox/SHfwiL8qAF2tfimdRHj4fT-img-1_1772114645000_na1fn_Y2xhcm8tY29uZWN0aXZpZGFkLXYy.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSzFHMWtGS2FwdXVkZEdnMXJJdHNLMC9zYW5kYm94L1NIZndpTDhxQUYydGZpbWRSSGo0ZlQtaW1nLTFfMTc3MjExNDY0NTAwMF9uYTFmbl9ZMnhoY204dFkyOXVaV04wYVhacFpHRmtMWFl5LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=oEkKnrcC1oToFbFtgS2YEMpxw82DwXuPR6h~qz0dmuKTsHdNAw89eVmNcqWi6grVrf6O-EN3OAh79ccC9xQ21VNI49yiCWNsDJpbuI12Yjc-lkATCCRZnDO5xLVssbraFn6Pm0diaZ8YcPXiAfF6FwRPZxzsFN-7iZGPBPlrOyWgMhydd5329ixKHnoRj4adCn7hb6rrHGbChfu-deVNV2KyNiMSeVels4Z5MLEDFA-0d-SvJCv5-dTlQ35TFbQLUjpmJRDQ6jsbAlyqzmzO345OZojNR~RE4uMFl3vvQun-c3vSvsnzgu1PbBP0HSPmrfDgK56a0G~xxgS17xTjzg__",
    },
    {
      title: "Ciberseguridad",
      description: "Protege tu empresa con soluciones de seguridad de clase mundial",
      icon: "🔒",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/K1G1kFKapuuddGg1rItsK0/sandbox/SHfwiL8qAF2tfimdRHj4fT-img-2_1772114645000_na1fn_Y2xhcm8tY2liZXJzZWd1cmlkYWQtdjI.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSzFHMWtGS2FwdXVkZEdnMXJJdHNLMC9zYW5kYm94L1NIZndpTDhxQUYydGZpbWRSSGo0ZlQtaW1nLTJfMTc3MjExNDY0NTAwMF9uYTFmbl9ZMnhoY204dFkybGlaWEp6WldkMWNtbGtZV1F0ZGpJLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=m~f~5lOzJfMG4kPL-wPQXo4I1GnRO~Ntc3ZyBrYum5bYiJIkFTs-eRGr0zNyKedy2RqWIGS-BzOj5YHjWp9ykVTY~xpcAR7RSwwE2taWe92X-xW4C--2vXaECClrggBrK~ABqayj5UZD3WAMzIpO82I--LoxKDXyh-qKPqF2yGaay0C2PA0nCuj5v4tTWI~mYAIq~q6XxfN93JcLKyjxLcB2dMGiVPeW-liuf8hGuJHieiRBeBs-Ro0ITGGBpPpeOMly9F4XWGz80EdIP~B46orlCExaIvhnbCYturXmubg5QWIvpR~9k2o5EHFeOHsuj9DZmRQrfm5H48QXDsNZww__",
    },
    {
      title: "Colaboración",
      description: "Herramientas de colaboración moderna para potencializar el trabajo en equipo",
      icon: "👥",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/K1G1kFKapuuddGg1rItsK0/sandbox/SHfwiL8qAF2tfimdRHj4fT-img-3_1772114640000_na1fn_Y2xhcm8tY29sYWJvcmFjaW9uLXYy.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSzFHMWtGS2FwdXVkZEdnMXJJdHNLMC9zYW5kYm94L1NIZndpTDhxQUYydGZpbWRSSGo0ZlQtaW1nLTNfMTc3MjExNDY0MDAwMF9uYTFmbl9ZMnhoY204dFkyOXNZV0p2Y21GamFXOXVMWFl5LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=XhCLtyBo6WYljEt3cnb1wnX4CIsRSpjIQdFOGOgeJ9QoBQlXpAY6xtC~F4eKi0eCg~oj9OuvY9OyXC8vL9FsBphoeB9M-A7JH2085NCJ0AK~beVyTOsuTG1uGG4puzXJuU-X1t2~XVFEnB7bbGOc75qeRTDATrus2vV03a1UMH41vV8jyuu1isb086WvH1VFbDuR1KCRhK3~c4rUBSRf1MDOyd3HhmeiB5dJKvMl9585Ev-JOUnzIT9G4xBtJQqiNFMhq2~CQRcdv~THs~~Cw6Gqj58xbop7yBkArVvCBXCz8CjWKxGQpniV6~7fSqm4WLX7EYx3t5YK7xQXhq9kwQ__",
    },
    {
      title: "Data Center",
      description: "Infraestructura de almacenamiento empresarial con maxima disponibilidad",
      icon: "💾",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/K1G1kFKapuuddGg1rItsK0/sandbox/SHfwiL8qAF2tfimdRHj4fT-img-4_1772114645000_na1fn_Y2xhcm8tZGF0YWNlbnRlci12Mg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSzFHMWtGS2FwdXVkZEdnMXJJdHNLMC9zYW5kYm94L1NIZndpTDhxQUYydGZpbWRSSGo0ZlQtaW1nLTRfMTc3MjExNDY0NTAwMF9uYTFmbl9ZMnhoY204dFpHRjBZV05sYm5SbGNpMTJNZy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=lLDVTSgZuurXM7Mbf15AKvtKeGFe5QcKypmERg1EHgHbrtPiLye1~WGyG3IU25ZCuW7xUU-VM3ehbhpaldlRAi3BQ63ITIzkeU6LWJkPXmM7KG5pKdPD8Aqys6br4pgVQ7lwa~nHV4TYU3xfPv54If88SejCI3FIFd9b2hS4sb3BWHY-XaSJVZC18KPyHP-kC4-Ia9~BgBDovz1viefFfgxTqDC7qu-g4GcVI5rWFuRvHRCIEliAs7nR-AVreAtB2b7g4bor-219JaSn-JC5TDVkjzhqKWdujM2BiqiRQSQYszRXEb7fptOaub8A7KK~mn~ssyLYCmWSh9TN9UDWWg__",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-1 h-8 bg-red-600"></div>
            <h1 className="text-2xl font-bold text-gray-900">Paola Andrea Serna</h1>
          </div>
          <div className="text-sm text-gray-600">Agente Consultor - Claro Empresas</div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 md:order-1">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Conecta tu negocio al futuro
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Soluciones digitales y empresariales de Claro para impulsar el crecimiento de tu compania
                </p>
              </div>
              
              <div className="flex gap-4">
                <Button 
                  onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-lg"
                >
                  Conocer Servicios
                </Button>
                <Button 
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline" 
                  className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-6 text-lg rounded-lg"
                >
                  Contactar
                </Button>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4">Ubicacion: Cartago, Valle del Cauca</p>
                <div className="flex gap-6">
                  <a href="https://www.facebook.com/Paolasernafranco/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-red-600 hover:text-red-700">
                    <Facebook size={20} />
                    <span>Facebook</span>
                  </a>
                  <a href="https://wa.me/573243606865" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-red-600 hover:text-red-700">
                    <MessageCircle size={20} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl w-fit mx-auto">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663365918901/kboxffngBzIPJZId.JPG"
                  alt="Paola Andrea Serna"
                  className="h-[450px] w-auto object-contain"
                />
              </div>
              <div className="absolute -left-4 top-1/4 w-1 h-32 bg-red-600 opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Soluciones completas de Claro para empresas diseñadas para impulsar tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg border border-gray-200"
              >
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                Listo para transformar tu negocio?
              </h2>
              <p className="text-xl text-gray-600">
                Contactame hoy para conocer como Claro puede ayudarte a crecer
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="tel:+573243606865"
                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold"
              >
                <Phone size={20} />
                Llamar: +57 324 3606865
              </a>
              <a
                href="https://wa.me/573243606865"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Paola Andrea Serna</h3>
              <p className="text-gray-400">Agente Consultor de Claro para Empresas en Colombia</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Contacto</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Phone size={16} />
                  +57 324 3606865
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} />
                  Cartago, Valle del Cauca
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Sigueme</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/Paolasernafranco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-600"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://wa.me/573243606865"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-600"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>2026 Paola Andrea Serna - Claro Empresas. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
