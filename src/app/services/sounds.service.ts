import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { SoundType } from '../../assets/sounds/sound.type';

@Injectable({
  providedIn: 'root',
})
export class SoundsService {
  ASSETS_SOUNDS_FOLDER: string = './../../assets/sounds/';
  SOUND_EXT: string = '.wav';

  get listener(): THREE.AudioListener {
    return new THREE.AudioListener();
  }

  get audioLoader(): THREE.AudioLoader {
    return new THREE.AudioLoader();
  }

  play(soundName: SoundType): void {
    const sound = new THREE.PositionalAudio(this.listener);
    this.audioLoader.load(
      `${this.ASSETS_SOUNDS_FOLDER}${soundName}${this.SOUND_EXT}`,
      (buffer) => {
        sound.setBuffer(buffer);
        sound.play();
      }
    );
  }
}
