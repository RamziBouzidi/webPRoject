import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import type { User } from './entities/user.entity.js';

@Injectable()
export class UserService {
  private users:User[] = []
  create(createUserDto: CreateUserDto) {
    const user = {...createUserDto,id:this.users.length + 1};
    this.users.push(user);
    return {status:201,message:"User created successfully..." + JSON.stringify(user)};
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    
     const found = this.users.find(element => element?.id === id);

    if(found){
      return  `User id: ${id} found...`

    };
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    for (let i = 0; i < this.users.length; i++) {
        const element = this.users[i];
        
        const isMatch = Object.keys(updateUserDto).every(keys => {
          const userKey = keys as keyof UpdateUserDto;
          return element[userKey] === updateUserDto[userKey];

        })
        if (isMatch) {
          return "User found..."

        }
}
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
