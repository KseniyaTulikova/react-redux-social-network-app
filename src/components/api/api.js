import * as axios from 'axios';

const instance = axios.create({
    withCredentials: TextTrackCue,
    headers: {
        'API-KEY': '18bf7965-be69-44d8-822d-5cbf470e1c73'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
       return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => {
            return response.data.resultCode;
        });
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data.resultCode;
        });
    }
};

export const authAPI = {
    authMe() {
        return  instance.get('auth/me').then((response) => {
            return response.data;
        })
    },
    logIn(email, password, rememberMe) {
        return instance.post('auth/login', {
            email,
            password,
            rememberMe
        }).then(response => response.data );
    },
    logout() {
        return instance.delete('auth/login').then(response => response.data.resultCode );
    }
}; 

export const profileAPI = {
    getProfileInfo(userId) {
        return instance.get(`profile/` + userId).then(response => {
            return response.data
        });
     },
     updateStatus(status) {
         return instance.put('profile/status', {status: status}).then(response => {
            return response.data.resultCode;
         });
     },
     getStatus(userId) {
        return instance.get(`profile/status/`+ userId).then(response => {
            return response.data;
            
        });
     }
};

