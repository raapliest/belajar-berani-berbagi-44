
import { TrendingUp, Users, BookOpen, Trophy } from 'lucide-react';

export const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Pelajar Aktif",
      description: "Kreator yang berkembang"
    },
    {
      icon: BookOpen,
      value: "200+",
      label: "Kursus Premium",
      description: "Konten berkualitas tinggi"
    },
    {
      icon: TrendingUp,
      value: "500+",
      label: "Kreator Sukses",
      description: "Yang sudah monetisasi"
    },
    {
      icon: Trophy,
      value: "15,000+",
      label: "Sertifikat Diterbitkan",
      description: "Pencapaian yang diakui"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Komunitas Kreator Terbesar di Indonesia
          </h2>
          <p className="text-lg text-gray-600">
            Bergabung dengan ribuan kreator yang sudah membangun karir impian mereka
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
