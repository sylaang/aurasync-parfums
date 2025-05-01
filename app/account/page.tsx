"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, Package, User, CreditCard, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';

interface UserProfile {
    email: string;
    created_at: string;
}

export default function AccountPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [orders, setOrders] = useState<any[]>([]);
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [payments, setPayments] = useState<any[]>([]);
    const router = useRouter();
    const { toast } = useToast();

    useEffect(() => {
        checkUser();
    }, []);

    const checkUser = async () => {
        try {
            const { data: { user }, error } = await supabase.auth.getUser();

            if (error || !user) {
                throw new Error('Not authenticated');
            }

            setProfile({
                email: user.email!,
                created_at: user.created_at,
            });

            // 🆕 Récupération des commandes
            const { data: ordersData, error: ordersError } = await supabase
                .from('orders')
                .select('*')
                .eq('user_id', user.id)
                .order('created_at', { ascending: false });

            if (ordersError) {
                throw new Error('Erreur lors du chargement des commandes');
            }

            setOrders(ordersData || []);

            // 🆕 Récupération des paiements
            const { data: paymentsData, error: paymentsError } = await supabase
                .from('payments')
                .select('*')
                .eq('user_id', user.id);

            if (paymentsError) {
                throw new Error('Erreur lors du chargement des paiements');
            }

            setPayments(paymentsData || []);

        } catch (error) {
            router.push('/login');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignOut = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;

            router.push('/');
            router.refresh();
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to sign out',
                variant: 'destructive',
            });
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[70vh]">
                <Loader2 className="h-8 w-8 animate-spin" />
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="font-playfair text-3xl font-bold">Mon compte</h1>
                    <Button variant="outline" onClick={handleSignOut}>
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                    </Button>
                </div>

                <Tabs defaultValue="overview" className="space-y-8">
                    <TabsList>
                        <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
                        <TabsTrigger value="orders">Commandes</TabsTrigger>
                        <TabsTrigger value="profile">Profil de l'entreprise</TabsTrigger>
                        <TabsTrigger value="payment">Paiement</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview">
                        <div className="grid gap-6 md:grid-cols-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <User className="h-5 w-5" />
                                        Détails du compte
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        <p className="text-sm text-muted-foreground">Courriel</p>
                                        <p className="font-medium">{profile?.email}</p>
                                        <p className="text-sm text-muted-foreground">Membre depuis</p>
                                        <p className="font-medium">
                                            {new Date(profile?.created_at!).toLocaleDateString()}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Package className="h-5 w-5" />
                                        Commandes récentes
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {orders.length > 0 ? (
                                        <ul className="space-y-2">
                                            {orders.slice(0, 3).map((order) => (
                                                <li key={order.id} className="flex flex-col gap-1">
                                                    <span className="text-sm font-medium">
                                                        Commande n°{order.id.slice(0, 8)} — {new Date(order.date).toLocaleDateString()}
                                                    </span>
                                                    <span className="text-muted-foreground text-sm">
                                                        {order.items.length} article(s) — Total : {order.total} €
                                                    </span>
                                                    <a href={`/account/orders/${order.id}`} className="text-primary text-sm hover:underline">
                                                        Voir les détails →
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-muted-foreground">Aucune commande récente</p>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="orders">
                        <Card>
                            <CardHeader>
                                <CardTitle>Historique des commandes</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {orders.length > 0 ? (
                                    <ul className="space-y-4">
                                        {orders.map((order) => (
                                            <li key={order.id} className="border rounded-md p-4">
                                                <p className="text-sm font-medium">
                                                    Commande n°{order.id.slice(0, 8)} — {new Date(order.created_at).toLocaleDateString()}
                                                </p>
                                                <p className="text-muted-foreground text-sm">
                                                    {order.items?.length || 0} article(s) — Total : {order.total} €
                                                </p>
                                                <a
                                                    href={`/account/orders/${order.id}`}
                                                    className="text-primary text-sm hover:underline"
                                                >
                                                    Voir les détails →
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-muted-foreground">Vous n'avez pas encore passé de commande.</p>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="profile">
                        <Card>
                            <CardHeader>
                                <CardTitle>Paramètres du profil</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Les paramètres du profil seront bientôt disponibles.</p>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="payment">
                    <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Méthodes de paiement
            </CardTitle>
        </CardHeader>
        <CardContent>
            {payments.length > 0 ? (
                <ul className="space-y-3">
                    {payments.map((payment) => (
                        <li key={payment.id} className="text-sm text-muted-foreground">
                            {payment.card_brand} **** {payment.last4} — Exp. {payment.exp_month}/{payment.exp_year}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-muted-foreground">
                    Aucune méthode de paiement n'a encore été ajoutée.
                </p>
            )}
        </CardContent>
    </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}