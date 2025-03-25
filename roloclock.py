from datetime import datetime

fecha_actual = datetime.now()
fecha_objetivo = datetime(fecha_actual.year, 4,6)

diferencia = fecha_objetivo - fecha_actual

horas = diferencia.total_seconds() // 3600
minutos = (diferencia.total_seconds() % 3600) // 60
segundos = diferencia.total_seconds() % 60

print(f"faltan {int(horas)} horas, {int(minutos)} minutos y {int(segundos)} segundos para valladolid")