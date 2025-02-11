"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import usersData from "@/data/users.json";

interface User {
  id: number;
  name: string;
  email: string;
  turma: string;
  address: string;
  phone: string;
  photo: string;
}

export default function ProfilePage() {
  const [userData, setUserData] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const user = usersData.find((u) => u.id === 1);
    if (user) setUserData(user);
  }, []);

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Dados atualizados:", userData);
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="max-w-[800px] mx-auto p-4">
      <div className="bg-card text-card-foreground shadow-md rounded-lg p-6 relative">
        <div className="flex flex-col items-center mb-3 sm:flex-row sm:items-start sm:text-left">
          <Image
            alt={userData.name}
            width={100}
            height={100}
            className="rounded-full mb-2 sm:mr-4 sm:mb-0"
          />
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold">{userData.name}</h2>
            <p className="text-muted-foreground">{userData.email}</p>
          </div>
        </div>

        {isEditing ? (
          <form
            onSubmit={handleUpdate}
            className="flex flex-col items-center sm:items-start"
          >
            <div className="space-y-4 w-full max-w-md">
              <Input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                placeholder="Nome"
                className="bg-background"
              />
              <Input
                type="text"
                name="turma"
                value={userData.turma}
                onChange={handleInputChange}
                placeholder="Turma"
                className="bg-background"
              />
              <Input
                type="text"
                name="address"
                value={userData.address}
                onChange={handleInputChange}
                placeholder="Endereço"
                className="bg-background"
              />
              <Input
                type="tel"
                name="phone"
                value={userData.phone}
                onChange={handleInputChange}
                placeholder="Telefone"
                className="bg-background"
              />
            </div>
            <div className="mt-4 space-y-2 sm:space-y-0 sm:space-x-2 flex flex-col sm:flex-row">
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Salvar
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsEditing(false)}
                className="border-border hover:bg-accent/10"
              >
                Cancelar
              </Button>
            </div>
          </form>
        ) : (
          <div className="space-y-2 text-center sm:text-left">
            <p className="text-foreground">
              <strong>Turma:</strong> {userData.turma}
            </p>
            <p className="text-foreground">
              <strong>Endereço:</strong> {userData.address}
            </p>
            <p className="text-foreground">
              <strong>Telefone:</strong> {userData.phone}
            </p>
            <Button
              onClick={() => setIsEditing(true)}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Editar Informações
            </Button>
          </div>
        )}

        <Button
          variant="destructive"
          onClick={() => console.log("Logout clicked")}
          className="mt-4 w-full sm:w-auto absolute bottom-4 right-4"
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
