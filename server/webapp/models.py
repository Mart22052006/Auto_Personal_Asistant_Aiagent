from django.db import models


# Create your models here.

# Movie classification: One-to-Many
class Category(models.Model):
    id = models.AutoField(primary_key=True, verbose_name='Category id')
    name = models.CharField(max_length=20, verbose_name='Category Name')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Movie Category'
        verbose_name_plural = verbose_name


# Movie Information
class Movie(models.Model):
    id = models.AutoField(primary_key=True, verbose_name='Movie id')
    name = models.CharField(max_length=100, verbose_name='Movie Name')
    desc = models.TextField(verbose_name='Movie Description')
    score = models.FloatField(default=0, verbose_name='Movie Rating')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name='Movie Category')
    # Movie Picture
    img = models.ImageField(upload_to='movie', verbose_name='Movie Picture')
    # Release Time of Movie
    release_time = models.DateField(verbose_name='Release Time')
    # Movie Length
    duration = models.IntegerField(verbose_name='Movie Length')
    # Director
    director = models.CharField(max_length=20, verbose_name='Director')
    # Actors
    actor = models.CharField(max_length=100, verbose_name='Actors')
    # Region
    area = models.CharField(max_length=20, verbose_name='Region', default='Singapore')
    # Language
    language = models.CharField(max_length=20, verbose_name='Language', default='English')
    # Release Status
    status = models.CharField(max_length=20, verbose_name='Status', default='Released')
    # Play Address
    url = models.CharField(max_length=100, verbose_name='Play Address', default='https://www.baidu.com')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Movie Info'
        verbose_name_plural = verbose_name
        ordering = ('id',)



# User
class User(models.Model):
    id = models.AutoField(primary_key=True, verbose_name='User id')
    username = models.CharField(max_length=20, verbose_name='Username')
    password = models.CharField(max_length=20, verbose_name='Password')
    email = models.EmailField(verbose_name='Email')
    phone = models.CharField(max_length=11, verbose_name='Phone Number')
    # User Avatar
    img = models.ImageField(upload_to='user/', verbose_name='User Avatar', default='user/default.jpg')
    # User Gender
    sex = models.CharField(max_length=10, verbose_name='Gender', default='Male')

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = verbose_name
