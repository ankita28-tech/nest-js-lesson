import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
        { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User" },
        { id: 3, name: "Charlie Davis", email: "charlie@example.com", role: "Moderator" },
        { id: 4, name: "Dana White", email: "dana@example.com", role: "User" }
      ];

      findAll(role?: 'Admin'){
        if(role){
            return this.users;
        }
      }
      
      
}
