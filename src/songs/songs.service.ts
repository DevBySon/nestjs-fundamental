import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    private readonly song = [];
    create(song) {
        this.song.push(song);
    }
    findAll() {
        throw new Error("No songs found");
        // return this.song;
    }
}
