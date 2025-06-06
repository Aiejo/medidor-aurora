import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import * as XLSX from 'xlsx';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_JSONBIN_API_KEY;
const COLLECTION_ID = import.meta.env.VITE_JSONBIN_COLLECTION_ID;

async function downloadBinsAsCSV() {
  try {
    const collectionResponse = await axios.get(`https://api.jsonbin.io/v3/c/${COLLECTION_ID}/bins`, {
      headers: {
        'X-Master-Key': API_KEY,
      },
    });

    const binMetadataList = collectionResponse.data;

    const allBinsData: any[] = [];

    for (const bin of binMetadataList) {
      const binId = bin.record;

      try {
        const binResponse = await axios.get(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
          headers: {
            'X-Master-Key': API_KEY,
          },
        });

        allBinsData.push(binResponse.data.record);
      } catch (binError) {
        console.warn(`No se pudo obtener el bin ${binId}:`, binError);
      }
    }

    if (allBinsData.length === 0) {
      alert('No hay datos para exportar.');
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(allBinsData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'respuestasAurora.xlsx');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error al obtener los bins:', error);
    alert('Hubo un error al descargar los datos.');
  }
}

const Admin: React.FC = () => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password == import.meta.env.VITE_ADMIN_PASSWORD) {
       downloadBinsAsCSV();
    }else{
        alert("API no disponible.");
    }
    setPassword(""); 
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-sm">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-xl font-semibold text-center">Admin</h1>
            <Input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" className="w-full">
              Ingresar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;
