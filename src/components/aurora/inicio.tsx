import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type WelcomeMessageProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Inicio: React.FC<WelcomeMessageProps> = ({ onClick }) => {
  return (
      <div className="w-full h-auto flex justify-center items-center font-poppins py-4">
        <Card className="px-10 py-10 md:w-2/5 h-full flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold mb-4 text-aurora-purple">
              ¡Bienvenido al Medidor Aurora!
            </CardTitle>
            <CardDescription className="md:text-center text-md">
              Escala de integración del enfoque de género en proyectos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-md mb-2 text-justify">
              Esta herramienta fue creada para facilitar tu trabajo, con ella
              podrás medir el nivel de incorporación del enfoque de género de
              tus proyectos, lo que te permitirá tomar decisiones informadas más
              justas y equitativas.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center w-full">
            <Button
              className="w-28 py-4 bg-orange-500 cursor-pointer text-white hover:bg-orange-600 transition-colors duration-300"
              onClick={onClick}
            >
              Comenzar
            </Button>
          </CardFooter>
        </Card>
      </div>
  );
}

export default Inicio;
