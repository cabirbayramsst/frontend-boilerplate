import { Button } from "ui";
import axios from "axios";
import { useEffect } from "react";
export default function Docs() {
  const getResponse = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
      const persons = response.data;
      console.log(persons)
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    getResponse()
  }, [])
  
  return (
    <div>
      <h1>Docs</h1>
      <Button />
    </div>
  );
}
