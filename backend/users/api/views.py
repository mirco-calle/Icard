from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from django.contrib.auth.hashers import make_password
from users.models import User 
#siempre que tengamos nuestro archivo serializers importamos
from users.api.serializers import UserSerializer

class UserApiViewSet(ModelViewSet):
	permission_classes = [IsAdminUser]
	serializer_class = UserSerializer
	# El Serializer es como queremos que nos devuelvan los datos
	queryset = User.objects.all()
 
	def create(self, request, *args, **kwargs):
		request.data['password'] = make_password(request.data['password'])
		return super().create(request, *args, **kwargs)

	def partial_update(self, request, *args, **kwargs):
		password = request.data['password']
		if password:
			request.data['password'] = make_password(password)
		else:request.data['password'] = request.user.password
		return super().update(request, *args, **kwargs)
#CON ESTO CONSEGUIMOS QUE EL USUARIO LOGUEADO PUEDA VER SUS DATOS
class UserView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)