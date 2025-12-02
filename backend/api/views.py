from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def hello (request):
    return HttpResponse("Do your best as much as you can just do it ")
