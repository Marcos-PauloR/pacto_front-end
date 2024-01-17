import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { StorageService } from '../services/storage.service';


const storageService: StorageService = new StorageService();

export const interceptToken: HttpInterceptorFn = (req, next) => {
    let router = inject(Router);
    const token = storageService.getToken();
    if (Object.keys(token).length!==0) {
        let decodeToken = jwtDecode(token.token);
        const isExpired =
            decodeToken && decodeToken.exp
                ? decodeToken.exp < Date.now() / 1000
                : false;
        if (isExpired) {
            // TODO Implementar refresh token
            storageService.clean();
            router.navigate(['/login']);
        } else {
            // req = req.clone({
            //   setHeaders: {
            //     Authorization: `Bearer ${token}`,
            //   },
            // });
            router.navigate(['/home']);
            
        }
    } else {
        console.log('no token');
        router.navigate(['/login']);
    }

    return next(req);
}