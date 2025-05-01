// lib/orders.ts
import { supabase } from "@/lib/supabase";

export async function createOrder(orderData: {
  total: number;
  items: any;
  shipping_address: any;
}) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error("Erreur utilisateur:", userError);
    return;
  }

  const { error, data } = await supabase.from("orders").insert([
    {
      user_id: user.id,
      total: orderData.total,
      items: orderData.items,
      shipping_address: orderData.shipping_address,
      tracking_number: "PENDING",
      estimated_delivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    },
  ]);

  if (error) {
    console.error("Erreur commande :", error);
  } else {
    console.log("Commande créée :", data);
  }
}
