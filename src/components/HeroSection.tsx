
import { Button } from "@/components/ui/button";
import { Play, Users, TrendingUp } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 via-transparent to-red-100/50"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-orange-200 to-red-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-red-200 to-orange-200 rounded-full blur-3xl opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                🚀 Platform Kreator #1 di Indonesia
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Belajar, Bangun,{" "}
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Ajarkan
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Platform pembelajaran online terjangkau yang dirancang khusus untuk kreator Indonesia. 
                Pelajari cara membangun personal brand, monetisasi konten, dan bahkan menjadi educator sendiri.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3">
                <Play className="mr-2 h-5 w-5" />
                Mulai Belajar Gratis
              </Button>
              <Button size="lg" variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-3">
                Lihat Kursus
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-orange-500" />
                <span className="text-sm text-gray-600">10,000+ Pelajar Aktif</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-orange-500" />
                <span className="text-sm text-gray-600">500+ Kreator Bergabung</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Video Preview Card */}
              <div className="aspect-video bg-gradient-to-br from-orange-400 to-red-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white rounded-full w-16 h-16 p-0">
                    <Play className="h-8 w-8 ml-1" />
                  </Button>
                </div>
                
                {/* Course Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800">Personal Branding untuk Pemula</h3>
                    <p className="text-sm text-gray-600">Belajar membangun brand personal yang kuat di media sosial</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-orange-600 font-bold">Rp 49.000</span>
                      <span className="text-sm text-gray-500">2.5 jam</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats Bar */}
              <div className="p-4 bg-gray-50">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-gray-800">5.2K</div>
                    <div className="text-xs text-gray-600">Siswa</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-800">4.8</div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-800">12</div>
                    <div className="text-xs text-gray-600">Modul</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm font-medium">Live Session</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white rounded-lg shadow-lg p-3">
              <div className="text-xs">Sertifikat</div>
              <div className="font-bold">Tersedia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
