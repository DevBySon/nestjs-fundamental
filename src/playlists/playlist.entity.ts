import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Song } from '../songs/song.entity';
import { User } from '../users/user.entity';

@Entity('playlists')
export class PlayList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // Each playlist will have multiple songs
  @OneToMany(() => Song, (song) => song.playlist)
  songs: Song[];

  // Many playlist can belong to a single unique user
  @ManyToOne(() => User, (user) => user.playlists)
  user: User;
}
