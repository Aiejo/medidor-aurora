import React from "react";

// 1. Define una interfaz para los props
interface RatingDisplayProps {
  /**
   * El valor numérico de la calificación (0-5)
   * 0: Poor, 1: Fair, 2: Satisfactory, 3: Good, 4: Better, 5: Exceptional
   */
  value: number;
}


// 2. Define el objeto de mapeo para las calificaciones
// Usamos 'as const' para que TypeScript infiera los tipos literales (0, 1, 2, etc.)
// y haga el objeto inmutable.
const Rating = {
  Poor: 0,
  Fair: 1,
  Satisfactory: 2,
  Good: 3,
  Better: 4,
  Exceptional: 5,
} as const;

// Opcional: Define un tipo para las claves de Rating si necesitas iterar sobre ellas o usarlas en otros tipos.
type RatingKey = keyof typeof Rating; // 'Poor' | 'Fair' | 'Satisfactory' | ...
// Opcional: Define un tipo para los valores de Rating si necesitas usarlos como tipos de valor.
type RatingValue = typeof Rating[RatingKey]; // 0 | 1 | 2 | 3 | 4 | 5

// Función para obtener la clase CSS para el SVG basado en si coincide con el valor
const getSvgFillColor = (ratingIndex: RatingValue, currentValue: number): string => {
  switch (ratingIndex) {
    case Rating.Poor:
      return ratingIndex === currentValue ? "#EF4444" : "#E5E7EB"; // Rojo si es activo, gris si no
    case Rating.Fair:
      return ratingIndex === currentValue ? "#FACC15" : "#E5E7EB"; // Amarillo si es activo, gris si no
    case Rating.Satisfactory:
      return ratingIndex === currentValue ? "#BEF264" : "#E5E7EB"; // Verde claro si es activo, gris si no
    case Rating.Good:
      return ratingIndex === currentValue ? "#14B8A6" : "#E5E7EB"; // Teal si es activo, gris si no
    case Rating.Better:
      return ratingIndex === currentValue ? "#22C55E" : "#E5E7EB"; // Verde si es activo, gris si no
    case Rating.Exceptional:
      return ratingIndex === currentValue ? "#15803D" : "#E5E7EB"; // Verde oscuro si es activo, gris si no
    default:
      return "#E5E7EB"; // Color por defecto (gris)
  }
};

const Gauge: React.FC<RatingDisplayProps> = ({ value }) => {
  // Asegúrate de que el valor esté dentro del rango esperado (0-5)
  const clampedValue = Math.min(Math.max(value, Rating.Poor), Rating.Exceptional);

  return (
    <>
      <div className="py-12 px-4">
        <div className="lg:max-w-[356px] md:max-w-[516px] max-w-[343px] mx-auto">
          <div className="mx-auto bg-white px-3 py-4 rounded">
            <div>
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Group%20813077.png"
                className="mx-auto"
                alt="Rating illustration"
              />
            </div>
            {/* Versión para pantallas grandes */}
            <div className="lg:block hidden">
              <div className="flex justify-between items-center gap-x-4 px-8">
                <div aria-label="one">
                  <div className="flex gap-2 items-center">
                    <svg
                      width={20}
                      height={8}
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width={20}
                        height={8}
                        rx={4}
                        fill={getSvgFillColor(Rating.Poor, clampedValue)} // Dinámico
                      />
                    </svg>
                    <p className={`text-xs font-medium leading-3 ${clampedValue === Rating.Poor ? 'text-gray-900' : 'text-gray-400'}`}>
                      Poor
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <svg
                      width={20}
                      height={8}
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width={20}
                        height={8}
                        rx={4}
                        fill={getSvgFillColor(Rating.Fair, clampedValue)} // Dinámico
                      />
                    </svg>
                    <p className={`text-xs font-medium leading-3 ${clampedValue === Rating.Fair ? 'text-gray-900' : 'text-gray-400'}`}>
                      Fair
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <svg
                      width={20}
                      height={8}
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width={20}
                        height={8}
                        rx={4}
                        fill={getSvgFillColor(Rating.Satisfactory, clampedValue)} // Dinámico
                      />
                    </svg>
                    <p className={`text-xs font-medium leading-3 ${clampedValue === Rating.Satisfactory ? 'text-gray-900' : 'text-gray-400'}`}>
                      Satisfactory
                    </p>
                  </div>
                </div>
           
              </div>
            </div>
            {/* Versión para pantallas pequeñas */}
            <div className="lg:hidden block">
              <div className="flex flex-wrap justify-between gap-3 items-center px-8">
                <div className="flex gap-2 items-center">
                  <svg
                    width={20}
                    height={8}
                    viewBox="0 0 20 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width={20}
                      height={8}
                      rx={4}
                      fill={getSvgFillColor(Rating.Poor, clampedValue)} // Dinámico
                    />
                  </svg>
                  <p className={`text-xs font-medium leading-3 ${clampedValue === Rating.Poor ? 'text-gray-900' : 'text-gray-400'}`}>
                    Poor
                  </p>
                </div>
                <div className="flex items-center gap-2 ">
                  <svg
                    width={20}
                    height={8}
                    viewBox="0 0 20 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width={20}
                      height={8}
                      rx={4}
                      fill={getSvgFillColor(Rating.Fair, clampedValue)} // Dinámico
                    />
                  </svg>
                  <p className={`text-xs font-medium leading-3 ${clampedValue === Rating.Fair ? 'text-gray-900' : 'text-gray-400'}`}>
                    Fair
                  </p>
                </div>
                <div className="flex items-center gap-2 ">
                  <svg
                    width={20}
                    height={8}
                    viewBox="0 0 20 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width={20}
                      height={8}
                      rx={4}
                      fill={getSvgFillColor(Rating.Satisfactory, clampedValue)} // Dinámico
                    />
                  </svg>
                  <p className={`text-xs font-medium leading-3 ${clampedValue === Rating.Satisfactory ? 'text-gray-900' : 'text-gray-400'}`}>
                    Satisfactory
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    width={20}
                    height={8}
                    viewBox="0 0 20 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width={20}
                      height={8}
                      rx={4}
                      fill={getSvgFillColor(Rating.Good, clampedValue)} // Dinámico
                    />
                  </svg>
                  <p className={`text-xs font-medium leading-3 ${clampedValue === Rating.Good ? 'text-gray-900' : 'text-gray-400'}`}>
                    Good
                  </p>
                </div>
                <div className="flex items-center gap-2 ">
                  <svg
                    width={20}
                    height={8}
                    viewBox="0 0 20 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width={20}
                      height={8}
                      rx={4}
                      fill={getSvgFillColor(Rating.Better, clampedValue)} // Dinámico
                    />
                  </svg>
                  <p className={`text-xs font-medium leading-3 ${clampedValue === Rating.Better ? 'text-gray-900' : 'text-gray-400'}`}>
                    Better
                  </p>
                </div>
                <div className="flex items-center gap-2 ">
                  <svg
                    width={20}
                    height={8}
                    viewBox="0 0 20 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width={20}
                      height={8}
                      rx={4}
                      fill={getSvgFillColor(Rating.Exceptional, clampedValue)} // Dinámico
                    />
                  </svg>
                  <p className={`text-xs font-medium leading-3 ${clampedValue === Rating.Exceptional ? 'text-gray-900' : 'text-gray-400'}`}>
                    Exceptional
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gauge;