from django.contrib import admin
from django.conf.urls.static import static
from django.urls import path, include, re_path
from django.views.static import serve

from server import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('webapp.urls')),
    # static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    # static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
]


