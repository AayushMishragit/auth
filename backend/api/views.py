from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Create your views here.

def hello (request):
    return HttpResponse("Do your best as much as you can just do it ")

class homeview(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self,request):
        content = {'message':'Welcome to the protected home view!'}
        return Response(content)

class logoutview(APIView):
    permission_classes = (IsAuthenticated,)
    def post(self,request):
        # Here you would typically handle token blacklisting or session termination
        content = {'message':'Successfully logged out'}
        return Response(content)        