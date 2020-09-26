const apiUrl = 'http://localhost:5000/api/'
const apiUrls = {
    user_create:apiUrl+'auth/v1.0/register',
    user_login:apiUrl+'auth/v1.0/login',
    user_logout:apiUrl+'auth/v1.0/logout',
    pitch:{
        create:apiUrl+'pitch',
        read:apiUrl+'pitch/',
        index:apiUrl+'pitch',
        del:apiUrl+'pitch/'
    },
    category:{
        create:apiUrl+'category',
        read:apiUrl+'category/',
        del:apiUrl+'category/',
        index:apiUrl+'/category'
    }


}
export default apiUrls
