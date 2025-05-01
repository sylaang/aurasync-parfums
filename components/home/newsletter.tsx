"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Merci de vous être abonné !",
        description: "Vous avez été ajouté à notre liste de diffusion.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">S'inscrire à notre lettre d'information</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Inscrivez-vous pour recevoir des offres exclusives, des informations sur les parfums et pour être le premier à connaître les nouveautés.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Votre adresse e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "S'abonner..." : "S'abonner"}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
          En vous abonnant, vous acceptez nos conditions et notre politique de confidentialité. 
          Nous ne partagerons jamais vos informations.
          </p>
        </form>
      </div>
    </section>
  );
}