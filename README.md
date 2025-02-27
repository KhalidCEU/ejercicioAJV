# Ejercicio AJV - Sistemas Web II

Este ejercicio tiene como finalidad hacer uso del validador de JSON schemas  [AJV](https://ajv.js.org/).

## Uso

Primero instale las dependencias con el comando:
```
npm install
```

Para lanzar el servidor, use el comando:
```
npm start
```

> Nota: Por el contexto de este ejercicio, para testear los schemas, al lanzar el servidor se hacen automaticamente 2 peticiones POST hacia el endpoint de validación, envíando los 2 schemas que se encuentran en [schemas](/schemas).

**Endpoint**

```POST http://localhost:8080/validate```

Parametros (body): El **JSON schema** que se quiera validar
