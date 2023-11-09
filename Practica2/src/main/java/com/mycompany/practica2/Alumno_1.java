package com.mycompany.practica2;

public class Alumno {
        private String nombreAlumno; //Por cada variable privada debe haber un
    // setter (Metodo) y un getter (Función)
    private double diferido;
    private double mensualidad;
    private double cambio;
    //Aca declaramos 3 propiedades, el diferido y la mensualidad ya le vamos a asignar un precio fijo

    public double getDiferido() {
        return diferido;
    }

    public double getMensualidad() {
        return mensualidad;
    }

    public double getCambio() {
        return cambio;
    }

    public void setCambio(double cambio) {
        this.cambio = cambio;
    }
    
    
    

    public String getNombreAlumno() {
        return nombreAlumno;
    }

    public void setNombreAlumno(String nombreAlumno) {
        this.nombreAlumno = nombreAlumno;
    }
    
    //Constructor
    public Alumno(){
        //Inicializar algunas propiedades
        this.setNombreAlumno("Sin Identificar");
        this.diferido = 8.50;//Acá definimos el valor de los costo
        this.mensualidad = 22.00;//Definimos el valor de la mensualidad
        this.cambio = 0.0;//Cambio
        
    }
}

