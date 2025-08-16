'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast({
            title: "Message Sent!",
            description: "Thank you for contacting us. We'll get back to you shortly.",
        });
        (e.target as HTMLFormElement).reset();
    }

  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Contact Us</h1>
        <p className="text-lg text-muted-foreground mt-2">We'd love to hear from you. Get in touch with us.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
            <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-full"><MapPin className="h-6 w-6"/></div>
                <div>
                    <h3 className="text-xl font-semibold">Our Office</h3>
                    <p className="text-muted-foreground">123 Finance Street, Port Moresby, NCD, Papua New Guinea</p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-full"><Mail className="h-6 w-6"/></div>
                <div>
                    <h3 className="text-xl font-semibold">Email Us</h3>
                    <p className="text-muted-foreground">contact@pngcreditpro.com</p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-full"><Phone className="h-6 w-6"/></div>
                <div>
                    <h3 className="text-xl font-semibold">Call Us</h3>
                    <p className="text-muted-foreground">(+675) 123-4567</p>
                </div>
            </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" required />
            </div>
            <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john.doe@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your message..." required rows={5} />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </div>
  );
}
