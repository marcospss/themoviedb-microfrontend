import { Injectable } from '@angular/core';

import { environment } from '../environments/environment';
import { MovieItem, Genres } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  title(item: any): string {
    return item.title ? item.title : item.name;
  }
  posterImage(poster_path: string = '', size: string = 'w154'): string {
    const sizeImage = environment.imageApi.poster_sizes.w154;
    if (!poster_path) {
      return 'assets/images/default-image.png';
    }
    return `${environment.imageApi.secure_base_url}/${sizeImage}${poster_path}`;
  }

  backdropImage(backdrop_path: string = '', size: string = 'w300'): string {
    const sizeImage = environment.imageApi.backdrop_sizes.w780;
    if (!backdrop_path) {
      return 'assets/images/default-image.png';
    }
    return `${environment.imageApi.secure_base_url}/${sizeImage}${backdrop_path}`;
  }

  profileImage(profile_sizes: string, size: string = 'w185'): string {
    const sizeImage = environment.imageApi.profile_sizes.w185;
    if (!profile_sizes) {
      return 'assets/images/default-image.png';
    }
    return `${environment.imageApi.secure_base_url}/${sizeImage}${profile_sizes}`;
  }

  overview(overview: string): string {
    return overview.length > 110 ? overview.substring(0, 110) : overview;
  }

  convertMinutesToTime(data: any): string {
    const minutes = data % 60;
    const hours = (data - minutes) / 60;
    const totalMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}h ${totalMinutes}m`;
  }

  genres(genres: Genres[]): string {
    return genres.map((genre) => genre.name).join(' | ');
  }

  scrollTopPage(): void {
    window.scrollTo(0, 0);
  }
}
