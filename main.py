import numpy as np
import random
import math
#vamos a suponer que tenemos un problema n dimensional con un solo objetivo
# se necesita crear una programa generico evolutivo con operaciones basicas para resolver
# cualquier tipo de problema de este tipo

# Creamos la clase individuo
class individuo:
    def __init__(self, cromosoma, padre, madre, aptitud):
        self.cromosoma = cromosoma
        self.padre = padre
        self.madre = madre
        self.aptitud = aptitud

def evalApt(individuo):
    fz = sin(x) + cos(y)

#individuo1 = individuo(1,2,3,4)
#print(str(individuo1.cromosoma))



# Crear poblacion de prueba
Npob = 100
pob = []
minimizar = True



for i in range(Npob):
    ind = individuo([1,3,4],0,0,0)
    pob.append(ind)


print(pob[0].cromosoma)

