
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, BookOpen, TrendingUp } from 'lucide-react';

export const CreatorShowcase = () => {
  const creators = [
    {
      id: 1,
      name: "Sarah Natasha",
      title: "Personal Branding Expert",
      avatar: "bg-gradient-to-br from-pink-400 to-purple-500",
      followers: "125K",
      courses: 5,
      students: "8.2K",
      rating: 4.9,
      earnings: "Rp 45M+",
      specialty: "Personal Branding",
      bio: "Membantu 1000+ kreator membangun personal brand yang profitable dalam 6 bulan"
    },
    {
      id: 2,
      name: "Kevin Anggara",
      title: "Content Monetization Guru",
      avatar: "bg-gradient-to-br from-blue-400 to-indigo-500",
      followers: "89K",
      courses: 3,
      students: "5.7K",
      rating: 4.8,
      earnings: "Rp 32M+",
      specialty: "Monetisasi",
      bio: "Dari 0 followers ke 100K+ dan income 8 digit per bulan dalam 18 bulan"
    },
    {
      id: 3,
      name: "Aulia Zahra",
      title: "Social Media Strategist",
      avatar: "bg-gradient-to-br from-green-400 to-emerald-500",
      followers: "156K",
      courses: 4,
      students: "12.1K",
      rating: 4.9,
      earnings: "Rp 28M+",
      specialty: "Instagram Growth",
      bio: "Specialist Instagram organic growth dengan 500%+ engagement rate"
    }
  ];

  return (
    <section id="creators" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Belajar dari Kreator Terbaik
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kreator Indonesia yang sudah terbukti sukses membangun personal brand dan menghasilkan income konsisten dari konten mereka
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {creators.map((creator) => (
            <Card key={creator.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  {/* Avatar */}
                  <div className={`w-24 h-24 ${creator.avatar} rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300`}>
                    {creator.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  {/* Creator Info */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{creator.name}</h3>
                    <p className="text-orange-600 font-medium mb-2">{creator.title}</p>
                    <Badge className="bg-orange-100 text-orange-700">
                      {creator.specialty}
                    </Badge>
                  </div>
                  
                  {/* Bio */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {creator.bio}
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 text-gray-500 mb-1">
                        <Users className="h-4 w-4" />
                        <span className="text-xs">Followers</span>
                      </div>
                      <div className="font-bold text-gray-900">{creator.followers}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 text-gray-500 mb-1">
                        <BookOpen className="h-4 w-4" />
                        <span className="text-xs">Kursus</span>
                      </div>
                      <div className="font-bold text-gray-900">{creator.courses}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 text-gray-500 mb-1">
                        <Star className="h-4 w-4" />
                        <span className="text-xs">Rating</span>
                      </div>
                      <div className="font-bold text-gray-900">{creator.rating}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 text-gray-500 mb-1">
                        <TrendingUp className="h-4 w-4" />
                        <span className="text-xs">Earnings</span>
                      </div>
                      <div className="font-bold text-green-600">{creator.earnings}</div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                    Lihat Kursus
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Become Creator CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Siap Jadi Kreator dan Monetisasi Skill Kamu?
          </h3>
          <p className="text-lg mb-8 text-orange-100">
            Bergabung dengan platform kami dan mulai menghasilkan income dari mengajar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3">
              Jadi Kreator Sekarang
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3">
              Pelajari Cara Kerja
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
