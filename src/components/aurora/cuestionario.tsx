import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "../ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";

import { TOTAL_PREGUNTAS, CUESTIONARIO } from "@/data/cuestionario";

import Inicio from "@/components/aurora/inicio";
import Resultado from "@/components/aurora/resultado";

const API_KEY = import.meta.env.VITE_JSONBIN_API_KEY;
const COLLECTION_ID = import.meta.env.VITE_JSONBIN_COLLECTION_ID;

type FormValues = {
  [name: string]: string;
};

const valores: { [key: number]: string } = {
  0: "A",
  1: "B",
  2: "C",
};

const Cuestionario: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [result, setresult] = React.useState(0);

  const form = useForm<FormValues>({
    defaultValues: {},
  });

  const sendDataToJSONBin = async (data: FormValues, finalResult:number) => {
    const datetime = new Date().toISOString();

    const nombreBin = `Respuestas_${datetime}`;

    const body = {...data, 'puntaje': (finalResult*100).toFixed(2), 'fecha': datetime};

    try {
      const response = await axios.post("https://api.jsonbin.io/v3/b", body, {
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": API_KEY,
          "X-Bin-Name": nombreBin,
          "X-Bin-Private": "true",
          "X-Collection-Id": COLLECTION_ID,
        },
      });

      if(response.data.metadata.id){
        console.log("Bin creado con ID:");
      }
    } catch (error) {
      console.error("Error al guardar en JSONBin.io:", error);
    }
  };

  const onSubmit = async (data: FormValues) => {
    // Calcular el resultado
    let tempResult = 0;
    for (let i = 1; i <= TOTAL_PREGUNTAS; i++) {
      const fieldName = `pregunta_${i}`;
      if (data[fieldName] === undefined) {
        data[fieldName] = "A";
      }
      if (data[fieldName] === "A") {
        tempResult += 0;
      } else if (data[fieldName] === "B") {
        tempResult += 1;
      } else if (data[fieldName] === "C") {
        tempResult += 2;
      }
    }
    const finalResult = tempResult / (TOTAL_PREGUNTAS * 2)
    setresult(finalResult);
    sendDataToJSONBin(data, finalResult);
    setPage(2);
  };
  const bgImage = page < 2 ? "xl:bg-[url('/images/form-bg-1.png')]" :  "xl:bg-[url('/images/form-bg-2.png')]" ;
  const bgColor = page < 2 ? "bg-orange-aurora" :  "bg-violet-aurora" ;
  return (
    <div
      className={`flex items-center justify-center w-full h-screen ${bgColor} xl:bg-cover lg:bg-center ${bgImage}`}
    >
      {page === 0 && <Inicio onClick={() => setPage(1)} />}
      {page === 1 && (
        <div className="w-full flex justify-center items-center h-full font-poppins overflow-hidden absolute py-4">
          <Card className="px-2 py-10 lg:w-2/5 h-full flex flex-col justify-between max-h-full overflow-y-auto">
            <CardHeader>
              <CardTitle className="text-starts text-xl font-bold text-aurora-purple">
                Formulario de Evaluación
              </CardTitle>
            </CardHeader>
            <CardContent className="-mt-2">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit, () => {
                    alert(
                      "Por favor completa todos los campos obligatorios antes de enviar."
                    );
                  })}
                  className="space-y-6 overflow-hidden"
                >
                  <FormField
                    control={form.control}
                    rules={{ required: "Este campo es obligatorio." }}
                    name="nombreProyecto"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="mb-2 text-aurora-purple">
                          Nombre del proyecto:
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nombre de tu proyecto"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="nombreDependencia"
                    rules={{ required: "Este campo es obligatorio." }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="my-1 text-aurora-purple">
                          Dependencia:
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nombre de tu dependencia"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    rules={{ required: "Este campo es obligatorio." }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="mb-2 text-aurora-purple">
                          Correo Electrónico:
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="tuemail@ejemplo.com"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {CUESTIONARIO.map((seccion, id_sec) => {
                    return (
                      <div key={id_sec}>
                        <div className="mt-8 text-base text-aurora-purple font-semibold">
                          {seccion.nombre}
                        </div>
                        {seccion.preguntas.map((pregunta) => {
                          const fieldName = `pregunta_${pregunta.numero}`;
                          return (
                            <FormField
                              key={fieldName}
                              control={form.control}
                              name={fieldName}
                              rules={{
                                required: "Por favor responde esta pregunta.",
                              }}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-base text-aurora-purple text-sm my-4">
                                    {pregunta.numero + ". " + pregunta.texto}
                                  </FormLabel>
                                  <FormControl>
                                    <RadioGroup
                                      className="space-y-1 ml-2"
                                      onValueChange={field.onChange}
                                      defaultValue={field.value}
                                    >
                                      {pregunta.opciones.map((opcion, idx) => (
                                        <FormItem
                                          key={idx}
                                          className="flex items-center space-x-2 cursor-pointer"
                                        >
                                          <FormControl>
                                            <RadioGroupItem
                                              className="cursor-pointer"
                                              color="orange"
                                              value={valores[idx]}
                                            />
                                          </FormControl>
                                          <FormLabel className="font-normal cursor-pointer">
                                            {opcion}
                                          </FormLabel>
                                        </FormItem>
                                      ))}
                                    </RadioGroup>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          );
                        })}
                      </div>
                    );
                  })}
                  <div className="flex w-full justify-center">
                    <Button
                      type="submit"
                      className="w-28 py-4 bg-orange-500 cursor-pointer text-white hover:bg-orange-600 transition-colors duration-300"
                    >
                      Enviar
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      )}
      {page === 2 && <Resultado resultValue={result} />}
    </div>
  );
};

export default Cuestionario;
