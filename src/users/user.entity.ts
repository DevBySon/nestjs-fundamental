import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PlayList } from '../playlists/playlist.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  // A user can create many playlists
  @OneToMany(() => PlayList, (playlist) => playlist.user)
  playlists: PlayList[];
}
