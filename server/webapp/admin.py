from django.contrib import admin
from .models import Category, Movie, User
from django.core.files.storage import Storage

# Register your models here.
admin.site.site_header = 'iMovie Admin Backend'
admin.site.site_title = 'iMovie Admin Backend'
admin.site.index_title = 'iMovie Admin Backend'


class FastDFSStorage(Storage):
    def _open(self, name, mode='rb'):
        # Open django local file
        pass

    def _save(self, name, content, max_length=None):
        # Upload Picture
        pass

    # Add suffix to returned picture
    def url(self, name):
        print(name)
        return "http://localhost:8000/" + name


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    lists = []
    for f in Category._meta.fields:
        lists.append(f.name)
    list_display = lists
    search_fields = ['name']
    list_per_page = 10
    pass


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    lists = []
    for f in User._meta.fields:
        lists.append(f.name)
    list_display = lists
    search_fields = ['username']
    list_per_page = 10
    pass


@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    lists = []
    for f in Movie._meta.fields:
        lists.append(f.name)
    list_display = lists
    search_fields = ['name']
    list_per_page = 10
    pass
