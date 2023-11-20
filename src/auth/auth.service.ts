import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return { msg: 'From signup' };
  }
  signup() {
    return { msg: 'From signin' };
  }
}
