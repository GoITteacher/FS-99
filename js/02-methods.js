/**
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */

const playlist = {
  name: "My amazing playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],

  changeName(newName) {
    this.name = newName;
  },

  addTrack(track) {
    this.tracks.push(track);
  },

  updateRating(newRating) {
    this.rating = newRating;
  },

  getTrackCount() {
    return this.tracks.length;
  },

  removeTrack(trackName) {
    const index = this.tracks.indexOf(trackName);
    if (index >= 0) {
      this.tracks.splice(index);
    }
  },

  shakePlaylist() {
    for (let i = 0; i < this.tracks.length; i++) {
      const randomIndex = Math.ceil(Math.random() * this.tracks.length - 1);

      const temp = this.tracks[i];
      this.tracks[i] = this.tracks[randomIndex];
      this.tracks[randomIndex] = temp;
    }
  },
};

console.log(playlist.getTrackCount());

playlist.changeName("New playlist name");

playlist.addTrack("new track 1");
console.log(playlist.getTrackCount());

playlist.addTrack("new track 2");
console.log(playlist.getTrackCount());
playlist.updateRating(4);

playlist.shakePlaylist();
playlist.shakePlaylist();
console.log(playlist);
