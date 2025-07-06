
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Clock, Users, Star } from 'lucide-react';

export const FeaturedCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Personal Branding untuk Kreator Pemula",
      description: "Pelajari cara membangun identitas brand yang kuat dan konsisten di seluruh platform media sosial",
      instructor: "Sarah Natasha",
      duration: "3.5 jam",
      students: "2,340",
      rating: 4.9,
      price: "Rp 49.000",
      category: "Personal Branding",
      image: "bg-gradient-to-br from-pink-400 to-purple-500",
      level: "Pemula"
    },
    {
      id: 2,
      title: "Content Creation & Storytelling",
      description: "Teknik storytelling yang powerful untuk meningkatkan engagement dan membangun audiens loyal",
      instructor: "Raditya Dika",
      duration: "4.2 jam",
      students: "1,890",
      rating: 4.8,
      price: "Rp 69.000",
      category: "Content Creation",
      image: "bg-gradient-to-br from-blue-400 to-indigo-500",
      level: "Menengah"
    },
    {
      id: 3,
      title: "Monetisasi Konten: Dari 0 ke 10 Juta",
      description: "Strategi lengkap untuk menghasilkan income konsisten dari konten kreativ kamu",
      instructor: "Kevin Anggara",
      duration: "5.8 jam",
      students: "3,120",
      rating: 4.9,
      price: "Rp 99.000",
      category: "Monetisasi",
      image: "bg-gradient-to-br from-green-400 to-emerald-500",
      level: "Lanjutan"
    },
    {
      id: 4,
      title: "Instagram Growth Hacking 2024",
      description: "Teknik terbaru untuk grow Instagram organically dan membangun komunitas engaged",
      instructor: "Aulia Zahra",
      duration: "2.8 jam",
      students: "4,560",
      rating: 4.7,
      price: "Rp 39.000",
      category: "Social Media",
      image: "bg-gradient-to-br from-orange-400 to-red-500",
      level: "Pemula"
    },
    {
      id: 5,
      title: "TikTok Viral Strategy & Content Planning",
      description: "Rahasia membuat konten TikTok yang viral dan membangun following yang massive",
      instructor: "Dimas Anggara",
      duration: "3.1 jam",
      students: "2,780",
      rating: 4.8,
      price: "Rp 59.000",
      category: "TikTok",
      image: "bg-gradient-to-br from-teal-400 to-cyan-500",
      level: "Menengah"
    },
    {
      id: 6,
      title: "YouTube Creator Masterclass",
      description: "Panduan lengkap menjadi YouTuber sukses dari pembuatan konten hingga monetisasi",
      instructor: "Gita Savitri",
      duration: "6.5 jam",
      students: "1,456",
      rating: 4.9,
      price: "Rp 129.000",
      category: "YouTube",
      image: "bg-gradient-to-br from-red-400 to-pink-500",
      level: "Lanjutan"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Pemula': return 'bg-green-100 text-green-700';
      case 'Menengah': return 'bg-blue-100 text-blue-700';
      case 'Lanjutan': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kursus Unggulan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dipilih langsung oleh kreator Indonesia yang sudah terbukti sukses membangun personal brand dan monetisasi konten mereka
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="p-0">
                <div className={`aspect-video ${course.image} rounded-t-lg relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white rounded-full w-14 h-14 p-0 group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 ml-1" />
                    </Button>
                  </div>
                  
                  {/* Course Level Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-700">
                      {course.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mt-2 line-clamp-2">
                      {course.description}
                    </CardDescription>
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    Oleh <span className="text-orange-600 font-medium">{course.instructor}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-2xl font-bold text-orange-600">
                      {course.price}
                    </div>
                    <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                      Mulai Belajar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-3">
            Lihat Semua Kursus
          </Button>
        </div>
      </div>
    </section>
  );
};
