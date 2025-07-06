
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from 'lucide-react';

export const PricingSection = () => {
  const plans = [
    {
      name: "Gratis",
      price: "Rp 0",
      period: "/bulan",
      description: "Mulai perjalanan kreator kamu",
      features: [
        "Akses 5 kursus gratis",
        "Komunitas Discord",
        "Basic templates",
        "Progress tracking"
      ],
      cta: "Mulai Gratis",
      popular: false,
      buttonStyle: "outline"
    },
    {
      name: "Creator",
      price: "Rp 49.000",
      period: "/bulan",
      description: "Untuk kreator yang serius berkembang",
      features: [
        "Akses semua kursus premium",
        "Live mentoring sessions",
        "Advanced templates & tools",
        "Priority community support",
        "Progress analytics",
        "Sertifikat digital"
      ],
      cta: "Mulai 7 Hari Gratis",
      popular: true,
      buttonStyle: "default"
    },
    {
      name: "Pro Creator",
      price: "Rp 99.000",
      period: "/bulan",
      description: "Untuk kreator yang ingin mengajarkan",
      features: [
        "Semua fitur Creator",
        "Upload & jual kursus sendiri",
        "1-on-1 mentoring",
        "Brand partnership tools",
        "Advanced analytics",
        "Early access content",
        "Revenue sharing 70/30"
      ],
      cta: "Upgrade ke Pro",
      popular: false,
      buttonStyle: "outline"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Harga yang Terjangkau untuk Semua
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dirancang khusus untuk ekonomi Indonesia. Tidak ada biaya tersembunyi, cancel kapan saja
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-orange-500 scale-105 shadow-xl' : 'hover:shadow-lg'} transition-all duration-300 border-0 bg-white`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1">
                    Paling Populer
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <CardDescription className="text-gray-600 mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.buttonStyle === 'default' 
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white' 
                      : 'border-orange-300 text-orange-600 hover:bg-orange-50'
                  } py-3`}
                  variant={plan.buttonStyle === 'default' ? 'default' : 'outline'}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Semua paket include akses ke komunitas dan customer support 24/7
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              <span>30 hari money-back guarantee</span>
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              <span>Payment via GoPay, Dana, QRIS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
