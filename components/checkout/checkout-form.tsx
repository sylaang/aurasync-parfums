"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const formSchema = z.object({
  email: z.string().email({ message: "Veuillez saisir une adresse électronique valide" }),
  firstName: z.string().min(2, { message: "Le prénom doit comporter au moins 2 caractères" }),
  lastName: z.string().min(2, { message: "Le nom de famille doit comporter au moins 2 caractères" }),
  phone: z.string().min(10, { message: "Veuillez saisir un numéro de téléphone valide" }),
  address: z.string().min(5, { message: "Veuillez saisir votre adresse postale" }),
  city: z.string().min(2, { message: "Veuillez saisir votre ville" }),
  state: z.string().min(2, { message: "Veuillez saisir votre état/province" }),
  zip: z.string().min(4, { message: "Veuillez saisir un code postal valide" }),
  country: z.string().min(2, { message: "Veuillez sélectionner votre pays" }),
  saveInfo: z.boolean().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface CheckoutFormProps {
  onSubmit: () => void;
  isProcessing: boolean;
}

export default function CheckoutForm({ onSubmit, isProcessing }: CheckoutFormProps) {
  const [paymentMethod, setPaymentMethod] = useState('card');
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      country: 'France',
      saveInfo: true,
    },
  });
  
  const handleSubmit = (values: FormValues) => {
    onSubmit();
  };
  
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Informations sur le contact</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adresse électronique</FormLabel>
                  <FormControl>
                    <Input placeholder="votre.email@exemple.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prénom</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom de famille</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numéro de téléphone</FormLabel>
                  <FormControl>
                    <Input placeholder="+33 7 12 23 45 67" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Separator />
            
            <h2 className="text-xl font-semibold">Adresse de livraison</h2>
            
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adresse de la rue</FormLabel>
                  <FormControl>
                    <Input placeholder="123 Rue de Paris" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="Paris" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>État / Province</FormLabel>
                    <FormControl>
                      <Input placeholder="FR" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="zip"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Postal Code</FormLabel>
                    <FormControl>
                      <Input placeholder="75000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pays</FormLabel>
                    <FormControl>
                      <Input placeholder="France" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="saveInfo"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                    Conservez ces informations pour la prochaine fois
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
            
            <Separator />
            
            <h2 className="text-xl font-semibold">Mode de paiement</h2>
            
            <Tabs
              defaultValue="card"
              value={paymentMethod}
              onValueChange={setPaymentMethod}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="card">Carte de crédit</TabsTrigger>
                <TabsTrigger value="paypal">PayPal</TabsTrigger>
                <TabsTrigger value="apple">Apple Pay</TabsTrigger>
              </TabsList>
              
              <TabsContent value="card" className="pt-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Numéro de la carte</Label>
                    <Input id="cardNumber" placeholder="•••• •••• •••• ••••" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expDate">Date d'expiration</Label>
                      <Input id="expDate" placeholder="MM/YY" />
                    </div>
                    <div>
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="•••" />
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="paypal" className="pt-4">
                <div className="flex flex-col items-center justify-center py-8">
                  <p className="text-muted-foreground mb-4">
                    Vous serez redirigé vers PayPal pour effectuer votre paiement
                  </p>
                  <div className="border border-border rounded-md p-4 bg-muted/30">
                    <svg width="100" height="25" viewBox="0 0 100 25">
                      <path d="M38.8,5.5h-7c-0.5,0-0.9,0.4-1,0.8l-2.8,18c-0.1,0.4,0.2,0.7,0.6,0.7h3.5c0.5,0,0.9-0.4,1-0.8l0.8-4.9 c0.1-0.5,0.5-0.8,1-0.8h2.2c4.6,0,7.3-2.2,8-6.6c0.3-1.9,0-3.4-0.9-4.5C43,6.3,41.2,5.5,38.8,5.5z M39.4,12.1 c-0.4,2.5-2.3,2.5-4.2,2.5h-1.1l0.7-4.6c0-0.3,0.3-0.5,0.6-0.5h0.5c1.3,0,2.5,0,3.1,0.7C39.5,10.7,39.6,11.3,39.4,12.1z" fill="#253B80"></path>
                      <path d="M59.2,12h-3.6c-0.3,0-0.6,0.2-0.6,0.5l-0.2,1l-0.2-0.3c-0.8-1.1-2.4-1.5-4-1.5c-3.8,0-7,2.9-7.6,6.9 c-0.3,2,0.1,4,1.2,5.3c1,1.2,2.4,1.7,4.2,1.7c2.9,0,4.6-1.9,4.6-1.9l-0.1,0.9c-0.1,0.4,0.2,0.7,0.6,0.7h3.2c0.5,0,0.9-0.4,1-0.8 l1.8-11.6C59.9,12.4,59.6,12,59.2,12z M53.8,18.1c-0.3,2-2,3.3-4,3.3c-1,0-1.9-0.3-2.4-0.9c-0.5-0.6-0.7-1.4-0.5-2.3 c0.3-2,2-3.4,3.9-3.4c1,0,1.8,0.3,2.3,0.9C53.8,16.3,54,17.1,53.8,18.1z" fill="#253B80"></path>
                      <path d="M76.6,12h-3.6c-0.3,0-0.7,0.2-0.9,0.4l-5.1,7.6l-2.2-7.3c-0.1-0.4-0.5-0.7-1-0.7h-3.5c-0.4,0-0.7,0.4-0.6,0.8l4.1,12.1 l-3.9,5.5c-0.3,0.4,0,1,0.5,1h3.6c0.3,0,0.7-0.2,0.9-0.4l12.4-17.9C77.4,12.5,77.1,12,76.6,12z" fill="#253B80"></path>
                      <path d="M87,5.5h-7c-0.5,0-0.9,0.4-1,0.8l-2.8,18c-0.1,0.4,0.2,0.7,0.6,0.7h3.7c0.4,0,0.7-0.3,0.7-0.6l0.8-5.1 c0.1-0.5,0.5-0.8,1-0.8h2.2c4.6,0,7.3-2.2,8-6.6c0.3-1.9,0-3.4-0.9-4.5C91.2,6.3,89.4,5.5,87,5.5z M87.6,12.1 c-0.4,2.5-2.3,2.5-4.2,2.5h-1.1l0.7-4.6c0-0.3,0.3-0.5,0.6-0.5h0.5c1.3,0,2.5,0,3.1,0.7C87.7,10.7,87.8,11.3,87.6,12.1z" fill="#179BD7"></path>
                      <path d="M108,12h-3.6c-0.3,0-0.6,0.2-0.6,0.5l-0.2,1l-0.2-0.3c-0.8-1.1-2.4-1.5-4-1.5c-3.8,0-7,2.9-7.6,6.9 c-0.3,2,0.1,4,1.2,5.3c1,1.2,2.4,1.7,4.2,1.7c2.9,0,4.6-1.9,4.6-1.9l-0.1,0.9c-0.1,0.4,0.2,0.7,0.6,0.7h3.2c0.5,0,0.9-0.4,1-0.8 l1.8-11.6C108.6,12.4,108.4,12,108,12z M102.6,18.1c-0.3,2-2,3.3-4,3.3c-1,0-1.9-0.3-2.4-0.9c-0.5-0.6-0.7-1.4-0.5-2.3 c0.3-2,2-3.4,3.9-3.4c1,0,1.8,0.3,2.3,0.9C102.5,16.3,102.7,17.1,102.6,18.1z" fill="#179BD7"></path>
                      <path d="M125.3,12h-3.6c-0.3,0-0.7,0.2-0.9,0.4l-5.1,7.6l-2.2-7.3c-0.1-0.4-0.5-0.7-1-0.7h-3.5c-0.4,0-0.7,0.4-0.6,0.8l4.1,12.1 l-3.9,5.5c-0.3,0.4,0,1,0.5,1h3.6c0.3,0,0.7-0.2,0.9-0.4l12.4-17.9C126.1,12.5,125.8,12,125.3,12z" fill="#179BD7"></path>
                    </svg>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="apple" className="pt-4">
                <div className="flex flex-col items-center justify-center py-8">
                  <p className="text-muted-foreground mb-4">
                    Vous serez redirigé vers Apple Pay pour effectuer votre paiement.
                  </p>
                  <div className="border border-border rounded-md p-4 bg-muted/30">
                    <svg width="60" height="25" viewBox="0 0 60 25">
                      <path d="M9.5,7.3c1-1.1,1.7-2.7,1.5-4.2c-1.5,0.1-3.2,1-4.3,2.2c-0.9,1-1.7,2.7-1.5,4.2C6.7,9.7,8.4,8.7,9.5,7.3" fill="#000"></path>
                      <path d="M13.6,16.7c-0.1-2.3,1.9-3.4,2-3.5c-1.1-1.6-2.8-1.8-3.4-1.9c-1.4-0.1-2.8,0.8-3.5,0.8c-0.7,0-1.8-0.8-3-0.8 c-1.5,0-3,0.9-3.7,2.3c-1.6,2.8-0.4,7,1.1,9.2c0.8,1.1,1.6,2.4,2.8,2.3c1.1,0,1.5-0.7,2.9-0.7c1.3,0,1.7,0.7,2.9,0.7 c1.2,0,2-1.1,2.7-2.2c0.9-1.2,1.2-2.5,1.2-2.5C15.4,20.4,13.7,19.4,13.6,16.7" fill="#000"></path>
                      <path d="M26.3,13.3h-1.7l-1-3h-3.2l-0.9,3h-1.7L21,4h2.4L26.3,13.3z M23.1,8.8l-0.8-2.6c-0.1-0.2-0.2-0.8-0.4-1.8h0 c-0.1,0.4-0.2,1-0.4,1.8l-0.8,2.6H23.1z" fill="#000"></path>
                      <path d="M35,9.4c0,1.3-0.4,2.3-1.1,3c-0.6,0.6-1.5,0.9-2.5,0.9c-1.1,0-1.8-0.4-2.4-1.1v4.2h-1.6V8.3c0-0.8,0-1.6-0.1-2.4h1.4 l0.1,1.2h0c0.6-0.9,1.6-1.4,2.9-1.4c1,0,1.8,0.3,2.4,1C34.7,7.3,35,8.2,35,9.4z M33.3,9.5c0-0.7-0.2-1.3-0.5-1.7 c-0.4-0.5-0.9-0.7-1.5-0.7c-0.4,0-0.8,0.1-1.2,0.4c-0.4,0.3-0.6,0.6-0.7,1c-0.1,0.2-0.1,0.4-0.1,0.6v1.2c0,0.5,0.2,1,0.5,1.3 c0.3,0.3,0.8,0.5,1.3,0.5c0.7,0,1.2-0.3,1.5-0.8C33.1,10.9,33.3,10.2,33.3,9.5z" fill="#000"></path>
                      <path d="M43.8,9.4c0,1.3-0.4,2.3-1.1,3c-0.6,0.6-1.5,0.9-2.5,0.9c-1.1,0-1.8-0.4-2.4-1.1v4.2h-1.6V8.3c0-0.8,0-1.6-0.1-2.4h1.4 l0.1,1.2h0c0.6-0.9,1.6-1.4,2.9-1.4c1,0,1.8,0.3,2.4,1C43.5,7.3,43.8,8.2,43.8,9.4z M42.1,9.5c0-0.7-0.2-1.3-0.5-1.7 c-0.4-0.5-0.9-0.7-1.5-0.7c-0.4,0-0.8,0.1-1.2,0.4c-0.4,0.3-0.6,0.6-0.7,1c-0.1,0.2-0.1,0.4-0.1,0.6v1.2c0,0.5,0.2,1,0.5,1.3 c0.3,0.3,0.8,0.5,1.3,0.5c0.7,0,1.2-0.3,1.5-0.8C42,10.9,42.1,10.2,42.1,9.5z" fill="#000"></path>
                      <path d="M53.2,10.4c0,0.9-0.3,1.6-0.9,2.1c-0.7,0.6-1.6,0.9-2.8,0.9c-1.1,0-2-0.2-2.7-0.6l0.4-1.3c0.7,0.4,1.5,0.6,2.4,0.6 c0.6,0,1.1-0.1,1.4-0.4c0.3-0.3,0.5-0.6,0.5-1.1c0-0.4-0.1-0.7-0.4-1c-0.3-0.3-0.7-0.5-1.3-0.7c-1.7-0.6-2.5-1.6-2.5-2.8 c0-0.8,0.3-1.5,0.9-2c0.6-0.5,1.4-0.8,2.5-0.8c0.9,0,1.7,0.2,2.3,0.5l-0.4,1.3c-0.6-0.3-1.2-0.5-1.9-0.5c-0.6,0-1,0.1-1.3,0.4 c-0.3,0.2-0.4,0.5-0.4,0.9c0,0.4,0.1,0.7,0.4,0.9c0.3,0.2,0.7,0.5,1.4,0.7c0.8,0.3,1.4,0.7,1.8,1.1C53,9.2,53.2,9.8,53.2,10.4z" fill="#000"></path>
                      <path d="M58.8,6.9h-1.8v3.6c0,0.9,0.3,1.3,0.9,1.3c0.3,0,0.5,0,0.7-0.1l0,1.3c-0.3,0.1-0.7,0.2-1.2,0.2c-0.6,0-1.1-0.2-1.4-0.5 c-0.3-0.4-0.5-1-0.5-1.9V6.9h-1.1V5.6h1.1V4.2l1.6-0.5v1.9h1.8V6.9z" fill="#000"></path>
                      <path d="M69,9.5c0,1.2-0.3,2.1-1,2.9c-0.7,0.8-1.7,1.2-2.9,1.2c-1.2,0-2.1-0.4-2.8-1.1c-0.7-0.7-1-1.7-1-2.8 c0-1.2,0.3-2.1,1-2.9c0.7-0.8,1.7-1.2,2.9-1.2c1.2,0,2.1,0.4,2.8,1.1C68.6,7.4,69,8.3,69,9.5z M67.3,9.5c0-0.7-0.1-1.3-0.4-1.8 c-0.3-0.6-0.8-0.9-1.5-0.9c-0.7,0-1.2,0.3-1.5,0.9c-0.3,0.5-0.4,1.1-0.4,1.8c0,0.7,0.1,1.3,0.4,1.8c0.3,0.6,0.8,0.9,1.5,0.9 c0.7,0,1.1-0.3,1.5-0.9C67.1,10.8,67.3,10.2,67.3,9.5z" fill="#000"></path>
                    </svg>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="space-y-2 pt-4">
              <Button type="submit" className="w-full" disabled={isProcessing}>
                {isProcessing ? "Processing..." : "Complete Order"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}