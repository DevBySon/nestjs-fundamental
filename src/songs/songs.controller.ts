import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Inject,
    Param,
    ParseIntPipe,
    Post,
    Put,
    Scope
} from '@nestjs/common';
import {SongsService} from "./songs.service";
import {CreateSongDto} from "./dto/create-song-dto";
import {Connection} from "../common/constants/connection";

@Controller({path: 'songs', scope: Scope.REQUEST})
export class SongsController {
    constructor(private songsService: SongsService, @Inject('CONNECTION') private connection: Connection) {
        console.log(`This is connection string ${this.connection}`)
    }

    @Post()
    create(@Body() createSongDto: CreateSongDto) {
        return this.songsService.create(createSongDto)
    }

    @Get()
    findAll() {
        try {
            return this.songsService.findAll()
        } catch (e) {
            throw new HttpException("Server error", HttpStatus.INTERNAL_SERVER_ERROR, {cause: e})
        }

    }

    @Get(':id')
    findOne(
        @Param("id", new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE}))
            id: number
    ) {
        return 'Fetch song with id #' + id;
    }

    @Put(":id")
    update() {
        return 'update song on the based id'
    }

    @Delete(":id")
    delete() {
        return 'delete song on the based id'
    }
}
