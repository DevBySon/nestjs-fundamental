import { Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.TRANSIENT,
})
export class SongsService {
    private readonly songs = [];
    create(song) {
        this.songs.push(song);
        return 'Song has been created'
    }
    findAll() {
        // throw new Error("No songs found");
        return this.songs;
    }
}
