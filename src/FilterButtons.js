import React from "react";
import { Input, Label, FormGroup } from "reactstrap";

export const FilterButtons = ({filtered, setFiltered}) => {
  

  const handleChange = (e) => {
    const { checked, name } = e.target;
    if (name==="Todos" && checked){
        setFiltered(["Citado", "En Cirugia", "Cirugia Finalizada", "No Presentado", "Todos"])
        return
    }
    if (name==="Todos" && !checked){
        setFiltered([])
        return
    }
    if (checked) {
      setFiltered([...filtered, name]);
    }
    if (!checked) {
      const index = filtered.indexOf(name);
      const beforeIndex = filtered.slice(0, index);//slice porque crea un nuevo array, no modificamos el estado
      const afterIndex = filtered.slice(index + 1, filtered.length);
      setFiltered([...beforeIndex, ...afterIndex]);
    }

  };
  return (
    <div>
      <h3>Filtrar</h3>
      <FormGroup check>
        <Input
          type="checkbox"
          onChange={handleChange}
          name="Todos"
          checked={filtered.includes("Todos")}
        />{" "}
        <Label check>Todos</Label>
        <br />
        <Input
          type="checkbox"
          onChange={handleChange}
          name="Citado"
          checked={filtered.includes("Citado")}//boolean
        />{" "}
        <Label check>Citado</Label>
        <br />
        <Input
          type="checkbox"
          onChange={handleChange}
          name="En Cirugia"
          checked={filtered.includes("En Cirugia")}
        />{" "}
        <Label check>En Cirugia</Label>
        <br />
        <Input
          type="checkbox"
          onChange={handleChange}
          name="Cirugia Finalizada"
          checked={filtered.includes("Cirugia Finalizada")}
        />{" "}
        <Label check>Cirugia Finalizada</Label>
        <br />
        <Input
          type="checkbox"
          onChange={handleChange}
          name="No Presentado"
          checked={filtered.includes("No Presentado")}
        />{" "}
        <Label check>No Presentado</Label>
      </FormGroup>
    </div>
  );
};
