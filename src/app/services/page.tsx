import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const services = [
    {
        title: "Credit Offer Comparison",
        description: "We provide an up-to-date, comprehensive list of no-deposit credit offers from major financial institutions in Papua New Guinea.",
        features: ["Filter by loan type, provider, and terms", "Side-by-side offer comparison", "Direct links to provider applications"]
    },
    {
        title: "AI-Powered Analysis",
        description: "Our advanced AI breaks down complex terms and conditions into simple, understandable summaries, highlighting key details for you.",
        features: ["Plain language summaries", "Identifies hidden fees and clauses", "Empowers informed decision-making"]
    },
    {
        title: "Personalized Portfolio",
        description: "Save and track offers that interest you. Build your own portfolio of potential credit products for easy review and comparison.",
        features: ["Bookmark favorite offers", "Manage saved items in one place", "Compare your top choices easily"]
    },
     {
        title: "Financial Education",
        description: "Through our blog and resources, we aim to improve financial literacy, helping you understand credit and manage your finances better.",
        features: ["Informative articles and guides", "Tips for improving credit scores", "Updates on the local financial market"]
    }
]

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Services</h1>
        <p className="text-lg text-muted-foreground mt-2">Empowering your financial journey with powerful tools and insights.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service) => (
            <Card key={service.title} className="flex flex-col">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold font-headline">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                    <ul className="space-y-2 text-sm">
                       {service.features.map(feature => (
                         <li key={feature} className="flex items-center gap-2">
                           <CheckCircle2 className="h-4 w-4 text-primary" />
                           <span className="text-muted-foreground">{feature}</span>
                         </li>
                       ))}
                    </ul>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}
