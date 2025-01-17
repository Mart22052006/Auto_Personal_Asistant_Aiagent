from django.urls import path

from webapp.views import *

urlpatterns = [
    path('index', index),
    path('login', login),
    path('register', register),
    path('get_user', get_user),
    path('update_user', update_user),
    path('get_movies', get_movies),
    path('all',all),
    path('top', top),
]
