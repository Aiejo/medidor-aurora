import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

import { OPCIONES_RESULTADO } from "@/data/resultados";

import GaugeComponent from "react-gauge-component";

type ResultProps = {
  resultValue: number;
};

const Resultado: React.FC<ResultProps> = ({ resultValue }) => {
  const categoria = resultValue < 0.33 ? 0 : resultValue < 0.66 ? 1 : 2;
  return (
    <div className="w-full h-auto py-2 flex justify-center items-center font-poppins py-4 overflow-hidden">
      <Card className="px-10 py-10 lg:w-2/5 h-full flex flex-col justify-between">
        <CardHeader>
          <CardTitle className="text-start text-2xl font-bold text-aurora-purple -mb-4">
            Resultado
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full flex justify-center">
            <GaugeComponent
              type="semicircle"
              arc={{
                subArcs: [
                  {
                    limit: 33,
                    color: "#dc2626",
                    showTick: true,
                    tooltip: {
                      text: "Ciego",
                    },
                  },
                  {
                    limit: 66,
                    color: "#eab308",
                    showTick: true,
                    tooltip: {
                      text: "Sensible",
                    },
                  },
                  {
                    limit: 100,
                    color: "#16a34a",
                    showTick: true,
                    tooltip: {
                      text: "Transformador",
                    },
                  },
                ],
              }}
              labels={{
                valueLabel: {
                    matchColorWithArc: true,
                }
              }}
              value={resultValue * 100}
              pointer={{ type: "arrow", color: "#581c87" }}
            />
          </div>
          <div
            className={`mt-4 rounded-2xl pt-2 ${
              categoria === 2
                ? "bg-green-600"
                : categoria === 1
                ? "bg-yellow-500"
                : "bg-red-600"
            }`}
          >
            <span className="text-white font-bold text-lg w-full flex justify-center">
              {OPCIONES_RESULTADO[categoria].titulo}
            </span>
            <p className="bg-gray-200 rounded-xl px-8 py-6 text-sm mt-2 text-justify">
              {OPCIONES_RESULTADO[categoria].descripcion}
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center w-full">
          <div className="flex flex-col">
            <span className="text-aurora-purple text-lg font-bold mb-2 text-sm">
              Nota aclaratoria
            </span>
            <p className="text-xs text-justify">
              Recuerda que esta encuesta responde a parámetros genéricos y
              abstractos que sirven para medir el enfoque de género en
              proyectos, por ello, no es un resultado definitivo, te
              recomendamos hacer una lectura crítica de tu resultado.{" "}
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Resultado;
