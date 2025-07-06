
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, Clock, Star, TrendingUp, Users } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export const EmailCaptureSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call - replace with actual email service integration
    setTimeout(() => {
      toast({
        title: "🎉 Selamat! Kode diskon berhasil dikirim",
        description: "Cek email kamu untuk mendapatkan kode diskon 50% dan bonus exclusive content!",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1500);
  };

  const psychologicalTriggers = [
    {
      icon: <Clock className="h-5 w-5 text-orange-500" />,
      text: "Terbatas hanya 48 jam!",
      highlight: true
    },
    {
      icon: <Star className="h-5 w-5 text-yellow-500" />,
      text: "Sudah dipercaya 10,000+ kreator",
      highlight: false
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-green-500" />,
      text: "ROI rata-rata 300% dalam 3 bulan",
      highlight: false
    },
    {
      icon: <Users className="h-5 w-5 text-blue-500" />,
      text: "Akses eksklusif ke komunitas VIP",
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 via-red-600 to-pink-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          {/* Urgency Badge */}
          <Badge className="bg-yellow-400 text-yellow-900 hover:bg-yellow-300 mb-6 px-4 py-2 text-sm font-bold animate-pulse">
            ⚡ FLASH SALE - BERAKHIR DALAM 48 JAM ⚡
          </Badge>

          {/* Main Headline - Using FOMO + Benefit */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Dapatkan <span className="text-yellow-300">50% DISKON</span><br />
            + Bonus Senilai <span className="text-yellow-300">Rp 2.5 Juta</span>
          </h2>

          {/* Sub-headline with social proof */}
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Bergabung dengan <strong>10,000+ kreator sukses</strong> yang sudah meningkatkan income hingga 
            <strong className="text-yellow-300"> 300% dalam 3 bulan pertama</strong>
          </p>
        </div>

        {/* Main CTA Card */}
        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl max-w-2xl mx-auto mb-12">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <Mail className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Masukkan Email & Dapatkan Instant:
              </h3>
              <div className="space-y-2 text-left">
                <div className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Kode diskon 50%</strong> untuk semua paket premium</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>E-book "Blueprint Kreator Sukses"</strong> (Rp 299k)</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Template konten 30 hari</strong> (Rp 199k)</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Akses grup Telegram VIP</strong> (Rp 99k/bulan)</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Mini course "Psychology of Selling"</strong> (Rp 499k)</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Masukkan email terbaik kamu..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 text-base border-2 border-orange-200 focus:border-orange-500"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white h-12 px-8 font-bold text-base whitespace-nowrap"
                >
                  {isSubmitting ? 'Mengirim...' : 'DAPATKAN DISKON 50% 🚀'}
                </Button>
              </div>
              <p className="text-xs text-gray-500 text-center">
                * Tidak ada spam. Email kamu aman bersama kami. Unsubscribe kapan saja.
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Social Proof & Psychological Triggers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {psychologicalTriggers.map((trigger, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-center p-4 rounded-lg backdrop-blur-sm ${
                trigger.highlight 
                  ? 'bg-yellow-400/20 border border-yellow-400/50' 
                  : 'bg-white/10 border border-white/20'
              }`}
            >
              {trigger.icon}
              <span className={`ml-2 text-sm font-medium ${
                trigger.highlight ? 'text-yellow-100' : 'text-white'
              }`}>
                {trigger.text}
              </span>
            </div>
          ))}
        </div>

        {/* Urgency Footer */}
        <div className="text-center mt-8">
          <p className="text-orange-100 text-sm">
            ⚠️ <strong>Penawaran terbatas!</strong> Hanya tersisa untuk <strong className="text-yellow-300">247 orang</strong> lagi
          </p>
        </div>
      </div>
    </section>
  );
};
