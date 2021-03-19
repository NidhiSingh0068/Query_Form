from django.db import models 
  
# Create your models here. 
  
  
class React(models.Model):
    f_name = models.CharField(max_length=30, default=" " ) 
    l_name = models.CharField(max_length=30, default=" ")
    contact = models.CharField(max_length=30, default=" ")
    address= models.CharField(max_length=100, default=" ")
    about = models.CharField(max_length=500)