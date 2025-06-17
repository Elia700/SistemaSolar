class Planeta:
    def __init__(self, nombre, distancia_orbita):
        self.nombre = nombre
        self.distancia_orbita = distancia_orbita

    def __str__(self):
        return f"Planeta: {self.nombre}, Distancia de la órbita: {self.distancia_orbita} millones de km"


class SistemaSolar:
    def __init__(self):
        self.planetas = []

    def agregar_planeta(self, nombre, distancia_orbita):
        nuevo_planeta = Planeta(nombre, distancia_orbita)
        self.planetas.append(nuevo_planeta)

    def mostrar_sistema_solar(self):
        if not self.planetas:
            print("El sistema solar está vacío.")
        else:
            print("Sistema Solar:")
            for planeta in self.planetas:
                print(planeta)


# Crear el sistema solar
sistema_solar = SistemaSolar()

# Agregar los nueve planetas iniciales
planetas_iniciales = [
    ("Mercurio", 57.9),
    ("Venus", 108.2),
    ("Tierra", 149.6),
    ("Marte", 227.9),
    ("Júpiter", 778.3),
    ("Saturno", 1427),
    ("Urano", 2871),
    ("Neptuno", 4497.1),
    ("Plutón", 5906.4),
]

for nombre, distancia in planetas_iniciales:
    sistema_solar.agregar_planeta(nombre, distancia)

# Mostrar el sistema solar inicial
sistema_solar.mostrar_sistema_solar()

# Ejemplo de agregar un nuevo planeta
sistema_solar.agregar_planeta("PlanetaX", 10000)
print("\nDespués de agregar un nuevo planeta:")
sistema_solar.mostrar_sistema_solar()
