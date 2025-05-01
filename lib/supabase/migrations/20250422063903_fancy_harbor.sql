/*
  # Create orders table and related schemas

  1. New Tables
    - `orders`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `created_at` (timestamptz)
      - `status` (text)
      - `total` (numeric)
      - `items` (jsonb)
      - `shipping_address` (jsonb)
      - `tracking_number` (text)
      - `estimated_delivery` (timestamptz)

  2. Security
    - Enable RLS on `orders` table
    - Add policies for users to:
      - Read their own orders
      - Create new orders
*/

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text NOT NULL DEFAULT 'pending',
  total numeric NOT NULL,
  items jsonb NOT NULL,
  shipping_address jsonb NOT NULL,
  tracking_number text,
  estimated_delivery timestamptz,
  CONSTRAINT status_check CHECK (status IN ('pending', 'processing', 'shipped', 'delivered', 'cancelled'))
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their own orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create orders"
  ON orders
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);