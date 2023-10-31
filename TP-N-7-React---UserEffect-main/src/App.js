import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Input from "@mui/material/Input";
import { Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function App() {
  const [datos, setDatos] = useState({
    name: "",
    error: false
  });

  function cambioName(e) {
    const value = e.target.value
    const isExceedingLimit = value.length >= 100;

    setDatos((valores) => ({
      ...valores,
      name: value,
      error: isExceedingLimit,
    }));
    
  }

  return (
    <div className="Background">
      <form onSubmit={() => console.log("hola")}>
        <Card variant="outlined" sx={{ width: 320 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Ingrese la palabra:{" "}
              <Input type="text" value={datos.name} onChange={cambioName} disabled={datos.error}/>
            </Typography>
            <Typography
              variant="body2"
              color={datos.error ? "error" : "initial"}
            >
              Cantidad de letras: {datos.name.length}
              {datos.error && (
                <span> - ¡Se ha alcanzado el límite de caracteres!</span>
              )}
            </Typography>
          </CardContent>
        </Card>
      </form>
      <footer>cantidad de letras en la pagina: {73 + datos.name.length}</footer>
    </div>
  );
}

export default App;
