package com.mycompany.practica2;

import javax.swing.JOptionPane;

public class Practica2 {

    public static void main(String[] args) {
     //Metodo principal de la clase       
        Alumno objAlumno = new Alumno();
        JOptionPane.showMessageDialog(null, "El nombre es: "+ objAlumno.getNombreAlumno());
        
        String elNombre;
        elNombre = JOptionPane.showInputDialog("Introduzca el nombre del estudiante:");
        objAlumno.setNombreAlumno(elNombre);
        JOptionPane.showMessageDialog(null, "El nombre es: "+ objAlumno.getNombreAlumno());
    }
}

