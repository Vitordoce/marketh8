"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    nickname: "",
    turma: "",
    endereco: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    // Here you would typically handle the registration logic
    console.log("Registration attempt", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f5e6cb] py-8">
      <Card className="w-full max-w-md bg-[#e5a17d]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Cadastro
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Usuário</Label>
              <Input
                className="bg-[#f5e6cb]"
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nickname">Apelido (nome)</Label>
              <Input
                className="bg-[#f5e6cb]"
                id="nickname"
                name="nickname"
                type="text"
                value={formData.nickname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="turma">Turma</Label>
              <Input
                className="bg-[#f5e6cb]"
                id="turma"
                name="turma"
                type="text"
                value={formData.turma}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endereco">Endereço</Label>
              <Input
                className="bg-[#f5e6cb]"
                id="endereco"
                name="endereco"
                type="text"
                value={formData.endereco}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                className="bg-[#f5e6cb]"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                className="bg-[#f5e6cb]"
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmar Senha</Label>
              <Input
                className="bg-[#f5e6cb]"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#b85c38] hover:bg-[#a04b2d] text-white"
            >
              Cadastrar
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center">
          <p>
            Já tem uma conta?{" "}
            <Link href="/login" className="text-[#b85c38] hover:underline">
              Faça login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
