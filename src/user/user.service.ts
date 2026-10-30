import { Injectable, NotFoundException } from '@nestjs/common';
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
      return  `User id: ${id} found... ` + JSON.stringify(found);
     

    } else{
        return `User id: ${id} not found...`
      };

  }



update(id: number, updateUserDto: UpdateUserDto) {
  // 1. Find the user by ID
  const user = this.users.find((u) => u.id === id);

  // 2. If the user doesn't exist, throw a 404 error
  if (!user) {
    throw new NotFoundException(`User with ID ${id} not found`);
  }

  // 3. Update only the fields that were provided
  if (updateUserDto.name !== undefined) {
    user.name = updateUserDto.name;
  }
  if (updateUserDto.email !== undefined) {
    user.email = updateUserDto.email;
  }
  if (updateUserDto.password !== undefined) {
    user.password = updateUserDto.password;
  }

  return {
    message: "User found and updated successfully...",
    user,
  };
}

  remove(id: number) {
    const found = this.users.find(element => element?.id === id);

    if(found){
      this.users = this.users.filter(element => element?.id !== id);
      return "User found and removed successfully..."
    }else{
      return `User id: ${id} not found...`
    }
    
  }
}
