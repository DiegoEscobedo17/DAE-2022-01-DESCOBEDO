from django.urls import path

from . import views

app_name = 'encuesta'

urlpatterns = [
    # ex: /encuesta/
    path('', views.index, name='index'),
    # ex: /encuesta/5/
    path('<int:pregunta_id>/', views.detalle, name='detalle'),
    # ex: /encuesta/5/resultados/
    path('<int:pregunta_id>/resultados/', views.resultados, name='resultado'),
    # ex: /encuesta/5/voto/
    path('<int:pregunta_id>/voto/', views.votar, name='votar'),
]