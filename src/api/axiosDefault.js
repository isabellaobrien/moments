import axios from "axios";

axios.defaults.baseURL = 'https://django-rest-framework-walkt-edc139f1a895.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true