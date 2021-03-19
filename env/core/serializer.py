from rest_framework import serializers 
from . models import *
  
class ReactSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = React 
        fields = ['f_name', 'l_name', 'contact', 'address' , 'about'] 