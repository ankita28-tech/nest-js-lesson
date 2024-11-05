import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    /*
    
    
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

    
    @Get() //GET /users
    findAll(){
        return []
    }

    @Get(':id') //GET /users/:id
    findOne(@Param('id') id: string){
        return { id }

    }

    @Post()
    create(@Body() user: {}){
        return user;

    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() userUpdate :{}){
        return { id , ...userUpdate  }

    }
    @Delete(':id')
    delete(@Param('id') id: string, @Body() userUpdate :{}){
        return { id , ...userUpdate  }

    }

    



}
