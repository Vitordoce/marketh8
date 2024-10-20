import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RightColumn() {
  return (
    <>
      <div className="p-4 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Carrinho</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Seu carrinho está vazio</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ofertas do Dia</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Produto A - 20% OFF</li>
              <li>Produto B - 15% OFF</li>
              <li>Produto C - 30% OFF</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
