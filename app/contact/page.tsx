import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Nous contacter</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vous avez une question ou besoin d'aide ? Nous sommes là pour vous aider. Vous pouvez nous contacter par l'un des moyens suivants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-semibold mb-6">Envoyer un message</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Votre nom</Label>
                <Input id="name" placeholder="Votre nom" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Courriel</Label>
                <Input id="email" type="email" placeholder="votre.email@exemple.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Objet du message</Label>
                <Input id="subject" placeholder="Comment pouvons-nous vous aider ?" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Dites-nous en plus sur votre demande..."
                  className="min-h-[150px]"
                />
              </div>
              
              <Button type="submit" className="w-full">Envoyer le message</Button>
            </form>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-6">Informations sur le contact</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Visitez-nous</h3>
                  <p className="text-muted-foreground mt-1">
                    123 Rue de Paris<br />
                    Paris, FR 75000<br />
                    France
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Appelez-nous</h3>
                  <p className="text-muted-foreground mt-1">
                    +33 1 23 45 67 89<br />
                    Du lundi au vendredi : 9h00 - 18h00
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Nous envoyer un courriel</h3>
                  <p className="text-muted-foreground mt-1">
                    service.client@essence.com<br />
                    support@essence.com
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-6">Heures d'ouverture</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Du lundi au vendredi</span>
                  <span>9H00 - 18H00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span>10H00 - 16H00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}